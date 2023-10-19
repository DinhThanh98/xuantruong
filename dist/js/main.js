


/*global $ */
$(document).ready(function () {

    "use strict";

    $('.menu > ul > li:has( > ul)').addClass('menu-dropdown-icon');
    //Checks if li has sub (ul) and adds class for toggle icon - just an UI

    $('.menu > ul > li > ul:not(:has(ul))').addClass('normal-sub');
    //Checks if drodown menu's li elements have anothere level (ul), if not the dropdown is shown as regular dropdown, not a mega menu (thanks Luka Kladaric)

    $(".menu > ul").before("<a href=\"#\" class=\"menu-mobile\">Navigation</a>");

    //Adds menu-mobile class (for mobile toggle menu) before the normal menu
    //Mobile menu is hidden if width is more then 959px, but normal menu is displayed
    //Normal menu is hidden if width is below 959px, and jquery adds mobile menu
    //Done this way so it can be used with wordpress without any trouble

    $(".menu > ul > li").hover(function (e) {
        if ($(window).width() > 943) {
            $(this).children("ul").stop(true, false).fadeToggle(150);
            e.preventDefault();
        }
    });
    //If width is more than 943px dropdowns are displayed on hover

    $(".menu > ul > li").click(function () {
        if ($(window).width() <= 943) {
            $(this).children("ul").fadeToggle(150);
        }
    });
    //If width is less or equal to 943px dropdowns are displayed on click (thanks Aman Jain from stackoverflow)

    $(".menu-mobile").click(function (e) {
        $(".menu > ul").toggleClass('show-on-mobile');
        e.preventDefault();
    });
    //when clicked on mobile-menu, normal menu is shown as a list, classic rwd menu story (thanks mwl from stackoverflow)

    //Menu
    $('.js-toggle-menu').click(function (e) {
        e.preventDefault();
        $('.mobile-header-nav').slideToggle();
        $(this).toggleClass('open');
    });
// cờ
    $("#lang1").click(function () {
        $("#lang2").fadeToggle("slow");
        $("#lang3").fadeToggle("slow");
    });
    $("#lang-pc").click(function () {
        $("#show-lang-img2").fadeToggle("slow");
    });


// jQuery(document).ready(function ($) {
//     $('.category-tagets').slick({
//         infinite: true,
//         slidesToShow: 4,
//         slidesToScroll: 1,
//     });
// });

    $('.package_slide_3').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        dots: true,
        adaptiveHeight: true,
        infinite: true,
        useTransform: true,
        autoplay: false,
        responsive: [{
            breakpoint: 1400,
            settings: {}
        }, {
            breakpoint: 1100,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                dots: true,
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: true,
                arrows: true,
                fade: false,
                prevArrow: "<i class='far fa-chevron-left left-slick'></i>",
                nextArrow: "<i class='far fa-chevron-right right-slick'></i>",
            }
        }
        ]
    });

    $('.product-slick').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        dots: true,
        adaptiveHeight: true,
        infinite: true,
        useTransform: true,
        autoplay: false,
        responsive: [{
            breakpoint: 1400,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                // arrows: false,
            }

        }, {
            breakpoint: 800,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                // arrows: false,
            }

        },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: true,
                    fade: false,
                    prevArrow: "<i class='far fa-chevron-left left-slick'></i>",
                    nextArrow: "<i class='far fa-chevron-right right-slick'></i>",
                }

            }

        ]
    });

    $('.newsmall2').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        dots: true,
        adaptiveHeight: true,
        infinite: true,
        useTransform: true,
        autoplay: false,
        speed: 400,
        autoplaySpeed: 3000,
        // prevArrow: "<img class='left' src='" + base_url + "/wp-content/themes/quanghanh/dist/images/prev.png'>",
        // nextArrow: "<img class='right' src='" + base_url + "/wp-content/themes/quanghanh/dist/images/next.png'>",
        responsive: [{
            breakpoint: 900,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false,
            }
        }, {
            breakpoint: 580,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                fade: false,
                prevArrow: "<i class='far fa-chevron-left left-slick'></i>",
                nextArrow: "<i class='far fa-chevron-right right-slick'></i>",
            }
        }]
    });

    $('.slick-product').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        fade: false,
        dots: true,
        adaptiveHeight: false,
        infinite: true,
        useTransform: true,
        autoplay: false,
        speed: 400,
        autoplaySpeed: 3000,
        responsive: [{
            breakpoint: 1100,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                arrows: false,
            }
        }, {
            breakpoint: 800,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: false,
            }
        }, {
            breakpoint: 580,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: true,
                fade: false,

            }
        }]
    });

    $('.product-list-slick').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        infinite: true,
        autoplay: false,
        speed: 400,
        autoplaySpeed: 3000,
        responsive: [{
            breakpoint: 1800,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                arrows: false,
            }
        }, {
            breakpoint: 1600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: false,
            }
        }, {
            breakpoint: 580,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: true,
                fade: false,

            }
        }]
    });

