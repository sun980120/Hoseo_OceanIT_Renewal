'use strict';

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var helmet = require('helmet');
var indexRouter = require('./routes/index');
var introductionRouter = require('./routes/introduction');
var researchRouter = require('./routes/research');
var memberRouter = require('./routes/member');
var galleryRouter = require('./routes/gallery');
var authRouter = require('./routes/auth');
var boardRouter = require('./routes/board');
var adminRouter = require('./routes/admin');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views'))); //USE HASH

app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/introduction', introductionRouter);
app.use('/research', researchRouter);
app.use('/members', memberRouter);
app.use('/gallery', galleryRouter);
app.use('/auth', authRouter);
app.use('/board', boardRouter);
app.use('/admin', adminRouter);

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
app.use(helmet());
app.disable('x-powered-by'); //HELMET으로 X-powerde-by 안보이게 수정
module.exports = app;
