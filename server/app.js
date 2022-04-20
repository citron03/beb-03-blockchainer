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

app.get("/", function (req, res) {
  res.end("server connected");
});

app.listen(port, () => {
  console.log(`server is listening at localhost:${port}`);
});

app.post("/register", async (req, res) => {
  let reqUsername, reqPassword;
  reqUsername = req.body.username;
  reqPassword = req.body.password;
  reqemail = req.body.email;

  User.findOrCreate({
    where: {
      username: reqUsername,
    },
    default: {},
  }).then(([user, created]) => {
    if (!created) {
      res.status(409).send("same username already exists");
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
                password: reqPassword,
                email: reqemail,
                address: address,
                balance: "0",
              },
              {
                where: { username: reqUsername },
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
