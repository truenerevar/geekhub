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

    // Mobile menu toggle
    $('.menu-toggle').click(function() {
        $('.nav-menu').slideToggle( 'fast' );
        if ($(this).hasClass('fa-times')) {
            $(this).removeClass('fa-times').addClass('fa-bars');
        } else {
            $(this).removeClass('fa-bars').addClass('fa-times');
        }
    });

    $( window ).resize(function() {
        if ($(document).width() > 767) {
            $('.nav-menu').show();
        }
    });

    // Change navigation-menu class on scroll
    function change_menu_class(){
        var scrollPos = $(document).scrollTop();
        if (scrollPos >= $('.main-navigation').outerHeight()) {
            $('.main-navigation').addClass("active-background");
        } else {
            $('.main-navigation').removeClass("active-background");
            $('body').css("padding-top:0;");
        }
        if (scrollPos >= $('.main-header').outerHeight()) {
            $('body').addClass("padding-active");
        } else {
            $('body').removeClass("padding-active");
        }
    }
    $(document).on("scroll", change_menu_class);
});

//modal window

$('a.view-project').click( function(event){
    event.preventDefault();
        $('.modal-form')
            .css('display', 'block')
            .animate({opacity: 1, top: '0'}, 200);
});

//close modal window

$('.modal-close, .visit-site').click( function(){
    $('.modal-form')
        .animate({opacity: 0, top: '0'}, 1000,
            function(){
                $(this).css('display', 'none');
            }
        );
});

// hover-close
$(".modal-close").mouseenter(function(){
    $('#hover-effect').addClass('fa-spin')
}).mouseleave(function(){
    $('#hover-effect').removeClass('fa-spin')
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
