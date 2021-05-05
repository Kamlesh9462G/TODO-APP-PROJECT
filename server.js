require('./models/db');

const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
const bodyparser = require("body-parser");

const PORT = process.env.PORT || 3000;


const taskRouter = require("./routes/taskRouter");


var app = express();
app.use(
  bodyparser.urlencoded({
    extended: true,
  })
);
app.use(bodyparser.json());

// using static files
app.use(express.static("./views"));
// to use encrypted data
app.use(bodyparser.urlencoded({ extended: true }));
// set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// app.set("views", path.join(__dirname, "/views"));
// app.engine(
//   "ejs",
//   exphbs({
//     extname: "ejs",
//     defaultLayout: "home",
//     layoutsDir: __dirname + "/views"
//   })
// );
// app.set("view engine", "ejs");

app.listen(PORT, () => {
  console.log("Express server started at port : 3000");
});

app.use('/', taskRouter);