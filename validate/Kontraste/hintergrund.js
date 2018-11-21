exports.validate = function(dom) {
    var result = backgroundText(dom);
    if (result == ""){
        return "<div class='alert alert-success'>Validation erfolgreich.</div>"
    } else {
        return "<div class='alert alert-warning'>Validation fehlgeschlagen</b>: </br>" + result + "</div>";
    }

}

function backgroundText (dom){
    result = "";
    for(let node of dom.window.document.querySelectorAll('*')){
        for(let pseudo of ['',':befor', ':after']){
            let backgroundColor = dom.window.getComputedStyle(node, pseudo).backgroundColor;
            let color = dom.window.getComputedStyle(node, pseudo).color;

            backgroundColor = backgroundColor.substr(4);
            backgroundColor = backgroundColor.slice(0,-1);
           var backgroundSplit = backgroundColor.split(",");

            var valueR = parseInt(backgroundSplit[0]);
            var valueG = parseInt(backgroundSplit[1]);
            var valueB = parseInt(backgroundSplit[2]);

                if ( backgroundColor.length != 0 || color.length !=0){

                  result += "BackgroundColor: "+ backgroundColor + "->" + RelativeLuminance(valueR,valueG,valueB)+"<br/>";
                  break;
            }
        }
    }
    return result;
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