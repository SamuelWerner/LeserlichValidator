var lineOfCode = require('../../../lineOfCode');

exports.validate = function(dom) {
    var result = fonts(dom);
    if (result == ""){
        return "<div class='alert alert-success'>Validation erfolgreich.</div>"
    } else {
        return "<div class='alert alert-warning'>Validation fehlgeschlagen</b>: </br>" + result + "</div>";
    }

}

function fonts (dom) {
    result = "";
    let fonts = []
    var i = 0;
    for (let node of dom.window.document.querySelectorAll('*')) {
        if (!node.textContent) continue
        if (!node.style) continue

        for (let pseudo of ['', ':before', ':after']) {

            let fontFamily = dom.window.getComputedStyle(node, pseudo).fontFamily +"";
            console.log(fontFamily)

            if (fontFamily && fontFamily !== ""){
                if (!fontFamily.includes("sans-serif") && !fontFamily.includes("inherit")){
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