var express = require('express');
const phantom = require('phantom');
var router = express.Router();

var fs = require("fs");
var cheerio = require('cheerio');


/* GET home page. */
router.get('/', function(req, res) {

    (async function() {
        const instance = await phantom.create();
        const page = await instance.createPage();
        await page.on('onResourceRequested', function(requestData) {
            console.info('Requesting', requestData.url);
        });

        const status = await page.open('https://www.example.com/');
        const content = await page.property('content');
        var cheer = cheerio.load(content);
        cheer('<script src="/js/validation.js"></script>').insertAfter('body');
        cheer('<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>').insertAfter('body');

        res.send(cheer.html());
        // res.render('index', { title: 'Express', content: result });
        await instance.exit();
    })();
});

module.exports = router;