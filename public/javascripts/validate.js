var jsonDataStructure = {
    "Farben": {
        "titel": "Farben",
        "inhalt": {
            "Sparsam": {
                "titel": "Farben sparsam einsetzen",
                "beschreibung": "Farben sparsam einsetzen und klar voneinander abgrenzen.",
                "ergebnis": ""
            },
        }
    },
    "Kontrast": {
        "titel": "Kontrast",
        "inhalt": {
            "Hintergrund": {
                "titel": "Hintergrund",
                "beschreibung": "Der Kontrast zwischen Text und dem darunter liegenden Hintergrund. ",
                "ergebnis": ""
            },
            "Ebenen": {
                "titel": "Ebenen",
                "beschreibung": "Der Kontrast zwischen zwei Ebenen, die aufeinander liegen.",
                "ergebnis": ""
            },
            "Alternativtext": {
                "titel": "Bild Alternativtext",
                "beschreibung": "Bilder sollen mit Alternativtexten versehen werden, damit Bildinhalte durch Screenreader oder andere assistive Technologien erkannt werden können.  ",
                "ergebnis": ""
            }
        }
    },
    "Schrift": {
        "titel": "Schrift",
        "inhalt": {
            "HumanistischeGroteskschriften": {
                "titel": "<small class='text-muted'>Zeichen/Schriftart/</small>Humanistische Groteskschriften",
                "beschreibung": "Humanistische Groteskschriften (auch als dynamische Sans Serif oder serifenlose Renaissance-Antiqua bezeichnet) werden für Leser mit Sehbehinderungen für alle Textarten empfohlen.",
                "ergebnis": ""
            },
            "KlassizistischeGroteskschriften": {
                "titel": "<small class='text-muted'>Zeichen/Schriftart/</small>Klassizistische Groteskschriften",
                "beschreibung": "Klassizistische Groteskschriften wie z. B. Arial oder Helvetica sind aufgrund ihrer geschlosseneren Buchstabenformen weniger geeignet als humanistische Groteskschriften.",
                "ergebnis": ""
            },
            "Serifenschriften": {
                "titel": "<small class='text-muted'>Zeichen/Schriftart/</small>Serifenschriften",
                "beschreibung": "Bei Verwendung von Serifenschriften sind Schriften, die dem dynamischen Formprinzip folgen (Renaissance-Antiqua), zu bevorzugen.",
                "ergebnis": ""
            },
            "KlassizistischeAntiquaschriften": {
                "titel": "<small class='text-muted'>Zeichen/Schriftart/</small>Klassizistische Antiquaschriften ",
                "beschreibung": "Klassizistische Antiquaschriften sind aufgrund ihrer feinen Haarstriche nicht geeignet.Serifen sollen sich nicht berühren.",
                "ergebnis": ""
            },
            "Ligaturen": {
                "titel": "<small class='text-muted'>Zeichen/Schriftart/</small>Ligaturen",
                "beschreibung": "Ligaturen (Verbindung von zwei Buchstaben in einem Zeichen) erschweren in manchen Fällen die Erkennbarkeit einzelner Zeichen und sollen daher mit Bedacht gesetzt werden.",
                "ergebnis": ""
            },
            "StrichstaerkeRegular": {
                "titel": "<small class='text-muted'>Zeichen/Strichstärke/</small>Strichstärke Regular",
                "beschreibung": "Regular (je nach Font auch Normal, Book, Roman, Text) Feine und fette Schriftstärken vermeiden.",
                "ergebnis": ""
            },
            "NormaleSchriftweite": {
                "titel": "<small class='text-muted'>Zeichen/Schriftweite/</small>Normale Schriftweiten",
                "beschreibung": "Normale Schriftweiten (schmale oder breite Schriftweiten vermeiden).",
                "ergebnis": ""
            },
            "VoreingestellterZeichenabstand": {
                "titel": "<small class='text-muted'>Zeichen/Zeichenbezogene Empfehlung/</small>Zeichenabstand",
                "beschreibung": "Verringerung der im Schriftfont eingerichteten Zeichenabstände vermeiden. Keine Sperrung von Text (großer Zeichenabstand).",
                "ergebnis": ""
            },
            "SchreibweiseVersalien": {
                "titel": "<small class='text-muted'>Zeichen/Schreibweise/</small>Versalien",
                "beschreibung": "Texte in gemischter Groß- und Kleinschreibung setzen (Also keine Versalien verwenden).",
                "ergebnis": ""
            },
            "HervorhebungUnterstreichungLinks": {
                "titel": "<small class='text-muted'>Zeichen/Hervorhebung/</small>Links",
                "beschreibung": "Unterstreichungen nur für Links.",
                "ergebnis": ""
            },
            "ZeilenlaengeMaximal": {
                "titel": "<small class='text-muted'>Text/Zeilenlänge/</small>Zeilenlänge",
                "beschreibung": "Zeilenlänge bei Lesetext maximal 80 Zeichen je Zeile.",
                "ergebnis": ""
            },
            "TextanordnungLinks": {
                "titel": "<small class='text-muted'>Text/Textanordnung/</small>Ausrichtung",
                "beschreibung": "Linksbündiger Flattersatz ist Blocksatz vorzuziehen. Von mittelaxialem oder rechtsbündigem Satz ist abzusehen.",
                "ergebnis": ""
            },
            "Linienstaerke": {
                "titel": "<small class='text-muted'>Text/Ränder und Abstände/</small>Linienstärke",
                "beschreibung": "Linienstärke von Tabellen und Trennlinien sollen mindestens 1 Pica-Punkt bzw. 2 Pixel betragen.",
                "ergebnis": ""
            }
        }
    }
};

