$(function () {
    
    $('.botao').bind('click', function(){
        $('.div').animate({
            'margin-left':'100px',
            'margin-top':'20px',
            'width':'500px',
            'border-radius':'75px'
        }, {
            duration:1500,
            start:function(){
                console.log("Animação começou!");
            },
            complete:function(){
                console.log("Animação finalizada!");
            },
            step:function(){
                console.log("Nova etapa...");
            }
        });
    });

});