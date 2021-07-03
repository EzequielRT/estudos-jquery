$(function () {

    // Adicionando varios eventos ao mesmo elemento
    $('button').bind('click',
        function () {
            alert("Clicou!");
    });

    $('button').bind('mouseover', function () {
        $(this).addClass('fundovermelho');
    });

    $('button').bind('mouseout', function () {
        $(this).removeClass('fundovermelho');
    });

});