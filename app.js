const express = require("express");
const app = express();
const transactionController = require("./controllers/transactions.js")

app.use(express.json());
const cors = require("cors");
app.use(cors());

app.get("/", (req, res) => {
    res.send("here also");
})

// app.use("/transactions", transactionController)

app.get("*", (req, res) => {
    res.status(404).send("error");
})

module.exports = app;

