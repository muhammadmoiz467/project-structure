const mongoose = require("mongoose");

const { MONGODB_USERNAME, MONGODB_PASSWORD } = process.env;

const connectDB = async() => {
    try {
        await mongoose.connect(`mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@cluster0.okqaulw.mongodb.net/?appName=Cluster0`)
        console.log("MongoDB connected successfully")
    } catch (error) {
        console.error(error)
    }
};

module.exports = { connectDB };