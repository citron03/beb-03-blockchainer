const express = require('express');
const router = express.Router();
<<<<<<< HEAD
const { User } = require("../models");
const Web3 = require("web3");
const rpcURL = "https://ropsten.infura.io/v3/"; // 원격 이더리움 노드에 접속할 수 있는 주소

const web3 = new Web3(rpcURL); // web3 객체 생성

router.post("/createaccount", async (req, res) => {
  let serverAccount = await User.findOne({
    where: {
      username: "server",
    },
  });
  console.log(serverAccount);
  if (serverAccount) {
    res.status(200).json({
      message: "server account is already exist",
      data: serverAccount,
    });
  } else {
    let wallet = web3.eth.accounts.create();

    let serverAccount = await User.create({
      username: "server",
      password: "server",
      email: "server@blockchiner.com",
      address: wallet.address,
      privatekey: wallet.privateKey,
      balance: "0",
    });
    try {
      res
        .status(200)
        .json({ message: "server account is created", data: serverAccount });
    } catch {
      (err) => {
        console.log(err);
        res.status(400).json({ message: "server account create failed" });
      };
    }
  }
});

router.post("/ethfaucet", async (req, res) => {
  const web3 = new Web3("HTTP://127.0.0.1:7545");

  const accounts = await web3.eth.getAccounts();
  console.log(accounts);
});
=======
const { User } = require('../models');

router.post('/createaccount', async (req, res) => {});

router.post('/ethfaucet', async (req, res) => {});
>>>>>>> 11306c3e6d60256602607e0327db0c1588a9da75

module.exports = router;
