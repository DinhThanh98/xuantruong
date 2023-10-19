$(document).ready(function () {
    $('.cnd-slick').slick({
        slidesToShow: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
        speed: 500,
    });

    $('.slick-homeabout').slick({
        slidesToShow: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
        speed: 500,
    });

    $('.slider-single').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        adaptiveHeight: true,
        infinite: false,
        useTransform: true,
        speed: 400,
        cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
    });
    $('.slider-nav-4')
        .on('init', function(event, slick) {
            $('.slider-nav-4 .slick-slide.slick-current').addClass('is-active');
        })
        .slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            dots: false,
            focusOnSelect: false,
            infinite: false,
            prevArrow:"<img class='left' src=\"/wp-content/themes/toyota/dist/images/left.png\" alt=\"\">",
            nextArrow:"<img class='right' src=\"/wp-content/themes/toyota/dist/images/right.png\" alt=\"\">",
        });
    $('.slider-single').on('afterChange', function(event, slick, currentSlide) {
        $('.slider-nav-4').slick('slickGoTo', currentSlide);
        var currrentNavSlideElem = '.slider-nav-4 .slick-slide[data-slick-index="' + currentSlide + '"]';
        $('.slider-nav-4 .slick-slide.is-active').removeClass('is-active');
        $(currrentNavSlideElem).addClass('is-active');
    });

    $('.slider-nav-4').on('click', '.slick-slide', function(event) {
        event.preventDefault();
        var goToSingleSlide = $(this).data('slick-index');

        $('.slider-single').slick('slickGoTo', goToSingleSlide);
    });



    $('.slick-coop').slick({
        slidesToShow: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
        speed: 500,
    });

    $('.dspham').slick({
        slidesToShow: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: true,
        dots: true,
        speed: 500,
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
    });

    $('.l-sv-customer').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: true,
        autoplay: false,
        autoplayTimeout: 3000,
        smartSpeed: 500,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });



});