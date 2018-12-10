var express = require('express');
var session = require('express-session');
var request = require('request');
const fs = require("fs");

var router = express.Router();
const jsonDataPath = 'data/validationArray.json';
var jsonDataStructure = JSON.parse(fs.readFileSync(jsonDataPath));

router.post('/', function(req, res) {
    try {
        res.render('ergebnis', {results: req.body, url: session.validationURL });
    } catch (e) {
        console.error(e)
    }

});

module.exports = router;

