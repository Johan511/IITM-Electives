const express = require("express");
const exphbs = require("express-handlebars");
const dotenv = require("dotenv");
const cors = require("cors");
const cp = require("cookie-parser");

dotenv.config({ path: "./config/config.env" });

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cp());

app.engine(".hbs", exphbs.engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", "./public/");

app.use("/public", express.static("./public"));

app.all("*", (req, res, next) => {
  console.log(req.url);
  next();
});

app.get("/", (req, res, next) => {
  res.render("index.hbs", { layout: false });
});

app.get("/courses", (req, res, next) => {
  res.sendFile(__dirname + "/courses.json");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("listening on port 3000");
});
