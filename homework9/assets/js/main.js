$(document).ready(function() {

    //progress-bar
    $('.skill-wrap').waypoint(function () {
    jQuery('.skillbar').each(function(){
        jQuery(this).find('.skillbar-bar').animate({
            width:jQuery(this).attr('data-percent')
        },2000);
    });
        // count-to
        $('.count').countTo({
            speed: 1900,
            refreshInterval: 100,
            formatter: function (value, options) {
                return value.toFixed(options.decimals, 0).toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1,');
            }
        });
        this.destroy()
    },
    {offset: 500});

    //fancybox

    $(".fancybox").fancybox({
        openEffect	: 'fade',
        closeEffect	: 'fade',
    });

    //isotope

    var $container = $('.portfolio-list');
    $('.portfolio-nav li a').click(function(){
        var $this = $(this);
        if ( !$this.hasClass('is-checked') ) {
            $this.parents('.portfolio-nav').find('.is-checked').removeClass('is-checked');
            $this.addClass('is-checked');
        }
        var selector = $this.attr('data-filter');
        $container.isotope({  itemSelector: '.item', filter: selector });
        return false;
    });

    $('.flexslider-head').flexslider({
        animation: "slide"
    });
//--------------
// -----------------SLIDER-HOME
// ------------------------------------------------------
    var $window = $(window),
        flexslider = { vars:{} };

    function getGridSize() {
        return (window.innerWidth < 600) ? 1 : (window.innerWidth < 900) ? 3 : (window.innerWidth < 1400) ? 5 : 8;
    }

    $(function() {
        SyntaxHighlighter.all();
    });

    $window.load(function() {
        $('.flexslider-clients').flexslider({
            animation: "slide",
            animationLoop: true,
            move: 1,
            itemWidth: 125,
            slideshowSpeed: 5000,
            minItems: getGridSize(),
            maxItems: getGridSize()
        });

        $('#carousel').flexslider({
            animation: "slide",
            controlNav: false,
            animationLoop: false,
            slideshow: false,
            itemWidth: 210,
            itemMargin: 5,
            asNavFor: '#slider'
        });

        $('#slider').flexslider({
            animation: "slide",
            controlNav: false,
            animationLoop: false,
            slideshow: false,
            sync: "#carousel"
        });

    });

    $window.resize(function() {
        var gridSize = getGridSize();

        flexslider.vars.minItems = gridSize;
        flexslider.vars.maxItems = gridSize;
    });

    //masonry

    $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: 1,
    });

    $('.grid-2').masonry({
        itemSelector: '.grid-item',
        columnWidth: 1,
        gutter: '.gutter-sizer'
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

function myMap() {
    var mapCanvas = document.getElementById("map");
    var mapOptions = {
        center: new google.maps.LatLng(38.117543363197174, 13.366571702063084),
        zoom: 17
    }
    var map = new google.maps.Map(mapCanvas, mapOptions);
}