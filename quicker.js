(function color() {
    var elements = document.querySelectorAll('[color]');
    elements.forEach(function(element) {
        var color = element.getAttribute('color');
        element.style.background = color;
    });
})();

(function text() {
    var elements = document.querySelectorAll('[text]');
    elements.forEach(function(element) {
        var text = element.getAttribute('text');
        element.style.color = text;
    });
})();

(function lr() {
    var elements = document.querySelectorAll('[lr]');
    elements.forEach(function(element) {
        var lr = element.getAttribute('lr');
        element.style.paddingLeft = lr;
        element.style.paddingRight = lr;
    });
})();

(function ud() {
    var elements = document.querySelectorAll('[ud]');
    elements.forEach(function(element) {
        var ud = element.getAttribute('ud');
        element.style.paddingTop = ud;
        element.style.paddingBottom = ud;
    });
})();

(function radius() {
    var elements = document.querySelectorAll('[radius]');
    elements.forEach(function(element) {
        var radius = element.getAttribute('radius');
        element.style.radius = radius;
    });
})();

(function font() {
    var elements = document.querySelectorAll('[font]');
    elements.forEach(function(element) {
        var font = element.getAttribute('font');
        element.style.fontSize = font;
    });
})();