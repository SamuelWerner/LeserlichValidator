exports.lineOfCode = function(text, substring){
    var line = 0, matchedChars = 0;

    for (var i = 0; i < text.length; i++) {
        text[i] === substring[matchedChars] ? matchedChars++ : matchedChars = 0;

        if (text[i] === '\n'){
            line++;
        }

        if (matchedChars === substring.length){
            return line;
        }
    }

    return  -1;
}