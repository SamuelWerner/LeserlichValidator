checkResult();

function checkResult(){
    setTimeout (function () {
        $.ajax({
            url: "/checkResult",
            context: document.body
        }).done(function(result) {
            if (result !== 'waiting'){
                document.write(result);
            } else {
                checkResult();
            }
        });
    }, 4000);
}

