
/*-----------------------------------------------------------------------------------

    Theme Name: Finders - Directory Listing Template
    Description: Directory Listing Template
    Author: Chitrakoot Web
    Version: 1.0

    /* ----------------------------------

    JS Active Code Index
            
        01. Preloader
        02. Header class - on scroll
        03. Scroll To Top
        04. Parallax
        05. Resize function
        06. FullScreenHeight function
        07. ScreenFixedHeight function
        08. FullScreenHeight and screenHeight with resize function
        09. Copy to clipboard
        10. Sliders
        11. Tabs
        12. CountUp
        13. Countdown
        14. Stellar
        15. Range slider
        
    ---------------------------------- */


(function ($) {

    "use strict";

    let $window = $(window);


    /*------------------------------------
        01. Preloader
    --------------------------------------*/

    $('#preloader').fadeOut('normall', function () {
        $(this).remove();
    });

    /*------------------------------------
        02. Header class - on scroll
    --------------------------------------*/

    $window.on('scroll', function () {
        let scroll = $window.scrollTop();
        if (scroll <= 50) {
            $("header").removeClass("scrollHeader").addClass("fixedHeader");
        } else {
            $("header").removeClass("fixedHeader").addClass("scrollHeader");
        }
    });

    /*------------------------------------
        03. Scroll To Top
    --------------------------------------*/

    $window.on('scroll', function () {
        if ($(this).scrollTop() > 500) {
            $(".scroll-to-top").fadeIn(400);

        } else {
            $(".scroll-to-top").fadeOut(400);
        }
    });

    $(".scroll-to-top").on('click', function (event) {
        event.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, 600);
    });

    /*------------------------------------
        04. Parallax
    --------------------------------------*/

    // sections background image from data background
    let pageSection = $(".parallax,.bg-img");
    pageSection.each(function () {
        if ($(this).attr("data-background")) {
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
    });


    /*------------------------------------
        05. Resize function
    --------------------------------------*/

    $window.resize(function (event) {
        setTimeout(function () {
            SetResizeContent();
        }, 500);
        event.preventDefault();
    });


    /*------------------------------------
        06. FullScreenHeight function
    --------------------------------------*/

    function fullScreenHeight() {
        let element = $(".full-screen");
        let $minheight = $window.height();
        element.css('min-height', $minheight);
    }


    /*------------------------------------
        07. ScreenFixedHeight function
    --------------------------------------*/

    function ScreenFixedHeight() {
        let $headerHeight = $("header").height();
        let element = $(".screen-height");
        let $screenheight = $window.height() - $headerHeight;
        element.css('height', $screenheight);
    }


    /*------------------------------------
        08. FullScreenHeight and screenHeight with resize function
    --------------------------------------*/

    function SetResizeContent() {
        fullScreenHeight();
        ScreenFixedHeight();
    }

    SetResizeContent();

    // === when document ready === //
    $(document).on("ready", function () {


        /*------------------------------------
            09. copy to clipboard
        --------------------------------------*/

        if ($(".copy-clipboard").length !== 0) {
            new clipboardjs('.copy-clipboard');
            $('.copy-clipboard').on('click', function () {
                let $this = $(this);
                // var originaltext = $this.text();
                $this.text('copied');
                settimeout(function () {
                    $this.text('copy')
                }, 2000);
            });
        }

        $(".slow-redirect a[href^='#']").click(function (e) {
            e.preventdefault();

            let position = $($(this).attr("href")).offset().top - 200;

            $("body, html").animate({
                scrolltop: position
            }, 1000);
        });


        /*------------------------------------
            10. sliders
        --------------------------------------*/

        // testmonials carousel1
        $('#testmonials-carousel').owlCarousel({
            loop: true,
            responsiveclass: true,
            autoplay: true,
            smartspeed: 800,
            nav: false,
            dots: true,
            center: true,
            margin: 0,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 1
                },
                992: {
                    items: 1
                }
            }
        });

        // default owlcarousel
        $('.listing-grid').owlCarousel({
            items: 1,
            loop: true,
            dots: false,
            margin: 10,
            autoplay: true,
            smartspeed: 1000
        });

        // default owlcarousel
        $('.owl-carousel').owlCarousel({
            items: 1,
            loop: true,
            dots: true,
            margin: 0,
            autoplay: true,
            smartspeed: 500
        });


        /*------------------------------------
            11. tabs
        --------------------------------------*/

        //horizontal tab
        if ($(".horizontaltab").length !== 0) {
            $('.horizontaltab').easyresponsivetabs({
                type: 'default', //types: default, vertical, accordion
                width: 'auto', //auto or any width like 600px
                fit: true, // 100% fit in a container
                tabidentify: 'hor_1', // the tab groups identifier
                activate: function () { // callback function if tab is switched
                    let $tab = $(this);
                    let $info = $('#nested-tabinfo');
                    let $name = $('span', $info);
                    $name.text($tab.text());
                    $info.show();
                }
            });
        }


        /*------------------------------------
            12. countup
        --------------------------------------*/

        $('.countUp').counterUp({
            delay: 20,
            time: 2000
        });


    });

    // === when window loading === //
    $window.on("load", function () {

        /*------------------------------------
            14. Stellar
        --------------------------------------*/

        // stellar
        $window.stellar();

        /*------------------------------------
            15. Range slider
        --------------------------------------*/

        let $priceRange = $(".price-range");
        if ($priceRange.length !== 0) {
            $priceRange.ionRangeSlider({
                type: "double",
                grid: true,
                min: 0,
                max: 1000,
                from: 200,
                to: 800,
                prefix: "$"
            });
        }

    });

})(jQuery);

// extra

