//  Hyphen Tamer (0.1)
//  http://github.com/ericprice/hyphen-tamer
//  By Eric Price (http://ericprice.cc)
//  MIT License

;(function($, window, document, undefined) {
    
    var pluginName = 'hyphen-tamer',
        defaults = {
        propertyName: 'value'
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
            // Place initialization logic here
            // You already have access to the DOM element and
            // the options via the instance, e.g. this.element
            // and this.settings
            // you can add more functions like the one below and
            // call them like so: this.yourOtherFunction(this.element, this.settings).
            console.log('xD');
        },
        yourOtherFunction: function() {
            // some logic
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
