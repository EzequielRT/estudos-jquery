$(function() {
    $('button').click(function(){
        /*if($(this).hasClass('fundovermelho')) {
            $(this).removeClass('fundovermelho');
        } else {
            $(this).addClass('fundovermelho');
        };*/

        $(this).toggleClass('fundovermelho'); // Faz a mesma logica que a realizada acima
    });

    $('button').mouseover(function() {
        $(this).css('font-weight', 'bold');
    });

    $('button').mouseout(function() {
        $(this).css('font-weight', 'normal');
    });
});