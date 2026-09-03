require("dotenv").config();
const express = require("express");
const app = express()
const cors = require("cors");
const { connectDB } = require("./config/db");
const dns = require("node:dns/promises")

dns.setServers(["0.0.0.0", "1.1.1.1"])

connectDB();

app.use(cors());

const { PORT = 8000 } = process.env;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);

})
