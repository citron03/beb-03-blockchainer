require("dotenv").config();
const express = require("express");
const router = express.Router();
const Web3 = require("web3");
const { User } = require("../models");
const { Nft } = require("../models");

const web3 = new Web3("http://localhost:7545");
const erc721abi = require("../contracts/erc721abi");
const erc721bytecode = require("../contracts/erc721bytecode");
const erc20abi = require("../contracts/erc20abi");
const erc20bytecode = require("../contracts/erc20bytecode");

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

  const receipt = await User.findOne({
    where: {
      username: username,
    },
  });

  const chosenNft = await Nft.findOne({
    attributes: ["price"],
    where: {
      id: reqid,
    },
  });

  const nftprice = chosenNft.price.toString() + "000000000000000000";

  // 컨트랙트 선언

  const erc20Contract = await new web3.eth.Contract(
    erc20abi,
    process.env.ERC20_CONTRACT,
    {
      from: process.env.SERVER_ADDRESS,
    }
  );
  const erc721Contract = new web3.eth.Contract(
    erc721abi,
    process.env.ERC721_CONTRACT,
    {
      from: process.env.SERVER_ADDRESS,
    }
  );

  const server = await web3.eth.accounts.wallet.add(process.env.SERVER_SECRET);
  await erc721Contract.methods.setToken(process.env.ERC20_CONTRACT).call();

  // 사용가능한 잔액 확인
  const balance = await erc20Contract.methods
    .allowance(receipt.address, process.env.SERVER_ADDRESS)
    .call();

  console.log(balance);
  if (nftprice > balance) {
    res.status(400).json({ message: "insufficient BCT" });
  }

  // 유저로부터 토큰 회수
  await erc20Contract.methods
    .transferFrom(receipt.address, process.env.SERVER_ADDRESS, nftprice)
    .send({
      from: server.address,
      gas: 2000000,
    });

  // nft 발행
  const metadata = await Nft.findOne({
    attributes: ["ipfs"],
    where: {
      id: reqid,
    },
  });

  await erc721Contract.methods.mintNFT(receipt.address, metadata).call();

  // 결과에 맞추어 db 업데이트
  const newNft = await Nft.update(
    {
      ifps: metadata.image,
      owner: receipt.username,
      name: metadata.name,
      description: metadata.description,
    },
    {
      where: {
        id: reqid,
      },
    }
  );

  await User.decrement(
    { balance: chosenNft.price },
    {
      where: {
        username: req.body.username,
      },
    }
  );
  try {
    res.status(201).json({ message: "nft mint complete" });
  } catch {
    (err) => console.log(err);
  }
});

router.get("/allnfts", async (req, res) => {
  const nftList = await Nft.findAll();
  res.status(200).json({ message: "all nft loading Successed", data: nftList });
});

module.exports = router;
