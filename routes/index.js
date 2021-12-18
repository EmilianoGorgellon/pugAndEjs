let express = require("express");
let router = express.Router();
const productos = require("../index");

router.get('/', (req, res, next) => {
    res.render("form", { formularioTitle:"Formulario" });
})

module.exports = router;