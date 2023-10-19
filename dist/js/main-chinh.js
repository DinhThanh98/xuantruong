$(document).ready(function() {
    var width_slide_single = $('.images-banner-home');
    var ratio_slide_single = 2.70212765957;

    function resize_img(freme, int) {
        var width_iframe = $(freme).width();
        $(window).resize(function() {
            var height_iframe = width_iframe / int;
            $(freme).css({
                'height': height_iframe,
            });
        }).resize();
    }

    // resize_img(width_iframe, ratio);
    resize_img(width_slide_single, ratio_slide_single);
});
$(document).ready(function() {
    var width_slide_single = $('.img-new-small');
    var ratio_slide_single = 1.5641025641;

    function resize_img(freme, int) {
        var width_iframe = $(freme).width();
        $(window).resize(function() {
            var height_iframe = width_iframe / int;
            $(freme).css({
                'height': height_iframe,
            });
        }).resize();
    }

    // resize_img(width_iframe, ratio);
    resize_img(width_slide_single, ratio_slide_single);
});
//banner 570
$(document).ready(function() {
    var width_slide_single = $('.banner570');
    var ratio_slide_single = 3.401785714285714;

    function resize_img(freme, int) {
        var width_iframe = $(freme).width();
        $(window).resize(function() {
            var height_iframe = width_iframe / int;
            $(freme).css({
                'height': height_iframe,
            });
        }).resize();
    }

    // resize_img(width_iframe, ratio);
    resize_img(width_slide_single, ratio_slide_single);
});

//banner 450
$(document).ready(function() {
    var width_slide_single = $('.banner450');
    var ratio_slide_single = 4.23333333333;

    function resize_img(freme, int) {
        var width_iframe = $(freme).width();
        $(window).resize(function() {
            var height_iframe = width_iframe / int;
            $(freme).css({
                'height': height_iframe,
            });
        }).resize();
    }

    // resize_img(width_iframe, ratio);
    resize_img(width_slide_single, ratio_slide_single);
});

$(document).ready(function() {
    var width_slide_single = $('.img-big');
    var ratio_slide_single = 1.67;

    function resize_img(freme, int) {
        var width_iframe = $(freme).width();
        $(window).resize(function() {
            var height_iframe = width_iframe / int;
            $(freme).css({
                'height': height_iframe,
            });
        }).resize();
    }

    // resize_img(width_iframe, ratio);
    resize_img(width_slide_single, ratio_slide_single);
});

//img item-new
$(document).ready(function() {
    var width_slide_single = $('.img-new-item');
    var ratio_slide_single = 1.8125;

    function resize_img(freme, int) {
        var width_iframe = $(freme).width();
        $(window).resize(function() {
            var height_iframe = width_iframe / int;
            $(freme).css({
                'height': height_iframe,
            });
        }).resize();
    }

    // resize_img(width_iframe, ratio);
    resize_img(width_slide_single, ratio_slide_single);
});


// banner giatricotloi
$(document).ready(function() {
    var width_slide_single = $('.banner-value');
    var ratio_slide_single = 2.29518072289;

    function resize_img(freme, int) {
        var width_iframe = $(freme).width();
        $(window).resize(function() {
            var height_iframe = width_iframe / int;
            $(freme).css({
                'height': height_iframe,
            });
        }).resize();
    }

    // resize_img(width_iframe, ratio);
    resize_img(width_slide_single, ratio_slide_single);
});

// banner 700
$(document).ready(function() {
    var width_slide_single = $('.banner700');
    var ratio_slide_single = 2.72142857143;

    function resize_img(freme, int) {
        var width_iframe = $(freme).width();
        $(window).resize(function() {
            var height_iframe = width_iframe / int;
            $(freme).css({
                'height': height_iframe,
            });
        }).resize();
    }

    // resize_img(width_iframe, ratio);
    resize_img(width_slide_single, ratio_slide_single);
});




