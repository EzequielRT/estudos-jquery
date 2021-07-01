var div = document.getElementById('div'); // Seleciona elemento HTML com JS
//var div = $('div'); // Seleciona elemento HTML com jQuery
$('div').html("Novo texto"); // Aplica funcoes do jQuery no elemento selecionado 
//$(document.getElementById('div')).html('Novo em folha'); // pode ser feito desta maneira tbm


/* Duas maneiras de selecionar o 2º item da lista
$('li:eq(1)')
$('li').eq(1) */

var segundoItem = $('li').eq(1);
segundoItem.html("Item segundo");