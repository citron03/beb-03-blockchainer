const express = require("express");
const app = express();
const db = require("./models");
const port = 3000;

const registerRouter = require("./routes/register");

app.use(express.json());
app.use("/register", registerRouter);

db.sequelize
  .sync({ force: true })
  .then(() => {
    console.log("db 연결 성공 ");
  })
  .catch(console.error);

app.get("/", function (req, res) {
  res.end("server connected");
});

app.listen(port, () => {
  console.log(`server is listening at localhost:${port}`);
});
