$( document ).ready(function() {
    $("#btnGenerate").on('click', () => {
        let textimput = $("#colorinput")[0].value;
        if(isColor(textimput)){
            $("#invalidColor").hide();
            $("#btnGenerate").after(`<h1 style="background-color: ${textimput}">${textimput}</h1>`);
        }
        else{
            $("#invalidColor").show();
        }

    });
});

function isColor(strColor){
    var s = new Option().style;
    s.color = strColor;
    return s.color == strColor;
}