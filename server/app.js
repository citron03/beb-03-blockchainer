const express = require('express');
const app = express();
const db = require('./models');
const port = 4000;
const cors = require('cors');

const accountRouter = require('./routes/account');
const pageRouter = require('./routes/page');
const authRouter = require('./routes/auth');

app.use(cors());
app.use(express.json());
app.use('/account', accountRouter);
app.use('/page', pageRouter);
app.use('/auth', authRouter);

db.sequelize
  .sync()
  .then(() => {
    console.log('dababase connected');
  })
  .catch(console.error);

app.listen(port, () => {
  console.log(`server is listening at localhost:${port}`);
});
