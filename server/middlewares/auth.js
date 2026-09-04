const jwt = require("jsonwebtoken")

const verifytoken = (req, res) => {
    try {
        const token = req.headers["authorization"].split(" ")[1];

        if (!token) { return res.status(401).json({ message: "Unauthorized", isError: true })}

        jwt.verify(token, process.env.JWT_SECRET, (error, result) => {
            if (error) { return res.status(401).json({ message: "Unauthorized", isError: true }) }
            req.uid = result.uid;
            next();
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Internal server error", isError: true })
    }
}

module.exports = { verifytoken };