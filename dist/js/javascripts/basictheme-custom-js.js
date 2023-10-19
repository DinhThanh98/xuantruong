(function ($) {
    "use strict"; let timer_clear; $(document).ready(function () {
        $('.search-form-icon .icon').click(function (e) { e.preventDefault(); var el = $(this).parent(); el.toggleClass("active"); el.find('form').slideToggle() }); $('#back-top').on('click', function (e) { e.preventDefault(); $('html, body').animate({ scrollTop: 0 }, 700) }); setTimeout(function () { $(".sk-owl-carousel").each(function () { var slider = $(this); var defaults = { direction: $('body').hasClass('rtl') ? 'rtl' : 'ltr' }; var config = $.extend({}, defaults, slider.data("plugin-options")); slider.owlCarousel(config).addClass("owl-carousel-init") }); $(".project-related-carousel").each(function () { var slider = $(this); var defaults = { direction: $('body').hasClass('rtl') ? 'rtl' : 'ltr' }; slider.owlCarousel({ loop: !0, items: 1, margin: 0, nav: !0, dots: !1, navText: ['', ''], }).addClass("owl-carousel-init") }) }, 0); let menu_item_has_children = $('.sk-site-menu .menu-item-has-children'), navbar_toggler = $('.site-navbar .navbar-toggler'); if (menu_item_has_children.length) { $('.sk-site-menu .menu-item-has-children > a').after("<span class='icon_menu_item_mobile'></span>"); let icon_menu_item_mobile = $('.icon_menu_item_mobile'); icon_menu_item_mobile.each(function () { $(this).on('click', function () { $(this).toggleClass('icon_menu_item_mobile_active'); $(this).parents('.menu-item-has-children').siblings().find('.icon_menu_item_mobile').removeClass('icon_menu_item_mobile_active'); $(this).parent().children('.sub-menu').slideToggle(); $(this).parents('.menu-item-has-children').siblings().find('.sub-menu').slideUp() }) }) }
        $(".sk-sort-bnt").on('click', function (e) { e.preventDefault(); var self = $(this); $('.sk-sort-bnt.active').not(this).removeClass('active'); self.toggleClass('active'); var id = self.data('id'); var parent = self.closest('.sk-sort'); var input = parent.find('.input-hidden'); input.attr("value", id); parent.submit() }); $(".sk-projects-paginate").on('click', '.paginate_links a', function (e) {
            e.preventDefault(); var self = $(this); var parent = self.closest('.sk-projects-paginate'); var product_content = parent.find('.sk-items'); var limit = product_content.data('limit'); var order_by = product_content.data('order-by'); var order = product_content.data('order'); var project_cat = product_content.data('project-cat'); var col = product_content.data('col'); var col_large = product_content.data('col-large'); var hrefThis = $(this).attr('href'); var paged = hrefThis.match(/\/\d+\//)[0]; paged = paged.match(/\d+/)[0]; if (!paged) paged = 1; $.ajax({
                type: "post", dataType: "json", url: sk_array.ajax_url, data: { 'action': 'ajax_load_projects', 'ajax_paged': paged, 'limit': limit, 'order_by': order_by, 'order': order, 'project_cat': project_cat, 'col': col, 'col_large': col_large, 'nonce': sk_array.load_product_nonce }, context: this, beforeSend: function () { parent.addClass('loading') }, success: function (response) {
                    if (response.success) { $(response.data).addClass('holder'); product_content.empty(); product_content.append($(response.data)) }
                    parent.removeClass('loading')
                }
            })
        }); $(".sk-recruitments-paginate").on('click', '.paginate_links a', function (e) {
            e.preventDefault(); var self = $(this); var parent = self.closest('.sk-recruitments-paginate'); var product_content = parent.find('.sk-items'); var limit = product_content.data('limit'); var order_by = product_content.data('order-by'); var order = product_content.data('order'); var hrefThis = $(this).attr('href'); var paged = hrefThis.match(/\/\d+\//)[0]; paged = paged.match(/\d+/)[0]; if (!paged) paged = 1; $.ajax({
                type: "post", dataType: "json", url: sk_array.ajax_url, data: { 'action': 'ajax_load_recruitments', 'ajax_paged': paged, 'limit': limit, 'order_by': order_by, 'order': order, 'nonce': sk_array.load_product_nonce }, context: this, beforeSend: function () { parent.addClass('loading') }, success: function (response) {
                    if (response.success) { $(response.data).addClass('holder'); product_content.empty(); product_content.append($(response.data)) }
                    parent.removeClass('loading')
                }
            })
        }); $(document).general_owlCarousel_custom('.site-post-slides'); $('a.sk-scroll-nav__link').bind('click', function (e) { e.preventDefault(); var target = $(this).attr("href"); $('html, body').stop().animate({ scrollTop: $(target).offset().top }, 600, function () { location.hash = target }); return !1 }); var sk_canvas = $('.sk-canvas'); if (sk_canvas.length) { $('.sk-canvas1 .image > div').animate({ deg: 360 }, { duration: 1000, step: function (now) { $(this).css({ 'left': '0' }) } }) }
        if ($('.site-blog-heading').length) { $(".heading-title-mobile a").click(function () { $('.heading-title-mobile').toggleClass('active'); $(".list-dropdown").slideToggle() }) }
    }); $(window).scroll(function () {
        var scroll = $(window).scrollTop(); if (scroll > 10) { $("body").addClass("sk-window-scroll") } else { $("body").removeClass("sk-window-scroll") }
        if ($('.sk-page-section').length) { $('.sk-page-section').each(function (i) { if ($(this).position().top <= scroll) { $('.sk-custom-nav-scroll a.active').removeClass('active'); $('.sk-custom-nav-scroll a').eq(i).addClass('active') } }) }
        var sk_canvas = $('.sk-canvas'); if (sk_canvas.length) {
            var dong_hanh = $('#sk-section-dong-hanh').offset().top; var su_menh = $('#sk-section-su-menh').offset().top; var tien_phong = $('#sk-section-tien-phong').offset().top; var news = $('#sk-section-news').offset().top; var xa_hoi = $('#sk-section-xa-hoi').offset().top; var scope_of_work = $('#sk-scope-of-work').offset().top; var image = $('.sk-canvas .image'); var title = $('.sk-canvas .content .title'); var sub_title = $('.sk-canvas .content .sub-title .text-sub'); var desc = $('.sk-canvas .content .description'); if (scroll === dong_hanh) { $('.sk-canvas2').css({ opacity: 1, visibility: 'visible' }); $('.sk-canvas3').css({ opacity: 0, visibility: 'hidden' }); $('.sk-canvas4').css({ opacity: 0, visibility: 'hidden' }); $('.sk-canvas5').css({ opacity: 0, visibility: 'hidden' }); $('.sk-canvas6').css({ opacity: 0, visibility: 'hidden' }) }
            if (scroll === su_menh) { $('.sk-canvas3').css({ opacity: 1, visibility: 'visible' }); $('.sk-canvas2').css({ opacity: 1, visibility: 'visible' }); $('.sk-canvas4').css({ opacity: 0, visibility: 'hidden' }); $('.sk-canvas5').css({ opacity: 0, visibility: 'hidden' }); $('.sk-canvas6').css({ opacity: 0, visibility: 'hidden' }) }
            if (scroll === tien_phong) { $('.sk-canvas4').css({ opacity: 1, visibility: 'visible' }); $('.sk-canvas2').css({ opacity: 1, visibility: 'visible' }); $('.sk-canvas3').css({ opacity: 1, visibility: 'visible' }); $('.sk-canvas5').css({ opacity: 0, visibility: 'hidden' }); $('.sk-canvas6').css({ opacity: 0, visibility: 'hidden' }) }
            if (scroll === news) { $('.sk-canvas5').css({ opacity: 1, visibility: 'visible' }); $('.sk-canvas2').css({ opacity: 1, visibility: 'visible' }); $('.sk-canvas3').css({ opacity: 1, visibility: 'visible' }); $('.sk-canvas4').css({ opacity: 1, visibility: 'visible' }); $('.sk-canvas6').css({ opacity: 0, visibility: 'hidden' }) }
            if (scroll === xa_hoi) { $('.sk-canvas6').css({ opacity: 1, visibility: 'visible' }); $('.sk-canvas2').css({ opacity: 1, visibility: 'visible' }); $('.sk-canvas3').css({ opacity: 1, visibility: 'visible' }); $('.sk-canvas4').css({ opacity: 1, visibility: 'visible' }); $('.sk-canvas5').css({ opacity: 0, visibility: 'hidden' }) }
            if (scroll >= su_menh) { $('.sk-canvas2').css({ opacity: 0, visibility: 'hidden' }) }
            if (scroll === 0) { $('.sk-canvas2').css({ opacity: 0, visibility: 'hidden' }) }
            if (scroll >= tien_phong) { $('.sk-canvas3').css({ opacity: 0, visibility: 'hidden' }) }
            if (scroll >= news) { $('.sk-canvas4').css({ opacity: 0, visibility: 'hidden' }) }
            if (scroll >= xa_hoi) { $('.sk-canvas5').css({ opacity: 0, visibility: 'hidden' }) }
            if (scroll >= scope_of_work) { $('.sk-canvas6').css({ opacity: 0, visibility: 'hidden' }) }
            if (scroll === dong_hanh) { $('.sk-canvas2 .image > div').animate({ deg: 360 }, { duration: 300, step: function (now) { $(this).css({ left: '0' }) } }) } else { $(".sk-canvas .image .image1").css("left", "-100%"); $(".sk-canvas .image .image2").css("left", "100%"); $(".sk-canvas .image .image3").css("left", "-100%"); $(".sk-canvas .image .image4").css("left", "100%") }
            if (scroll === su_menh) { $('.sk-canvas3 .image > div').animate({ deg: -360 }, { duration: 300, step: function (now) { $(this).css({ left: 0 }) } }) } else { $(".sk-canvas .image .image1").css("left", "-100%"); $(".sk-canvas .image .image2").css("left", "100%"); $(".sk-canvas .image .image3").css("left", "-100%"); $(".sk-canvas .image .image4").css("left", "100%") }
            if (scroll === tien_phong) { $('.sk-canvas4 .image > div').animate({ deg: -360 }, { duration: 300, step: function (now) { $(this).css({ left: 0 }) } }) } else { $(".sk-canvas .image .image1").css("left", "-100%"); $(".sk-canvas .image .image2").css("left", "100%"); $(".sk-canvas .image .image3").css("left", "-100%"); $(".sk-canvas .image .image4").css("left", "100%") }
            if (scroll === news) { $('.sk-canvas5 .image > div').animate({ deg: -360 }, { duration: 300, step: function (now) { $(this).css({ left: 0 }) } }) } else { $(".sk-canvas .image .image1").css("left", "-100%"); $(".sk-canvas .image .image2").css("left", "100%"); $(".sk-canvas .image .image3").css("left", "-100%"); $(".sk-canvas .image .image4").css("left", "100%") }
            if (scroll === xa_hoi) { $('.sk-canvas6 .image > div').animate({ deg: -360 }, { duration: 300, step: function (now) { $(this).css({ left: 0 }) } }) } else { $(".sk-canvas .image .image1").css("left", "-100%"); $(".sk-canvas .image .image2").css("left", "100%"); $(".sk-canvas .image .image3").css("left", "-100%"); $(".sk-canvas .image .image4").css("left", "100%") }
            if (scroll === 0) { $('.sk-canvas1 .image > div').animate({ deg: 360 }, { duration: 300, step: function (now) { $(this).css({ left: 0 }) } }) } else { $(".sk-canvas .image .image1").css("left", "-100%"); $(".sk-canvas .image .image2").css("left", "100%"); $(".sk-canvas .image .image3").css("left", "-100%"); $(".sk-canvas .image .image4").css("left", "100%") }
        }
    }); $(window).scroll(function () { if (timer_clear) clearTimeout(timer_clear); timer_clear = setTimeout(function () { let $scrollTop = $(this).scrollTop(); if ($scrollTop > 200) { $('#back-top').addClass('active_top') } else { $('#back-top').removeClass('active_top') } }, 100) }); $.fn.general_owlCarousel_custom = function (class_item) { let class_item_owlCarousel = $(class_item); if (class_item_owlCarousel.length) { class_item_owlCarousel.each(function () { let slider = $(this); if (!slider.hasClass('owl-carousel-init')) { let defaults = { autoplaySpeed: 800, navSpeed: 800, dotsSpeed: 800, autoHeight: !1, navText: ['', ''], }; let config = $.extend(defaults, slider.data('settings-owl')); slider.owlCarousel(config).addClass('owl-carousel-init') } }) } }
})(jQuery)
    ;
1