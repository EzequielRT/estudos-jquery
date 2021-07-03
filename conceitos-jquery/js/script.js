$(function () {
    
    $('#nome').bind('keydown', function(){
        console.log("Uma tecla foi apertada!");
    });

    $('#nome').bind('keyup', function(){
        console.log("Uma tecla foi soltada!");
    });

});