$(function () {
    
    $('.div').hide(); // Aplica css display none no elemento
    $('.div').show(); // Faz com que o elemento apareca

    $('.div').hide('slow'); // Aplica css display none no elemento com parametro devagar
    $('.div').show('slow'); // Faz com que o elemento apareca com parametro devagar


    // Se o elemento esta visivel ele aplica o contrario e vice-versa
    $('.div').toggle('fast'); 
    $('.div').toggle('fast');

});