$(function () {
    
    $('#div').bind('scroll', function(){
        console.log("Scrollou!");
        $(this).css('background-color', 'green');
    });

});