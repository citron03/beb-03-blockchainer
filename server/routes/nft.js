require("dotenv").config();
const express = require("express");
const router = express.Router();
const Web3 = require("web3");

const erc721abi = require("../contracts/erc721abi");
const erc721bytecode = require("../contracts/erc721bytecode");

router.post("/getnft", async (req, res) => {});

module.exports = router;
