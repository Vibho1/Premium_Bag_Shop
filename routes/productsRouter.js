const express = require('express');
const router = express();

router.get("/", (req, res) => {
    res.send("Products Router working");
})

module.exports = router;