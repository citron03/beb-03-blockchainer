const express = require('express');
const router = express.Router();
const { User } = require('../models');
require('dotenv').config();

router.get('/post/:username', async (req, res) => {
  console.log(req);
});
