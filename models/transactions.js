const { v4: uuidv4 } = require('uuid');

module.exports = [
    {
        id: uuidv4(),
        itemName: "laptop",
        amount: 1000,
        deposit: false,
        date: "09-12-2022",
        from: "employer",
        category: "electronic"
    }
]