$(function () {

    // 
    $('#btn1').bind('click', function () {
        $('#btn2').trigger('click');
    });

    $('#btn2').bind('click', function () {
        alert("Clicou no botão 2");
    });

});