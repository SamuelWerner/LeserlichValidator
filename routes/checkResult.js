var express = require('express');
var session = require('express-session');
var request = require('request');
const fs = require("fs");

var router = express.Router();
const jsonDataPath = 'data/validationArray.json';
var jsonDataStructure = JSON.parse(fs.readFileSync(jsonDataPath));

router.post('/', function(req, res) {
    try { // Endergebnis wird im Hintergrund geladen
        console.log('ready !!!!!!!!!!!!!!!!!')
        session.ergebnis = req.body
        session.validationReady = true
        // res.render('ergebnis', {results: req.body, url: session.validationURL });
    } catch (e) {
        console.error(e)
    }

});

router.get('/', function(req, res) {

    try { // Endergebnis wird neu aufgebaut
        if (session.validationReady === true) {
            res.render('ergebnis', {results: session.ergebnis, url: session.validationURL });
        } else {
            res.send('waiting');
        }
    } catch (e) {
        console.error(e)
    }

});

module.exports = router;

