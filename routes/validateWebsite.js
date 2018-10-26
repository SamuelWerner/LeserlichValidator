const express = require('express');
const session = require('express-session');
const fs = require("fs");
const jsdom = require("jsdom");
const cheerio = require('cheerio');
const phantom = require('phantom');
const validateHumanistischeGroteskschriften = require('../validate/Schrift/Zeichen/Schriftart/humanistischeGroteskschriften');

const router = express.Router();
const jsonDataPath = 'data/validationArray.json';
const jsonDataStructure = JSON.parse(fs.readFileSync(jsonDataPath));


const { JSDOM } = jsdom;

/* GET home page. */
router.post('/', function(req, res) {
    const url = addHttp(req.body.url);
    (async function() {
        const instance = await phantom.create();
        const page = await instance.createPage();
        await page.on('onResourceRequested', function(requestData) {
            //console.info('Requesting', requestData.url);
        });

        const status = await page.open(url);
        const content = await page.property('content');
        await instance.exit();
        var dom = new JSDOM(cheerio.load(content).html());
        validateAll(dom);
        res.render('ergebnis', {results: jsonDataStructure });

    })();
});

function validateAll(dom){
    jsonDataStructure['Schrift']['inhalt']['HumanistischeGroteskschriften']['ergebnis']=validateHumanistischeGroteskschriften.validate(dom);
}

function addHttp(url) {
    result = url;
    if (!/^(f|ht)tps?:\/\//i.test(url)) {
        var result = "http://" + url;
    }
    return result;
}

module.exports = router;