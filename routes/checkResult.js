var express = require('express');
var session = require('express-session');
var router = express.Router();

router.post('/', function(req, res) {
    try { // Endergebnis wird im Hintergrund geladen
        session.ergebnis = req.body;
        session.validationReady = true
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

