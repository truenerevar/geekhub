$(document).ready(function() {

    //fancybox
    $(".fancybox").fancybox({
        openEffect	: 'fade',
        closeEffect	: 'fade',
    });

    //Chrome Smooth Scroll
    try {
        $.browserSelector();
        if($("html").hasClass("chrome")) {
            $.smoothScroll();
        }
    } catch(err) {

    }

    $("img, a").on("dragstart", function(event) { event.preventDefault(); });

    // Scroll to anchor
    $('a').click(function(){
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top - $('.main-navigation').outerHeight() + 1
        }, 1000);
        return false;
    });

    function check_current_menu_item(){
        var headerHeight = $('.main-navigation').outerHeight();
        var mainHeaderHeight = $('.main-header').outerHeight();
        var scrollPos = $(document).scrollTop();
        $('.link-item a[href^="#"]').each(function () {
            var currLink = $(this);
            if ($(currLink.attr("href")).length) {
                var refElement = $(currLink.attr("href"));
                if (refElement.offset().top <= scrollPos + headerHeight + 1 && refElement.offset().top + refElement.outerHeight() - headerHeight - 2 >= scrollPos || scrollPos == $(document).outerHeight() - $(window).height()) {
                    console.log("Element " + refElement.offset().top);
                    console.log("Scroll " + scrollPos);
                    $('.link-item a').removeClass("active");
                    currLink.addClass("active");
                }
            }
        });
        if (scrollPos <= mainHeaderHeight) {
            $('.link-item a').removeClass("active");
        }
    }
    $(document).on("scroll", check_current_menu_item);
});
