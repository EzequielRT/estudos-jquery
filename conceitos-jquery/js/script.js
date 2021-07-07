$(function () {
    
    $('#form').bind('submit', function(e){
        e.preventDefault();
        
        var txt = $(this).serialize(); // Formata os dados para envio
        console.log(txt);
    });

});