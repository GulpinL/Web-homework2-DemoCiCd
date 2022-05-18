var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// import "core-js/stable";
// import "regenerator-runtime/runtime";
// import '@babel/polyfill'
// const hbshelpers = require("handlebars-helpers");
// const session = require('express-session');
const expressHandlebarsSections = require('express-handlebars-sections');
var { engine, create  } = require("express-handlebars");
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var registerRouter = require('./routes/register');

// const fakeDB = [
//   {
//     id: Math.floor(Math.random() * 100),
//     email: "test@example.com",
//   },
// ];

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

app.engine(
  "hbs",
  engine({
    //helpers: multihelpers,
    partialsDir: ["views/partials"],
    extname: ".hbs",
    layoutsDir: "views",
    defaultLayout: "layout",
    helpers: {
      section: expressHandlebarsSections()
    }
  })

);
app.set('view engine', 'hbs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

// app.get("/", (req, res) => {
//   return res.status(200).json({ data: fakeDB });
// });
// app.use('/users', usersRouter);
app.post('/users', async (req, res) => {
  const { password, username } = req.body
  if (!password || !username) {
    res.sendStatus(400)
    return
  }

  res.send({ userId: 0 })
})

app.use('/registerdemoci', registerRouter);









// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
