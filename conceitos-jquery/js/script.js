function eventoDoBotao(e) {
    e.preventDefault();
    alert(e.type);
}

$(function () {
    
    $('#botao').bind('click', eventoDoBotao); 
    $('#botao').bind('click', function(){
        var txt = $('#nome').val();
        alert(txt);       
        $('#botao').bind('mouseout', eventoDoBotao);
    });

});