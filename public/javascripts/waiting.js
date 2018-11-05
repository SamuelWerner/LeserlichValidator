checkUpdates();

function checkUpdates(){
    setTimeout (function () {
        $.ajax({
            url: "/checkResult",
            context: document.body
        }).done(function(result) {
            if (result !== 'waiting'){
                document.write(result);
            }

        });
        checkUpdates();
    }, 3000);
}

