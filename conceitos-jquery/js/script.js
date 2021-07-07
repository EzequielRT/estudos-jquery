$(function () {
    
    $('#btn1').bind('click', function(){
        $('.div').animate({
            'margin-left':"+=50px"
        }, 500);
    });

    $('#btn2').bind('click', function(){
        $('.div').animate({
            'margin-left':"-=50px"
        }, 500);
    });

});