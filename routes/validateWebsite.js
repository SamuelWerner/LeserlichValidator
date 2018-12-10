const express = require('express');
const session = require('express-session');
const fs = require("fs");
const jsdom = require("jsdom");
const cheerio = require('cheerio');
const phantom = require('phantom');

const router = express.Router();
const jsonDataPath = 'data/validationArray.json';

const { JSDOM } = jsdom;

/* GET home page. */
router.post('/', function(req, res) {
    const url = addHttp(req.body.url);
    session.validationURL = url.substring(7);
    (async function() {
        const instance = await phantom.create();
        const page = await instance.createPage();
        await page.on('onResourceRequested', function(requestData) {
            //console.info('Requesting', requestData.url);
        });

        const status = await page.open(url);
        const content = await page.property('content');
        await instance.exit();

        host = req.headers.host
        var cheer = cheerio.load(content);
        cheer('link').each(function(i, elem) {
            let href = cheer(this).attr('href')
            if (!href.includes('http'))
            {
                href = url + href;
                cheer(this).attr('href', href)
            }
            console.log(href)
        });

        cheer('sript').each(function(i, elem) {
            let src = cheer(this).attr('src')
            if (!src.includes('http'))
            {
                src = url + src;
                cheer(this).attr('href', src)
            }
            console.log(src)
        });

        cheer('<script src="http://'+host+'/js/validate.js"></script>').insertAfter('body');
        cheer('<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>').insertAfter('body');
        // cheer('head').append('<link rel="stylesheet" href="http://'+host+'/css/sonar.css"></link>');
        // cheer('body').append('<div class="modal"><div class="sonar-wrapper"><div class="sonar-emitter"><div class="text"></div> <div class="sonar-wave"></div></div></div></div>')
        // cheer('body').prepend('<div class="modalWaiting"><div class="modalWaiting-content">Bitte warten <p/> Die Seite wird analysiert </div></div>')
        res.send(cheer.html());

        // session.validationResult = jsonDataStructure;

        // session.validationDone = true;
    })();
    // res.render('waiting' );
});

function addHttp(url) {
    result = url;
    if (!/^(f|ht)tps?:\/\//i.test(url)) {
        var result = "https://" + url;
    }
    return result;
}

module.exports = router;
