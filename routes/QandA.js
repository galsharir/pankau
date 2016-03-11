/**
 * Created by galsharir on 11/03/16.
 */


//General Setting
var express = require('express');
var router = express.Router();
var dbAccess = require('../dbAccess.js');

// req needs to have the location as ne of the values
router.get('/', function(req, res, next) {
    dbAccess.getQandA(req.location, function (data) {
        res.render('qAndA', {
            qResult: data //Put here the stuff you pull out of db
        })
    })
});
