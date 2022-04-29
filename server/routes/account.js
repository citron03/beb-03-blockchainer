const express = require("express");
const router = express.Router();
const lightwallet = require("eth-lightwallet");
const { User } = require("../models");

const Web3 = require("web3");
const web3 = new Web3("http://localhost:7545");

router.post("/checkusername", async (req, res) => {
  let reqUsername = req.body.username;
  const existuser = await User.findOne({
    where: {
      username: reqUsername,
    },
  });
  if (!existuser) {
    res.status(200).json({
      message: "ok",
    });
  } else {
    res.status(409).json({
      message: "Error: username Already Exists",
    });
  }
});

router.post("/register", async (req, res) => {
  let reqUsername, reqPassword, reqemail;
  reqUsername = req.body.username;
  reqPassword = req.body.password;
  reqemail = req.body.email;

  User.findOrCreate({
    where: {
      email: reqemail,
    },
    default: {},
  }).then(([user, created]) => {
    if (!created) {
      res.status(409).json({
        message: "Error: Email Already Exists",
      });
    } else {
      let wallet = web3.eth.accounts.create();
      const newAccount = User.update(
        {
          username: reqUsername,
          password: reqPassword,
          address: wallet.address,
          privatekey: wallet.privateKey,
          balance: "0",
        },
        {
          where: { email: reqemail },
        }
      )
        .then((result) => {
          res.status(201).json({
            message: "Register Successed",
          });
        })
        .catch((err) => {
          console.error(err);
        });
    }
  });
});

router.post("/findusername", async (req, res) => {
  let reqemail = req.body.email;
  const matchuser = await User.findOne({
    where: {
      email: reqemail,
    },
  });
  console.log(matchuser);
  if (!matchuser) {
    res.status(404).json({
      message: "Error: username unexists",
    });
  } else {
    res.status(200).json({
      message: "Find username Successed",
      data: {
        username: matchuser.dataValues.username,
        createdAt: matchuser.dataValues.createdAt,
      },
    });
  }
});

router.post("/findpassword", async (req, res) => {
  let reqUsername = req.body.username;
  let reqemail = req.body.email;
  const matchuser = await User.findOne({
    where: {
      username: reqUsername,
      email: reqemail,
    },
  });
  if (!matchuser) {
    res.status(404).json({
      message: "Error: user unexists",
    });
  } else {
    res.status(200).json({
      message: "Find password Successed",
      data: {
        password: matchuser.dataValues.password,
        createdAt: matchuser.dataValues.createdAt,
      },
    });
  }
});

module.exports = router;
