require("dotenv").config();
const express = require("express");
const router = express.Router();
const Web3 = require("web3");
const { Nft } = require("../models");

const metadata = require("../contracts/metadata.json");
const web3 = new Web3("http://localhost:7545");
const erc721abi = require("../contracts/erc721abi");
const erc721bytecode = require("../contracts/erc721bytecode");

const erc721Contract = new web3.eth.Contract(
  erc721abi,
  "0xea899Ac025690480d33B33A486B2aF8E4379Ec3E", // 컨트랙트의 주소
  {
    from: "0x666e81f6e742680ebe17b4e9a27ff56278aa1855", // 컨트랙트 발행자 주소
  }
);

router.post("/getnft", async (req, res) => {
  //   await erc721Contract.methods.setToken("token contract address").call();
  await erc721Contract.methods
    .mintNFT("0x666e81f6e742680ebe17b4e9a27ff56278aa1855", metadata) // token contract address
    .call();

  await Nft.create({
    ifps: metadata.image,
    owner: 1,
    price: 0,
    name: metadata.name,
    description: metadata.description,
  });
});

module.exports = router;
