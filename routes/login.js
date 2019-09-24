const express = require("express");
const router = express.Router(); 

router.post("/login", async(req, res, next) => {
    try {
        return res.status(201).json(req.body.username
            );
    } catch(err) {
        return next(err);
    }
});

module.exports = router;