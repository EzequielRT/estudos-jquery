$(()=>{

    //$('#teste').text('Agora isto é um texto'); // Altera elemento HTML e adc texto
    $('#teste').find('img').width(200);
    $('input').val('Teste'); // Altera o value do elemento
    $('input').before('<div>Adiciona conteudo antes do elemento</div>');
    $('input').after('<br><img src="http://www.google.com.br/google.jpg">'); // Adiciona conteudo apos o elemento    
    $('ul').prepend("<li>Item 0</li>"); // Adiciona conteudo ao HTML sem apagar o anterior - antes
    $('ul').append("<li>Item 5</li>"); // Adiciona conteudo ao HTML sem apagar o anterior - depois

});
