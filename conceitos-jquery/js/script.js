$(function () {
    
    $('button').click(function(){

        $.get("teste.html", function (txt){
            $('.div').html(txt);
        });

    });

});