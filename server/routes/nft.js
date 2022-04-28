require("dotenv").config();
const express = require("express");
const router = express.Router();
const Web3 = require("web3");
const { Nft } = require("../models");
const { User } = require("../models");

const metadata = require("../contracts/metadata.json");
const web3 = new Web3("http://localhost:7545");
const erc721abi = require("../contracts/erc721abi");
const erc721bytecode = require("../contracts/erc721bytecode");

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

  const nftContract = new web3.eth.Contract(erc721abi);

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

router.post("/getnft", async (req, res) => {
  const reqid = req.body.id;
  const receiptAddress = req.body.address;

  const senderAccount = await User.findOne({
    attributes: ["address"],
    where: {
      username: "server",
    },
  });

  const erc721Contract = new web3.eth.Contract(
    erc721abi,
    process.env.ERC721_CONTRACT, // 컨트랙트의 주소
    {
      from: senderAccount.address, // 컨트랙트 발행자 주소
    }
  );

  const metadata = Nft.findOne({
    attributes: ["ipfs"],
    where: {
      id: reqid,
    },
  });
  //   await erc721Contract.methods.setToken("token contract address").call();
  await erc721Contract.methods.mintNFT(receiptAddress, metadata).call();

  const owner = await User.findOne({
    attributes: ["username"],
    where: {
      address: receiptAddress,
    },
  });

  const nftinfo = await Nft.create({
    ifps: metadata.image,
    owner: owner.username,
    price: 0,
    name: metadata.name,
    description: metadata.description,
  });
  res.status(201).json({ message: "nft mint complete", data: nftinfo });
});

module.exports = router;

// 1. 토큰 잔액이 가격보다 큰 지 확인
// 2. 배포된 erc721 컨트랙트의 mintNFT를 통해서 nft 발급
// 3. 발급된 nft를 유저에게 보내줌
// 4. 서버 계정에서 조작해서 유저의 토큰을 깎음
