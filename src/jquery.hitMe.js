/*!
 * jQuery hitMe Plugin v0.1
 * https://github.com/xyz
 * Copyright 2016 Roel Van Gils (@roelvangils)
 * Released under the MIT license
 */

(function( $ ) {

  $.fn.hitMe = function(target) {

    /*!
     * By default, the plugin will apply to the first link element in the container
     * Optionally, the plugin accepts a CSS or jQuery selector as its only parameter.
     * This selector should point to a single link that's inside of the element(s) that you apply this plugin on.
     * Some examples:
     * - h2 > a
     * - .more
    */

    // This CSS selector will expand each <i data-hitarea /> to the dimensions of its (relatively positioned) container
    var $css = "<style>i.hitMe{display:block;position:absolute;top:0;left:0;width:100%;height:100%;opacity:0;}</style>";

    // Insert CSS before </body> (if not already set by another call of this plugin)
    $('body:not([data-hitMe-set])').append($css).attr('data-hitMe-set', true);

    // Loop through all HTML elements that match query selector
    return this.each(function() {

      var $container = $(this);

      // If target element is not specified, use first link in container
      var $target = $container.find( target ? target : 'a' ).first();

      // Apply only if target element is a (single) link
      if ($target.is('a')) {

        // Set positioning context so hit area will not stretch beyond container
        $container.css('position','relative');

        // Add invisible hit area to target link
        $target.append('<i class="hitMe" />');

        // Ensure that all other links, buttons and input fields inside container remain functional
        $container.find('a, button, input, textarea').not($target).css({ 'position' : 'relative' , 'z-index' : '9999' });

        console.log($target);
      };
    });

  };

}( jQuery ));
