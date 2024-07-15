const userModel = require('../models/user_model');

const bcrypt = require('bcrypt');
const {generateToken} = require('../utils/generateToken');

module.exports.registeredUser = async (req, res) => {
    try {
        let { email, fullname, password } = req.body;

        let user = await userModel.findOne({email});
        if(user) return res.status(401).send("You already have an account");

        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, async (err, hash) => {
                if (err) return res.send(err.message);
                else {
                    let user = await userModel.create({
                        email,
                        fullname,
                        password: hash
                    })
                    
                    let token = generateToken(user);
                    res.cookie("token", token);
                    res.send("User created successfully");
                }
            })
        })
    }
    catch (err) {
        res.send(err.message);
    }
}

module.exports.loginUser = async(req, res) => {
    let {email, password} = req.body;

    let user = await userModel.findOne({email: email});

    if(!user) return res.send("Invalid credentials");

    bcrypt.compare(password, user.password, (err, result) => {
        if(result) {
            let token = generateToken(user);
            res.cookie("token", token);
            return res.redirect("shop");
        } else {
            return res.send("Invalid credentials");
        }
    })
}

module.exports.logOutUser = (req, res) => {
    res.cookie("token", "");
    res.redirect("/");
}