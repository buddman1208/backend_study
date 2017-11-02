var express = require('express')
var app = express()
var path = require('path')
var favicon = require('static-favicon')
var logger = require('morgan')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var router = express.Router()
var randomString = require('randomstring')
var multer = require('multer')
var passport = require('passport')
var db = require('./mongo')

app.use(logger('dev'))
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb'}));
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.use(passport.initialize())
passport.serializeUser(function (user, done) {
    done(null, user);
});
passport.deserializeUser(function (obj, done) {
    done(null, obj);
});

app.use('/', require('./routes/index'))
app.use('/images', express.static('uploads'))
require('./routes/auth')(app, randomString, passport, db.Users, multer)

module.exports = app

