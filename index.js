let express = require("express");
let app = express();
let cors = require("cors");
let path = require("path");
const PORT = 3000;

const productos = [];

exports.productos = productos;

// Middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use(cors("*"));


// handlebars

// view engine con ejs
app.set("views", path.join(__dirname , "views", "ejs"));
app.set("view engine", "ejs");
// view engine con pug
// app.set("views", path.join(__dirname , "views", "pug"));
// app.set("view engine", "pug");

// Routes
app.use("/productos", require("./routes/routes"));
app.use(require("./routes"));


app.listen(PORT, () => console.log("Arrancando"))