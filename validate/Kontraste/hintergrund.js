exports.validate = function(dom) {
    var result = backgroundText(dom);
    if (result == ""){
        return "<div class='alert alert-success'>Keine Werte zum validieren vorhanden.</div>"
    } else {
        return "<div class='alert alert-warning'>Folgende Farben wurden validiert</b>: </br>" + result + "</div>";
    }

}


function backgroundText (dom){
    result = "";
    var bool = false;

    var relLuBackgroundArray = new Array();
    var relLuColorArray = new Array();

    var backgroundColorArray = new Array();
    var textColorArray = new Array();

    var contrastArray = new Array();

    for(var node of dom.window.document.querySelectorAll('*')) {
        for (let pseudo of ['', ':befor', ':after']) {


            let backgroundColor = dom.window.getComputedStyle(node, pseudo).backgroundColor;
            let color = dom.window.getComputedStyle(node, pseudo).color;

            if (backgroundColor.length != "") {
                backgroundColor = backgroundColor.substr(4);
                backgroundColor = backgroundColor.slice(0, -1);
                var backgroundSplit = backgroundColor.split(",");

                var bgValueR = parseInt(backgroundSplit[0]);
                var bgValueG = parseInt(backgroundSplit[1]);
                var bgValueB = parseInt(backgroundSplit[2]);

                var relLumiBackgroundC = RelativeLuminance(bgValueR, bgValueG, bgValueB);

                relLuBackgroundArray.push(relLumiBackgroundC);
                backgroundColorArray.push(backgroundColor);

            }
            if (color.length != ""){
                color = color.substr(4);
                color = color.slice(0, -1);
                var colorSplit = color.split(",");

                var cValueR = parseInt(colorSplit[0]);
                var cValueG = parseInt(colorSplit[1]);
                var cValueB = parseInt(colorSplit[2]);

                var relLumiTextColor = RelativeLuminance(cValueR, cValueG, cValueB);

                relLuColorArray.push(relLumiTextColor);
                textColorArray.push(color);
            }

          //  var tags = node.textContent;
            // var parentTags = node.parentNode.textContent;

            //result +=  node + " -> " + "Hintergrund: " + backgroundColor + "</br>" + node + "Textfarbe: " + color + "</br>" + "Kontrast: "+ contrast + "</br>" + "</br>";
            break;

        }
    }

    for ( let i = 0; i < relLuBackgroundArray.length; i++){
        for (let j = 0; j < relLuColorArray.length; j++) {

            var contrast = contrastRelation(relLuBackgroundArray[i], relLuColorArray[j]);
          /* if (isNaN(contrast))
                continue;
            if (contrastArray.includes(contrast))
                continue;
            contrastArray.push(contrast);*/


            result += node + "</br>" + "Hintergrund: " + backgroundColorArray[i] + "</br>" + node +"</br>" + "Textfarbe: " + textColorArray[j] + "</br>" + "Kontrastverhältnis: " + contrast.toFixed(1) + " : 1" + "</br>" + "</br>";

            }

        }




    return  result;
}



function RelativeLuminance(r,g,b){
    var rNormalisiert = r/255; // 255 is the top color value equal to 1 for der lightest color value
    var gNormalisiert = g/255;
    var bNormalisiert = b/255;

    if (rNormalisiert <= 0.03928){
        var rNext = rNormalisiert/12.92;
    }
    else
        var rNext = Math.pow(((rNormalisiert+0.055)/1.055),2.4);

    if (gNormalisiert <= 0.03928){
        var gNext = gNormalisiert/12.92;
    }
    else gNext = Math.pow(((gNormalisiert+0.055)/1.055),2.4);

    if (bNormalisiert <= 0.03928){
        var bNext = bNormalisiert/12.92;
    }
    else bNext = Math.pow(((bNormalisiert+0.055)/1.055),2.4);

    var relativeLuminance = 0.2126 * rNext + 0.7152 * gNext + 0.0722 * bNext;

    return relativeLuminance;
}


function contrastRelation(background, color){
    var y1;
    var y2;

    if (background < color){
        y1 = color ;
        y2 = background;
    }
    else {
        y1 = background;
        y2 = color;
    }

    var contrastRelation = (y1 + 0.05)/(y2 + 0.05);

    return contrastRelation;

}