const express = require("express");

const router = express.Router();


router.get('/',  async (req, res) => {

     res.render('pages/registration', {name: "sd"})
})

module.exports = router;