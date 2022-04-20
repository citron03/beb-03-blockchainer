const express = require("express");
const { User } = require("./models");
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
  res.send("server connected");
});

app.listen(port, () => {
  console.log(`server is listening at localhost:${port}`);
});

app.post("/", (req, res) => {
  console.log(req);
  res.send(req.username);
});
