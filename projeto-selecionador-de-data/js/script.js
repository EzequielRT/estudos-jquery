$(function () {

    var horaescolhaCampo; 
    
    $('input').bind('focus', function(){

        var pos = $(this).offset();
        var width = $(this).width();

        $('.horaescolha').css('left', pos.left + width + 9);
        $('.horaescolha').css('top', pos.top);
        $('.horaescolha').show();

        horaescolha = $(this);

    });

    $('input').bind('blur', function(){

        setTimeout(function(){
            $('.horaescolha').hide();
        }, 200);

    });

    $('.horaescolha button').bind('click', function(){

        var hora = $(this).html();
        horaescolha.val(hora);

    });

});