const router = require("express").Router();
const User = require("../models/User")

// REGISTER

router.post("/register", async (req, res) => {
    try {
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });

        const user = await newUser.save();
        res.status(200).json({ user, res: `${user.username} added successfully` });

    } catch (error) {
        res.status(500).json(error);

    }
})

// LOGIN

router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username })
        if (user) {
            if (user.password == req.body.password) {
                res.status(200).json({ success: "LOGED-IN", user: user });
            } else {
                res.status(422).send("Wrong Password");

            }
        } else {
            res.status(404).send("User not Found")
        }
    } catch (error) {
        res.status(500).json(err);

    }
})

module.exports = router;
