$(function () {
    
    $('#form').bind('submit', function(e){
        e.preventDefault();
        
        var txt = $(this).serialize(); // Formata os dados para envio

        // Funcao que faz requisicoes Ajax
        $.ajax({  
            type:'POST',
            url:'ajax.php',
            data:txt,  // Informacoes que estao sendo enviadas
            dataType:'json', // Seta que as informacoes recebidas serao no formato json
            success:function(json){
                if(json.status == 'ok') {
                    alert("Deu certo!");
                } else {
                    alert("Deu errado!");
                }
            }
        }); 
    });

});