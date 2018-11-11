function background (dom){
    var i = 0;
    for (let node of dom.window.document.querySelectorAll('*')){ //querySelectorAll to get Elements from css code
        if (node.color){
            console.log(node);
        }

    }
}