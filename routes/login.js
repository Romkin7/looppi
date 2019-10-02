const express = require("express");
const router = express.Router(); 
<<<<<<< HEAD
const sql = require('mysql');
=======
>>>>>>> bd531dc2776c35399dd62e17b6e2347f5d5a8bda
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