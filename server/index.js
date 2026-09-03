require("dotenv").config();
const express = require("express");
const app = express()
const cors = require("cors");
const { connectDB } = require("./config/db");
const auth = require("./routes/auth")
const dns = require("node:dns/promises")

dns.setServers(["0.0.0.0", "1.1.1.1"])

connectDB();

app.use(cors());
app.use(express.json());
app.use("/api/auth", auth)

const { PORT = 8000 } = process.env;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
