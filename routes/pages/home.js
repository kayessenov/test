const express = require("express");

const router = express.Router();


router.get('/',  async (req, res) => {
    
     res.render('pages/home', {name: "sd"})
})

module.exports = router;