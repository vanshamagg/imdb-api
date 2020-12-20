const { User } = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const load = require("dotenv").config();
if (load.error) throw load.error;

// create user account

async function signup(req, res) {
    try {
        const { firstname, lastname, email, password } = req.body;
        let user = await User.findOne({ where: { email: email } });
        if (user) res.status(400).json({ msg: "User already exist" });
        const newuser = {
            firstname,
            lastname,
            email,
            password,
            role: "user",
        };
        const salt = await bcrypt.genSalt(10);
        newuser.password = await bcrypt.hash(password, salt);
        const data = await User.create(newuser);
        const payload = {
            user: {
                id: data.id,
            },
        };
        jwt.sign(
            payload,
            process.env.JWT_SECRET_KEY,
            {
                expiresIn: "1h",
            },
            (err, token) => {
                if (err) throw err;
                else {
                    const { id, firstname, lastname, email, role } = data;
                    res.json({ token, data: { id, firstname, lastname, email, role } });
                }
            }
        );
    } catch (error) {
        console.log(error.message);
        res.status(400).json({ error });
    }
}

// login for user
async function signin(req, res) {
    try {
        const { email, password } = req.body;
        let user = await User.findOne({ where: { email: email } });
        if (!user) res.status(400).json({ msg: "User not exist" });
        const checkpassword = await bcrypt.compare(password, user.password);
        if (!checkpassword) return res.status(400).json({ msg: "Wrong password" });

        const payload = {
            id: user.id,
            role: user.role,
        };
        jwt.sign(
            payload,
            process.env.JWT_SECRET_KEY,
            {
                expiresIn: "1h",
            },
            (err, token) => {
                if (err) throw err;
                else {
                    const { id, firstname, lastname, email, role } = user;
                    res.json({ token, user: { id, firstname, lastname, email, role } });
                }
            }
        );
    } catch (error) {
        res.status(400).json({ error });
    }
}

const controllers = {};
controllers.signup = signup;
controllers.signin = signin;
module.exports = controllers;