$(document).ready(function() {
        
    var a = $(window).width();
    if(a >= 680){
        $("button.button1").on('click',function() {
            $(".bg1").css("left", "50%");
            $(".bg1").css("right", "unset");
            $(".textw2").css("display", "none");
            $(".textw1").css("display", "block");
            $(".bg1").css("transition", "0.5s ");
            $(".bg1").css("border-top-left-radius", "unset ");
            $(".bg1").css("border-bottom-left-radius", "unset ");
            $(".bg1").css("border-top-right-radius", "15px ");
            $(".bg1").css("border-bottom-right-radius", "15px ");
        });

        $("button.button2").on('click',function() {
            $(".bg1").css("right", "50%");
            $(".bg1").css("left", "unset");
            $(".textw1").css("display", "none");
            $(".textw2").css("display", "block");
            $(".bg1").css("transition", "0.5s ");
            $(".bg1").css("border-top-left-radius", "15px ");
            $(".bg1").css("border-bottom-left-radius", "15px ");
            $(".bg1").css("border-top-right-radius", "unset ");
            $(".bg1").css("border-bottom-right-radius", "unset ");
        });
    }
    else{
        $("button.button1").on('click',function() {
            $(".bg1").css("bottom", "50%");
            $(".bg1").css("top", "unset");
            $(".textw2").css("display", "none");
            $(".textw1").css("display", "block");
            $(".bg1").css("transition", "0.5s ");
            $(".bg1").css("border-top-left-radius", "15px ");
            $(".bg1").css("border-bottom-left-radius", "unset ");
            $(".bg1").css("border-top-right-radius", "15px ");
            $(".bg1").css("border-bottom-right-radius", "unset ");
        });

        $("button.button2").on('click',function() {
            $(".bg1").css("top", "50%");
            $(".bg1").css("bottom", "unset");
            $(".textw1").css("display", "none");
            $(".textw2").css("display", "block");
            $(".bg1").css("transition", "0.5s ");
            $(".bg1").css("border-top-left-radius", "unset ");
            $(".bg1").css("border-bottom-left-radius", "15px ");
            $(".bg1").css("border-top-right-radius", "unset ");
            $(".bg1").css("border-bottom-right-radius", "15px ");
        });        
    }
});


// doctor-plant
$(document).ready(function() {
    var width_slide_single = $('.image-s');
    var ratio_slide_single = 1.52571428571;

    function resize_img(freme, int) {
        var width_iframe = $(freme).width();
        $(window).resize(function() {
            var height_iframe = width_iframe / int;
            $(freme).css({
                'height': height_iframe,
            });
        }).resize();
    }

    // resize_img(width_iframe, ratio);
    resize_img(width_slide_single, ratio_slide_single);
});

$(document).ready(function() {
    var width_slide_single = $('.image-f');
    var ratio_slide_single = 0.72504273504;

    function resize_img(freme, int) {
        var width_iframe = $(freme).width();
        $(window).resize(function() {
            var height_iframe = width_iframe / int;
            $(freme).css({
                'height': height_iframe,
            });
        }).resize();
    }

    // resize_img(width_iframe, ratio);
    resize_img(width_slide_single, ratio_slide_single);
});

// immg video home
$(document).ready(function() {
    var width_slide_single = $('.image-video');
    var ratio_slide_single = 1.58333333333;

    function resize_img(freme, int) {
        var width_iframe = $(freme).width();
        $(window).resize(function() {
            var height_iframe = width_iframe / int;
            $(freme).css({
                'height': height_iframe,
            });
        }).resize();
    }

    // resize_img(width_iframe, ratio);
    resize_img(width_slide_single, ratio_slide_single);
});

// immg video home
$(document).ready(function() {
    var width_slide_single = $('.banner650');
    var ratio_slide_single = 2.93076923077;

    function resize_img(freme, int) {
        var width_iframe = $(freme).width();
        $(window).resize(function() {
            var height_iframe = width_iframe / int;
            $(freme).css({
                'height': height_iframe,
            });
        }).resize();
    }

    // resize_img(width_iframe, ratio);
    resize_img(width_slide_single, ratio_slide_single);
});

// banner home 2
$('.slick-bbh').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    dots: true,
    adaptiveHeight: true,
    infinite: true,
    useTransform: true,
    autoplay: false,
    speed: 400,
});

