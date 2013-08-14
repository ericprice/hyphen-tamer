//  Hyphen Tamer (0.1)
//  http://github.com/ericprice/hyphen-tamer
//  By Eric Price (http://ericprice.cc)
//  MIT License

;(function($, window, document, undefined) {
    
    var pluginName = 'tame',
        defaults = {
        appliedClass: 'no-hyphenation'
    };

    function Plugin(element, options) {
        this.element = element;
        this.settings = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    Plugin.prototype = {
        init: function() {
            this.tame(this.element, this.settings);
        },
        tame: function(targetElement, settings) {
            $(targetElement).each(function() {
                var pattern = /([A-Z][a-zA-Z0-9-]*[\s]{0,0})/g;
                var before = '<span class="' + settings.appliedClass + '">';
                var after = '</span>';
                $(this).html($(this).html().replace(pattern, before + '$1' + after));
            });
        }
    };

    $.fn[pluginName] = function(options) {
        return this.each(function() {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName, new Plugin(this, options));
            }
        });
    };

})(jQuery, window, document);
