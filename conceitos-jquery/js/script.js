$(function () {
    
    $('#form').bind('submit', function (e){
        e.preventDefault();

        console.log("O formulário foi submitado!")
    });

    $('#nome').bind('select', function(){
        console.log("Algo foi selecionado!")
    })

});