require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports = {
  generateAccessToken: (data) => {
    const token = jwt.sign(data, process.env.ACCESS_SECRET, {
      expiresIn: '1h',
    });
    return token;
  },

  sendAccessToken: (res, accessToken) => {
    return res
      .status(200)
      .cookie('jwt', accessToken)
      .json({ message: 'Making Token!' });
  },

  isAuthorized: (req) => {
    if (req.headers.cookie === undefined) {
      return undefined;
    }

    let token = req.headers.cookie.split('=')[1];

    token = token.split(';')[0];

    const data = jwt.verify(token, process.env.ACCESS_SECRET, (err, data) => {
      return data;
    });

    return data;
  },
};
