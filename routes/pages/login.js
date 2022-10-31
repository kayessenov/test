const express = require("express");

const router = express.Router();


router.get('/',  async (req, res) => {

     res.render('pages/login', {name: "sd"})
})

module.exports = router;