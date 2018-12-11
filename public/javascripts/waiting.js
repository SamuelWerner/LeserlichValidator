checkResult();

function checkResult(){
    setTimeout (function () {
        $('#waitingDot').append('.');
        $.ajax({
            url: "/checkResult",
            context: document.body
        }).done(function(result) {
            if (result !== 'waiting'){
                document.write(result);
                console.clear()
            } else {
                checkResult();
            }
        });
    }, 3000);
}

