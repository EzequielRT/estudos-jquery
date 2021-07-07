$(function () {
    
    $('#form').bind('submit', function(e){
        e.preventDefault();
        
        var txt = $(this).serialize(); // Formata os dados para envio
        console.log(txt);

        // Funcao que faz requisicoes Ajax
        $.ajax({  
            type:'POST',
            url:'ajax.php',
            data:txt,  // Informacoes que estao sendo enviadas
            success:function(resultado){
                $('.div').html("Resultado: "+resultado);
            },
            error:function(){
                alert("Ocorreu um erro!");
            }
        }); 
    });

});