//silick-product-sulotion
    $('.slick-product-slusolution').slick({
        slidesToShow: false,
        slidesToScroll: false,
        responsive: [{
            breakpoint: 580,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                fade: false,
                dots: true,
                adaptiveHeight: false,
                infinite: true,
                useTransform: true,
                autoplay: false,
                speed: 400,
                autoplaySpeed: 3000,
                prevArrow: "<i class='far fa-chevron-left left-slick'></i>",
                nextArrow: "<i class='far fa-chevron-right right-slick'></i>",

            }
        }]
    });


//banner hom1
    $('.slick-banner-home').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: false,
        dots: true,
        adaptiveHeight: false,
        infinite: true,
        useTransform: true,
        autoplay: false,
        speed: 400,
        autoplaySpeed: 3000,
        prevArrow: "<i class='far fa-chevron-left left-slick'></i>",
        nextArrow: "<i class='far fa-chevron-right right-slick'></i>",
        responsive: [{
            breakpoint: 900,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
            }
        }]
    });

// banner home 2
    $('.slick-banner-home2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: false,
        dots: false,
        adaptiveHeight: false,
        infinite: true,
        useTransform: true,
        autoplay: false,
        speed: 400,
        autoplaySpeed: 3000,
        prevArrow: "<i class='far fa-chevron-left left-slick'></i>",
        nextArrow: "<i class='far fa-chevron-right right-slick'></i>",
    });

// slick become
    $('.slick-become').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: true,
        fade: false,
        dots: false,
        adaptiveHeight: false,
        infinite: true,
        useTransform: true,
        autoplay: true,
        speed: 400,
        autoplaySpeed: 3000,

    });

    // $('.slick-care').slick({
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     dots: false,
    //     infinite: true,
    //     useTransform: true,
    //     autoplay: false,
    //     speed: 400,
    //     autoplaySpeed: 3000,
    //
    // });


// banner career-culture
    $('.owl-carousel').owlCarousel({
        // center: true,
        items: 4,
        loop: true,
        nav: true,
        margin: 10,
        dots: true,
        responsiveClass:true,
        responsive:{
            0:{
                items:3,
                nav:true
            },
            1200:{
                items:3,
                nav:true
            },
            1300:{
                items:4,
                nav:true,
                loop:true
            }
        }
    });

//product-detail
//    slick-product-detile
    $('.slider-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.slider-nav',
        vertical: false,
        autoplay: false,
        verticalSwiping: false,
        infinite: true,
        initialSlide: 1,
        centerMode: true,
        dots: true,

    });

    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        // arrows: false,
        asNavFor: '.slider-main',
        infinite: true,
        vertical: true,
        verticalSwiping: true,
        // focusOnSelect: true,
        // initialSlide: 1,
        autoplay: false,
        centerMode: true
    });

//count down
    $('.count').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });


});

$(document).ready(function () {
    $('.main-menu > li').click(function () {
        $(this).toggleClass("slow");
        $(this).toggleClass('active');
        $('.level2 > li').removeClass('active');
    });

    $('.level2 > li').click(function (event) {
        $(this).toggleClass('active');
        event.stopPropagation();
    });
})
//menu 3cap

