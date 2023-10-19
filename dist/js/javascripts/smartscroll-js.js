(function ($) {
    var selector = ".section"; var $slides = $(selector); var currentSlide = 0; var isAnimating = !1; var stopAnimation = function () { setTimeout(function () { isAnimating = !1 }, 300) }; var bottomIsReached = function ($elem) { var rect = $elem[0].getBoundingClientRect(); return rect.bottom <= $(window).height() }; var topIsReached = function ($elem) { var rect = $elem[0].getBoundingClientRect(); return rect.top >= 0 }; document.addEventListener("wheel", function (event) {
        var $currentSlide = $($slides[currentSlide]); if (isAnimating) { event.preventDefault(); return }
        var direction = -event.deltaY; if (direction < 0) { if (currentSlide + 1 >= $slides.length) return; if (!bottomIsReached($currentSlide)) return; event.preventDefault(); currentSlide++; var $slide = $($slides[currentSlide]); var offsetTop = $slide.offset().top; isAnimating = !0; $("html, body").animate({ scrollTop: offsetTop }, 1000, stopAnimation) } else { if (currentSlide - 1 < 0) return; if (!topIsReached($currentSlide)) return; event.preventDefault(); currentSlide--; var $slide = $($slides[currentSlide]); var offsetTop = $slide.offset().top; isAnimating = !0; $("html, body").animate({ scrollTop: offsetTop }, 1000, stopAnimation) }
    }, { passive: !1 })
})(jQuery)
    ;
