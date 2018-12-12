const express = require('express');
const jsdom = require("jsdom");
const session = require('express-session');
const cheerio = require('cheerio');
const phantom = require('phantom');
const router = express.Router();

const { JSDOM } = jsdom;

router.get('/', function(req, res) {
    (async function() {
        session.validationReady = false
        await JSDOM.fromURL(session.renderURL, {
            referrer: session.renderURL,
            storageQuota: 10000000,
            resources: "usable",
            features : {
                                FetchExternalResources   : ['script'],
                                MutationEvents           : '2.0',
                                QuerySelector            : false
                            }
        }).then(dom => {
            console.log(dom.window.document)
            host = req.headers.host
            protocol = req.headers.referer.split(':')[0]
            var cheer = cheerio.load(dom.serialize());
            cheer('link').each(function(i, elem) {
                let href = cheer(this).attr('href')
                if (href && !href.includes('http'))
                {
                    href = session.renderURL + href;
                    cheer(this).attr('href', href)
                }
            });

            cheer('script').each(function(i, elem) {
                // cheer(this).remove()
                let src = cheer(this).attr('src')
                if (src && !src.includes('http'))
                {
                    src = session.renderURL + src;
                    cheer(this).attr('href', src)
                }
            });
            cheer('head').append('<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">')
            cheer('<script src="'+protocol+'://'+host+'/js/validate.js"></script>').insertAfter('body');
            cheer('<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>').insertAfter('body');
            res.send(cheer.html());
        });






        // const instance = await phantom.create();
        // const page = await instance.createPage();
        // await page.open(session.renderURL);
        // const content = await page.property('content');
        // await instance.exit();


    })();
});

module.exports = router;
