function background (dom){
    result = "";
    var i = 0;
    for (let node of dom.window.document.querySelectorAll('*')){ //querySelectorAll to get Elements from css code
        if (!node.color) continue
        if (!node.backgroundColor) continue

        for (let pseudo of ['',':before',':after']){
            node.classList.add("validationMarker"+i);
            result += "Zeile " + lineOfCode.lineOfCode(dom.window.document.documentElement.innerHTML, "validationMarker"+i) + ": " +"</br>";
            i++;
            break;
        }

    }
    return result;
}