/**
 * Number.isInteger()
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger#Polyfill
 */
Number.isInteger = Number.isInteger || function (value) {
    return typeof value === 'number' &&
        isFinite(value) &&
        Math.floor(value) === value;
};

/**
 * Element.hasAttribute()
 * @link https://developer.mozilla.org/en-US/docs/Web/API/Element/hasAttribute#Polyfill
 */
; (function (prototype) {
    prototype.hasAttribute = prototype.hasAttribute || function (name) {
        return !!(this.attributes[name] &&
            this.attributes[name].specified);
    }
})(Element.prototype);

/**
 * NodeList.prototype.forEach()
 * @link https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach#Polyfill
 */
if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}