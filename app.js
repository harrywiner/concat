const express = require("express");
var concat = require("./routes/concat.js");

const app = express();
const port = 5000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/" + "index.html");
});

app.listen(port, () => {
  console.log(`App started at http://localhost:${port}`);
});

app.get("/concat", (req, res) => {
  console.log("in server ajax");
  let wordA = req.query.wordA;
  let wordB = req.query.wordB;

  const result = concat.concat(wordA, wordB);
  res.send({
    result: result,
  });

  return;
});
