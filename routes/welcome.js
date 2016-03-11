/**
 * Created by galsharir on 11/03/16.
 */

//General Setting
var express = require('express');
var router = express.Router();
var qLayer = require('../dbAccess');


/* GET home page. */
router.get('/', function(req, res) {
  res.render('welcome')});

module.exports = router;
