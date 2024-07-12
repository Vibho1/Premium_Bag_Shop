const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    // Here, you could fetch or determine any error messages to pass
    const error = req.query.error || ''; // Or any logic to determine the error
    res.render("index", { error });
});

module.exports = router;
