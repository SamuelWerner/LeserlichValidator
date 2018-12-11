const express = require('express');
const session = require('express-session');
const fs = require("fs");
const cheerio = require('cheerio');
const phantom = require('phantom');
const router = express.Router();
/* GET home page. */
router.get('/', function(req, res) {

    (async function() {
        session.validationReady = false
        const instance = await phantom.create();
        const page = await instance.createPage();
        await page.on('onResourceRequested', function(requestData) {
            //console.info('Requesting', requestData.url);
        });

        const status = await page.open(session.renderURL);
        const content = await page.property('content');
        await instance.exit();

        host = req.headers.host
        var cheer = cheerio.load(content);
        cheer('link').each(function(i, elem) {
            let href = cheer(this).attr('href')
            if (href && !href.includes('http'))
            {
                href = session.renderURL + href;
                cheer(this).attr('href', href)
            }
            console.log(href)
        });

        cheer('script').each(function(i, elem) {
            // cheer(this).remove()
            let src = cheer(this).attr('src')
            if (src && !src.includes('http'))
            {
                src = session.renderURL + src;
                cheer(this).attr('href', src)
            }
            console.log(src)
        });

        cheer('<script src="http://'+host+'/js/validate.js"></script>').insertAfter('body');
        cheer('<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>').insertAfter('body');
        res.send(cheer.html());
    })();
});



module.exports = router;
