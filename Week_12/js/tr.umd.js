!(function (o, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? e(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], e)
    : e(
        (((o =
          "undefined" != typeof globalThis ? globalThis : o || self).Fancybox =
          o.Fancybox || {}),
        (o.Fancybox.l10n = o.Fancybox.l10n || {}))
      );
})(this, function (o) {
  "use strict";
  const e = Object.assign(
    Object.assign(
      {},
      {
        PANUP: "Move up",
        PANDOWN: "Move down",
        PANLEFT: "Move left",
        PANRIGHT: "Move right",
        ZOOMIN: "Zoom in",
        ZOOMOUT: "Zoom out",
        TOGGLEZOOM: "Toggle zoom level",
        TOGGLE1TO1: "Toggle zoom level",
        ITERATEZOOM: "Toggle zoom level",
        ROTATECCW: "Rotate counterclockwise",
        ROTATECW: "Rotate clockwise",
        FLIPX: "Flip horizontally",
        FLIPY: "Flip vertically",
        FITX: "Fit horizontally",
        FITY: "Fit vertically",
        RESET: "Reset",
        TOGGLEFS: "Toggle fullscreen",
      }
    ),
    {
      CLOSE: "Kapat",
      NEXT: "Sonraki",
      PREV: "Önceki",
      MODAL: "You can close this modal content with the ESC key",
      ERROR: "Something Went Wrong, Please Try Again Later",
      IMAGE_ERROR: "Image Not Found",
      ELEMENT_NOT_FOUND: "HTML Element Not Found",
      AJAX_NOT_FOUND: "Error Loading AJAX : Not Found",
      AJAX_FORBIDDEN: "Error Loading AJAX : Forbidden",
      IFRAME_ERROR: "Error Loading Page",
      TOGGLE_ZOOM: "Toggle zoom level",
      TOGGLE_THUMBS: "Toggle thumbnails",
      TOGGLE_SLIDESHOW: "Toggle slideshow",
      TOGGLE_FULLSCREEN: "Tam ekran modu için geçiş yap",
      DOWNLOAD: "Download",
    }
  );
  o.tr = e;
});