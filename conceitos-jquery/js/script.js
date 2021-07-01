$(()=>{

    /* Formas de selecionar a class .filha
    $('.filha');
    $('.site').find('.filha');
    $('.site').find('.topo').find('.filha'); */

    //$('.filha').parent() // Seleciona o elemento HTML que esta antes da class .filha = .subtopo

    //$('.irmao').closest('.topo'); // Acha o elemento que estiver mais perto e que tenha a classe .topo

     //$('.irmao').closest('.site').find('.conteudo'); // Retorna para a div que engloba todo o site para selecionar a div que estiver fora do contexto da primeira selecionada

     // OBS: Preferir usar closest
});