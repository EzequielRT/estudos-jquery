$(function () {
    
    $('#nome, #email').bind('focus', function(){
        $(this).addClass('focado');
    });

    $('#nome, #email').bind('blur', function(){
        $(this).removeClass('focado');
    });

});