//
$( document ).ready(function() {
    // Schrift
    jsonDataStructure['Schrift']['inhalt']['HumanistischeGroteskschriften']['ergebnis']= validateSchriftZeichenSchriftartGrotesk();
    jsonDataStructure['Schrift']['inhalt']['KlassizistischeGroteskschriften']['ergebnis']=validateSchriftZeichenSchriftartKlassGrotesk();
    jsonDataStructure['Schrift']['inhalt']['Serifenschriften']['ergebnis']=validateSchriftZeichenSchriftartSerifen();
    jsonDataStructure['Schrift']['inhalt']['Ligaturen']['ergebnis']=validateSchriftZeichenSchriftartLigaturen();
    jsonDataStructure['Schrift']['inhalt']['KlassizistischeAntiquaschriften']['ergebnis']=validateSchriftZeichenSchriftartKlassAntiqua();
    jsonDataStructure['Schrift']['inhalt']['StrichstaerkeRegular']['ergebnis']=validateSchriftZeichenRegular()
    jsonDataStructure ['Schrift']['inhalt']['NormaleSchriftweite']['ergebnis']= validateZeichenSchriftweite();
    jsonDataStructure ['Schrift']['inhalt']['VoreingestellterZeichenabstand']['ergebnis']= validateZeichenZeichenabstand();
    jsonDataStructure ['Schrift']['inhalt']['SchreibweiseVersalien']['ergebnis']= validateZeichenVersalien();

    jsonDataStructure ['Schrift']['inhalt']['Linienstaerke']['ergebnis']= validateTextRaenderUndAbstaendeLinienstaerke();
    jsonDataStructure ['Schrift']['inhalt']['TextanordnungLinks']['ergebnis']= validateTextTextanordungAusrichtung();
    jsonDataStructure ['Schrift']['inhalt']['ZeilenlaengeMaximal']['ergebnis']= validateTextZeilelaenge();
    jsonDataStructure ['Schrift']['inhalt']['HervorhebungUnterstreichungLinks']['ergebnis']= validateHervorhebungenLinks();
    // Kontrast
    jsonDataStructure['Farben']['inhalt']['Sparsam']['ergebnis']=validateFarbenMenge();
    jsonDataStructure ['Kontrast']['inhalt']['Hintergrund']['ergebnis']=validateKontrasteHintergrund();
    jsonDataStructure ['Kontrast']['inhalt']['Ebenen']['ergebnis'] =validateKontrasteEbenen();
    jsonDataStructure ['Kontrast']['inhalt']['Alternativtext']['ergebnis'] = validateAlternativtext();

    var url = window.location.protocol + "//" + window.location.host + "/checkResult";

    $.ajax({
        url: url,
        type: 'post',
        contentType: 'application/json',
        data: JSON.stringify(jsonDataStructure)
    })
});

var globalID = 0;

// ####################################################################################################################
// ############################ Anzahl der Farben ############################################################
// ####################################################################################################################

