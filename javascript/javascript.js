$(document).ready(function() {
    $('#hamburger-menu').click(function(){
        $('#mobile-nav').fadeIn();
    });
    $('#close-menu').click(function(){
        $('#mobile-nav').fadeOut();
    })
});