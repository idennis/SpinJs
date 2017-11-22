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

    Spinny.prototype.forEach = function (callback) {
        this.map(callback);
        return this;
    };

    Spinny.prototype.mapOne = function (callback) {
        var m = this.map(callback);
        return m.length > 1 ? m : m[0];
    };

    Spinny.prototype.text = function (text) {
        if (typeof text !== "undefined") {
            return this.forEach(function (el) {
                el.innerText = text;
            });
        } else {
            return this.mapOne(function (el) {
                return el.innerText;
            });
        }
    };

    Spinny.prototype.html = function (html) {
        if (typeof html !== "undefined") {
            this.forEach(function (el) {
                el.innerHTML = html;
            });
            return this;
        } else {
            return this.mapOne(function (el) {
                return el.innerHTML;
            });
        }
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
                console.log(els)
                return new Spinny(els);
        }
    };

    return spinny;
}());
