const express = require("express");
const app = express();
const db = require("./models");
const port = 3000;

db.sequelize
  .sync({ force: true })
  .then(() => {
    console.log("db 연결 성공 ");
  })
  .catch(console.error);

app.get("/", (req, res) => {
  res.send("connected");
});

app.listen(port, () => {
  console.log(`server is listening at localhost:${port}`);
});
