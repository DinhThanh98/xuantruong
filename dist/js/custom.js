$(document).ready(function () {

    $('#open-menu').on('click', function () {
        $('.header-body').toggleClass('active');
    });
    $('.distribution-slider-center').slick({
        arrows: true,
        swipe: true, // cho phép vuốt slider
        pauseOnHover: true,
        mobileFirst: true,
        prevArrow: "<img class='a-left control-c prev slick-prev' src='dist/images/prev.png'>",
        nextArrow: "<img class='a-right control-c next slick-next' src='dist/images/next.png'>"
        // fade: true,
    });

    $('.widget-news').slick({
        arrows: true,
        swipe: true, // cho phép vuốt slider
        pauseOnHover: true,
        mobileFirst: true,
        slidesToShow: 1,
        prevArrow: "<img class='a-left control-c prev slick-prev' src='dist/images/prev.png'>",
        nextArrow: "<img class='a-right control-c next slick-next' src='dist/images/next.png'>"
        // fade: true,
    });
    $('.distribution-slider-mb').slick({
        arrows: true,
        swipe: true, // cho phép vuốt slider
        pauseOnHover: true,
        mobileFirst: true,
        slidesToShow: 1,
        prevArrow: "<img class='a-left control-c prev slick-prev' src='dist/images/prev.png'>",
        nextArrow: "<img class='a-right control-c next slick-next' src='dist/images/next.png'>"
        // fade: true,
    });

    $('ul.tabs li').click(function () {
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
    });
    $('.co-slider').owlCarousel({
        loop: true,
        margin: 5,
        nav: true,
        navText: ["<img src='dist/images/prev.png'>","<img src='dist/images/next.png'>"],
        dots: false,
        autoplay: true,
        items:4,
        responsive : {
            // breakpoint from 0 up
            0 : {
                items:3
            },
            // breakpoint from 480 up
            576 : {
                items:4
            },

        }
    });
    $('.carousel-product').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: true,
        autoplay: false,
        items:1,
    });
    $('.owl-carousel').find('.owl-nav').removeClass('disabled');
    $('.owl-carousel').on('changed.owl.carousel', function(event) {
        $(this).find('.owl-nav').removeClass('disabled');
    });

    $('.detail-sl').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ],
        prevArrow: "<img class='a-left control-c prev slick-prev' src='dist/images/prev.png'>",
        nextArrow: "<img class='a-right control-c next slick-next' src='dist/images/next.png'>",
    });

    $(".slick-prev").click(function () {
        $(".slick-active").each(function () {
            var has = $(this).hasClass("slick-center");
            if(has) {
                $(this).find(".blur").removeClass("blur");
            }
        })
    });

    //search-pc
    $('#search-pc').click(function () {
        $('.form-search').toggleClass('active');
    });
    $("#close-form").click(function () {
        $('.form-search').removeClass('active');
    });

    //search-mobile

    $('#toggle-mobile').click(function () {
        if($(this).hasClass('search-img')){
            $(this).attr("src","dist/images/close.png");
            $(this).attr('class','');
        }else{
            $(this).attr("src","dist/images/search.png");
            $(this).attr('class','search-img');
        }

        $('body').toggleClass('hide-scroll');
        $('.form-search-mobile').toggle(500);

    });

    //fixed menu

    $(window).bind('scroll', function() {
        var navHeight = 68;
        console.log(navHeight);
        if ($(window).scrollTop() > navHeight) {
            $('.top-menu').addClass('fixed');
        }
        else {
            $('.top-menu').removeClass('fixed');
        }
    });

});
