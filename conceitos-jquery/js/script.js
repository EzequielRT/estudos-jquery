$(function() {
    
    // Adiciona evento de clique
    $('button').bind('click',
        function() { $(this).toggleClass('fundovermelho') } 
    );

    // Remove evento de clique
    $('button').unbind('click');

});