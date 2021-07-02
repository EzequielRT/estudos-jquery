$(()=>{
    $('h1').addClass('fundovermelho'); // Adiciona class
    //$('h1').removeClass('fundovermelho'); // Remove class

    if( $('h1').hasClass('fundovermelho') ) { // Verifica se a tag possui a classe, retorna true ou false
        alert("Tem sim");
    } else { 
        alert("Tem não");
    }
});