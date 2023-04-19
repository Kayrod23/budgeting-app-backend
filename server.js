const app = require("./app.js")
require("dotenv").config();

const port = process.env.PORT || 3002;

app.listen((port), () => {
    console.log(`listening to port ${port}`);
})
