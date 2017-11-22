window.spinny = (function () {
    function Spinny (els) {

    }

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