function validateFarbenMenge(){
    result = "";

    var bgArray = new Array();
    var colorArray = new Array();

    for (let node of window.document.querySelectorAll('*')){
        for(let pseudo of ['',':before',':after']){

            let bgColor = window.getComputedStyle(node, pseudo).backgroundColor;
            let color = window.getComputedStyle(node, pseudo).color;

            if(bgArray.includes(bgColor))continue;
            bgArray.push(bgColor);

            if(colorArray.includes(color))continue;
            colorArray.push(color);
            break;
        }
    }
    result +=  "Anzahl der verwendeten Hintergrundfarben: " + bgArray.length + "</br>" + "Anzahl der verwendeten Textfarben: " + colorArray.length ;


    if (result === ""){
        return "<div class='alert alert-success'>Keine Werte zum validieren vorhanden.</div>"
    } else {
        return "<div class='alert alert-warning'>Farben sparsam verwenden und klar voneinander abgrenzen</b>: </br>" + result + "</div>";
    }
}


// ####################################################################################################################
// ################## Kontrast Ebenen ############################################################################
// ####################################################################################################################

function validateKontrasteEbenen(){
    result = "";

    var contrastArray = new Array();

    for(var node of window.document.querySelectorAll('*')) {
        for (let pseudo of ['', ':before', ':after']) {

            let backgroundColor = window.getComputedStyle(node, pseudo).backgroundColor;
            var childElements = node.children;

            if (backgroundColor == "rgba(0, 0, 0, 0)") continue;
            backgroundColor = backgroundColor.substr(4);
            backgroundColor = backgroundColor.slice(0, -1);
            var backgroundSplit = backgroundColor.split(",");

            var bgValueR = parseInt(backgroundSplit[0]);
            var bgValueG = parseInt(backgroundSplit[1]);
            var bgValueB = parseInt(backgroundSplit[2]);

            var relLumiBackgroundC = RelativeLuminance(bgValueR, bgValueG, bgValueB);

            for (let child of childElements) {
                var childBg = window.getComputedStyle(child, null).backgroundColor;

                if (childBg == "rgba(0, 0, 0, 0)") continue;
                if (backgroundColor === childBg) continue;

                childBg = childBg.substr(4);
                childBg = childBg.slice(0, -1);
                var childBgSplit = childBg.split(",");

                var childValueR = parseInt(childBgSplit[0]);
                var childValueG = parseInt(childBgSplit[1]);
                var childValueB = parseInt(childBgSplit[2]);

                var relLumiChildBg = RelativeLuminance(childValueR, childValueG, childValueB);
                var contrast = contrastRelation(relLumiBackgroundC, relLumiChildBg);

                if (contrast === 1) continue;
                if (contrastArray.includes(contrast)) continue;
                contrastArray.push(contrast);


                result += node + "-> " + " 1. Hintergund in rgb: " + backgroundColor + "</br>" + child + "-> " + "2. Hintergrund in rgb: " + childBg + "</br>" + "Kontrastverhältnis: " + contrast.toFixed(1) + " :1" + "</br>" + "</br>";

            }
            break;
        }
    }
    if (result === ""){
        return "<div class='alert alert-success'>Keine Werte zum validieren vorhanden.</div>"
    } else {
        return "<div class='alert alert-warning'>Folgende Farben wurden validiert</b>: </br>" + result + "</div>";
    }
}

// ####################################################################################################################
// ################## Konstrast Hintergrund ############################################################################
// ####################################################################################################################

function validateKontrasteHintergrund(){
    result = "";
    var contrastArray = new Array();

    for(let node of window.document.querySelectorAll('*')) {
        for (let pseudo of ['', ':before', ':after']) {


            let backgroundColor = window.getComputedStyle(node, pseudo).backgroundColor;
            let color = window.getComputedStyle(node, pseudo).color;

            if (backgroundColor === "rgba(0, 0, 0, 0)") continue;
            if (backgroundColor.match("rgba")) continue;
            if (color === "rgba(0, 0, 0, 0)") continue;
            if (color.match("rgba")) continue;

            if (backgroundColor.length != "")
                backgroundColor = backgroundColor.substr(4);{
                backgroundColor = backgroundColor.slice(0, -1);
                var backgroundSplit = backgroundColor.split(",");

                var bgValueR = parseInt(backgroundSplit[0]);
                var bgValueG = parseInt(backgroundSplit[1]);
                var bgValueB = parseInt(backgroundSplit[2]);

                var relLumiBackgroundC = RelativeLuminance(bgValueR, bgValueG, bgValueB);


            }
            if (color.length != ""){
                color = color.substr(4);
                color = color.slice(0, -1);
                var colorSplit = color.split(",");

                var cValueR = parseInt(colorSplit[0]);
                var cValueG = parseInt(colorSplit[1]);
                var cValueB = parseInt(colorSplit[2]);

                var relLumiTextColor = RelativeLuminance(cValueR, cValueG, cValueB);

            }

            let contrast = contrastRelation(relLumiBackgroundC,relLumiTextColor);
            if (contrast === 1) continue;
            if(contrastArray.includes(contrast)) continue;
            contrastArray.push(contrast);

            result +=  node + ":" + "</br>" + "Hintergrund in rgb: " + backgroundColor + "</br>" + "Textfarbe in rgb: " + color + "</br>" + "Kontrastverhältnis: " + contrast.toFixed(1) + " :1" + "</br>" + "</br>";
            break;
        }
    }

    if (result == ""){
        return "<div class='alert alert-success'>Keine Werte zum validieren vorhanden.</div>"
    } else {
        return "<div class='alert alert-warning'>Folgende Farben wurden validiert</b>: </br>" + result + "</div>";
    }
}

