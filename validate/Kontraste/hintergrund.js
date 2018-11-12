exports.validateBackground = function(dom) {
    var result = background(dom);
    if (result == ""){
        return "<div class='alert alert-success'>Validation erfolgreich.</div>"
    } else {
        return "<div class='alert alert-warning'>Validation fehlgeschlagen</b>: </br>" + result + "</div>";
    }

}

function background (dom){
    var result = "";
    for (let node of dom.window.document.querySelectorAll('*')){
        if (node.color)
            result = node.color;
    }
    return result;
}