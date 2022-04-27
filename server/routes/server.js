require("dotenv").config();
const express = require("express");
const router = express.Router();
const { User } = require("../models");
const Web3 = require("web3");

const web3 = new Web3("http://localhost:7545");
const erc721abi = require("../contracts/erc721abi");
const erc721bytecode = require("../contracts/erc721bytecode");

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
  const serverAccount = await User.findOne({
    attributes: ["privatekey"],
    where: {
      username: "server",
    },
  });

  const server = await web3.eth.accounts.wallet.add(serverAccount.privatekey);
  // const server = web3.eth.accounts.privateKeyToAccount(
  //   serverAccount.privatekey
  // );
  const parameter = {
    from: server.address,
    gas: 3000000,
  };

  const nftContract = new web3.eth.Contract(erc721abi, server.address);

  nftContract
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

// 1. 토큰 잔액이 가격보다 큰 지 확인
// 2. 배포된 erc721 컨트랙트의 mintNFT를 통해서 nft 발급
// 3. 발급된 nft를 유저에게 보내줌
// 4. 서버 계정에서 조작해서 유저의 토큰을 깎음
