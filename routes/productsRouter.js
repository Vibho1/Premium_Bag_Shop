const express = require('express');
const router = express.Router();
const upload = require('../config/multer_config');
const productModel = require('../models/product_model');


router.get("/", (req, res) => {
    res.send("Products Router working");
})


router.post("/create", upload.single("image"), async (req, res) => {
    let {name, price, discount, bgColor, panelColor, textColor} = req.body;

    let product = await productModel.create({
        image: req.file.buffer,
        name,
        price,
        discount,
        bgColor,
        panelColor,
        textColor
    })

    req.flash("success", "product created successfully");
    res.redirect("/owners/admin");
})

module.exports = router;