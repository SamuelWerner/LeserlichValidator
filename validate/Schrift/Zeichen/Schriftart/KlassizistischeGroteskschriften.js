var lineOfCode = require('../../../lineOfCode');

exports.validate = function(dom) {
    var result = fonts(dom);
    if (result === ""){
        return "<div class='alert alert-success'>Validation erfolgreich.</div>"
    } else {
        return "<div class='alert alert-warning'>Es wurden Klassizistische Groteskschriften Schriften erkannt. Evtl prüfen und durch Humanistische Groteskschriften ersetzen:</b>: </br>" + result + "</div>";
    }
};

function fonts (dom) {
    result = "";
    var i = 0;
    for (let node of dom.window.document.querySelectorAll('*')) {
        if (!node.textContent) continue;
        if (!node.style) continue;

        for (let pseudo of ['', ':before', ':after']) {
            let fontFamily = dom.window.getComputedStyle(node, pseudo).fontFamily +"";
            if (fontFamily && fontFamily !== ""){
                if (fontFamily.includes("Helvetica") || fontFamily.includes("Arial")){
                    node.classList.add("validationMarker"+i);
                    result += "Zeile " + lineOfCode.lineOfCode(dom.window.document.documentElement.innerHTML, "validationMarker"+i) + ": " +fontFamily+"</br>";
                    i++;
                    break;
                }
            }
        }
    }
    return result;
}
