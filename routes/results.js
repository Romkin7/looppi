const express = require('express');
const router = express.Router();
router.get("/results", async(req, res, next) => {
    res.json(
        {
            "points": 3
        }
    )
})
module.exports = router;