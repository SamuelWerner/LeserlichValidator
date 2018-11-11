var lineOfCode = require('../../../lineOfCode');

exports.validateBackground = function(dom) {
    var result = background(dom);
    if (result == ""){
        return "<div class='alert alert-success'>Validation erfolgreich.</div>"
    } else {
        return "<div class='alert alert-warning'>Validation fehlgeschlagen</b>: </br>" + result + "</div>";
    }

}
function background (dom){
    result = "";

    return result;
}