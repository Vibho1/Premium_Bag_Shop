const express = require('express');
const router = express.Router();
const {registeredUser} = require('../controllers/authController');

router.get("/", (req, res) => {
    res.send("Users Router working");
})

router.post("/register", registeredUser);

module.exports = router;