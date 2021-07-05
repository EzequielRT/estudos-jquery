$(function () {
    
    $('.botao').bind('mouseover', function (){
        $(this).addClass('botao_emcima')
    });

    $('.botao').bind('mouseout', function (){
        $(this).removeClass('botao_emcima')
    });

});