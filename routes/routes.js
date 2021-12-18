let express = require("express");
let router = express.Router();
const productos = require("../index")

router.get("/", (req, res, next) => {
    res.render("tableProducts", {productos})
})

router.post("/", (req, res, next) => {
    productos.productos.push(req.body)
    console.log("MANDO DATA")
    console.log(productos)
    res.render("tableProducts", {productos});
})

module.exports = router;