// banner banner chung
$('.slick-baner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    dots: false,
    adaptiveHeight: true,
    infinite: true,
    useTransform: true,
    autoplay: false,
    speed: 400,
    prevArrow:"<img class='slick-left2' src=\"dist/images/icons/right.png\" alt=\"\">",
    nextArrow:"<img class='slick-right2' src=\"dist/images/icons/left.png\" alt=\"\">",
});

$('.slick-baner2').slick({
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

});
// banner banner chung
$('.text-slick').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    fade: false,
    dots: true,
    adaptiveHeight: true,
    infinite: true,
    useTransform: true,
    autoplay: false,
    speed: 400,
    prevArrow:"<img class='slick-left2' src=\"dist/images/icons/right.png\" alt=\"\">",
    nextArrow:"<img class='slick-right2' src=\"dist/images/icons/left.png\" alt=\"\">",
});


var a = $(window).width();
if(a <= 580){
    $('.slick-light-height').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: false,
        dots: true,
        adaptiveHeight: true,
        infinite: true,
        useTransform: true,
        autoplay: false,
        speed: 400,
        prevArrow:"<img class='slick-left2' src=\"dist/images/icons/right.png\" alt=\"\">",
        nextArrow:"<img class='slick-right2' src=\"dist/images/icons/left.png\" alt=\"\">",
    });
    
}

//slick
// product slick, trang chủ trang colection
$('.product-slick').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    dots: false,
    adaptiveHeight: false,
    infinite: true,
    useTransform: true,
    autoplay: false,
    prevArrow:"<img class='slick-left' src=\"dist/images/slick-right.png\" alt=\"\">",
    nextArrow:"<img class='slick-right' src=\"dist/images/slick-left.png\" alt=\"\">",
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
            arrows: false,
            dots:true
        }

    },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false,
                fade: false,
                dots:true,
              
            }

        }

    ]
});

$('.video-slick').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    dots: false,
    adaptiveHeight: true,
    infinite: true,
    useTransform: true,
    autoplay: false,
    prevArrow:"<img class='slick-left' src=\"dist/images/slick-right.png\" alt=\"\">",
    nextArrow:"<img class='slick-right' src=\"dist/images/slick-left.png\" alt=\"\">",
    responsive: [{
        breakpoint: 1400,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
        }
    }, {
        breakpoint: 1200,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            // arrows: false,
        }

    }, {
        breakpoint: 800,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
            dots:true
        }

    },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                fade: false,
                dots:true,
              
            }

        }

    ]
});


//    slick-product-detile

$(document).ready(function() {
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
});

// menu mobile
$('.js-toggle-menu').click(function(e){
    e.preventDefault();
    $('.mobile-header-nav').slideToggle();
    $(this).toggleClass('open');
});

$("#icon-search").click(function () {
    $("#search-inputss").fadeToggle("3000");
});

$(".menu-child-other").click(function () {
    $(".show-icon i").attr('class', 'fa fa-angle-right');
    // $(this).find('b i').attr('class', 'fa fa-angle-right');
    // $(".menu-child-other").removeClass("active");
    if ($(this).hasClass('active')) {
        $(this).find('b i').attr('class', 'fa fa-angle-right');
        $(this).children('.menu-child-dropdown').slideUp();
        $(".menu-child-other").removeClass("active");
        $(".menu-child").removeClass("active");
        console.log(3)
    } else {
        $(".menu-child-other").removeClass("active");
        $(" .menu-child-dropdown").slideUp();
        $(this).addClass('active');
        $(this).children('.menu-child-dropdown').slideDown();
        $(this).find('b i').attr('class', 'fa fa-angle-down');

    }

});

$(window).bind('scroll', function() {
    var navHeight = 68;
    if ($(window).scrollTop() > navHeight) {
        $('.menus').addClass('fixed-menu');
        $('.scroll-top').addClass('active-scroll');
    }
    else {
        $('.menus').removeClass('fixed-menu');
        $('.scroll-top').removeClass('active-scroll');
    }
});


    //scroll top animate
    $(document).ready(function () {

        $(window).scroll(function () {
            if ($(this).scrollTop() > 40) {
                $('.scroll-top').fadeIn();
            } else {
                $('.scroll-top').fadeOut();
            }
        });

        $(".scroll-top").click(function () {
            $('html, body').animate({scrollTop: 0}, 800)
        });
    })