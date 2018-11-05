var express = require('express');
var session = require('express-session');

var router = express.Router();

router.get('/', function(req, res) {
    console.log(session.validationDone);
    if (session.validationDone === true){
        res.render('ergebnis', {results: session.validationResult, url: session.validationURL });
        session.validationDone = false;
    } else {
        res.send('waiting');
    }



});

module.exports = router;

