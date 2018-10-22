var express = require('express');
var session = require('express-session');

const phantom = require('phantom');
var router = express.Router();

var fs = require("fs");
var cheerio = require('cheerio');


/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { title: 'Leserator'});
});

module.exports = router;