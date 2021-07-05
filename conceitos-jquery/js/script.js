$(function () {
    
    $('.botao').bind('click', function(){
        $('.div').slideUp('fast'); // Faz com que o slide deslize para cima
        $('.div').slideDown('slow'); // Faz com que o slide deslize para baixo

        $('.div').slideToggle('fast'); // Pode aplicar os dois efeitos dependendo de como esta o elemento
    });

});