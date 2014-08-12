$(document).ready(function(){
    
    //Slide toggle navigation bar to show/hide when clicking toggle button
    $('.toggle-button').click(function(){
        $('nav').slideToggle();
    });

    //Menu from the side
    $('body').addClass('js');

    var $menu = $('#menu'),
    $menulink = $('.menu-link'),
    $wrap = $('body');

    $menulink.click(function() {
        $menulink.toggleClass('active');
        $wrap.toggleClass('active');
        return false;
    });

});

// if ($('nav').is(':visible')) {
//     alert('visible');
// }
