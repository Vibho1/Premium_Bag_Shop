const express = require('express');
const router = express.Router();
const {registeredUser, loginUser, logOutUser} = require('../controllers/authController');

router.get("/", (req, res) => {
    res.send("Users Router working");
})

router.post("/register", registeredUser);

router.post("/login", loginUser);

router.get("/logout", logOutUser);

module.exports = router;