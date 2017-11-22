window.spinny = (function () {

    function Spinny (els) {
        for (var i = 0; i < els.length; i++ ) {
               this[i] = els[i];
           }
           this.length = els.length;
    }

    Spinny.prototype.map = function (callback) {
        var results = [], i = 0;
        for ( ; i < this.length; i++) {
            results.push(callback.call(this, this[i], i));
        }
        return results;
    };

    Spinny.prototype.forEach(callback) {
        this.map(callback);
        return this;
    };
    var spinny = {
        get: function (selector) {
            var els;
                if (typeof selector === "string") {
                    els = document.querySelectorAll(selector);
                } else if (selector.length) {
                    els = selector;
                } else {
                    els = [selector];
                }
                return new Spinny(els);
        }
    };

    return spinny;
}());
