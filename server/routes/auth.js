const express = require("express");
const Users = require("../models/auth");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const { getRandomId } = require("../config/global");
const { verifytoken } = require("../middlewares/auth");

router.post("/register", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if(!name || !email || !password) {
            return res.status(400).json({ message: "All fileds are required", isError: true })
        }

        const user = await Users.findOne({ email });

        if(user) { return res.status(400).json({ message: "User already exists", isError: true }) }

        const hashPassword = await bcrypt.hash(password, 10);

        const userData = { uid: getRandomId(), name, email, password: hashPassword };

        const newUser = new Users(userData);

        await newUser.save();

        res.status(201).json({ message: "User registered successfully", user: newUser, isError: false });

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Internal server error", isError: true })
    }
});

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        
        if (!email || !password) { return res.status(400).json({ message: "All fileds are required", isError: true }) }

        const user = await Users.findOne({ email })

        if (!user) { return res.status(400).json({ message: "Invalid email or password", isError: true }) }

        const isPasswordValid = await bcrypt.compare(password, user.password)

        if (!isPasswordValid) { return res.status(400).json({ message: "Invalid email or password", isError: true }) }

        if (user.status !== "active") { return res.status(400).json({ message: "Your account is not active", isError: true }) }

        const token = jwt.sign({ uid: user.uid }, process.env.JWT_SECRET, { expiresIn: "1d" });

        res.status(200).json({ message: "User logged in successfuly", token, isError: false });

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Internal server error", isError: true })
    }
});

router.get("/user", verifytoken, async (req, res) => {
    try {
        
        const { uid } = req
        const user = await Users.findOne({ uid });

        if (!user) { return res.status(400).json({ message: "User not found", isError: true }) }

        res.status(200).json({ message: "User profile", user, isError: false });

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Internal server error", isError: true })
    }
})

router.patch("/update-user", verifytoken, async (req, res) => {
    try {
        const { uid } = req;

        const user = await Users.findOne({ uid });

        if (!user) { return res.status(400).json({ message: "User not found", isError: true }) }

        const { name } = req.body;

        if (!name) { return res.status(400).json({ message: "All fields are required", isError: true }) }

        const updatedUser = await Users.findOneAndUpdate({ uid }, { name }, { new: true });

        res.status(200).json({ message: "User updated successfully", updatedUser, isError: false });

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Internal server error", isError: true })
    }
})

router.delete("/delete-user", verifytoken, async (req, res) => {
    try {
        const { uid } = req;

        const user = await Users.findOne({ uid });

        if (!user) { return res.status(400).json({ message: "User not found", isError: true }) }

        const deletedUser = await Users.findOneAndDelete({ uid });

        res.status(200).json({ message: "User deleted successfully", deletedUser, isError: false });

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Internal server error", isError: true })
    }
})

module.exports = router;