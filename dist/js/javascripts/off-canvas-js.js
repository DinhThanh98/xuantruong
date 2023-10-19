jQuery(document).ready(function ($) {
  "use strict";
  var container = $("body");
  $(".off-canvas-btn, #off-canvas-close, .sk-overlay").click(function () {
    if (container.hasClass("canvas-menu-open")) {
      container.removeClass("canvas-menu-open");
    } else {
      container.addClass("canvas-menu-open");
    }
  });
});
