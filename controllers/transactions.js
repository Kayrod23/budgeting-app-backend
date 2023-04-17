const express = require("express");
const transactions = express.Router();
const transactionsArray = require("../models/transactions.js");

transactions.get("/", (req, res) => {
    res.send(transactionArray);
});

transactions.get("/:arrayIndex", (req, res) => {
    if(transactionsArray[req.params.arrayIndex]) {
        res.json(transactionsArray[req.params.arrayIndex]);
    } else {
        res.status(404).json({ error: "Index not found"});
    }
});

transactions.delete("/:arrayIndex", (req, res) => {
    if(transactionsArray[req.params.arrayIndex]) {
        const deletedTransaction = logsArray.splice(req.params.arrayIndex, 1);
        res.status(200).json(deletedTransaction);
    } else {
        res.status(404).json({ error: "Not Found"});
    }
});

transactions.put("/:arrayIndex", (req, res) => {
    if(transactionsArray[req.params.arrayIndex]) {
        res.status(200).json(logsArray[req.params.arrayIndex]);
    } else {
        res.status(404).json({ error: "Not Found"});
    }
});

transactions.post("/:arrayIndex", (req, res) => {
    transactions.post("/", (req, res) => {
        transactionsArray.push(req.body);
        res.json(transactions[transactionsArray.length - 1]);
    })
});

module.exports = transactions;