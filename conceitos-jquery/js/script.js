$(()=>{

    $('input').attr('data-idade', 90); // Armazena dado no elemento HTML
    $('input').data('idade', 85) // Armazena dado na memoria do jQuery
    
    $('input').data('caracteres', $('input').val().length); // Salva a qtd de caracteres que tem na string

});