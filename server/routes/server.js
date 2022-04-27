require("dotenv").config();
const express = require("express");
const router = express.Router();
const { User } = require("../models");
const Web3 = require("web3");
const rpcURL = "https://ropsten.infura.io/v3/";

const erc721abi = require("../contracts/erc721abi");
const erc721bytecode = require("../contracts/erc721bytecode");
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
  const server = await User.findOne({
    attributes: ["address"],
    where: {
      username: "server",
    },
  });

  const web3 = new Web3(
    new Web3.providers.HttpProvider("http://127.0.0.1:7545")
  );

  web3.eth.accounts.privateKeyToAccount(process.env.FAUCET_SECRET);

  const nonce = await web3.eth.getTransactionCount(
    process.env.FAUCET_ADDRESS,
    "latest"
  );
  const transaction = {
    to: server.address,
    value: "1000000000000000000", // 1 ETH
    gas: "30000",
    nonce: nonce,
  };

  const signedTx = await web3.eth.accounts.signTransaction(
    transaction,
    process.env.FAUCET_SECRET
  );

  const ethbalance = await web3.eth.getBalance(server.address);

  web3.eth.sendSignedTransaction(
    signedTx.rawTransaction,
    function (error, hash) {
      if (error) {
        console.log(error);
        res.status(400).json({ message: "Error: Faucet Transaction Failed" });
      } else {
        res.status(200).json({
          data: {
            server_ethbalance: web3.utils.fromWei(ethbalance, "ether"),
            txhash: hash,
          },
          message: "Faucet Successed to server account",
        });
      }
    }
  );
});

router.post("/deploynft", async (req, res) => {
  const web3 = new Web3(
    new Web3.providers.HttpProvider("http://127.0.0.1:7545")
  );

  const serverAccount = await User.findOne({
    attributes: ["privatekey"],
    where: {
      username: "server",
    },
  });

  const server = await web3.eth.accounts.wallet.add(serverAccount.privatekey);
  const parameter = {
    from: server.address,
    gas: 3000000,
  };

  const myContract = new web3.eth.Contract(erc721abi);
  myContract
    .deploy({ data: erc721bytecode })
    .send(parameter)
    .on("receipt", async (receipt) => {
      console.log(receipt.contractAddress);
      res.status(201).json({
        message: "deploying ERC721 is succeed",
        receipt,
      });
    })
    .on("error", (error) => {
      console.log(error);
      res.status(400).json({ message: "deploying ERC721 is failed" });
    });
});

module.exports = router;
