import express from "express";
import open from "open";
import session from "express-session";
import path from "path";
import favicon from "serve-favicon";
import logger from "morgan";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import routes from "./src/routes";
import middleware from "./src/middleware";

var app = express();
// if (app.get('env') == 'development'){
// import Twig from 'twig';
// Twig.cache(false);
// }

// view engine setup
app.set("views", path.join(__dirname, "src/views"));
app.set("view engine", "jade");
app.set("view cache", false);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(require("express-promise")());

app.use(
  session({
    secret: "12345",
    name: "testapp", //这里的name值得是cookie的name，默认cookie的name是：connect.sid
    cookie: { maxAge: 80000 }, //设置maxAge是80000ms，即80s后session和相应的cookie失效过期
    resave: false,
    saveUninitialized: true
  })
);

// middleware(app); // custom middleware
routes(app); // register routes

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
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

// 启动打开页面
open("http://localhost:3000");

module.exports = app;
