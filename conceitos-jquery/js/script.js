$(function () {
    
    $('.botao').bind('mousedown', function (){
        console.log("Apertou o mouse.")
    });

    $('.botao').bind('mouseup', function (){
        console.log("Soltou o mouse.")
    });

});