$(document).ready(function () {
    //menu-produc
    $.fn.extend({
        // Define the threeBarToggle function by extending the jQuery object
        threeBarToggle: function (options) {
            // Set the default options
            var defaultss = {
                color: 'black',
                width: 50,
                height: 35,
                speed: 400,
                animate: true
            }
            var options = $.extend(defaultss, options);

            return this.each(function () {

                $(this).empty().css({'width': options.width, 'height': options.height,});
                $(this).addClass('tb-menu-toggle');
                $(this).prepend('<i></i><i></i><i></i>').on('click', function (event) {
                    event.preventDefault();
                    $(this).toggleClass('tb-active-toggle');
                    if (options.animate) {
                        $(this).toggleClass('tb-animate-toggle');
                    }
                    $('.tb-mobile-menu').slideToggle(options.speed);
                });
                $(this).children().css('background', options.color);
            });
        },

        // Define the accordionMenu() function that adds the sliding functionality
        accordionMenu: function (options) {

            // Set the default options
            var defaultss = {
                speed: 400
            }
            var options = $.extend(defaultss, options);

            return this.each(function () {

                $(this).addClass('tb-mobile-menu');
                var menuItems = $(this).children('li');
                menuItems.find('.sub-menu').parent().addClass('tb-parent');
                $('.tb-parent ul').hide();
                $('.tb-parent > a').on('click', function (event) {
                    event.stopPropagation();
                    event.preventDefault();
                    $(this).siblings().slideToggle(options.speed);
                });

            });
        }
    });
    $('#menu-toggle').threeBarToggle({
        color: '#0f3240' +
            '',
        width: 50,
        height: 35
    });
    $('#menu').accordionMenu();

})

//    slick-product-detile

//    fix chiều cao trang banner home
$(document).ready(function () {
    var width_slide_single = $('.images-banner-home');
    var ratio_slide_single = 2.34146341463;

    function resize_img(freme, int) {
        var width_iframe = $(freme).width();
        $(window).resize(function () {
            var height_iframe = width_iframe / int;
            $(freme).css({
                'height': height_iframe,
            });
        }).resize();
    }

    // resize_img(width_iframe, ratio);
    resize_img(width_slide_single, ratio_slide_single);
});

//    fix chiều cao trang banner home2
$(document).ready(function () {
    var width_slide_single = $('.banner-home2');
    var ratio_slide_single = 3.04761904762;

    function resize_img(freme, int) {
        var width_iframe = $(freme).width();
        $(window).resize(function () {
            var height_iframe = width_iframe / int;
            $(freme).css({
                'height': height_iframe,
            });
        }).resize();
    }

    // resize_img(width_iframe, ratio);
    resize_img(width_slide_single, ratio_slide_single);
});

//    fix chiều cao trang banner banner bottom trang product-sulotion
$(document).ready(function () {
    var width_slide_single = $('.images-bbpr');
    var ratio_slide_single = 2.80147058824;

    function resize_img(freme, int) {
        var width_iframe = $(freme).width();
        $(window).resize(function () {
            var height_iframe = width_iframe / int;
            $(freme).css({
                'height': height_iframe,
            });
        }).resize();
    }

    // resize_img(width_iframe, ratio);
    resize_img(width_slide_single, ratio_slide_single);
});

$(document).ready(function () {
    var width_slide_single = $('.images-banerpr');
    var ratio_slide_single = 3.59433962264;

    function resize_img(freme, int) {
        var width_iframe = $(freme).width();
        $(window).resize(function () {
            var height_iframe = width_iframe / int;
            $(freme).css({
                'height': height_iframe,
            });
        }).resize();
    }

    // resize_img(width_iframe, ratio);
    resize_img(width_slide_single, ratio_slide_single);
});
//
$(document).ready(function(){
    $("h4.bg1ss").click(function(){
        // $(".bg1").css("background-color", "yellow");
   alert("helu world");
    });

});
