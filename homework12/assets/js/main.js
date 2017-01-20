$(document).ready(function() {

    $("img, a").on("dragstart", function(event) { event.preventDefault(); });

    $('.flexslider').flexslider({
        controlNav: false,
        animation: "slide",
    });

    $('.menu-toggle').click(function() {
        $('.main-navlist').slideToggle( 'fast' );
        if ($(this).hasClass('icon-dot-3')) {
            $(this).removeClass('icon-dot-3').addClass('icon-dot-3');
        } else {
            $(this).removeClass('icon-dot-3').addClass('icon-dot-3');
        }
    });

    $('.about-toggle').click(function() {
        $('.about-navlist').slideToggle( 'fast' );
        if ($(this).hasClass('icon-dot-3')) {
            $(this).removeClass('icon-dot-3').addClass('icon-dot-3');
        } else {
            $(this).removeClass('icon-dot-3').addClass('icon-dot-3');
        }
    });

    $( window ).resize(function() {
        if ($(document).width() < 1200) {
            $('.main-navlist').css('display','none');
            $('.about-navlist').css('display','none');
        }
        if ($(document).width() > 1200) {
            $('.main-navlist').css('display', 'inline-block');
            $('.about-navlist').css('display', 'inline-block');
        }
    });
    for (i = 0; i < 99; i++) {
        var paragraph = $('.clamp')[i];
        $clamp(paragraph, {clamp: 2, useNativeClamp: false, animate: true});
    }
});