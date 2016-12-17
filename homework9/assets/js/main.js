$(document).ready(function() {

    //flex slider
    $('.flexslider').flexslider({
        animation: "slide"
    });
    //flex-carusel
    (function() {

        // store the slider in a local variable
        var $window = $(window),
            flexslider = { vars:{} };

        // tiny helper function to add breakpoints
        function getGridSize() {
            return (window.innerWidth < 600) ? 1 :
                (window.innerWidth < 900) ? 3 : 8;
        }

        $(function() {
            SyntaxHighlighter.all();
        });

        $window.load(function() {
            $('#flex').flexslider({
                animation: "slide",
                animationLoop: false,
                itemWidth: 100,
                itemMargin: 5,
                maxItems: 8,
                move: 1,
                minItems: getGridSize(), // use function to pull in initial value
                maxItems: getGridSize() // use function to pull in initial value
            });
        });

        // check grid size on resize event
        $window.resize(function() {
            var gridSize = getGridSize();

            flexslider.vars.minItems = gridSize;
            flexslider.vars.maxItems = gridSize;
        });
    }());

    //masonry
    $('.grid').masonry({
        // options
        itemSelector: '.grid-item',
        columnWidth: 1
    });


    // Mobile menu toggle
    $('.menu-toggle').click(function() {
        $('.menu').slideToggle( 'fast' );
        if ($(this).hasClass('fa-times')) {
            $(this).removeClass('fa-times').addClass('fa-bars');
        } else {
            $(this).removeClass('fa-bars').addClass('fa-times');
        }
    });

    $( window ).resize(function() {
        if ($(document).width() > 767) {
            $('.menu').show();
        }
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
