require("dotenv").config();
const express = require("express");
const router = express.Router();
const Web3 = require("web3");
const { User } = require("../models");

const web3 = new Web3("http://localhost:7545");
const erc20abi = require("../contracts/erc20abi");
const erc20bytecode = require("../contracts/erc20bytecode");

router.post("/deploytoken", async (req, res) => {
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

  const tokenContract = new web3.eth.Contract(erc20abi);

  tokenContract
    .deploy({
      data: erc20bytecode,
    })
    .send(parameter)
    .on("receipt", async (receipt) => {
      res.status(201).json({
        message: "deploying ERC20 is succeed",
        receipt,
      });
    })
    .on("error", (error) => {
      console.log(error);
      res.status(400).json({ message: "deploying ERC20 is failed" });
    });
});

module.exports = router;
