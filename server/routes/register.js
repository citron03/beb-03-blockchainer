const express = require("express");
const router = express.Router();
const lightwallet = require("eth-lightwallet");
const { User } = require("../models");

router.post("/", async (req, res) => {
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

module.exports = router;
