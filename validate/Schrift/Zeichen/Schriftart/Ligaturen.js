var lineOfCode = require('../../../lineOfCode');

exports.validate = function(dom) {
    var result = fonts(dom);
    if (result === ""){
        return "<div class='alert alert-success'>Validation erfolgreich.</div>"
    } else {
        return "<div class='alert alert-warning'>Es wurden Ligaturen erkannt.</b>: </br>" + result + "</div>";
    }
};

function fonts (dom) {
    result = "";
    var i = 0;
    for (let node of dom.window.document.querySelectorAll('*')) {
        if (!node.textContent) continue;
        let text = node.textContent;
        if (text.includes("Æ") || text.includes("æ") || text.includes("Œ") || text.includes("œ") || text.includes("Ĳ") || text.includes("ĳ")){
            node.classList.add("validationMarker"+i);
            result += "Zeile " + lineOfCode.lineOfCode(dom.window.document.documentElement.innerHTML, "validationMarker"+i) + ": " +text+"</br>";
            i++;
            break;
        }
    }
    return result;
}
