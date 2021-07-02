    /*
    var valor = $('#algo').html();
    valor = $.trim(valor);  // Remove os espaços do elemento
    */

    var valor = $.trim($('#algo').html()); // Faz a msm coisa

    $('li').each(function () { // Itera elementos HTML 
        alert($(this).html());
    })