const express = require("express");
const router = express.Router(); 
const sql = require('mysql');
const jwt = require('jsonwebtoken');
const secret = process.env.SECRET;
router.post("/login", async(req, res, next) => {
    try {
        let token = jwt.sign(
            {
                user: req.body.username
            },
            secret
        );
        return res.status(201).json({
            token: token,
            user: req.body.username
        });
    } catch(err) {
        return next(err);
    }
});

module.exports = router;