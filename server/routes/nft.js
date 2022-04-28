require("dotenv").config();
const express = require("express");
const router = express.Router();
const Web3 = require("web3");
const { User } = require("../models");
const { Nft } = require("../models");

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
  const username = req.body.username;

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

  const metadata = await Nft.findOne({
    attributes: ["ipfs"],
    where: {
      id: reqid,
    },
  });

  const receipt = await User.findOne({
    where: {
      username: username,
    },
  });
  console.log(receipt);
  // await erc721Contract.methods.setToken(process.env.ERC721_CONTRACT).call();
  await erc721Contract.methods.mintNFT(receipt.address, metadata).call();

  const newNft = await Nft.update(
    {
      ifps: metadata.image,
      owner: receipt.username,
      price: 1,
      name: metadata.name,
      description: metadata.description,
    },
    {
      where: {
        id: reqid,
      },
    }
  );
  try {
    res.status(201).json({ message: "nft mint complete" });
  } catch {
    (err) => console.log(err);
  }
});

module.exports = router;

// 1. 토큰 잔액이 가격보다 큰 지 확인
// 2. 배포된 erc721 컨트랙트의 mintNFT를 통해서 nft 발급
// 3. 발급된 nft를 유저에게 보내줌
// 4. 서버 계정에서 조작해서 유저의 토큰을 깎음
