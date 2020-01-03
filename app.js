var port = process.env.PORT || 6789;


const express = require("express");
const  bodyParser = require("body-parser");
const multer = require("multer");
const fs = require("fs");
const cors = require("cors")
const moment = require("moment")

const app = express();

app.use(bodyParser.json());
app.use(cors())

app.get("/get", (req, res) => {
    res.json({"message" : "Example server is live", "timestamp": `${moment().format()}`})
})

app.listen(port, () => {
  console.log(`App is listening on port ${port}.`);
});

app.use((req, res, next) => {
  res.status(404).send("Sorry, what you've requested doesn't exist.");
});
