var express = require('express');

var router = express.Router();

router.get('/', function(req, res) {
    res.render('about', { title: 'Leserator.de'});
});

module.exports = router;