//#####################################################################################################################
//#################### Kontrast Rechner ###########################################################################
//#####################################################################################################################

function RelativeLuminance(r,g,b){
    let rNormalisiert = r/255; // 255 is the top color value equal to 1 for der lightest color value
    let gNormalisiert = g/255;
    let bNormalisiert = b/255;

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


function contrastRelation(firstColor, secondColor){
    let y1;
    let y2;

    if (firstColor < secondColor){
        y1 = secondColor ;
        y2 = firstColor;
    }
    else {
        y1 = firstColor;
        y2 = secondColor;
    }
    let contrastRelation = (y1 + 0.05)/(y2 + 0.05);
    return contrastRelation;

}

// ####################################################################################################################
// ######################### Bild Alternativtext ##################################################################
// ####################################################################################################################

function validateAlternativtext() {
    result = "";
    var i = 0;
    for (let node of window.document.querySelectorAll('img')){

        if (!node.alt)
            node.alt = "Hier befindet sich ein Bild ohne Alternativtext!";
        node.classList.add("validationMarker"+i);
        result += "Body-Zeile "+ lineOfCode(window.document.body.innerHTML, "validationMarker" +i) + ": " +node.alt + "</br>" + "</br>";
        node.classList.remove("validationMarker"+i);
        i++;
    }

    if (result == ""){
        return "<div class='alert alert-success'>Keine Werte zum validieren vorhanden.</div>"
    } else {
        return "<div class='alert alert-warning'>Folgende Bilder wurden validiert</b>: </br>" + result + "</div>";
    }
}
// ####################################################################################################################
// ################### Text/RaenderUndAbstaende/Linienstareke ############################################################
// ####################################################################################################################

function validateTextRaenderUndAbstaendeLinienstaerke() {
    let result = "";
    var i = 0;
    for (let node of window.document.body.querySelectorAll('*')) {
        if (node.nodeName === 'TABLE'){
            let tmpCssBorderTop = window.getComputedStyle(node, null).borderTopWidth.replace('px', '')
            let tmpCssBorderBottom = window.getComputedStyle(node, null).borderBottomWidth.replace('px', '')
            let tmpCssBorderLeft = window.getComputedStyle(node, null).borderLeftWidth.replace('px', '')
            let tmpCssBorderRight = window.getComputedStyle(node, null).borderRightWidth.replace('px', '')

            if (parseInt(tmpCssBorderBottom, 10) < 2  || parseInt(tmpCssBorderTop, 10) < 2 || parseInt(tmpCssBorderLeft, 10) < 2 || parseInt(tmpCssBorderRight, 10) < 2){
                    node.classList.add("validationMarker"+i);
                    result += "Body-Zeile: " + lineOfCode(window.document.body.innerHTML, "validationMarker"+i)+", "+ node.nodeName +" -> Table-Border:" + "Right: "+tmpCssBorderRight+ ", Left: " +tmpCssBorderLeft+ ", Top: " + tmpCssBorderTop + ", Bottom: " +tmpCssBorderBottom +"</br>";
                    node.classList.remove("validationMarker"+i);
                    i++;
            }
        }

    }
    globalID++;
    var label = '<label class="unsichtbar" for="result'+globalID+'\">Ergebnis Validation:</label>'
    if (result === ""){
        return label+"<div id='result"+globalID+"' class='alert alert-success'>Validation erfolgreich.</div>"
    } else {
        return label+"<div class='alert alert-warning'>Es wurden zu geringe Tabellen-Ränder erkannt, ggf. die Linienstärke auf 2px erhöhen: </br>" + result + "</div>";
    }
}

// ####################################################################################################################
// ################### Text/Textanordung/Ausrichtung ##################################################################
// ####################################################################################################################

function validateTextTextanordungAusrichtung() {
    let result = '';
    var i = 0;
    var lastNode = null;
    for (let node of window.document.body.querySelectorAll('*')) {
        if (node.innerText && node.innerText.length < 30) continue;
        if (lastNode && node.innerText === lastNode.innerText) continue
        lastNode = node
        if (!node.innerText) continue;

        let tmpCssTxtAlgin = window.getComputedStyle(node, null).textAlign

        if (tmpCssTxtAlgin && (tmpCssTxtAlgin === 'right' || tmpCssTxtAlgin === 'center' || tmpCssTxtAlgin === 'justify' || tmpCssTxtAlgin === 'end')) {
            node.classList.add("validationMarker" + i);
            result += "Body-Zeile: " + lineOfCode(window.document.body.innerHTML, "validationMarker") + ", " + node.nodeName + i + " -> text-align: " + tmpCssTxtAlgin + "-> "+ node.innerText.substring(0, 60) + " [...]</br>";
            node.classList.remove("validationMarker" + i);
            i++;
        }
    }
    globalID++;
    var label = '<label class="unsichtbar" for="result'+globalID+'\">Ergebnis Validation:</label>'
    if (result === "") {
        return label+"<div id='result"+globalID+"' class='alert alert-success'>Validation erfolgreich.</div>"
    } else {
        return label+"<div id='result"+globalID+"' class='alert alert-warning'>Es wurde abweichender Textsatz erkannt, ggf. den Text linksbündig setzen: </br>" + result + "</div>";
    }
}

// ####################################################################################################################
// ################### Text/Zeilenlänge ###############################################################################
// ####################################################################################################################

function validateTextZeilelaenge() {
    let result = "";
    var i = 0;
    for (let node of window.document.body.querySelectorAll('*')) {
        if (!node.innerText) continue;
        if (node.innerText.trim().length < 80) continue;

        var charCount = 0;
        var text = node.innerText.trim();
        for (var i = 0; i < text.length; i++) {
            if (text[i] === '\n'){
                charCount = 0;
            }
            charCount++;

            if (charCount >= 80){
                node.classList.add("validationMarker"+i);
                result += "Body-Zeile: " + lineOfCode(window.document.body.innerHTML, "validationMarker"+i)+", "+ node.nodeName +" -> " +text+"</br>";
                node.classList.remove("validationMarker"+i);
                i++;
                break
                return line;
            }
        }
    }
    globalID++;
    var label = '<label class="unsichtbar" for="result'+globalID+'\">Ergebnis Validation:</label>'
    if (result === ""){
        return label+"<div id='result"+globalID+"' class='alert alert-success'>Validation erfolgreich.</div>"
    } else {
        return label+"<div class='alert alert-warning'>Es wurde eine Text-Zeile mit mehr als 80 Zeichen erkannt, ggf. den Text anpassen: </br>" + result.substring(0,70) + " [...]</div>";
    }
}


// ####################################################################################################################
// ################### Zeichen/Hervorhebungen/Links####################################################################
// ####################################################################################################################

function validateHervorhebungenLinks() {
    let result = "";
    var i = 0;
    for (let node of window.document.body.querySelectorAll('*')) {
        if (!node.textContent) continue;
        if (node.nodeName !== 'LINK'){
            let tmpCssTexDecoration = window.getComputedStyle(node, null).textDecoration

            if (tmpCssTexDecoration === 'underline' || node.nodeName === 'u'){
                node.classList.add("validationMarker"+i);
                result += "Body-Zeile: " + lineOfCode(window.document.body.innerHTML, "validationMarker"+i)+", "+ node.nodeName +" -> " + node.innerText + "</br>";
                node.classList.remove("validationMarker"+i);
                i++;
            }
        }
    }
    globalID++;
    var label = '<label class="unsichtbar" for="result'+globalID+'\">Ergebnis Validation:</label>'
    if (result === ""){
        return label+"<div id='result"+globalID+"' class='alert alert-success'>Validation erfolgreich.</div>"
    } else {
        return label+"<div class='alert alert-warning'>Es wurde unterstrichener Text ohne Verlinkung erkannt, ggf. die Unterstreichung entfernen: </br>" + result + "</div>";
    }
}


// ####################################################################################################################
// ################### Zeichen/Schreibweise/Versalien #################################################################
// ####################################################################################################################

function validateZeichenVersalien() {
    let result = "";
    var i = 0;
    for (let node of window.document.body.querySelectorAll('*')) {
        if (!node.textContent) continue;
        if (!node.style) continue;
        for (let pseudo of ['', ':before', ':after']) {
            let text = node.textContent
            if (text.length > 1 && text.trim() > 1 && text === text.toUpperCase()){
                node.classList.add("validationMarker"+i);
                result += "Body-Zeile: " + lineOfCode(window.document.body.innerHTML, "validationMarker"+i)+", "+ node.nodeName +" ->" +text+"</br>";
                node.classList.remove("validationMarker"+i);
                i++;
                break;
            }
        }
    }
    globalID++;
    var label = '<label class="unsichtbar" for="result'+globalID+'\">Ergebnis Validation:</label>'
    if (result === ""){
        return label+"<div id='result"+globalID+"' class='alert alert-success'>Validation erfolgreich.</div>"
    } else {
        return label+"<div class='alert alert-warning'>Es wurden Versalien erkannt, ggf. den Text auf gemischte Groß- und Kleinschreibung setzen: </br>" + result + "</div>";
    }
}

// ####################################################################################################################
// ################### Zeichen/Zeichenbezogene Empfehlung/Zeichenabstand ##############################################
// ####################################################################################################################

function validateZeichenZeichenabstand() {
    let result = "";
    var i = 0;
    for (let node of window.document.body.querySelectorAll('*')) {
        if (!node.textContent) continue;
        if (!node.style) continue;
        for (let pseudo of ['', ':before', ':after']) {
            let tmpCssValue = window.getComputedStyle(node, pseudo).letterSpacing +"";
            if (tmpCssValue && tmpCssValue !== "" && tmpCssValue !== 'normal'){
                node.classList.add("validationMarker"+i);
                result += "Body-Zeile: " + lineOfCode(window.document.body.innerHTML, "validationMarker"+i)+", "+ node.nodeName +" ->" +tmpCssValue+"</br>";
                node.classList.remove("validationMarker"+i);
                i++;
                break;
            }
        }
    }
    globalID++;
    var label = '<label class="unsichtbar" for="result'+globalID+'\">Ergebnis Validation:</label>'
    if (result === ""){
        return label+"<div id='result"+globalID+"' class='alert alert-success'>Validation erfolgreich.</div>"
    } else {
        return label+"<div class='alert alert-warning'>Es wurden veränderte Zeichenabstände erkannt, ggf. auf 'normal' setzen: </br>" + result + "</div>";
    }
}

// ####################################################################################################################
// ################### Zeichen/Schriftweite/Normale Schriftweiten######################################################
// ####################################################################################################################

function validateZeichenSchriftweite() {
    let result = "";
    var i = 0;
    for (let node of window.document.body.querySelectorAll('*')) {
        if (!node.textContent) continue;
        if (!node.style) continue;
        for (let pseudo of ['', ':before', ':after']) {
            let tmpCssValue = window.getComputedStyle(node, pseudo).fontStretch +"";
            if (tmpCssValue && tmpCssValue !== "" && tmpCssValue !== 'normal' && tmpCssValue !== 'unset'  && tmpCssValue !== '100%'){
                node.classList.add("validationMarker"+i);
                result += "Body-Zeile: " + lineOfCode(window.document.body.innerHTML, "validationMarker"+i)+", "+ node.nodeName +" ->" +tmpCssValue+"</br>";
                node.classList.remove("validationMarker"+i);
                i++;
                break;
            }
        }
    }
    globalID++;
    var label = '<label class="unsichtbar" for="result'+globalID+'\">Ergebnis Validation:</label>'
    if (result === ""){
        return label+"<div id='result"+globalID+"' class='alert alert-success'>Validation erfolgreich.</div>"
    } else {
        return label+"<div class='alert alert-warning'>Es wurden breite und/oder schmale Schriftarten erkannt, ggf. ersetzen: </br>" + result + "</div>";
    }
}

// ####################################################################################################################
// ################### Zeichen Schriftart Klass. Antiqua###############################################################
// ####################################################################################################################

function validateSchriftZeichenSchriftartKlassAntiqua () {
    let result = "";
    var i = 0;
    for (let node of window.document.body.querySelectorAll('*')) {
        if (!node.textContent) continue;
        if (!node.style) continue;
        for (let pseudo of ['', ':before', ':after']) {
            let fontFamily = window.getComputedStyle(node, pseudo).fontFamily +"";
            if (fontFamily && fontFamily !== ""){
                if (fontFamily.includes("Antiqua")){
                    node.classList.add("validationMarker"+i);
                    result += "Body-Zeile: " + lineOfCode(window.document.body.innerHTML, "validationMarker"+i)+", "+ node.nodeName +" ->" +fontFamily+"</br>";
                    node.classList.remove("validationMarker"+i);
                    i++;
                    break;
                }
            }
        }
    }
    globalID++;
    var label = '<label class="unsichtbar" for="result'+globalID+'\">Ergebnis Validation:</label>'
    if (result === ""){
        return label+"<div id='result"+globalID+"' class='alert alert-success'>Validation erfolgreich.</div>"
    } else {
        return label+"<div class='alert alert-warning'>Es wurden Klassizistische Antiquaschriften Schriften erkannt. Evtl prüfen und durch Humanistische Groteskschriften ersetzen: </br>" + result + "</div>";
    }
}


// ####################################################################################################################
// ################### Zeichen Schriftart Ligaturen ###################################################################
// ####################################################################################################################

function validateSchriftZeichenSchriftartLigaturen() {
    let result = "";
    var i = 0;
    for (let node of window.document.body.querySelectorAll('*')) {
        if (!node.textContent) continue;
        let text = node.textContent;
        if (text.includes("Æ") || text.includes("æ") || text.includes("Œ") || text.includes("œ") || text.includes("Ĳ") || text.includes("ĳ")){
            node.classList.add("validationMarker"+i);
            result += "Body-Zeile: " + lineOfCode(window.document.body.innerHTML, "validationMarker"+i)+", "+ node.nodeName +" ->" +fontFamily+"</br>";
            node.classList.remove("validationMarker"+i);
            i++;
            break;
        }
    }
    globalID++;
    var label = '<label class="unsichtbar" for="result'+globalID+'\">Ergebnis Validation:</label>'
    if (result === ""){
        return label+"<div id='result"+globalID+"' class='alert alert-success'>Validation erfolgreich.</div>"
    } else {
        return label+"<div class='alert alert-warning'>Es wurden Ligaturen erkannt: </br>" + result + "</div>";
    }
}

// ####################################################################################################################
// ################### Zeichen Schriftart Serifen #####################################################################
// ####################################################################################################################

function validateSchriftZeichenSchriftartSerifen () {
    result = "";
    var i = 0;
    for (let node of window.document.body.querySelectorAll('*')) {
        if (!node.textContent) continue;
        if (!node.style) continue;

        for (let pseudo of ['', ':before', ':after']) {
            let fontFamily = window.getComputedStyle(node, pseudo).fontFamily +"";
            if (fontFamily && fontFamily !== ""){
                if (fontFamily.includes("serif") && !fontFamily.includes("-serif")){
                    node.classList.add("validationMarker"+i);
                    result += "Zeile Body: " + lineOfCode(window.document.body.innerHTML, "validationMarker"+i)+", "+ node.nodeName + ": " +fontFamily+"</br>";
                    node.classList.remove("validationMarker"+i);
                    i++;
                    break;
                }
            }
        }
    }
    globalID++;
    var label = '<label class="unsichtbar" for="result'+globalID+'\">Ergebnis Validation:</label>'
    if (result === ""){
        return label+"<div id='result"+globalID+"' class='alert alert-success'>Validation erfolgreich.</div>"
    } else {
        return label+"<div class='alert alert-warning'>Es wurden Schriften mit Serifen erkannt. Falls die Serifen beibehalten werden sollen, kann als Alternative Renaissance-Antiqua verwendet werden: </br>" + result + "</div>";
    }
}

// ####################################################################################################################
// ################### Zeichen Schriftart KlasGrotesk ##################################################################
// ####################################################################################################################

function validateSchriftZeichenSchriftartKlassGrotesk () {
    result = "";
    var i = 0;
    for (let node of window.document.body.querySelectorAll('*')) {
        if (!node.textContent) continue;
        if (!node.style) continue;

        for (let pseudo of ['', ':before', ':after']) {
            let fontFamily = window.getComputedStyle(node, pseudo).fontFamily +"";
            if (fontFamily && fontFamily !== ""){
                if (fontFamily.includes("Helvetica") || fontFamily.includes("Arial")){
                    node.classList.add("validationMarker"+i);
                    result += "Body-Zeile: " + lineOfCode(window.document.body.innerHTML, "validationMarker"+i)+", "+ node.nodeName +" ->" +fontFamily+"</br>";
                    node.classList.remove("validationMarker"+i);
                    i++;
                    break;
                }
            }
        }
    }
    globalID++;
    var label = '<label class="unsichtbar" for="result'+globalID+'\">Ergebnis Validation:</label>'
    if (result === ""){
        return label+"<div id='result"+globalID+"' class='alert alert-success'>Validation erfolgreich.</div>"
    } else {
        return label+"<div class='alert alert-warning'>Es wurden klassizistische groteskschriften erkannt. Bitte prüfen Sie diese an folgenden Stellen und ersetzten sie ggf. Durch eine humanistische Groteskschrift: </br>" + result + "</div>";
    }
}

// ####################################################################################################################
// ################### Zeichen Schriftart Grotesk ####################################################################
// ####################################################################################################################

function validateSchriftZeichenSchriftartGrotesk() {
    result = "";
    var i = 0;
    for (let node of window.document.body.querySelectorAll('*')) {
        if (!node.textContent) continue;
        if (!node.style) continue;

        for (let pseudo of ['', ':before', ':after']) {
            let fontFamily = window.getComputedStyle(node, pseudo).fontFamily +"";
            if (fontFamily && fontFamily !== ""){
                if (!fontFamily.includes("sans-serif") && !fontFamily.includes("inherit") && !fontFamily.includes("-webkit-small-control") && !fontFamily.includes("monospace")){
                    node.classList.add("validationMarker"+i);
                    result += "Body-Zeile: " + lineOfCode(window.document.body.innerHTML, "validationMarker"+i)+", "+ node.nodeName +" ->" +fontFamily+"</br>";
                    node.classList.remove("validationMarker"+i);
                    i++;
                    break;
                }
            }
        }
    }
    globalID++;
    var label = '<label class="unsichtbar" for="result'+globalID+'\">Ergebnis Validation:</label>'
    if (result === ""){
        return label+"<div id='result"+globalID+"' class='alert alert-success'>Validation erfolgreich.</div>"
    } else {
        return label+"<div class='alert alert-warning'>Es wurden abweichende Schriften erkannt. Ggf. prüfen:</b>: </br>" + result + "</div>";
    }
}


// ####################################################################################################################
// ################### Zeichen Strichstärke Regular ####################################################################
// ####################################################################################################################

function validateSchriftZeichenRegular() {
    result = "";
    var i = 0;
    for (let node of window.document.body.querySelectorAll('*')) {
        if (!node.textContent) continue;
        if (!node.style) continue;

        for (let pseudo of ['', ':before', ':after']) {
            let fontWeight = window.getComputedStyle(node, pseudo).fontWeight +"";
            if (fontWeight && fontWeight !== ""){
                if (!fontWeight.includes("normal") && !fontWeight.includes("400")){
                    node.classList.add("validationMarker"+i);
                    result += "Body-Zeile: " + lineOfCode(window.document.body.innerHTML, "validationMarker"+i)+", "+ node.nodeName +" ->" +fontWeight+"</br>";
                    node.classList.remove("validationMarker"+i);
                    i++;
                    break;
                }
            }
        }
    }
    globalID++;
    var label = '<label class="unsichtbar" for="result'+globalID+'\">Ergebnis Validation:</label>'
    if (result === ""){
        return label+"<div id='result"+globalID+"' class='alert alert-success'>Validation erfolgreich.</div>"
    } else {
        return label+"<div class='alert alert-warning'>Es wurden abweichende Schriftstärken erkannt. Ggf. prüfen: </br>" + result + "</div>";
    }
}

// ####################################################################################################################
// ################### Hilfsfunktionen ################################################################################
// ####################################################################################################################

function lineOfCode(text, substring){
    var line = 0, matchedChars = 0;

    for (var i = 0; i < text.length; i++) {
        text[i] === substring[matchedChars] ? matchedChars++ : matchedChars = 0;

        if (text[i] === '\n'){
            line++;
        }

        if (matchedChars === substring.length){
            return line;
        }
    }

    return  -1;
}
