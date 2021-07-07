$(function () {
    
    $('button').click(function(){

        $.post("teste.html", function (txt){
            $('.div').html(txt);
        });

    });

});