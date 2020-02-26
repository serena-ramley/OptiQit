var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
const bodyParser = require("body-parser");
const Pusher = require("pusher");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var testAPIRouter = require("./routes/testAPI");

var dataRouter = require("./routes/data");
const pusher = new Pusher({
  appId: "942546",
  key: "7ad2d5c6d8c616c9e4f7",
  secret: "e28dbba8658c7dbb9094",
  cluster: "us3",
  encrypted: true
});
const channel = "optiQit";

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/testAPI", testAPIRouter);
app.use("/mongo", dbRouter);
app.use("/data", dataRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
