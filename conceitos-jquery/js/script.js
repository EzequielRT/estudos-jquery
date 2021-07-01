$(()=>{

    // Setando atritubutos
    $('a').attr('href', 'http://google.com.br'); 
    $('img').attr('width', '200');
    $('img').attr('border', '5');

    // Retorna o valor que esta setado no elemento
    console.log($('img').attr('border')); // = 5

});

