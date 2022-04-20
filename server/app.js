const express = require("express");
const { User } = require("./models");
const app = express();
const db = require("./models");
const port = 3000;
const lightwallet = require("eth-lightwallet");

app.use(express.json());

db.sequelize
  .sync({ force: true })
  .then(() => {
    console.log("db 연결 성공 ");
  })
  .catch(console.error);

app.get("/", (req, res) => {
  res.send("server connected");
});

app.listen(port, () => {
  console.log(`server is listening at localhost:${port}`);
});

app.post("/", async (req, res) => {
  let reqUserName, reqPassword;
  reqUserName = req.body.userName;
  reqPassword = req.body.password;

  User.findOrCreate({
    where: {
      userName: reqUserName,
    },
    default: {
      password: reqPassword,
    },
  }).then(([user, created]) => {
    if (!created) {
      res.status(409).send("username already exists");
    } else {
      let mnemonic;
      mnemonic = lightwallet.keystore.generateRandomSeed();
      lightwallet.keystore.createVault(
        {
          password: reqPassword,
          seedPhrase: mnemonic,
          hdPathString: "m/0'/0'/0'",
        },
        function (err, ks) {
          ks.keyFromPassword(reqPassword, function (err, pwDerivedKey) {
            ks.generateNewAddress(pwDerivedKey, 1);

            let address = ks.getAddresses().toString();
            let keyStore = ks.serialize();

            User.update(
              {
                username: reqUserName,
                password: reqPassword,
                address: address,
                balance: "0",
              },
              {
                where: {},
              }
            )
              .then((result) => {
                res.json(address);
              })
              .catch((err) => {
                console.error(err);
              });
          });
        }
      );
    }
  });
});
