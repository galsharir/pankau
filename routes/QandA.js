/**
 * Created by galsharir on 11/03/16.
 */


//General Setting
var express = require('express');
var router = express.Router();
var dbAccess = require('../dbAccess.js');

<<<<<<< HEAD
// req needs to have the location as ne of the values
=======
// req needs to have the location as one of the values
// req.query holds the name of the city the refugee choose.
>>>>>>> origin/master
router.get('/', function(req, res, next) {
    dbAccess.getQandA(req.query, function (data) {
        res.render('qAndA', {
            qResult: data //Put here the stuff you pull out of db
        })
    })
});
