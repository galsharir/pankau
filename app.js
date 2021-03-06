/**
 * Created by galsharir on 11/03/16.
 */



if(window.openDatabase){
  var shortName   =  'myTable';
  var version   =  '1.0';
  var displayName  =  'Edentiti Information';
  var maxSize   =  65536; // in bytes
  var db =  openDatabase(shortName, version, displayName, maxSize);
  alert('Sqlite Database created');
}

db.createFromJSON(jsonString,'myTable');


var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var fs = require('fs');
var routes = require('./routes/welcome');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Routing to different modules
app.use('/', routes);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});
module.exports = app;

// Open server for listening
var server = app.listen(3000, function () {
  host = server.address().address;
  port = server.address().port;

  console.log('LOG: App listening at http://%s:%s', host, port);
});

