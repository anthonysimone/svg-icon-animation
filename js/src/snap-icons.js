/**
 * @file
 * A JavaScript file for the theme.
 */

!function ($) {
  // Always use strict mode to enable better error handling in modern browsers.
  "use strict";

  $(document).ready(function() 

    var baseUrl = window.location.protocol + '//' + window.location.host;

    var $icons = $('.snap-icon');
    $icons.each(function(index, value) {
      var s = new Snap(value);
      Snap.load(baseUrl + $(this).attr('data-url'), function (response) {
        var inlineSvg = response;
        s.append(inlineSvg);
      });
    });

  });

}(jQuery);