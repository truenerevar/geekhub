$(document).ready(function() {

    $('.main-slider').flexslider({
        animation: "slide",
        controlNav: false,
    });

    $('.clients-slider').flexslider({
        animation: "slide",
        controlNav: true,
        animationLoop: false,
        slideshow: false,
        sync: ".carousel"
    });

    $('.carousel').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        itemWidth: 230,
        itemMargin: 10,
        asNavFor: '.clients-slider'
    });

    $("img, a").on("dragstart", function(event) { event.preventDefault(); });

    // Mobile menu toggle
    $('.menu-toggle').click(function() {
        $('.navlist').slideToggle( 'fast' );
        if ($(this).hasClass('fa-times')) {
            $(this).removeClass('fa-times').addClass('fa-bars');
        } else {
            $(this).removeClass('fa-bars').addClass('fa-times');
        }
    });

    $( window ).resize(function() {
        if ($(document).width() > 767) {
            $('.navlist').show();
        }
    });
    for (i = 0; i < 99; i++) {
        var paragraph = $('.overlay-text')[i];
        $clamp(paragraph, {clamp: 2, useNativeClamp: false, animate: true});
    }
});