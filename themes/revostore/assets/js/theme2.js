/***
 * 2007-2024 ETS-Soft
 *
 * NOTICE OF LICENSE
 *
 * This file is not open source! Each license that you purchased is only available for 1 wesite only.
 * If you want to use this file on more websites (or projects), you need to purchase additional licenses. 
 * You are not allowed to redistribute, resell, lease, license, sub-license or offer our resources to any third party.
 * 
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please contact us for extra customization service at an affordable price
 *
 *  @author ETS-Soft <etssoft.jsc@gmail.com>
 *  @copyright  2007-2024 ETS-Soft
 *  @license    Valid for 1 website (or project) for each purchase of license
 *  International Registered Trademark & Property of ETS-Soft
 */
! function(e) {
    function t(i) {
        if (n[i]) return n[i].exports;
        var r = n[i] = {
            exports: {},
            id: i,
            loaded: !1
        };
        return e[i].call(r.exports, r, r.exports, t), r.loaded = !0, r.exports
    }
    var n = {};
    return t.m = e, t.c = n, t.p = "", t(0)
}([function(e, t, n) {
    e.exports = n(1)
}, function(e, t, n) {
    /***
 * 2007-2024 ETS-Soft
 *
 * NOTICE OF LICENSE
 *
 * This file is not open source! Each license that you purchased is only available for 1 wesite only.
 * If you want to use this file on more websites (or projects), you need to purchase additional licenses. 
 * You are not allowed to redistribute, resell, lease, license, sub-license or offer our resources to any third party.
 * 
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please contact us for extra customization service at an affordable price
 *
 *  @author ETS-Soft <etssoft.jsc@gmail.com>
 *  @copyright  2007-2024 ETS-Soft
 *  @license    Valid for 1 website (or project) for each purchase of license
 *  International Registered Trademark & Property of ETS-Soft
 */
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    n(2), n(4), n(5), n(6), n(7), n(52), n(55), n(56), n(57), n(60), n(61);
    var r = n(62),
        o = i(r),
        a = n(63),
        s = i(a),
        l = n(59),
        u = i(l),
        c = n(64),
        f = i(c),
        d = n(65),
        h = i(d),
        p = n(54),
        m = i(p),
        g = n(66),
        v = i(g);
    n(67), n(68), n(69);
    for (var y in v.default.prototype) m.default[y] = v.default.prototype[y];
    $(document).ready(function() {
        var e = $(".js-dropdown"),
            t = new s.default,
            n = $('.js-top-menu ul[data-depth="0"]'),
            i = new o.default(e),
            r = new h.default(n),
            a = new u.default,
            l = new f.default;
        i.init(), t.init(), r.init(), a.init(), l.init()
    })
}, function(e, t, n) {
    (function(t) {
        e.exports = t.Tether = n(3)
    }).call(t, function() {
        return this
    }())
}, function(e, t, n) {
    var i, r; /**! tether 1.4.0 */
    ! function(o, a) {
        i = a, r = "function" == typeof i ? i.call(t, n, t, e) : i, !(void 0 !== r && (e.exports = r))
    }(this, function(e, t, n) {
        "use strict";

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function r(e) {
            var t = e.getBoundingClientRect(),
                n = {};
            for (var i in t) n[i] = t[i];
            if (e.ownerDocument !== document) {
                var o = e.ownerDocument.defaultView.frameElement;
                if (o) {
                    var a = r(o);
                    n.top += a.top, n.bottom += a.top, n.left += a.left, n.right += a.left
                }
            }
            return n
        }

        function o(e) {
            var t = getComputedStyle(e) || {},
                n = t.position,
                i = [];
            if ("fixed" === n) return [e];
            for (var r = e;
                (r = r.parentNode) && r && 1 === r.nodeType;) {
                var o = void 0;
                try {
                    o = getComputedStyle(r)
                } catch (e) {}
                if ("undefined" == typeof o || null === o) return i.push(r), i;
                var a = o,
                    s = a.overflow,
                    l = a.overflowX,
                    u = a.overflowY;
                /(auto|scroll)/.test(s + u + l) && ("absolute" !== n || ["relative", "absolute", "fixed"].indexOf(o.position) >= 0) && i.push(r)
            }
            return i.push(e.ownerDocument.body), e.ownerDocument !== document && i.push(e.ownerDocument.defaultView), i
        }

        function a() {
            C && document.body.removeChild(C), C = null
        }

        function s(e) {
            var t = void 0;
            e === document ? (t = document, e = document.documentElement) : t = e.ownerDocument;
            var n = t.documentElement,
                i = r(e),
                o = k();
            return i.top -= o.top, i.left -= o.left, "undefined" == typeof i.width && (i.width = document.body.scrollWidth - i.left - i.right), "undefined" == typeof i.height && (i.height = document.body.scrollHeight - i.top - i.bottom), i.top = i.top - n.clientTop, i.left = i.left - n.clientLeft, i.right = t.body.clientWidth - i.width - i.left, i.bottom = t.body.clientHeight - i.height - i.top, i
        }

        function l(e) {
            return e.offsetParent || document.documentElement
        }

        function u() {
            if (I) return I;
            var e = document.createElement("div");
            e.style.width = "100%", e.style.height = "200px";
            var t = document.createElement("div");
            c(t.style, {
                position: "absolute",
                top: 0,
                left: 0,
                pointerEvents: "none",
                visibility: "hidden",
                width: "200px",
                height: "150px",
                overflow: "hidden"
            }), t.appendChild(e), document.body.appendChild(t);
            var n = e.offsetWidth;
            t.style.overflow = "scroll";
            var i = e.offsetWidth;
            n === i && (i = t.clientWidth), document.body.removeChild(t);
            var r = n - i;
            return I = {
                width: r,
                height: r
            }
        }

        function c() {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                t = [];
            return Array.prototype.push.apply(t, arguments), t.slice(1).forEach(function(t) {
                if (t)
                    for (var n in t)({}).hasOwnProperty.call(t, n) && (e[n] = t[n])
            }), e
        }

        function f(e, t) {
            if ("undefined" != typeof e.classList) t.split(" ").forEach(function(t) {
                t.trim() && e.classList.remove(t)
            });
            else {
                var n = new RegExp("(^| )" + t.split(" ").join("|") + "( |$)", "gi"),
                    i = p(e).replace(n, " ");
                m(e, i)
            }
        }

        function d(e, t) {
            if ("undefined" != typeof e.classList) t.split(" ").forEach(function(t) {
                t.trim() && e.classList.add(t)
            });
            else {
                f(e, t);
                var n = p(e) + (" " + t);
                m(e, n)
            }
        }

        function h(e, t) {
            if ("undefined" != typeof e.classList) return e.classList.contains(t);
            var n = p(e);
            return new RegExp("(^| )" + t + "( |$)", "gi").test(n)
        }

        function p(e) {
            return e.className instanceof e.ownerDocument.defaultView.SVGAnimatedString ? e.className.baseVal : e.className
        }

        function m(e, t) {
            e.setAttribute("class", t)
        }

        function g(e, t, n) {
            n.forEach(function(n) {
                t.indexOf(n) === -1 && h(e, n) && f(e, n)
            }), t.forEach(function(t) {
                h(e, t) || d(e, t)
            })
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function v(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }

        function y(e, t) {
            var n = arguments.length <= 2 || void 0 === arguments[2] ? 1 : arguments[2];
            return e + n >= t && t >= e - n
        }

        function b() {
            return "undefined" != typeof performance && "undefined" != typeof performance.now ? performance.now() : +new Date
        }

        function _() {
            for (var e = {
                    top: 0,
                    left: 0
                }, t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
            return n.forEach(function(t) {
                var n = t.top,
                    i = t.left;
                "string" == typeof n && (n = parseFloat(n, 10)), "string" == typeof i && (i = parseFloat(i, 10)), e.top += n, e.left += i
            }), e
        }

        function x(e, t) {
            return "string" == typeof e.left && e.left.indexOf("%") !== -1 && (e.left = parseFloat(e.left, 10) / 100 * t.width), "string" == typeof e.top && e.top.indexOf("%") !== -1 && (e.top = parseFloat(e.top, 10) / 100 * t.height), e
        }

        function w(e, t) {
            return "scrollParent" === t ? t = e.scrollParents[0] : "window" === t && (t = [pageXOffset, pageYOffset, innerWidth + pageXOffset, innerHeight + pageYOffset]), t === document && (t = t.documentElement), "undefined" != typeof t.nodeType && ! function() {
                var e = t,
                    n = s(t),
                    i = n,
                    r = getComputedStyle(t);
                if (t = [i.left, i.top, n.width + i.left, n.height + i.top], e.ownerDocument !== document) {
                    var o = e.ownerDocument.defaultView;
                    t[0] += o.pageXOffset, t[1] += o.pageYOffset, t[2] += o.pageXOffset, t[3] += o.pageYOffset
                }
                Y.forEach(function(e, n) {
                    e = e[0].toUpperCase() + e.substr(1), "Top" === e || "Left" === e ? t[n] += parseFloat(r["border" + e + "Width"]) : t[n] -= parseFloat(r["border" + e + "Width"])
                })
            }(), t
        }
        var S = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            E = void 0;
        "undefined" == typeof E && (E = {
            modules: []
        });
        var C = null,
            T = function() {
                var e = 0;
                return function() {
                    return ++e
                }
            }(),
            A = {},
            k = function() {
                var e = C;
                e && document.body.contains(e) || (e = document.createElement("div"), e.setAttribute("data-tether-id", T()), c(e.style, {
                    top: 0,
                    left: 0,
                    position: "absolute"
                }), document.body.appendChild(e), C = e);
                var t = e.getAttribute("data-tether-id");
                return "undefined" == typeof A[t] && (A[t] = r(e), D(function() {
                    delete A[t]
                })), A[t]
            },
            I = null,
            O = [],
            D = function(e) {
                O.push(e)
            },
            N = function() {
                for (var e = void 0; e = O.pop();) e()
            },
            P = function() {
                function e() {
                    i(this, e)
                }
                return S(e, [{
                    key: "on",
                    value: function(e, t, n) {
                        var i = !(arguments.length <= 3 || void 0 === arguments[3]) && arguments[3];
                        "undefined" == typeof this.bindings && (this.bindings = {}), "undefined" == typeof this.bindings[e] && (this.bindings[e] = []), this.bindings[e].push({
                            handler: t,
                            ctx: n,
                            once: i
                        })
                    }
                }, {
                    key: "once",
                    value: function(e, t, n) {
                        this.on(e, t, n, !0)
                    }
                }, {
                    key: "off",
                    value: function(e, t) {
                        if ("undefined" != typeof this.bindings && "undefined" != typeof this.bindings[e])
                            if ("undefined" == typeof t) delete this.bindings[e];
                            else
                                for (var n = 0; n < this.bindings[e].length;) this.bindings[e][n].handler === t ? this.bindings[e].splice(n, 1) : ++n
                    }
                }, {
                    key: "trigger",
                    value: function(e) {
                        if ("undefined" != typeof this.bindings && this.bindings[e]) {
                            for (var t = 0, n = arguments.length, i = Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) i[r - 1] = arguments[r];
                            for (; t < this.bindings[e].length;) {
                                var o = this.bindings[e][t],
                                    a = o.handler,
                                    s = o.ctx,
                                    l = o.once,
                                    u = s;
                                "undefined" == typeof u && (u = this), a.apply(u, i), l ? this.bindings[e].splice(t, 1) : ++t
                            }
                        }
                    }
                }]), e
            }();
        E.Utils = {
            getActualBoundingClientRect: r,
            getScrollParents: o,
            getBounds: s,
            getOffsetParent: l,
            extend: c,
            addClass: d,
            removeClass: f,
            hasClass: h,
            updateClasses: g,
            defer: D,
            flush: N,
            uniqueId: T,
            Evented: P,
            getScrollBarSize: u,
            removeUtilElements: a
        };
        var L = function() {
                function e(e, t) {
                    var n = [],
                        i = !0,
                        r = !1,
                        o = void 0;
                    try {
                        for (var a, s = e[Symbol.iterator](); !(i = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); i = !0);
                    } catch (e) {
                        r = !0, o = e
                    } finally {
                        try {
                            !i && s.return && s.return()
                        } finally {
                            if (r) throw o
                        }
                    }
                    return n
                }
                return function(t, n) {
                    if (Array.isArray(t)) return t;
                    if (Symbol.iterator in Object(t)) return e(t, n);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            }(),
            S = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            j = function(e, t, n) {
                for (var i = !0; i;) {
                    var r = e,
                        o = t,
                        a = n;
                    i = !1, null === r && (r = Function.prototype);
                    var s = Object.getOwnPropertyDescriptor(r, o);
                    if (void 0 !== s) {
                        if ("value" in s) return s.value;
                        var l = s.get;
                        if (void 0 === l) return;
                        return l.call(a)
                    }
                    var u = Object.getPrototypeOf(r);
                    if (null === u) return;
                    e = u, t = o, n = a, i = !0, s = u = void 0
                }
            };
        if ("undefined" == typeof E) throw new Error("You must include the utils.js file before tether.js");
        var B = E.Utils,
            o = B.getScrollParents,
            s = B.getBounds,
            l = B.getOffsetParent,
            c = B.extend,
            d = B.addClass,
            f = B.removeClass,
            g = B.updateClasses,
            D = B.defer,
            N = B.flush,
            u = B.getScrollBarSize,
            a = B.removeUtilElements,
            V = function() {
                if ("undefined" == typeof document) return "";
                for (var e = document.createElement("div"), t = ["transform", "WebkitTransform", "OTransform", "MozTransform", "msTransform"], n = 0; n < t.length; ++n) {
                    var i = t[n];
                    if (void 0 !== e.style[i]) return i
                }
            }(),
            F = [],
            R = function() {
                F.forEach(function(e) {
                    e.position(!1)
                }), N()
            };
        ! function() {
            var e = null,
                t = null,
                n = null,
                i = function i() {
                    return "undefined" != typeof t && t > 16 ? (t = Math.min(t - 16, 250), void(n = setTimeout(i, 250))) : void("undefined" != typeof e && b() - e < 10 || (null != n && (clearTimeout(n), n = null), e = b(), R(), t = b() - e))
                };
            "undefined" != typeof window && "undefined" != typeof window.addEventListener && ["resize", "scroll", "touchmove"].forEach(function(e) {
                window.addEventListener(e, i)
            })
        }();
        var M = {
                center: "center",
                left: "right",
                right: "left"
            },
            H = {
                middle: "middle",
                top: "bottom",
                bottom: "top"
            },
            W = {
                top: 0,
                left: 0,
                middle: "50%",
                center: "50%",
                bottom: "100%",
                right: "100%"
            },
            U = function(e, t) {
                var n = e.left,
                    i = e.top;
                return "auto" === n && (n = M[t.left]), "auto" === i && (i = H[t.top]), {
                    left: n,
                    top: i
                }
            },
            q = function(e) {
                var t = e.left,
                    n = e.top;
                return "undefined" != typeof W[e.left] && (t = W[e.left]), "undefined" != typeof W[e.top] && (n = W[e.top]), {
                    left: t,
                    top: n
                }
            },
            z = function(e) {
                var t = e.split(" "),
                    n = L(t, 2),
                    i = n[0],
                    r = n[1];
                return {
                    top: i,
                    left: r
                }
            },
            $ = z,
            Q = function(e) {
                function t(e) {
                    var n = this;
                    i(this, t), j(Object.getPrototypeOf(t.prototype), "constructor", this).call(this), this.position = this.position.bind(this), F.push(this), this.history = [], this.setOptions(e, !1), E.modules.forEach(function(e) {
                        "undefined" != typeof e.initialize && e.initialize.call(n)
                    }), this.position()
                }
                return v(t, e), S(t, [{
                    key: "getClass",
                    value: function() {
                        var e = arguments.length <= 0 || void 0 === arguments[0] ? "" : arguments[0],
                            t = this.options.classes;
                        return "undefined" != typeof t && t[e] ? this.options.classes[e] : this.options.classPrefix ? this.options.classPrefix + "-" + e : e
                    }
                }, {
                    key: "setOptions",
                    value: function(e) {
                        var t = this,
                            n = arguments.length <= 1 || void 0 === arguments[1] || arguments[1],
                            i = {
                                offset: "0 0",
                                targetOffset: "0 0",
                                targetAttachment: "auto auto",
                                classPrefix: "tether"
                            };
                        this.options = c(i, e);
                        var r = this.options,
                            a = r.element,
                            s = r.target,
                            l = r.targetModifier;
                        if (this.element = a, this.target = s, this.targetModifier = l, "viewport" === this.target ? (this.target = document.body, this.targetModifier = "visible") : "scroll-handle" === this.target && (this.target = document.body, this.targetModifier = "scroll-handle"), ["element", "target"].forEach(function(e) {
                                if ("undefined" == typeof t[e]) throw new Error("Tether Error: Both element and target must be defined");
                                "undefined" != typeof t[e].jquery ? t[e] = t[e][0] : "string" == typeof t[e] && (t[e] = document.querySelector(t[e]))
                            }), d(this.element, this.getClass("element")), this.options.addTargetClasses !== !1 && d(this.target, this.getClass("target")), !this.options.attachment) throw new Error("Tether Error: You must provide an attachment");
                        this.targetAttachment = $(this.options.targetAttachment), this.attachment = $(this.options.attachment), this.offset = z(this.options.offset), this.targetOffset = z(this.options.targetOffset), "undefined" != typeof this.scrollParents && this.disable(), "scroll-handle" === this.targetModifier ? this.scrollParents = [this.target] : this.scrollParents = o(this.target), this.options.enabled !== !1 && this.enable(n)
                    }
                }, {
                    key: "getTargetBounds",
                    value: function() {
                        if ("undefined" == typeof this.targetModifier) return s(this.target);
                        if ("visible" === this.targetModifier) {
                            if (this.target === document.body) return {
                                top: pageYOffset,
                                left: pageXOffset,
                                height: innerHeight,
                                width: innerWidth
                            };
                            var e = s(this.target),
                                t = {
                                    height: e.height,
                                    width: e.width,
                                    top: e.top,
                                    left: e.left
                                };
                            return t.height = Math.min(t.height, e.height - (pageYOffset - e.top)), t.height = Math.min(t.height, e.height - (e.top + e.height - (pageYOffset + innerHeight))), t.height = Math.min(innerHeight, t.height), t.height -= 2, t.width = Math.min(t.width, e.width - (pageXOffset - e.left)), t.width = Math.min(t.width, e.width - (e.left + e.width - (pageXOffset + innerWidth))), t.width = Math.min(innerWidth, t.width), t.width -= 2, t.top < pageYOffset && (t.top = pageYOffset), t.left < pageXOffset && (t.left = pageXOffset), t
                        }
                        if ("scroll-handle" === this.targetModifier) {
                            var e = void 0,
                                n = this.target;
                            n === document.body ? (n = document.documentElement, e = {
                                left: pageXOffset,
                                top: pageYOffset,
                                height: innerHeight,
                                width: innerWidth
                            }) : e = s(n);
                            var i = getComputedStyle(n),
                                r = n.scrollWidth > n.clientWidth || [i.overflow, i.overflowX].indexOf("scroll") >= 0 || this.target !== document.body,
                                o = 0;
                            r && (o = 15);
                            var a = e.height - parseFloat(i.borderTopWidth) - parseFloat(i.borderBottomWidth) - o,
                                t = {
                                    width: 15,
                                    height: .975 * a * (a / n.scrollHeight),
                                    left: e.left + e.width - parseFloat(i.borderLeftWidth) - 15
                                },
                                l = 0;
                            a < 408 && this.target === document.body && (l = -11e-5 * Math.pow(a, 2) - .00727 * a + 22.58), this.target !== document.body && (t.height = Math.max(t.height, 24));
                            var u = this.target.scrollTop / (n.scrollHeight - a);
                            return t.top = u * (a - t.height - l) + e.top + parseFloat(i.borderTopWidth), this.target === document.body && (t.height = Math.max(t.height, 24)), t
                        }
                    }
                }, {
                    key: "clearCache",
                    value: function() {
                        this._cache = {}
                    }
                }, {
                    key: "cache",
                    value: function(e, t) {
                        return "undefined" == typeof this._cache && (this._cache = {}), "undefined" == typeof this._cache[e] && (this._cache[e] = t.call(this)), this._cache[e]
                    }
                }, {
                    key: "enable",
                    value: function() {
                        var e = this,
                            t = arguments.length <= 0 || void 0 === arguments[0] || arguments[0];
                        this.options.addTargetClasses !== !1 && d(this.target, this.getClass("enabled")), d(this.element, this.getClass("enabled")), this.enabled = !0, this.scrollParents.forEach(function(t) {
                            t !== e.target.ownerDocument && t.addEventListener("scroll", e.position)
                        }), t && this.position()
                    }
                }, {
                    key: "disable",
                    value: function() {
                        var e = this;
                        f(this.target, this.getClass("enabled")), f(this.element, this.getClass("enabled")), this.enabled = !1, "undefined" != typeof this.scrollParents && this.scrollParents.forEach(function(t) {
                            t.removeEventListener("scroll", e.position)
                        })
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        var e = this;
                        this.disable(), F.forEach(function(t, n) {
                            t === e && F.splice(n, 1)
                        }), 0 === F.length && a()
                    }
                }, {
                    key: "updateAttachClasses",
                    value: function(e, t) {
                        var n = this;
                        e = e || this.attachment, t = t || this.targetAttachment;
                        var i = ["left", "top", "bottom", "right", "middle", "center"];
                        "undefined" != typeof this._addAttachClasses && this._addAttachClasses.length && this._addAttachClasses.splice(0, this._addAttachClasses.length), "undefined" == typeof this._addAttachClasses && (this._addAttachClasses = []);
                        var r = this._addAttachClasses;
                        e.top && r.push(this.getClass("element-attached") + "-" + e.top), e.left && r.push(this.getClass("element-attached") + "-" + e.left), t.top && r.push(this.getClass("target-attached") + "-" + t.top), t.left && r.push(this.getClass("target-attached") + "-" + t.left);
                        var o = [];
                        i.forEach(function(e) {
                            o.push(n.getClass("element-attached") + "-" + e), o.push(n.getClass("target-attached") + "-" + e)
                        }), D(function() {
                            "undefined" != typeof n._addAttachClasses && (g(n.element, n._addAttachClasses, o), n.options.addTargetClasses !== !1 && g(n.target, n._addAttachClasses, o), delete n._addAttachClasses)
                        })
                    }
                }, {
                    key: "position",
                    value: function() {
                        var e = this,
                            t = arguments.length <= 0 || void 0 === arguments[0] || arguments[0];
                        if (this.enabled) {
                            this.clearCache();
                            var n = U(this.targetAttachment, this.attachment);
                            this.updateAttachClasses(this.attachment, n);
                            var i = this.cache("element-bounds", function() {
                                    return s(e.element)
                                }),
                                r = i.width,
                                o = i.height;
                            if (0 === r && 0 === o && "undefined" != typeof this.lastSize) {
                                var a = this.lastSize;
                                r = a.width, o = a.height
                            } else this.lastSize = {
                                width: r,
                                height: o
                            };
                            var c = this.cache("target-bounds", function() {
                                    return e.getTargetBounds()
                                }),
                                f = c,
                                d = x(q(this.attachment), {
                                    width: r,
                                    height: o
                                }),
                                h = x(q(n), f),
                                p = x(this.offset, {
                                    width: r,
                                    height: o
                                }),
                                m = x(this.targetOffset, f);
                            d = _(d, p), h = _(h, m);
                            for (var g = c.left + h.left - d.left, v = c.top + h.top - d.top, y = 0; y < E.modules.length; ++y) {
                                var b = E.modules[y],
                                    w = b.position.call(this, {
                                        left: g,
                                        top: v,
                                        targetAttachment: n,
                                        targetPos: c,
                                        elementPos: i,
                                        offset: d,
                                        targetOffset: h,
                                        manualOffset: p,
                                        manualTargetOffset: m,
                                        scrollbarSize: A,
                                        attachment: this.attachment
                                    });
                                if (w === !1) return !1;
                                "undefined" != typeof w && "object" == typeof w && (v = w.top, g = w.left)
                            }
                            var S = {
                                    page: {
                                        top: v,
                                        left: g
                                    },
                                    viewport: {
                                        top: v - pageYOffset,
                                        bottom: pageYOffset - v - o + innerHeight,
                                        left: g - pageXOffset,
                                        right: pageXOffset - g - r + innerWidth
                                    }
                                },
                                C = this.target.ownerDocument,
                                T = C.defaultView,
                                A = void 0;
                            return T.innerHeight > C.documentElement.clientHeight && (A = this.cache("scrollbar-size", u), S.viewport.bottom -= A.height), T.innerWidth > C.documentElement.clientWidth && (A = this.cache("scrollbar-size", u), S.viewport.right -= A.width), ["", "static"].indexOf(C.body.style.position) !== -1 && ["", "static"].indexOf(C.body.parentElement.style.position) !== -1 || (S.page.bottom = C.body.scrollHeight - v - o, S.page.right = C.body.scrollWidth - g - r), "undefined" != typeof this.options.optimizations && this.options.optimizations.moveElement !== !1 && "undefined" == typeof this.targetModifier && ! function() {
                                var t = e.cache("target-offsetparent", function() {
                                        return l(e.target)
                                    }),
                                    n = e.cache("target-offsetparent-bounds", function() {
                                        return s(t)
                                    }),
                                    i = getComputedStyle(t),
                                    r = n,
                                    o = {};
                                if (["Top", "Left", "Bottom", "Right"].forEach(function(e) {
                                        o[e.toLowerCase()] = parseFloat(i["border" + e + "Width"])
                                    }), n.right = C.body.scrollWidth - n.left - r.width + o.right, n.bottom = C.body.scrollHeight - n.top - r.height + o.bottom, S.page.top >= n.top + o.top && S.page.bottom >= n.bottom && S.page.left >= n.left + o.left && S.page.right >= n.right) {
                                    var a = t.scrollTop,
                                        u = t.scrollLeft;
                                    S.offset = {
                                        top: S.page.top - n.top + a - o.top,
                                        left: S.page.left - n.left + u - o.left
                                    }
                                }
                            }(), this.move(S), this.history.unshift(S), this.history.length > 3 && this.history.pop(), t && N(), !0
                        }
                    }
                }, {
                    key: "move",
                    value: function(e) {
                        var t = this;
                        if ("undefined" != typeof this.element.parentNode) {
                            var n = {};
                            for (var i in e) {
                                n[i] = {};
                                for (var r in e[i]) {
                                    for (var o = !1, a = 0; a < this.history.length; ++a) {
                                        var s = this.history[a];
                                        if ("undefined" != typeof s[i] && !y(s[i][r], e[i][r])) {
                                            o = !0;
                                            break
                                        }
                                    }
                                    o || (n[i][r] = !0)
                                }
                            }
                            var u = {
                                    top: "",
                                    left: "",
                                    right: "",
                                    bottom: ""
                                },
                                f = function(e, n) {
                                    var i = "undefined" != typeof t.options.optimizations,
                                        r = i ? t.options.optimizations.gpu : null;
                                    if (r !== !1) {
                                        var o = void 0,
                                            a = void 0;
                                        if (e.top ? (u.top = 0, o = n.top) : (u.bottom = 0, o = -n.bottom), e.left ? (u.left = 0, a = n.left) : (u.right = 0, a = -n.right), window.matchMedia) {
                                            var s = window.matchMedia("only screen and (min-resolution: 1.3dppx)").matches || window.matchMedia("only screen and (-webkit-min-device-pixel-ratio: 1.3)").matches;
                                            s || (a = Math.round(a), o = Math.round(o))
                                        }
                                        u[V] = "translateX(" + a + "px) translateY(" + o + "px)", "msTransform" !== V && (u[V] += " translateZ(0)")
                                    } else e.top ? u.top = n.top + "px" : u.bottom = n.bottom + "px", e.left ? u.left = n.left + "px" : u.right = n.right + "px"
                                },
                                d = !1;
                            if ((n.page.top || n.page.bottom) && (n.page.left || n.page.right) ? (u.position = "absolute", f(n.page, e.page)) : (n.viewport.top || n.viewport.bottom) && (n.viewport.left || n.viewport.right) ? (u.position = "fixed", f(n.viewport, e.viewport)) : "undefined" != typeof n.offset && n.offset.top && n.offset.left ? ! function() {
                                    u.position = "absolute";
                                    var i = t.cache("target-offsetparent", function() {
                                        return l(t.target)
                                    });
                                    l(t.element) !== i && D(function() {
                                        t.element.parentNode.removeChild(t.element), i.appendChild(t.element)
                                    }), f(n.offset, e.offset), d = !0
                                }() : (u.position = "absolute", f({
                                    top: !0,
                                    left: !0
                                }, e.page)), !d)
                                if (this.options.bodyElement) this.options.bodyElement.appendChild(this.element);
                                else {
                                    for (var h = !0, p = this.element.parentNode; p && 1 === p.nodeType && "BODY" !== p.tagName;) {
                                        if ("static" !== getComputedStyle(p).position) {
                                            h = !1;
                                            break
                                        }
                                        p = p.parentNode
                                    }
                                    h || (this.element.parentNode.removeChild(this.element), this.element.ownerDocument.body.appendChild(this.element))
                                }
                            var m = {},
                                g = !1;
                            for (var r in u) {
                                var v = u[r],
                                    b = this.element.style[r];
                                b !== v && (g = !0, m[r] = v)
                            }
                            g && D(function() {
                                c(t.element.style, m), t.trigger("repositioned")
                            })
                        }
                    }
                }]), t
            }(P);
        Q.modules = [], E.position = R;
        var G = c(Q, E),
            L = function() {
                function e(e, t) {
                    var n = [],
                        i = !0,
                        r = !1,
                        o = void 0;
                    try {
                        for (var a, s = e[Symbol.iterator](); !(i = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); i = !0);
                    } catch (e) {
                        r = !0, o = e
                    } finally {
                        try {
                            !i && s.return && s.return()
                        } finally {
                            if (r) throw o
                        }
                    }
                    return n
                }
                return function(t, n) {
                    if (Array.isArray(t)) return t;
                    if (Symbol.iterator in Object(t)) return e(t, n);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            }(),
            B = E.Utils,
            s = B.getBounds,
            c = B.extend,
            g = B.updateClasses,
            D = B.defer,
            Y = ["left", "top", "right", "bottom"];
        E.modules.push({
            position: function(e) {
                var t = this,
                    n = e.top,
                    i = e.left,
                    r = e.targetAttachment;
                if (!this.options.constraints) return !0;
                var o = this.cache("element-bounds", function() {
                        return s(t.element)
                    }),
                    a = o.height,
                    l = o.width;
                if (0 === l && 0 === a && "undefined" != typeof this.lastSize) {
                    var u = this.lastSize;
                    l = u.width, a = u.height
                }
                var f = this.cache("target-bounds", function() {
                        return t.getTargetBounds()
                    }),
                    d = f.height,
                    h = f.width,
                    p = [this.getClass("pinned"), this.getClass("out-of-bounds")];
                this.options.constraints.forEach(function(e) {
                    var t = e.outOfBoundsClass,
                        n = e.pinnedClass;
                    t && p.push(t), n && p.push(n)
                }), p.forEach(function(e) {
                    ["left", "top", "right", "bottom"].forEach(function(t) {
                        p.push(e + "-" + t)
                    })
                });
                var m = [],
                    v = c({}, r),
                    y = c({}, this.attachment);
                return this.options.constraints.forEach(function(e) {
                    var o = e.to,
                        s = e.attachment,
                        u = e.pin;
                    "undefined" == typeof s && (s = "");
                    var c = void 0,
                        f = void 0;
                    if (s.indexOf(" ") >= 0) {
                        var p = s.split(" "),
                            g = L(p, 2);
                        f = g[0], c = g[1]
                    } else c = f = s;
                    var b = w(t, o);
                    "target" !== f && "both" !== f || (n < b[1] && "top" === v.top && (n += d, v.top = "bottom"), n + a > b[3] && "bottom" === v.top && (n -= d, v.top = "top")), "together" === f && ("top" === v.top && ("bottom" === y.top && n < b[1] ? (n += d, v.top = "bottom", n += a, y.top = "top") : "top" === y.top && n + a > b[3] && n - (a - d) >= b[1] && (n -= a - d, v.top = "bottom", y.top = "bottom")), "bottom" === v.top && ("top" === y.top && n + a > b[3] ? (n -= d, v.top = "top", n -= a, y.top = "bottom") : "bottom" === y.top && n < b[1] && n + (2 * a - d) <= b[3] && (n += a - d, v.top = "top", y.top = "top")), "middle" === v.top && (n + a > b[3] && "top" === y.top ? (n -= a, y.top = "bottom") : n < b[1] && "bottom" === y.top && (n += a, y.top = "top"))), "target" !== c && "both" !== c || (i < b[0] && "left" === v.left && (i += h, v.left = "right"), i + l > b[2] && "right" === v.left && (i -= h, v.left = "left")), "together" === c && (i < b[0] && "left" === v.left ? "right" === y.left ? (i += h, v.left = "right", i += l, y.left = "left") : "left" === y.left && (i += h, v.left = "right", i -= l, y.left = "right") : i + l > b[2] && "right" === v.left ? "left" === y.left ? (i -= h, v.left = "left", i -= l, y.left = "right") : "right" === y.left && (i -= h, v.left = "left", i += l, y.left = "left") : "center" === v.left && (i + l > b[2] && "left" === y.left ? (i -= l, y.left = "right") : i < b[0] && "right" === y.left && (i += l, y.left = "left"))), "element" !== f && "both" !== f || (n < b[1] && "bottom" === y.top && (n += a, y.top = "top"), n + a > b[3] && "top" === y.top && (n -= a, y.top = "bottom")), "element" !== c && "both" !== c || (i < b[0] && ("right" === y.left ? (i += l, y.left = "left") : "center" === y.left && (i += l / 2, y.left = "left")), i + l > b[2] && ("left" === y.left ? (i -= l, y.left = "right") : "center" === y.left && (i -= l / 2, y.left = "right"))), "string" == typeof u ? u = u.split(",").map(function(e) {
                        return e.trim()
                    }) : u === !0 && (u = ["top", "left", "right", "bottom"]), u = u || [];
                    var _ = [],
                        x = [];
                    n < b[1] && (u.indexOf("top") >= 0 ? (n = b[1], _.push("top")) : x.push("top")), n + a > b[3] && (u.indexOf("bottom") >= 0 ? (n = b[3] - a, _.push("bottom")) : x.push("bottom")), i < b[0] && (u.indexOf("left") >= 0 ? (i = b[0], _.push("left")) : x.push("left")), i + l > b[2] && (u.indexOf("right") >= 0 ? (i = b[2] - l, _.push("right")) : x.push("right")), _.length && ! function() {
                        var e = void 0;
                        e = "undefined" != typeof t.options.pinnedClass ? t.options.pinnedClass : t.getClass("pinned"), m.push(e), _.forEach(function(t) {
                            m.push(e + "-" + t)
                        })
                    }(), x.length && ! function() {
                        var e = void 0;
                        e = "undefined" != typeof t.options.outOfBoundsClass ? t.options.outOfBoundsClass : t.getClass("out-of-bounds"), m.push(e), x.forEach(function(t) {
                            m.push(e + "-" + t)
                        })
                    }(), (_.indexOf("left") >= 0 || _.indexOf("right") >= 0) && (y.left = v.left = !1), (_.indexOf("top") >= 0 || _.indexOf("bottom") >= 0) && (y.top = v.top = !1), v.top === r.top && v.left === r.left && y.top === t.attachment.top && y.left === t.attachment.left || (t.updateAttachClasses(y, v), t.trigger("update", {
                        attachment: y,
                        targetAttachment: v
                    }))
                }), D(function() {
                    t.options.addTargetClasses !== !1 && g(t.target, m, p), g(t.element, m, p)
                }), {
                    top: n,
                    left: i
                }
            }
        });
        var B = E.Utils,
            s = B.getBounds,
            g = B.updateClasses,
            D = B.defer;
        E.modules.push({
            position: function(e) {
                var t = this,
                    n = e.top,
                    i = e.left,
                    r = this.cache("element-bounds", function() {
                        return s(t.element)
                    }),
                    o = r.height,
                    a = r.width,
                    l = this.getTargetBounds(),
                    u = n + o,
                    c = i + a,
                    f = [];
                n <= l.bottom && u >= l.top && ["left", "right"].forEach(function(e) {
                    var t = l[e];
                    t !== i && t !== c || f.push(e)
                }), i <= l.right && c >= l.left && ["top", "bottom"].forEach(function(e) {
                    var t = l[e];
                    t !== n && t !== u || f.push(e)
                });
                var d = [],
                    h = [],
                    p = ["left", "top", "right", "bottom"];
                return d.push(this.getClass("abutted")), p.forEach(function(e) {
                    d.push(t.getClass("abutted") + "-" + e)
                }), f.length && h.push(this.getClass("abutted")), f.forEach(function(e) {
                    h.push(t.getClass("abutted") + "-" + e)
                }), D(function() {
                    t.options.addTargetClasses !== !1 && g(t.target, h, d), g(t.element, h, d)
                }), !0
            }
        });
        var L = function() {
            function e(e, t) {
                var n = [],
                    i = !0,
                    r = !1,
                    o = void 0;
                try {
                    for (var a, s = e[Symbol.iterator](); !(i = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); i = !0);
                } catch (e) {
                    r = !0, o = e
                } finally {
                    try {
                        !i && s.return && s.return()
                    } finally {
                        if (r) throw o
                    }
                }
                return n
            }
            return function(t, n) {
                if (Array.isArray(t)) return t;
                if (Symbol.iterator in Object(t)) return e(t, n);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }();
        return E.modules.push({
            position: function(e) {
                var t = e.top,
                    n = e.left;
                if (this.options.shift) {
                    var i = this.options.shift;
                    "function" == typeof this.options.shift && (i = this.options.shift.call(this, {
                        top: t,
                        left: n
                    }));
                    var r = void 0,
                        o = void 0;
                    if ("string" == typeof i) {
                        i = i.split(" "), i[1] = i[1] || i[0];
                        var a = i,
                            s = L(a, 2);
                        r = s[0], o = s[1], r = parseFloat(r, 10), o = parseFloat(o, 10)
                    } else r = i.top, o = i.left;
                    return t += r, n += o, {
                        top: t,
                        left: n
                    }
                }
            }
        }), G
    })
}, function(e, t) {
    /**!
     * Bootstrap v4.0.0-alpha.4 (http://getbootstrap.com)
     * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     */
    if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(e) {
        var t = e.fn.jquery.split(" ")[0].split(".");
        if (t[0] < 2 && t[1] < 9 || 1 == t[0] && 9 == t[1] && t[2] < 1 || t[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
    }(jQuery), + function(e) {
        "use strict";

        function t(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }

        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        var i = function(e, t, n) {
                for (var i = !0; i;) {
                    var r = e,
                        o = t,
                        a = n;
                    i = !1, null === r && (r = Function.prototype);
                    var s = Object.getOwnPropertyDescriptor(r, o);
                    if (void 0 !== s) {
                        if ("value" in s) return s.value;
                        var l = s.get;
                        if (void 0 === l) return;
                        return l.call(a)
                    }
                    var u = Object.getPrototypeOf(r);
                    if (null === u) return;
                    e = u, t = o, n = a, i = !0, s = u = void 0
                }
            },
            r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            o = function(e) {
                function t(e) {
                    return {}.toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
                }

                function n(e) {
                    return (e[0] || e).nodeType
                }

                function i() {
                    return {
                        bindType: s.end,
                        delegateType: s.end,
                        handle: function(t) {
                            if (e(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
                        }
                    }
                }

                function r() {
                    if (window.QUnit) return !1;
                    var e = document.createElement("bootstrap");
                    for (var t in u)
                        if (void 0 !== e.style[t]) return {
                            end: u[t]
                        };
                    return !1
                }

                function o(t) {
                    var n = this,
                        i = !1;
                    return e(this).one(c.TRANSITION_END, function() {
                        i = !0
                    }), setTimeout(function() {
                        i || c.triggerTransitionEnd(n)
                    }, t), this
                }

                function a() {
                    s = r(), e.fn.emulateTransitionEnd = o, c.supportsTransitionEnd() && (e.event.special[c.TRANSITION_END] = i())
                }
                var s = !1,
                    l = 1e6,
                    u = {
                        WebkitTransition: "webkitTransitionEnd",
                        MozTransition: "transitionend",
                        OTransition: "oTransitionEnd otransitionend",
                        transition: "transitionend"
                    },
                    c = {
                        TRANSITION_END: "bsTransitionEnd",
                        getUID: function(e) {
                            do e += ~~(Math.random() * l); while (document.getElementById(e));
                            return e
                        },
                        getSelectorFromElement: function(e) {
                            var t = e.getAttribute("data-target");
                            return t || (t = e.getAttribute("href") || "", t = /^#[a-z]/i.test(t) ? t : null), t
                        },
                        reflow: function(e) {
                            new Function("bs", "return bs")(e.offsetHeight)
                        },
                        triggerTransitionEnd: function(t) {
                            e(t).trigger(s.end)
                        },
                        supportsTransitionEnd: function() {
                            return Boolean(s)
                        },
                        typeCheckConfig: function(e, i, r) {
                            for (var o in r)
                                if (r.hasOwnProperty(o)) {
                                    var a = r[o],
                                        s = i[o],
                                        l = void 0;
                                    if (l = s && n(s) ? "element" : t(s), !new RegExp(a).test(l)) throw new Error(e.toUpperCase() + ": " + ('Option "' + o + '" provided type "' + l + '" ') + ('but expected type "' + a + '".'))
                                }
                        }
                    };
                return a(), c
            }(jQuery),
            a = (function(e) {
                var t = "alert",
                    i = "4.0.0-alpha.4",
                    a = "bs.alert",
                    s = "." + a,
                    l = ".data-api",
                    u = e.fn[t],
                    c = 150,
                    f = {
                        DISMISS: '[data-dismiss="alert"]'
                    },
                    d = {
                        CLOSE: "close" + s,
                        CLOSED: "closed" + s,
                        CLICK_DATA_API: "click" + s + l
                    },
                    h = {
                        ALERT: "alert",
                        FADE: "fade",
                        IN: "in"
                    },
                    p = function() {
                        function t(e) {
                            n(this, t), this._element = e
                        }
                        return r(t, [{
                            key: "close",
                            value: function(e) {
                                e = e || this._element;
                                var t = this._getRootElement(e),
                                    n = this._triggerCloseEvent(t);
                                n.isDefaultPrevented() || this._removeElement(t)
                            }
                        }, {
                            key: "dispose",
                            value: function() {
                                e.removeData(this._element, a), this._element = null
                            }
                        }, {
                            key: "_getRootElement",
                            value: function(t) {
                                var n = o.getSelectorFromElement(t),
                                    i = !1;
                                return n && (i = e(n)[0]), i || (i = e(t).closest("." + h.ALERT)[0]), i
                            }
                        }, {
                            key: "_triggerCloseEvent",
                            value: function(t) {
                                var n = e.Event(d.CLOSE);
                                return e(t).trigger(n), n
                            }
                        }, {
                            key: "_removeElement",
                            value: function(t) {
                                return e(t).removeClass(h.IN), o.supportsTransitionEnd() && e(t).hasClass(h.FADE) ? void e(t).one(o.TRANSITION_END, e.proxy(this._destroyElement, this, t)).emulateTransitionEnd(c) : void this._destroyElement(t)
                            }
                        }, {
                            key: "_destroyElement",
                            value: function(t) {
                                e(t).detach().trigger(d.CLOSED).remove()
                            }
                        }], [{
                            key: "_jQueryInterface",
                            value: function(n) {
                                return this.each(function() {
                                    var i = e(this),
                                        r = i.data(a);
                                    r || (r = new t(this), i.data(a, r)), "close" === n && r[n](this)
                                })
                            }
                        }, {
                            key: "_handleDismiss",
                            value: function(e) {
                                return function(t) {
                                    t && t.preventDefault(), e.close(this)
                                }
                            }
                        }, {
                            key: "VERSION",
                            get: function() {
                                return i
                            }
                        }]), t
                    }();
                return e(document).on(d.CLICK_DATA_API, f.DISMISS, p._handleDismiss(new p)), e.fn[t] = p._jQueryInterface, e.fn[t].Constructor = p, e.fn[t].noConflict = function() {
                    return e.fn[t] = u, p._jQueryInterface
                }, p
            }(jQuery), function(e) {
                var t = "button",
                    i = "4.0.0-alpha.4",
                    o = "bs.button",
                    a = "." + o,
                    s = ".data-api",
                    l = e.fn[t],
                    u = {
                        ACTIVE: "active",
                        BUTTON: "btn",
                        FOCUS: "focus"
                    },
                    c = {
                        DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
                        DATA_TOGGLE: '[data-toggle="buttons"]',
                        INPUT: "input",
                        ACTIVE: ".active",
                        BUTTON: ".btn"
                    },
                    f = {
                        CLICK_DATA_API: "click" + a + s,
                        FOCUS_BLUR_DATA_API: "focus" + a + s + " " + ("blur" + a + s)
                    },
                    d = function() {
                        function t(e) {
                            n(this, t), this._element = e
                        }
                        return r(t, [{
                            key: "toggle",
                            value: function() {
                                var t = !0,
                                    n = e(this._element).closest(c.DATA_TOGGLE)[0];
                                if (n) {
                                    var i = e(this._element).find(c.INPUT)[0];
                                    if (i) {
                                        if ("radio" === i.type)
                                            if (i.checked && e(this._element).hasClass(u.ACTIVE)) t = !1;
                                            else {
                                                var r = e(n).find(c.ACTIVE)[0];
                                                r && e(r).removeClass(u.ACTIVE)
                                            }
                                        t && (i.checked = !e(this._element).hasClass(u.ACTIVE), e(this._element).trigger("change")), i.focus()
                                    }
                                } else this._element.setAttribute("aria-pressed", !e(this._element).hasClass(u.ACTIVE));
                                t && e(this._element).toggleClass(u.ACTIVE)
                            }
                        }, {
                            key: "dispose",
                            value: function() {
                                e.removeData(this._element, o), this._element = null
                            }
                        }], [{
                            key: "_jQueryInterface",
                            value: function(n) {
                                return this.each(function() {
                                    var i = e(this).data(o);
                                    i || (i = new t(this), e(this).data(o, i)), "toggle" === n && i[n]()
                                })
                            }
                        }, {
                            key: "VERSION",
                            get: function() {
                                return i
                            }
                        }]), t
                    }();
                return e(document).on(f.CLICK_DATA_API, c.DATA_TOGGLE_CARROT, function(t) {
                    t.preventDefault();
                    var n = t.target;
                    e(n).hasClass(u.BUTTON) || (n = e(n).closest(c.BUTTON)), d._jQueryInterface.call(e(n), "toggle")
                }).on(f.FOCUS_BLUR_DATA_API, c.DATA_TOGGLE_CARROT, function(t) {
                    var n = e(t.target).closest(c.BUTTON)[0];
                    e(n).toggleClass(u.FOCUS, /^focus(in)?$/.test(t.type))
                }), e.fn[t] = d._jQueryInterface, e.fn[t].Constructor = d, e.fn[t].noConflict = function() {
                    return e.fn[t] = l, d._jQueryInterface
                }, d
            }(jQuery), function(e) {
                var t = "carousel",
                    i = "4.0.0-alpha.4",
                    a = "bs.carousel",
                    s = "." + a,
                    l = ".data-api",
                    u = e.fn[t],
                    c = 600,
                    f = 37,
                    d = 39,
                    h = {
                        interval: 5e3,
                        keyboard: !0,
                        slide: !1,
                        pause: "hover",
                        wrap: !0
                    },
                    p = {
                        interval: "(number|boolean)",
                        keyboard: "boolean",
                        slide: "(boolean|string)",
                        pause: "(string|boolean)",
                        wrap: "boolean"
                    },
                    m = {
                        NEXT: "next",
                        PREVIOUS: "prev"
                    },
                    g = {
                        SLIDE: "slide" + s,
                        SLID: "slid" + s,
                        KEYDOWN: "keydown" + s,
                        MOUSEENTER: "mouseenter" + s,
                        MOUSELEAVE: "mouseleave" + s,
                        LOAD_DATA_API: "load" + s + l,
                        CLICK_DATA_API: "click" + s + l
                    },
                    v = {
                        CAROUSEL: "carousel",
                        ACTIVE: "active",
                        SLIDE: "slide",
                        RIGHT: "right",
                        LEFT: "left",
                        ITEM: "carousel-item"
                    },
                    y = {
                        ACTIVE: ".active",
                        ACTIVE_ITEM: ".active.carousel-item",
                        ITEM: ".carousel-item",
                        NEXT_PREV: ".next, .prev",
                        INDICATORS: ".carousel-indicators",
                        DATA_SLIDE: "[data-slide], [data-slide-to]",
                        DATA_RIDE: '[data-ride="carousel"]'
                    },
                    b = function() {
                        function l(t, i) {
                            n(this, l), this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this._config = this._getConfig(i), this._element = e(t)[0], this._indicatorsElement = e(this._element).find(y.INDICATORS)[0], this._addEventListeners()
                        }
                        return r(l, [{
                            key: "next",
                            value: function() {
                                this._isSliding || this._slide(m.NEXT)
                            }
                        }, {
                            key: "nextWhenVisible",
                            value: function() {
                                document.hidden || this.next()
                            }
                        }, {
                            key: "prev",
                            value: function() {
                                this._isSliding || this._slide(m.PREVIOUS)
                            }
                        }, {
                            key: "pause",
                            value: function(t) {
                                t || (this._isPaused = !0), e(this._element).find(y.NEXT_PREV)[0] && o.supportsTransitionEnd() && (o.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
                            }
                        }, {
                            key: "cycle",
                            value: function(t) {
                                t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval(e.proxy(document.visibilityState ? this.nextWhenVisible : this.next, this), this._config.interval))
                            }
                        }, {
                            key: "to",
                            value: function(t) {
                                var n = this;
                                this._activeElement = e(this._element).find(y.ACTIVE_ITEM)[0];
                                var i = this._getItemIndex(this._activeElement);
                                if (!(t > this._items.length - 1 || t < 0)) {
                                    if (this._isSliding) return void e(this._element).one(g.SLID, function() {
                                        return n.to(t)
                                    });
                                    if (i === t) return this.pause(), void this.cycle();
                                    var r = t > i ? m.NEXT : m.PREVIOUS;
                                    this._slide(r, this._items[t])
                                }
                            }
                        }, {
                            key: "dispose",
                            value: function() {
                                e(this._element).off(s), e.removeData(this._element, a), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
                            }
                        }, {
                            key: "_getConfig",
                            value: function(n) {
                                return n = e.extend({}, h, n), o.typeCheckConfig(t, n, p), n
                            }
                        }, {
                            key: "_addEventListeners",
                            value: function() {
                                this._config.keyboard && e(this._element).on(g.KEYDOWN, e.proxy(this._keydown, this)), "hover" !== this._config.pause || "ontouchstart" in document.documentElement || e(this._element).on(g.MOUSEENTER, e.proxy(this.pause, this)).on(g.MOUSELEAVE, e.proxy(this.cycle, this))
                            }
                        }, {
                            key: "_keydown",
                            value: function(e) {
                                if (e.preventDefault(), !/input|textarea/i.test(e.target.tagName)) switch (e.which) {
                                    case f:
                                        this.prev();
                                        break;
                                    case d:
                                        this.next();
                                        break;
                                    default:
                                        return
                                }
                            }
                        }, {
                            key: "_getItemIndex",
                            value: function(t) {
                                return this._items = e.makeArray(e(t).parent().find(y.ITEM)), this._items.indexOf(t)
                            }
                        }, {
                            key: "_getItemByDirection",
                            value: function(e, t) {
                                var n = e === m.NEXT,
                                    i = e === m.PREVIOUS,
                                    r = this._getItemIndex(t),
                                    o = this._items.length - 1,
                                    a = i && 0 === r || n && r === o;
                                if (a && !this._config.wrap) return t;
                                var s = e === m.PREVIOUS ? -1 : 1,
                                    l = (r + s) % this._items.length;
                                return l === -1 ? this._items[this._items.length - 1] : this._items[l]
                            }
                        }, {
                            key: "_triggerSlideEvent",
                            value: function(t, n) {
                                var i = e.Event(g.SLIDE, {
                                    relatedTarget: t,
                                    direction: n
                                });
                                return e(this._element).trigger(i), i
                            }
                        }, {
                            key: "_setActiveIndicatorElement",
                            value: function(t) {
                                if (this._indicatorsElement) {
                                    e(this._indicatorsElement).find(y.ACTIVE).removeClass(v.ACTIVE);
                                    var n = this._indicatorsElement.children[this._getItemIndex(t)];
                                    n && e(n).addClass(v.ACTIVE)
                                }
                            }
                        }, {
                            key: "_slide",
                            value: function(t, n) {
                                var i = this,
                                    r = e(this._element).find(y.ACTIVE_ITEM)[0],
                                    a = n || r && this._getItemByDirection(t, r),
                                    s = Boolean(this._interval),
                                    l = t === m.NEXT ? v.LEFT : v.RIGHT;
                                if (a && e(a).hasClass(v.ACTIVE)) return void(this._isSliding = !1);
                                var u = this._triggerSlideEvent(a, l);
                                if (!u.isDefaultPrevented() && r && a) {
                                    this._isSliding = !0, s && this.pause(), this._setActiveIndicatorElement(a);
                                    var f = e.Event(g.SLID, {
                                        relatedTarget: a,
                                        direction: l
                                    });
                                    o.supportsTransitionEnd() && e(this._element).hasClass(v.SLIDE) ? (e(a).addClass(t), o.reflow(a), e(r).addClass(l), e(a).addClass(l), e(r).one(o.TRANSITION_END, function() {
                                        e(a).removeClass(l).removeClass(t), e(a).addClass(v.ACTIVE), e(r).removeClass(v.ACTIVE).removeClass(t).removeClass(l), i._isSliding = !1, setTimeout(function() {
                                            return e(i._element).trigger(f)
                                        }, 0)
                                    }).emulateTransitionEnd(c)) : (e(r).removeClass(v.ACTIVE), e(a).addClass(v.ACTIVE), this._isSliding = !1, e(this._element).trigger(f)), s && this.cycle()
                                }
                            }
                        }], [{
                            key: "_jQueryInterface",
                            value: function(t) {
                                return this.each(function() {
                                    var n = e(this).data(a),
                                        i = e.extend({}, h, e(this).data());
                                    "object" == typeof t && e.extend(i, t);
                                    var r = "string" == typeof t ? t : i.slide;
                                    if (n || (n = new l(this, i), e(this).data(a, n)), "number" == typeof t) n.to(t);
                                    else if ("string" == typeof r) {
                                        if (void 0 === n[r]) throw new Error('No method named "' + r + '"');
                                        n[r]()
                                    } else i.interval && (n.pause(), n.cycle())
                                })
                            }
                        }, {
                            key: "_dataApiClickHandler",
                            value: function(t) {
                                var n = o.getSelectorFromElement(this);
                                if (n) {
                                    var i = e(n)[0];
                                    if (i && e(i).hasClass(v.CAROUSEL)) {
                                        var r = e.extend({}, e(i).data(), e(this).data()),
                                            s = this.getAttribute("data-slide-to");
                                        s && (r.interval = !1), l._jQueryInterface.call(e(i), r), s && e(i).data(a).to(s), t.preventDefault()
                                    }
                                }
                            }
                        }, {
                            key: "VERSION",
                            get: function() {
                                return i
                            }
                        }, {
                            key: "Default",
                            get: function() {
                                return h
                            }
                        }]), l
                    }();
                return e(document).on(g.CLICK_DATA_API, y.DATA_SLIDE, b._dataApiClickHandler), e(window).on(g.LOAD_DATA_API, function() {
                    e(y.DATA_RIDE).each(function() {
                        var t = e(this);
                        b._jQueryInterface.call(t, t.data())
                    })
                }), e.fn[t] = b._jQueryInterface, e.fn[t].Constructor = b, e.fn[t].noConflict = function() {
                    return e.fn[t] = u, b._jQueryInterface
                }, b
            }(jQuery), function(e) {
                var t = "collapse",
                    i = "4.0.0-alpha.4",
                    a = "bs.collapse",
                    s = "." + a,
                    l = ".data-api",
                    u = e.fn[t],
                    c = 600,
                    f = {
                        toggle: !0,
                        parent: ""
                    },
                    d = {
                        toggle: "boolean",
                        parent: "string"
                    },
                    h = {
                        SHOW: "show" + s,
                        SHOWN: "shown" + s,
                        HIDE: "hide" + s,
                        HIDDEN: "hidden" + s,
                        CLICK_DATA_API: "click" + s + l
                    },
                    p = {
                        IN: "in",
                        COLLAPSE: "collapse",
                        COLLAPSING: "collapsing",
                        COLLAPSED: "collapsed"
                    },
                    m = {
                        WIDTH: "width",
                        HEIGHT: "height"
                    },
                    g = {
                        ACTIVES: ".panel > .in, .panel > .collapsing",
                        DATA_TOGGLE: '[data-toggle="collapse"]'
                    },
                    v = function() {
                        function s(t, i) {
                            n(this, s), this._isTransitioning = !1, this._element = t, this._config = this._getConfig(i), this._triggerArray = e.makeArray(e('[data-toggle="collapse"][href="#' + t.id + '"],' + ('[data-toggle="collapse"][data-target="#' + t.id + '"]'))), this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
                        }
                        return r(s, [{
                            key: "toggle",
                            value: function() {
                                e(this._element).hasClass(p.IN) ? this.hide() : this.show();
                            }
                        }, {
                            key: "show",
                            value: function() {
                                var t = this;
                                if (!this._isTransitioning && !e(this._element).hasClass(p.IN)) {
                                    var n = void 0,
                                        i = void 0;
                                    if (this._parent && (n = e.makeArray(e(g.ACTIVES)), n.length || (n = null)), !(n && (i = e(n).data(a), i && i._isTransitioning))) {
                                        var r = e.Event(h.SHOW);
                                        if (e(this._element).trigger(r), !r.isDefaultPrevented()) {
                                            n && (s._jQueryInterface.call(e(n), "hide"), i || e(n).data(a, null));
                                            var l = this._getDimension();
                                            e(this._element).removeClass(p.COLLAPSE).addClass(p.COLLAPSING), this._element.style[l] = 0, this._element.setAttribute("aria-expanded", !0), this._triggerArray.length && e(this._triggerArray).removeClass(p.COLLAPSED).attr("aria-expanded", !0), this.setTransitioning(!0);
                                            var u = function() {
                                                e(t._element).removeClass(p.COLLAPSING).addClass(p.COLLAPSE).addClass(p.IN), t._element.style[l] = "", t.setTransitioning(!1), e(t._element).trigger(h.SHOWN)
                                            };
                                            if (!o.supportsTransitionEnd()) return void u();
                                            var f = l[0].toUpperCase() + l.slice(1),
                                                d = "scroll" + f;
                                            e(this._element).one(o.TRANSITION_END, u).emulateTransitionEnd(c), this._element.style[l] = this._element[d] + "px"
                                        }
                                    }
                                }
                            }
                        }, {
                            key: "hide",
                            value: function() {
                                var t = this;
                                if (!this._isTransitioning && e(this._element).hasClass(p.IN)) {
                                    var n = e.Event(h.HIDE);
                                    if (e(this._element).trigger(n), !n.isDefaultPrevented()) {
                                        var i = this._getDimension(),
                                            r = i === m.WIDTH ? "offsetWidth" : "offsetHeight";
                                        this._element.style[i] = this._element[r] + "px", o.reflow(this._element), e(this._element).addClass(p.COLLAPSING).removeClass(p.COLLAPSE).removeClass(p.IN), this._element.setAttribute("aria-expanded", !1), this._triggerArray.length && e(this._triggerArray).addClass(p.COLLAPSED).attr("aria-expanded", !1), this.setTransitioning(!0);
                                        var a = function() {
                                            t.setTransitioning(!1), e(t._element).removeClass(p.COLLAPSING).addClass(p.COLLAPSE).trigger(h.HIDDEN)
                                        };
                                        return this._element.style[i] = 0, o.supportsTransitionEnd() ? void e(this._element).one(o.TRANSITION_END, a).emulateTransitionEnd(c) : void a()
                                    }
                                }
                            }
                        }, {
                            key: "setTransitioning",
                            value: function(e) {
                                this._isTransitioning = e
                            }
                        }, {
                            key: "dispose",
                            value: function() {
                                e.removeData(this._element, a), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
                            }
                        }, {
                            key: "_getConfig",
                            value: function(n) {
                                return n = e.extend({}, f, n), n.toggle = Boolean(n.toggle), o.typeCheckConfig(t, n, d), n
                            }
                        }, {
                            key: "_getDimension",
                            value: function() {
                                var t = e(this._element).hasClass(m.WIDTH);
                                return t ? m.WIDTH : m.HEIGHT
                            }
                        }, {
                            key: "_getParent",
                            value: function() {
                                var t = this,
                                    n = e(this._config.parent)[0],
                                    i = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
                                return e(n).find(i).each(function(e, n) {
                                    t._addAriaAndCollapsedClass(s._getTargetFromElement(n), [n])
                                }), n
                            }
                        }, {
                            key: "_addAriaAndCollapsedClass",
                            value: function(t, n) {
                                if (t) {
                                    var i = e(t).hasClass(p.IN);
                                    t.setAttribute("aria-expanded", i), n.length && e(n).toggleClass(p.COLLAPSED, !i).attr("aria-expanded", i)
                                }
                            }
                        }], [{
                            key: "_getTargetFromElement",
                            value: function(t) {
                                var n = o.getSelectorFromElement(t);
                                return n ? e(n)[0] : null
                            }
                        }, {
                            key: "_jQueryInterface",
                            value: function(t) {
                                return this.each(function() {
                                    var n = e(this),
                                        i = n.data(a),
                                        r = e.extend({}, f, n.data(), "object" == typeof t && t);
                                    if (!i && r.toggle && /show|hide/.test(t) && (r.toggle = !1), i || (i = new s(this, r), n.data(a, i)), "string" == typeof t) {
                                        if (void 0 === i[t]) throw new Error('No method named "' + t + '"');
                                        i[t]()
                                    }
                                })
                            }
                        }, {
                            key: "VERSION",
                            get: function() {
                                return i
                            }
                        }, {
                            key: "Default",
                            get: function() {
                                return f
                            }
                        }]), s
                    }();
                return e(document).on(h.CLICK_DATA_API, g.DATA_TOGGLE, function(t) {
                    t.preventDefault();
                    var n = v._getTargetFromElement(this),
                        i = e(n).data(a),
                        r = i ? "toggle" : e(this).data();
                    v._jQueryInterface.call(e(n), r)
                }), e.fn[t] = v._jQueryInterface, e.fn[t].Constructor = v, e.fn[t].noConflict = function() {
                    return e.fn[t] = u, v._jQueryInterface
                }, v
            }(jQuery), function(e) {
                var t = "dropdown",
                    i = "4.0.0-alpha.4",
                    a = "bs.dropdown",
                    s = "." + a,
                    l = ".data-api",
                    u = e.fn[t],
                    c = 27,
                    f = 38,
                    d = 40,
                    h = 3,
                    p = {
                        HIDE: "hide" + s,
                        HIDDEN: "hidden" + s,
                        SHOW: "show" + s,
                        SHOWN: "shown" + s,
                        CLICK: "click" + s,
                        CLICK_DATA_API: "click" + s + l,
                        KEYDOWN_DATA_API: "keydown" + s + l
                    },
                    m = {
                        BACKDROP: "dropdown-backdrop",
                        DISABLED: "disabled",
                        OPEN: "open"
                    },
                    g = {
                        BACKDROP: ".dropdown-backdrop",
                        DATA_TOGGLE: '[data-toggle="dropdown"]',
                        FORM_CHILD: ".dropdown form",
                        ROLE_MENU: '[role="menu"]',
                        ROLE_LISTBOX: '[role="listbox"]',
                        NAVBAR_NAV: ".navbar-nav",
                        VISIBLE_ITEMS: '[role="menu"] li:not(.disabled) a, [role="listbox"] li:not(.disabled) a'
                    },
                    v = function() {
                        function t(e) {
                            n(this, t), this._element = e, this._addEventListeners()
                        }
                        return r(t, [{
                            key: "toggle",
                            value: function() {
                                if (this.disabled || e(this).hasClass(m.DISABLED)) return !1;
                                var n = t._getParentFromElement(this),
                                    i = e(n).hasClass(m.OPEN);
                                if (t._clearMenus(), i) return !1;
                                if ("ontouchstart" in document.documentElement && !e(n).closest(g.NAVBAR_NAV).length) {
                                    var r = document.createElement("div");
                                    r.className = m.BACKDROP, e(r).insertBefore(this), e(r).on("click", t._clearMenus)
                                }
                                var o = {
                                        relatedTarget: this
                                    },
                                    a = e.Event(p.SHOW, o);
                                return e(n).trigger(a), !a.isDefaultPrevented() && (this.focus(), this.setAttribute("aria-expanded", "true"), e(n).toggleClass(m.OPEN), e(n).trigger(e.Event(p.SHOWN, o)), !1)
                            }
                        }, {
                            key: "dispose",
                            value: function() {
                                e.removeData(this._element, a), e(this._element).off(s), this._element = null
                            }
                        }, {
                            key: "_addEventListeners",
                            value: function() {
                                e(this._element).on(p.CLICK, this.toggle)
                            }
                        }], [{
                            key: "_jQueryInterface",
                            value: function(n) {
                                return this.each(function() {
                                    var i = e(this).data(a);
                                    if (i || e(this).data(a, i = new t(this)), "string" == typeof n) {
                                        if (void 0 === i[n]) throw new Error('No method named "' + n + '"');
                                        i[n].call(this)
                                    }
                                })
                            }
                        }, {
                            key: "_clearMenus",
                            value: function(n) {
                                if (!n || n.which !== h) {
                                    var i = e(g.BACKDROP)[0];
                                    i && i.parentNode.removeChild(i);
                                    for (var r = e.makeArray(e(g.DATA_TOGGLE)), o = 0; o < r.length; o++) {
                                        var a = t._getParentFromElement(r[o]),
                                            s = {
                                                relatedTarget: r[o]
                                            };
                                        if (e(a).hasClass(m.OPEN) && !(n && "click" === n.type && /input|textarea/i.test(n.target.tagName) && e.contains(a, n.target))) {
                                            var l = e.Event(p.HIDE, s);
                                            e(a).trigger(l), l.isDefaultPrevented() || (r[o].setAttribute("aria-expanded", "false"), e(a).removeClass(m.OPEN).trigger(e.Event(p.HIDDEN, s)))
                                        }
                                    }
                                }
                            }
                        }, {
                            key: "_getParentFromElement",
                            value: function(t) {
                                var n = void 0,
                                    i = o.getSelectorFromElement(t);
                                return i && (n = e(i)[0]), n || t.parentNode
                            }
                        }, {
                            key: "_dataApiKeydownHandler",
                            value: function(n) {
                                if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName) && (n.preventDefault(), n.stopPropagation(), !this.disabled && !e(this).hasClass(m.DISABLED))) {
                                    var i = t._getParentFromElement(this),
                                        r = e(i).hasClass(m.OPEN);
                                    if (!r && n.which !== c || r && n.which === c) {
                                        if (n.which === c) {
                                            var o = e(i).find(g.DATA_TOGGLE)[0];
                                            e(o).trigger("focus")
                                        }
                                        return void e(this).trigger("click")
                                    }
                                    var a = e.makeArray(e(g.VISIBLE_ITEMS));
                                    if (a = a.filter(function(e) {
                                            return e.offsetWidth || e.offsetHeight
                                        }), a.length) {
                                        var s = a.indexOf(n.target);
                                        n.which === f && s > 0 && s--, n.which === d && s < a.length - 1 && s++, s < 0 && (s = 0), a[s].focus()
                                    }
                                }
                            }
                        }, {
                            key: "VERSION",
                            get: function() {
                                return i
                            }
                        }]), t
                    }();
                return e(document).on(p.KEYDOWN_DATA_API, g.DATA_TOGGLE, v._dataApiKeydownHandler).on(p.KEYDOWN_DATA_API, g.ROLE_MENU, v._dataApiKeydownHandler).on(p.KEYDOWN_DATA_API, g.ROLE_LISTBOX, v._dataApiKeydownHandler).on(p.CLICK_DATA_API, v._clearMenus).on(p.CLICK_DATA_API, g.DATA_TOGGLE, v.prototype.toggle).on(p.CLICK_DATA_API, g.FORM_CHILD, function(e) {
                    e.stopPropagation()
                }), e.fn[t] = v._jQueryInterface, e.fn[t].Constructor = v, e.fn[t].noConflict = function() {
                    return e.fn[t] = u, v._jQueryInterface
                }, v
            }(jQuery), function(e) {
                var t = "modal",
                    i = "4.0.0-alpha.4",
                    a = "bs.modal",
                    s = "." + a,
                    l = ".data-api",
                    u = e.fn[t],
                    c = 300,
                    f = 150,
                    d = 27,
                    h = {
                        backdrop: !0,
                        keyboard: !0,
                        focus: !0,
                        show: !0
                    },
                    p = {
                        backdrop: "(boolean|string)",
                        keyboard: "boolean",
                        focus: "boolean",
                        show: "boolean"
                    },
                    m = {
                        HIDE: "hide" + s,
                        HIDDEN: "hidden" + s,
                        SHOW: "show" + s,
                        SHOWN: "shown" + s,
                        FOCUSIN: "focusin" + s,
                        RESIZE: "resize" + s,
                        CLICK_DISMISS: "click.dismiss" + s,
                        KEYDOWN_DISMISS: "keydown.dismiss" + s,
                        MOUSEUP_DISMISS: "mouseup.dismiss" + s,
                        MOUSEDOWN_DISMISS: "mousedown.dismiss" + s,
                        CLICK_DATA_API: "click" + s + l
                    },
                    g = {
                        SCROLLBAR_MEASURER: "modal-scrollbar-measure",
                        BACKDROP: "modal-backdrop",
                        OPEN: "modal-open",
                        FADE: "fade",
                        IN: "in"
                    },
                    v = {
                        DIALOG: ".modal-dialog",
                        DATA_TOGGLE: '[data-toggle="modal"]',
                        DATA_DISMISS: '[data-dismiss="modal"]',
                        FIXED_CONTENT: ".navbar-fixed-top, .navbar-fixed-bottom, .is-fixed"
                    },
                    y = function() {
                        function l(t, i) {
                            n(this, l), this._config = this._getConfig(i), this._element = t, this._dialog = e(t).find(v.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._originalBodyPadding = 0, this._scrollbarWidth = 0
                        }
                        return r(l, [{
                            key: "toggle",
                            value: function(e) {
                                return this._isShown ? this.hide() : this.show(e)
                            }
                        }, {
                            key: "show",
                            value: function(t) {
                                var n = this,
                                    i = e.Event(m.SHOW, {
                                        relatedTarget: t
                                    });
                                e(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), e(document.body).addClass(g.OPEN), this._setEscapeEvent(), this._setResizeEvent(), e(this._element).on(m.CLICK_DISMISS, v.DATA_DISMISS, e.proxy(this.hide, this)), e(this._dialog).on(m.MOUSEDOWN_DISMISS, function() {
                                    e(n._element).one(m.MOUSEUP_DISMISS, function(t) {
                                        e(t.target).is(n._element) && (n._ignoreBackdropClick = !0)
                                    })
                                }), this._showBackdrop(e.proxy(this._showElement, this, t)))
                            }
                        }, {
                            key: "hide",
                            value: function(t) {
                                t && t.preventDefault();
                                var n = e.Event(m.HIDE);
                                e(this._element).trigger(n), this._isShown && !n.isDefaultPrevented() && (this._isShown = !1, this._setEscapeEvent(), this._setResizeEvent(), e(document).off(m.FOCUSIN), e(this._element).removeClass(g.IN), e(this._element).off(m.CLICK_DISMISS), e(this._dialog).off(m.MOUSEDOWN_DISMISS), o.supportsTransitionEnd() && e(this._element).hasClass(g.FADE) ? e(this._element).one(o.TRANSITION_END, e.proxy(this._hideModal, this)).emulateTransitionEnd(c) : this._hideModal())
                            }
                        }, {
                            key: "dispose",
                            value: function() {
                                e.removeData(this._element, a), e(window).off(s), e(document).off(s), e(this._element).off(s), e(this._backdrop).off(s), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._originalBodyPadding = null, this._scrollbarWidth = null
                            }
                        }, {
                            key: "_getConfig",
                            value: function(n) {
                                return n = e.extend({}, h, n), o.typeCheckConfig(t, n, p), n
                            }
                        }, {
                            key: "_showElement",
                            value: function(t) {
                                var n = this,
                                    i = o.supportsTransitionEnd() && e(this._element).hasClass(g.FADE);
                                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, i && o.reflow(this._element), e(this._element).addClass(g.IN), this._config.focus && this._enforceFocus();
                                var r = e.Event(m.SHOWN, {
                                        relatedTarget: t
                                    }),
                                    a = function() {
                                        n._config.focus && n._element.focus(), e(n._element).trigger(r)
                                    };
                                i ? e(this._dialog).one(o.TRANSITION_END, a).emulateTransitionEnd(c) : a()
                            }
                        }, {
                            key: "_enforceFocus",
                            value: function() {
                                var t = this;
                                e(document).off(m.FOCUSIN).on(m.FOCUSIN, function(n) {
                                    document === n.target || t._element === n.target || e(t._element).has(n.target).length || t._element.focus()
                                })
                            }
                        }, {
                            key: "_setEscapeEvent",
                            value: function() {
                                var t = this;
                                this._isShown && this._config.keyboard ? e(this._element).on(m.KEYDOWN_DISMISS, function(e) {
                                    e.which === d && t.hide()
                                }) : this._isShown || e(this._element).off(m.KEYDOWN_DISMISS)
                            }
                        }, {
                            key: "_setResizeEvent",
                            value: function() {
                                this._isShown ? e(window).on(m.RESIZE, e.proxy(this._handleUpdate, this)) : e(window).off(m.RESIZE)
                            }
                        }, {
                            key: "_hideModal",
                            value: function() {
                                var t = this;
                                this._element.style.display = "none", this._element.setAttribute("aria-hidden", "true"), this._showBackdrop(function() {
                                    e(document.body).removeClass(g.OPEN), t._resetAdjustments(), t._resetScrollbar(), e(t._element).trigger(m.HIDDEN)
                                })
                            }
                        }, {
                            key: "_removeBackdrop",
                            value: function() {
                                this._backdrop && (e(this._backdrop).remove(), this._backdrop = null)
                            }
                        }, {
                            key: "_showBackdrop",
                            value: function(t) {
                                var n = this,
                                    i = e(this._element).hasClass(g.FADE) ? g.FADE : "";
                                if (this._isShown && this._config.backdrop) {
                                    var r = o.supportsTransitionEnd() && i;
                                    if (this._backdrop = document.createElement("div"), this._backdrop.className = g.BACKDROP, i && e(this._backdrop).addClass(i), e(this._backdrop).appendTo(document.body), e(this._element).on(m.CLICK_DISMISS, function(e) {
                                            return n._ignoreBackdropClick ? void(n._ignoreBackdropClick = !1) : void(e.target === e.currentTarget && ("static" === n._config.backdrop ? n._element.focus() : n.hide()))
                                        }), r && o.reflow(this._backdrop), e(this._backdrop).addClass(g.IN), !t) return;
                                    if (!r) return void t();
                                    e(this._backdrop).one(o.TRANSITION_END, t).emulateTransitionEnd(f)
                                } else if (!this._isShown && this._backdrop) {
                                    e(this._backdrop).removeClass(g.IN);
                                    var a = function() {
                                        n._removeBackdrop(), t && t()
                                    };
                                    o.supportsTransitionEnd() && e(this._element).hasClass(g.FADE) ? e(this._backdrop).one(o.TRANSITION_END, a).emulateTransitionEnd(f) : a()
                                } else t && t()
                            }
                        }, {
                            key: "_handleUpdate",
                            value: function() {
                                this._adjustDialog()
                            }
                        }, {
                            key: "_adjustDialog",
                            value: function() {
                                var e = this._element.scrollHeight > document.documentElement.clientHeight;
                                !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
                            }
                        }, {
                            key: "_resetAdjustments",
                            value: function() {
                                this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
                            }
                        }, {
                            key: "_checkScrollbar",
                            value: function() {
                                this._isBodyOverflowing = document.body.clientWidth < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
                            }
                        }, {
                            key: "_setScrollbar",
                            value: function() {
                                var t = parseInt(e(v.FIXED_CONTENT).css("padding-right") || 0, 10);
                                this._originalBodyPadding = document.body.style.paddingRight || "", this._isBodyOverflowing && (document.body.style.paddingRight = t + this._scrollbarWidth + "px")
                            }
                        }, {
                            key: "_resetScrollbar",
                            value: function() {
                                document.body.style.paddingRight = this._originalBodyPadding
                            }
                        }, {
                            key: "_getScrollbarWidth",
                            value: function() {
                                var e = document.createElement("div");
                                e.className = g.SCROLLBAR_MEASURER, document.body.appendChild(e);
                                var t = e.offsetWidth - e.clientWidth;
                                return document.body.removeChild(e), t
                            }
                        }], [{
                            key: "_jQueryInterface",
                            value: function(t, n) {
                                return this.each(function() {
                                    var i = e(this).data(a),
                                        r = e.extend({}, l.Default, e(this).data(), "object" == typeof t && t);
                                    if (i || (i = new l(this, r), e(this).data(a, i)), "string" == typeof t) {
                                        if (void 0 === i[t]) throw new Error('No method named "' + t + '"');
                                        i[t](n)
                                    } else r.show && i.show(n)
                                })
                            }
                        }, {
                            key: "VERSION",
                            get: function() {
                                return i
                            }
                        }, {
                            key: "Default",
                            get: function() {
                                return h
                            }
                        }]), l
                    }();
                return e(document).on(m.CLICK_DATA_API, v.DATA_TOGGLE, function(t) {
                    var n = this,
                        i = void 0,
                        r = o.getSelectorFromElement(this);
                    r && (i = e(r)[0]);
                    var s = e(i).data(a) ? "toggle" : e.extend({}, e(i).data(), e(this).data());
                    "A" === this.tagName && t.preventDefault();
                    var l = e(i).one(m.SHOW, function(t) {
                        t.isDefaultPrevented() || l.one(m.HIDDEN, function() {
                            e(n).is(":visible") && n.focus()
                        })
                    });
                    y._jQueryInterface.call(e(i), s, this)
                }), e.fn[t] = y._jQueryInterface, e.fn[t].Constructor = y, e.fn[t].noConflict = function() {
                    return e.fn[t] = u, y._jQueryInterface
                }, y
            }(jQuery), function(e) {
                var t = "scrollspy",
                    i = "4.0.0-alpha.4",
                    a = "bs.scrollspy",
                    s = "." + a,
                    l = ".data-api",
                    u = e.fn[t],
                    c = {
                        offset: 10,
                        method: "auto",
                        target: ""
                    },
                    f = {
                        offset: "number",
                        method: "string",
                        target: "(string|element)"
                    },
                    d = {
                        ACTIVATE: "activate" + s,
                        SCROLL: "scroll" + s,
                        LOAD_DATA_API: "load" + s + l
                    },
                    h = {
                        DROPDOWN_ITEM: "dropdown-item",
                        DROPDOWN_MENU: "dropdown-menu",
                        NAV_LINK: "nav-link",
                        NAV: "nav",
                        ACTIVE: "active"
                    },
                    p = {
                        DATA_SPY: '[data-spy="scroll"]',
                        ACTIVE: ".active",
                        LIST_ITEM: ".list-item",
                        LI: "li",
                        LI_DROPDOWN: "li.dropdown",
                        NAV_LINKS: ".nav-link",
                        DROPDOWN: ".dropdown",
                        DROPDOWN_ITEMS: ".dropdown-item",
                        DROPDOWN_TOGGLE: ".dropdown-toggle"
                    },
                    m = {
                        OFFSET: "offset",
                        POSITION: "position"
                    },
                    g = function() {
                        function l(t, i) {
                            n(this, l), this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(i), this._selector = this._config.target + " " + p.NAV_LINKS + "," + (this._config.target + " " + p.DROPDOWN_ITEMS), this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, e(this._scrollElement).on(d.SCROLL, e.proxy(this._process, this)), this.refresh(), this._process()
                        }
                        return r(l, [{
                            key: "refresh",
                            value: function() {
                                var t = this,
                                    n = this._scrollElement !== this._scrollElement.window ? m.POSITION : m.OFFSET,
                                    i = "auto" === this._config.method ? n : this._config.method,
                                    r = i === m.POSITION ? this._getScrollTop() : 0;
                                this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight();
                                var a = e.makeArray(e(this._selector));
                                a.map(function(t) {
                                    var n = void 0,
                                        a = o.getSelectorFromElement(t);
                                    return a && (n = e(a)[0]), n && (n.offsetWidth || n.offsetHeight) ? [e(n)[i]().top + r, a] : null
                                }).filter(function(e) {
                                    return e
                                }).sort(function(e, t) {
                                    return e[0] - t[0]
                                }).forEach(function(e) {
                                    t._offsets.push(e[0]), t._targets.push(e[1])
                                })
                            }
                        }, {
                            key: "dispose",
                            value: function() {
                                e.removeData(this._element, a), e(this._scrollElement).off(s), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
                            }
                        }, {
                            key: "_getConfig",
                            value: function(n) {
                                if (n = e.extend({}, c, n), "string" != typeof n.target) {
                                    var i = e(n.target).attr("id");
                                    i || (i = o.getUID(t), e(n.target).attr("id", i)), n.target = "#" + i
                                }
                                return o.typeCheckConfig(t, n, f), n
                            }
                        }, {
                            key: "_getScrollTop",
                            value: function() {
                                return this._scrollElement === window ? this._scrollElement.scrollY : this._scrollElement.scrollTop
                            }
                        }, {
                            key: "_getScrollHeight",
                            value: function() {
                                return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                            }
                        }, {
                            key: "_process",
                            value: function() {
                                var e = this._getScrollTop() + this._config.offset,
                                    t = this._getScrollHeight(),
                                    n = this._config.offset + t - this._scrollElement.offsetHeight;
                                if (this._scrollHeight !== t && this.refresh(), e >= n) {
                                    var i = this._targets[this._targets.length - 1];
                                    this._activeTarget !== i && this._activate(i)
                                }
                                if (this._activeTarget && e < this._offsets[0]) return this._activeTarget = null, void this._clear();
                                for (var r = this._offsets.length; r--;) {
                                    var o = this._activeTarget !== this._targets[r] && e >= this._offsets[r] && (void 0 === this._offsets[r + 1] || e < this._offsets[r + 1]);
                                    o && this._activate(this._targets[r])
                                }
                            }
                        }, {
                            key: "_activate",
                            value: function(t) {
                                this._activeTarget = t, this._clear();
                                var n = this._selector.split(",");
                                n = n.map(function(e) {
                                    return e + '[data-target="' + t + '"],' + (e + '[href="' + t + '"]')
                                });
                                var i = e(n.join(","));
                                i.hasClass(h.DROPDOWN_ITEM) ? (i.closest(p.DROPDOWN).find(p.DROPDOWN_TOGGLE).addClass(h.ACTIVE), i.addClass(h.ACTIVE)) : i.parents(p.LI).find(p.NAV_LINKS).addClass(h.ACTIVE), e(this._scrollElement).trigger(d.ACTIVATE, {
                                    relatedTarget: t
                                })
                            }
                        }, {
                            key: "_clear",
                            value: function() {
                                e(this._selector).filter(p.ACTIVE).removeClass(h.ACTIVE)
                            }
                        }], [{
                            key: "_jQueryInterface",
                            value: function(t) {
                                return this.each(function() {
                                    var n = e(this).data(a),
                                        i = "object" == typeof t && t || null;
                                    if (n || (n = new l(this, i), e(this).data(a, n)), "string" == typeof t) {
                                        if (void 0 === n[t]) throw new Error('No method named "' + t + '"');
                                        n[t]()
                                    }
                                })
                            }
                        }, {
                            key: "VERSION",
                            get: function() {
                                return i
                            }
                        }, {
                            key: "Default",
                            get: function() {
                                return c
                            }
                        }]), l
                    }();
                return e(window).on(d.LOAD_DATA_API, function() {
                    for (var t = e.makeArray(e(p.DATA_SPY)), n = t.length; n--;) {
                        var i = e(t[n]);
                        g._jQueryInterface.call(i, i.data())
                    }
                }), e.fn[t] = g._jQueryInterface, e.fn[t].Constructor = g, e.fn[t].noConflict = function() {
                    return e.fn[t] = u, g._jQueryInterface
                }, g
            }(jQuery), function(e) {
                var t = "tab",
                    i = "4.0.0-alpha.4",
                    a = "bs.tab",
                    s = "." + a,
                    l = ".data-api",
                    u = e.fn[t],
                    c = 150,
                    f = {
                        HIDE: "hide" + s,
                        HIDDEN: "hidden" + s,
                        SHOW: "show" + s,
                        SHOWN: "shown" + s,
                        CLICK_DATA_API: "click" + s + l
                    },
                    d = {
                        DROPDOWN_MENU: "dropdown-menu",
                        ACTIVE: "active",
                        FADE: "fade",
                        IN: "in"
                    },
                    h = {
                        A: "a",
                        LI: "li",
                        DROPDOWN: ".dropdown",
                        UL: "ul:not(.dropdown-menu)",
                        FADE_CHILD: "> .nav-item .fade, > .fade",
                        ACTIVE: ".active",
                        ACTIVE_CHILD: "> .nav-item > .active, > .active",
                        DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"]',
                        DROPDOWN_TOGGLE: ".dropdown-toggle",
                        //DROPDOWN_ACTIVE_CHILD: "> .dropdown-menu .active"
                    },
                    p = function() {
                        function t(e) {
                            n(this, t), this._element = e
                        }
                        return r(t, [{
                            key: "show",
                            value: function() {
                                var t = this;
                                if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE || !e(this._element).hasClass(d.ACTIVE)) {
                                    var n = void 0,
                                        i = void 0,
                                        r = e(this._element).closest(h.UL)[0],
                                        a = o.getSelectorFromElement(this._element);
                                    r && (i = e.makeArray(e(r).find(h.ACTIVE)), i = i[i.length - 1]);
                                    var s = e.Event(f.HIDE, {
                                            relatedTarget: this._element
                                        }),
                                        l = e.Event(f.SHOW, {
                                            relatedTarget: i
                                        });
                                    if (i && e(i).trigger(s), e(this._element).trigger(l), !l.isDefaultPrevented() && !s.isDefaultPrevented()) {
                                        a && (n = e(a)[0]), this._activate(this._element, r);
                                        var u = function() {
                                            var n = e.Event(f.HIDDEN, {
                                                    relatedTarget: t._element
                                                }),
                                                r = e.Event(f.SHOWN, {
                                                    relatedTarget: i
                                                });
                                            e(i).trigger(n), e(t._element).trigger(r)
                                        };
                                        n ? this._activate(n, n.parentNode, u) : u()
                                    }
                                }
                            }
                        }, {
                            key: "dispose",
                            value: function() {
                                e.removeClass(this._element, a), this._element = null
                            }
                        }, {
                            key: "_activate",
                            value: function(t, n, i) {
                                var r = e(n).find(h.ACTIVE_CHILD)[0],
                                    a = i && o.supportsTransitionEnd() && (r && e(r).hasClass(d.FADE) || Boolean(e(n).find(h.FADE_CHILD)[0])),
                                    s = e.proxy(this._transitionComplete, this, t, r, a, i);
                                r && a ? e(r).one(o.TRANSITION_END, s).emulateTransitionEnd(c) : s(), r && e(r).removeClass(d.IN)
                            }
                        }, {
                            key: "_transitionComplete",
                            value: function(t, n, i, r) {
                                if (n) {
                                    e(n).removeClass(d.ACTIVE);
                                    var a = e(n).find(h.DROPDOWN_ACTIVE_CHILD)[0];
                                    a && e(a).removeClass(d.ACTIVE), n.setAttribute("aria-expanded", !1)
                                }
                                if (e(t).addClass(d.ACTIVE), t.setAttribute("aria-expanded", !0), i ? (o.reflow(t), e(t).addClass(d.IN)) : e(t).removeClass(d.FADE), t.parentNode && e(t.parentNode).hasClass(d.DROPDOWN_MENU)) {
                                    var s = e(t).closest(h.DROPDOWN)[0];
                                    s && e(s).find(h.DROPDOWN_TOGGLE).addClass(d.ACTIVE), t.setAttribute("aria-expanded", !0)
                                }
                                r && r()
                            }
                        }], [{
                            key: "_jQueryInterface",
                            value: function(n) {
                                return this.each(function() {
                                    var i = e(this),
                                        r = i.data(a);
                                    if (r || (r = r = new t(this), i.data(a, r)), "string" == typeof n) {
                                        if (void 0 === r[n]) throw new Error('No method named "' + n + '"');
                                        r[n]()
                                    }
                                })
                            }
                        }, {
                            key: "VERSION",
                            get: function() {
                                return i
                            }
                        }]), t
                    }();
                return e(document).on(f.CLICK_DATA_API, h.DATA_TOGGLE, function(t) {
                    t.preventDefault(), p._jQueryInterface.call(e(this), "show")
                }), e.fn[t] = p._jQueryInterface, e.fn[t].Constructor = p, e.fn[t].noConflict = function() {
                    return e.fn[t] = u, p._jQueryInterface
                }, p
            }(jQuery), function(e) {
                if (void 0 === window.Tether) throw new Error("Bootstrap tooltips require Tether (http://github.hubspot.com/tether/)");
                var t = "tooltip",
                    i = "4.0.0-alpha.4",
                    a = "bs.tooltip",
                    s = "." + a,
                    l = e.fn[t],
                    u = 150,
                    c = "bs-tether",
                    f = {
                        animation: !0,
                        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                        trigger: "hover focus",
                        title: "",
                        delay: 0,
                        html: !1,
                        selector: !1,
                        placement: "top",
                        offset: "0 0",
                        constraints: []
                    },
                    d = {
                        animation: "boolean",
                        template: "string",
                        title: "(string|element|function)",
                        trigger: "string",
                        delay: "(number|object)",
                        html: "boolean",
                        selector: "(string|boolean)",
                        placement: "(string|function)",
                        offset: "string",
                        constraints: "array"
                    },
                    h = {
                        TOP: "bottom center",
                        RIGHT: "middle left",
                        BOTTOM: "top center",
                        LEFT: "middle right"
                    },
                    p = {
                        IN: "in",
                        OUT: "out"
                    },
                    m = {
                        HIDE: "hide" + s,
                        HIDDEN: "hidden" + s,
                        SHOW: "show" + s,
                        SHOWN: "shown" + s,
                        INSERTED: "inserted" + s,
                        CLICK: "click" + s,
                        FOCUSIN: "focusin" + s,
                        FOCUSOUT: "focusout" + s,
                        MOUSEENTER: "mouseenter" + s,
                        MOUSELEAVE: "mouseleave" + s
                    },
                    g = {
                        FADE: "fade",
                        IN: "in"
                    },
                    v = {
                        TOOLTIP: ".tooltip",
                        TOOLTIP_INNER: ".tooltip-inner"
                    },
                    y = {
                        element: !1,
                        enabled: !1
                    },
                    b = {
                        HOVER: "hover",
                        FOCUS: "focus",
                        CLICK: "click",
                        MANUAL: "manual"
                    },
                    _ = function() {
                        function l(e, t) {
                            n(this, l), this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._tether = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners()
                        }
                        return r(l, [{
                            key: "enable",
                            value: function() {
                                this._isEnabled = !0
                            }
                        }, {
                            key: "disable",
                            value: function() {
                                this._isEnabled = !1
                            }
                        }, {
                            key: "toggleEnabled",
                            value: function() {
                                this._isEnabled = !this._isEnabled
                            }
                        }, {
                            key: "toggle",
                            value: function(t) {
                                if (t) {
                                    var n = this.constructor.DATA_KEY,
                                        i = e(t.currentTarget).data(n);
                                    i || (i = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(n, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
                                } else {
                                    if (e(this.getTipElement()).hasClass(g.IN)) return void this._leave(null, this);
                                    this._enter(null, this)
                                }
                            }
                        }, {
                            key: "dispose",
                            value: function() {
                                clearTimeout(this._timeout), this.cleanupTether(), e.removeData(this.element, this.constructor.DATA_KEY), e(this.element).off(this.constructor.EVENT_KEY), this.tip && e(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._tether = null, this.element = null, this.config = null, this.tip = null
                            }
                        }, {
                            key: "show",
                            value: function() {
                                var t = this,
                                    n = e.Event(this.constructor.Event.SHOW);
                                if (this.isWithContent() && this._isEnabled) {
                                    e(this.element).trigger(n);
                                    var i = e.contains(this.element.ownerDocument.documentElement, this.element);
                                    if (n.isDefaultPrevented() || !i) return;
                                    var r = this.getTipElement(),
                                        a = o.getUID(this.constructor.NAME);
                                    r.setAttribute("id", a), this.element.setAttribute("aria-describedby", a), this.setContent(), this.config.animation && e(r).addClass(g.FADE);
                                    var s = "function" == typeof this.config.placement ? this.config.placement.call(this, r, this.element) : this.config.placement,
                                        u = this._getAttachment(s);
                                    e(r).data(this.constructor.DATA_KEY, this).appendTo(document.body), e(this.element).trigger(this.constructor.Event.INSERTED), this._tether = new Tether({
                                        attachment: u,
                                        element: r,
                                        target: this.element,
                                        classes: y,
                                        classPrefix: c,
                                        offset: this.config.offset,
                                        constraints: this.config.constraints,
                                        addTargetClasses: !1
                                    }), o.reflow(r), this._tether.position(), e(r).addClass(g.IN);
                                    var f = function() {
                                        var n = t._hoverState;
                                        t._hoverState = null, e(t.element).trigger(t.constructor.Event.SHOWN), n === p.OUT && t._leave(null, t)
                                    };
                                    if (o.supportsTransitionEnd() && e(this.tip).hasClass(g.FADE)) return void e(this.tip).one(o.TRANSITION_END, f).emulateTransitionEnd(l._TRANSITION_DURATION);
                                    f()
                                }
                            }
                        }, {
                            key: "hide",
                            value: function(t) {
                                var n = this,
                                    i = this.getTipElement(),
                                    r = e.Event(this.constructor.Event.HIDE),
                                    a = function() {
                                        n._hoverState !== p.IN && i.parentNode && i.parentNode.removeChild(i), n.element.removeAttribute("aria-describedby"), e(n.element).trigger(n.constructor.Event.HIDDEN), n.cleanupTether(), t && t()
                                    };
                                e(this.element).trigger(r), r.isDefaultPrevented() || (e(i).removeClass(g.IN), o.supportsTransitionEnd() && e(this.tip).hasClass(g.FADE) ? e(i).one(o.TRANSITION_END, a).emulateTransitionEnd(u) : a(), this._hoverState = "")
                            }
                        }, {
                            key: "isWithContent",
                            value: function() {
                                return Boolean(this.getTitle())
                            }
                        }, {
                            key: "getTipElement",
                            value: function() {
                                return this.tip = this.tip || e(this.config.template)[0]
                            }
                        }, {
                            key: "setContent",
                            value: function() {
                                var t = e(this.getTipElement());
                                this.setElementContent(t.find(v.TOOLTIP_INNER), this.getTitle()), t.removeClass(g.FADE).removeClass(g.IN), this.cleanupTether()
                            }
                        }, {
                            key: "setElementContent",
                            value: function(t, n) {
                                var i = this.config.html;
                                "object" == typeof n && (n.nodeType || n.jquery) ? i ? e(n).parent().is(t) || t.empty().append(n) : t.text(e(n).text()) : t[i ? "html" : "text"](n)
                            }
                        }, {
                            key: "getTitle",
                            value: function() {
                                var e = this.element.getAttribute("data-original-title");
                                return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e
                            }
                        }, {
                            key: "cleanupTether",
                            value: function() {
                                this._tether && this._tether.destroy()
                            }
                        }, {
                            key: "_getAttachment",
                            value: function(e) {
                                return h[e.toUpperCase()]
                            }
                        }, {
                            key: "_setListeners",
                            value: function() {
                                var t = this,
                                    n = this.config.trigger.split(" ");
                                n.forEach(function(n) {
                                    if ("click" === n) e(t.element).on(t.constructor.Event.CLICK, t.config.selector, e.proxy(t.toggle, t));
                                    else if (n !== b.MANUAL) {
                                        var i = n === b.HOVER ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN,
                                            r = n === b.HOVER ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;
                                        e(t.element).on(i, t.config.selector, e.proxy(t._enter, t)).on(r, t.config.selector, e.proxy(t._leave, t))
                                    }
                                }), this.config.selector ? this.config = e.extend({}, this.config, {
                                    trigger: "manual",
                                    selector: ""
                                }) : this._fixTitle()
                            }
                        }, {
                            key: "_fixTitle",
                            value: function() {
                                var e = typeof this.element.getAttribute("data-original-title");
                                (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
                            }
                        }, {
                            key: "_enter",
                            value: function(t, n) {
                                var i = this.constructor.DATA_KEY;
                                return n = n || e(t.currentTarget).data(i), n || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(i, n)), t && (n._activeTrigger["focusin" === t.type ? b.FOCUS : b.HOVER] = !0), e(n.getTipElement()).hasClass(g.IN) || n._hoverState === p.IN ? void(n._hoverState = p.IN) : (clearTimeout(n._timeout), n._hoverState = p.IN, n.config.delay && n.config.delay.show ? void(n._timeout = setTimeout(function() {
                                    n._hoverState === p.IN && n.show()
                                }, n.config.delay.show)) : void n.show())
                            }
                        }, {
                            key: "_leave",
                            value: function(t, n) {
                                var i = this.constructor.DATA_KEY;
                                if (n = n || e(t.currentTarget).data(i), n || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(i, n)), t && (n._activeTrigger["focusout" === t.type ? b.FOCUS : b.HOVER] = !1), !n._isWithActiveTrigger()) return clearTimeout(n._timeout), n._hoverState = p.OUT, n.config.delay && n.config.delay.hide ? void(n._timeout = setTimeout(function() {
                                    n._hoverState === p.OUT && n.hide()
                                }, n.config.delay.hide)) : void n.hide()
                            }
                        }, {
                            key: "_isWithActiveTrigger",
                            value: function() {
                                for (var e in this._activeTrigger)
                                    if (this._activeTrigger[e]) return !0;
                                return !1
                            }
                        }, {
                            key: "_getConfig",
                            value: function(n) {
                                return n = e.extend({}, this.constructor.Default, e(this.element).data(), n), n.delay && "number" == typeof n.delay && (n.delay = {
                                    show: n.delay,
                                    hide: n.delay
                                }), o.typeCheckConfig(t, n, this.constructor.DefaultType), n
                            }
                        }, {
                            key: "_getDelegateConfig",
                            value: function() {
                                var e = {};
                                if (this.config)
                                    for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
                                return e
                            }
                        }], [{
                            key: "_jQueryInterface",
                            value: function(t) {
                                return this.each(function() {
                                    var n = e(this).data(a),
                                        i = "object" == typeof t ? t : null;
                                    if ((n || !/destroy|hide/.test(t)) && (n || (n = new l(this, i), e(this).data(a, n)), "string" == typeof t)) {
                                        if (void 0 === n[t]) throw new Error('No method named "' + t + '"');
                                        n[t]()
                                    }
                                })
                            }
                        }, {
                            key: "VERSION",
                            get: function() {
                                return i
                            }
                        }, {
                            key: "Default",
                            get: function() {
                                return f
                            }
                        }, {
                            key: "NAME",
                            get: function() {
                                return t
                            }
                        }, {
                            key: "DATA_KEY",
                            get: function() {
                                return a
                            }
                        }, {
                            key: "Event",
                            get: function() {
                                return m
                            }
                        }, {
                            key: "EVENT_KEY",
                            get: function() {
                                return s
                            }
                        }, {
                            key: "DefaultType",
                            get: function() {
                                return d
                            }
                        }]), l
                    }();
                return e.fn[t] = _._jQueryInterface, e.fn[t].Constructor = _, e.fn[t].noConflict = function() {
                    return e.fn[t] = l, _._jQueryInterface
                }, _
            }(jQuery));
        ! function(e) {
            var o = "popover",
                s = "4.0.0-alpha.4",
                l = "bs.popover",
                u = "." + l,
                c = e.fn[o],
                f = e.extend({}, a.Default, {
                    placement: "right",
                    trigger: "click",
                    content: "",
                    template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
                }),
                d = e.extend({}, a.DefaultType, {
                    content: "(string|element|function)"
                }),
                h = {
                    FADE: "fade",
                    IN: "in"
                },
                p = {
                    TITLE: ".popover-title",
                    CONTENT: ".popover-content",
                    ARROW: ".popover-arrow"
                },
                m = {
                    HIDE: "hide" + u,
                    HIDDEN: "hidden" + u,
                    SHOW: "show" + u,
                    SHOWN: "shown" + u,
                    INSERTED: "inserted" + u,
                    CLICK: "click" + u,
                    FOCUSIN: "focusin" + u,
                    FOCUSOUT: "focusout" + u,
                    MOUSEENTER: "mouseenter" + u,
                    MOUSELEAVE: "mouseleave" + u
                },
                g = function(a) {
                    function c() {
                        n(this, c), i(Object.getPrototypeOf(c.prototype), "constructor", this).apply(this, arguments)
                    }
                    return t(c, a), r(c, [{
                        key: "isWithContent",
                        value: function() {
                            return this.getTitle() || this._getContent()
                        }
                    }, {
                        key: "getTipElement",
                        value: function() {
                            return this.tip = this.tip || e(this.config.template)[0]
                        }
                    }, {
                        key: "setContent",
                        value: function() {
                            var t = e(this.getTipElement());
                            this.setElementContent(t.find(p.TITLE), this.getTitle()), this.setElementContent(t.find(p.CONTENT), this._getContent()), t.removeClass(h.FADE).removeClass(h.IN), this.cleanupTether()
                        }
                    }, {
                        key: "_getContent",
                        value: function() {
                            return this.element.getAttribute("data-content") || ("function" == typeof this.config.content ? this.config.content.call(this.element) : this.config.content)
                        }
                    }], [{
                        key: "_jQueryInterface",
                        value: function(t) {
                            return this.each(function() {
                                var n = e(this).data(l),
                                    i = "object" == typeof t ? t : null;
                                if ((n || !/destroy|hide/.test(t)) && (n || (n = new c(this, i), e(this).data(l, n)), "string" == typeof t)) {
                                    if (void 0 === n[t]) throw new Error('No method named "' + t + '"');
                                    n[t]()
                                }
                            })
                        }
                    }, {
                        key: "VERSION",
                        get: function() {
                            return s
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return f
                        }
                    }, {
                        key: "NAME",
                        get: function() {
                            return o
                        }
                    }, {
                        key: "DATA_KEY",
                        get: function() {
                            return l
                        }
                    }, {
                        key: "Event",
                        get: function() {
                            return m
                        }
                    }, {
                        key: "EVENT_KEY",
                        get: function() {
                            return u
                        }
                    }, {
                        key: "DefaultType",
                        get: function() {
                            return d
                        }
                    }]), c
                }(a);
            return e.fn[o] = g._jQueryInterface, e.fn[o].Constructor = g, e.fn[o].noConflict = function() {
                return e.fn[o] = c, g._jQueryInterface
            }, g
        }(jQuery)
    }(jQuery)
}, function(e, t, n) {
    var i, i;
    ! function(t) {
        e.exports = t()
    }(function() {
        return function e(t, n, r) {
            function o(s, l) {
                if (!n[s]) {
                    if (!t[s]) {
                        var u = "function" == typeof i && i;
                        if (!l && u) return i(s, !0);
                        if (a) return a(s, !0);
                        var c = new Error("Cannot find module '" + s + "'");
                        throw c.code = "MODULE_NOT_FOUND", c
                    }
                    var f = n[s] = {
                        exports: {}
                    };
                    t[s][0].call(f.exports, function(e) {
                        var n = t[s][1][e];
                        return o(n ? n : e)
                    }, f, f.exports, e, t, n, r)
                }
                return n[s].exports
            }
            for (var a = "function" == typeof i && i, s = 0; s < r.length; s++) o(r[s]);
            return o
        }({
            1: [function(e, t, n) {
                t.exports = function(e) {
                    var t, n, i, r = -1;
                    if (e.lines.length > 1 && "flex-start" === e.style.alignContent)
                        for (t = 0; i = e.lines[++r];) i.crossStart = t, t += i.cross;
                    else if (e.lines.length > 1 && "flex-end" === e.style.alignContent)
                        for (t = e.flexStyle.crossSpace; i = e.lines[++r];) i.crossStart = t, t += i.cross;
                    else if (e.lines.length > 1 && "center" === e.style.alignContent)
                        for (t = e.flexStyle.crossSpace / 2; i = e.lines[++r];) i.crossStart = t, t += i.cross;
                    else if (e.lines.length > 1 && "space-between" === e.style.alignContent)
                        for (n = e.flexStyle.crossSpace / (e.lines.length - 1), t = 0; i = e.lines[++r];) i.crossStart = t, t += i.cross + n;
                    else if (e.lines.length > 1 && "space-around" === e.style.alignContent)
                        for (n = 2 * e.flexStyle.crossSpace / (2 * e.lines.length), t = n / 2; i = e.lines[++r];) i.crossStart = t, t += i.cross + n;
                    else
                        for (n = e.flexStyle.crossSpace / e.lines.length, t = e.flexStyle.crossInnerBefore; i = e.lines[++r];) i.crossStart = t, i.cross += n, t += i.cross
                }
            }, {}],
            2: [function(e, t, n) {
                t.exports = function(e) {
                    for (var t, n = -1; line = e.lines[++n];)
                        for (t = -1; child = line.children[++t];) {
                            var i = child.style.alignSelf;
                            "auto" === i && (i = e.style.alignItems), "flex-start" === i ? child.flexStyle.crossStart = line.crossStart : "flex-end" === i ? child.flexStyle.crossStart = line.crossStart + line.cross - child.flexStyle.crossOuter : "center" === i ? child.flexStyle.crossStart = line.crossStart + (line.cross - child.flexStyle.crossOuter) / 2 : (child.flexStyle.crossStart = line.crossStart, child.flexStyle.crossOuter = line.cross, child.flexStyle.cross = child.flexStyle.crossOuter - child.flexStyle.crossBefore - child.flexStyle.crossAfter)
                        }
                }
            }, {}],
            3: [function(e, t, n) {
                t.exports = function e(t, e) {
                    var n = "row" === e || "row-reverse" === e,
                        i = t.mainAxis;
                    if (i) {
                        var r = n && "inline" === i || !n && "block" === i;
                        r || (t.flexStyle = {
                            main: t.flexStyle.cross,
                            cross: t.flexStyle.main,
                            mainOffset: t.flexStyle.crossOffset,
                            crossOffset: t.flexStyle.mainOffset,
                            mainBefore: t.flexStyle.crossBefore,
                            mainAfter: t.flexStyle.crossAfter,
                            crossBefore: t.flexStyle.mainBefore,
                            crossAfter: t.flexStyle.mainAfter,
                            mainInnerBefore: t.flexStyle.crossInnerBefore,
                            mainInnerAfter: t.flexStyle.crossInnerAfter,
                            crossInnerBefore: t.flexStyle.mainInnerBefore,
                            crossInnerAfter: t.flexStyle.mainInnerAfter,
                            mainBorderBefore: t.flexStyle.crossBorderBefore,
                            mainBorderAfter: t.flexStyle.crossBorderAfter,
                            crossBorderBefore: t.flexStyle.mainBorderBefore,
                            crossBorderAfter: t.flexStyle.mainBorderAfter
                        })
                    } else n ? t.flexStyle = {
                        main: t.style.width,
                        cross: t.style.height,
                        mainOffset: t.style.offsetWidth,
                        crossOffset: t.style.offsetHeight,
                        mainBefore: t.style.marginLeft,
                        mainAfter: t.style.marginRight,
                        crossBefore: t.style.marginTop,
                        crossAfter: t.style.marginBottom,
                        mainInnerBefore: t.style.paddingLeft,
                        mainInnerAfter: t.style.paddingRight,
                        crossInnerBefore: t.style.paddingTop,
                        crossInnerAfter: t.style.paddingBottom,
                        mainBorderBefore: t.style.borderLeftWidth,
                        mainBorderAfter: t.style.borderRightWidth,
                        crossBorderBefore: t.style.borderTopWidth,
                        crossBorderAfter: t.style.borderBottomWidth
                    } : t.flexStyle = {
                        main: t.style.height,
                        cross: t.style.width,
                        mainOffset: t.style.offsetHeight,
                        crossOffset: t.style.offsetWidth,
                        mainBefore: t.style.marginTop,
                        mainAfter: t.style.marginBottom,
                        crossBefore: t.style.marginLeft,
                        crossAfter: t.style.marginRight,
                        mainInnerBefore: t.style.paddingTop,
                        mainInnerAfter: t.style.paddingBottom,
                        crossInnerBefore: t.style.paddingLeft,
                        crossInnerAfter: t.style.paddingRight,
                        mainBorderBefore: t.style.borderTopWidth,
                        mainBorderAfter: t.style.borderBottomWidth,
                        crossBorderBefore: t.style.borderLeftWidth,
                        crossBorderAfter: t.style.borderRightWidth
                    }, "content-box" === t.style.boxSizing && ("number" == typeof t.flexStyle.main && (t.flexStyle.main += t.flexStyle.mainInnerBefore + t.flexStyle.mainInnerAfter + t.flexStyle.mainBorderBefore + t.flexStyle.mainBorderAfter), "number" == typeof t.flexStyle.cross && (t.flexStyle.cross += t.flexStyle.crossInnerBefore + t.flexStyle.crossInnerAfter + t.flexStyle.crossBorderBefore + t.flexStyle.crossBorderAfter));
                    t.mainAxis = n ? "inline" : "block", t.crossAxis = n ? "block" : "inline", "number" == typeof t.style.flexBasis && (t.flexStyle.main = t.style.flexBasis + t.flexStyle.mainInnerBefore + t.flexStyle.mainInnerAfter + t.flexStyle.mainBorderBefore + t.flexStyle.mainBorderAfter), t.flexStyle.mainOuter = t.flexStyle.main, t.flexStyle.crossOuter = t.flexStyle.cross, "auto" === t.flexStyle.mainOuter && (t.flexStyle.mainOuter = t.flexStyle.mainOffset), "auto" === t.flexStyle.crossOuter && (t.flexStyle.crossOuter = t.flexStyle.crossOffset), "number" == typeof t.flexStyle.mainBefore && (t.flexStyle.mainOuter += t.flexStyle.mainBefore), "number" == typeof t.flexStyle.mainAfter && (t.flexStyle.mainOuter += t.flexStyle.mainAfter), "number" == typeof t.flexStyle.crossBefore && (t.flexStyle.crossOuter += t.flexStyle.crossBefore), "number" == typeof t.flexStyle.crossAfter && (t.flexStyle.crossOuter += t.flexStyle.crossAfter)
                }
            }, {}],
            4: [function(e, t, n) {
                var i = e("../reduce");
                t.exports = function(e) {
                    if (e.mainSpace > 0) {
                        var t = i(e.children, function(e, t) {
                            return e + parseFloat(t.style.flexGrow)
                        }, 0);
                        t > 0 && (e.main = i(e.children, function(n, i) {
                            return "auto" === i.flexStyle.main ? i.flexStyle.main = i.flexStyle.mainOffset + parseFloat(i.style.flexGrow) / t * e.mainSpace : i.flexStyle.main += parseFloat(i.style.flexGrow) / t * e.mainSpace, i.flexStyle.mainOuter = i.flexStyle.main + i.flexStyle.mainBefore + i.flexStyle.mainAfter, n + i.flexStyle.mainOuter
                        }, 0), e.mainSpace = 0)
                    }
                }
            }, {
                "../reduce": 12
            }],
            5: [function(e, t, n) {
                var i = e("../reduce");
                t.exports = function(e) {
                    if (e.mainSpace < 0) {
                        var t = i(e.children, function(e, t) {
                            return e + parseFloat(t.style.flexShrink)
                        }, 0);
                        t > 0 && (e.main = i(e.children, function(n, i) {
                            return i.flexStyle.main += parseFloat(i.style.flexShrink) / t * e.mainSpace, i.flexStyle.mainOuter = i.flexStyle.main + i.flexStyle.mainBefore + i.flexStyle.mainAfter, n + i.flexStyle.mainOuter
                        }, 0), e.mainSpace = 0)
                    }
                }
            }, {
                "../reduce": 12
            }],
            6: [function(e, t, n) {
                var i = e("../reduce");
                t.exports = function(e) {
                    var t;
                    e.lines = [t = {
                        main: 0,
                        cross: 0,
                        children: []
                    }];
                    for (var n, r = -1; n = e.children[++r];) "nowrap" === e.style.flexWrap || 0 === t.children.length || "auto" === e.flexStyle.main || e.flexStyle.main - e.flexStyle.mainInnerBefore - e.flexStyle.mainInnerAfter - e.flexStyle.mainBorderBefore - e.flexStyle.mainBorderAfter >= t.main + n.flexStyle.mainOuter ? (t.main += n.flexStyle.mainOuter, t.cross = Math.max(t.cross, n.flexStyle.crossOuter)) : e.lines.push(t = {
                        main: n.flexStyle.mainOuter,
                        cross: n.flexStyle.crossOuter,
                        children: []
                    }), t.children.push(n);
                    e.flexStyle.mainLines = i(e.lines, function(e, t) {
                        return Math.max(e, t.main)
                    }, 0), e.flexStyle.crossLines = i(e.lines, function(e, t) {
                        return e + t.cross
                    }, 0), "auto" === e.flexStyle.main && (e.flexStyle.main = Math.max(e.flexStyle.mainOffset, e.flexStyle.mainLines + e.flexStyle.mainInnerBefore + e.flexStyle.mainInnerAfter + e.flexStyle.mainBorderBefore + e.flexStyle.mainBorderAfter)), "auto" === e.flexStyle.cross && (e.flexStyle.cross = Math.max(e.flexStyle.crossOffset, e.flexStyle.crossLines + e.flexStyle.crossInnerBefore + e.flexStyle.crossInnerAfter + e.flexStyle.crossBorderBefore + e.flexStyle.crossBorderAfter)), e.flexStyle.crossSpace = e.flexStyle.cross - e.flexStyle.crossInnerBefore - e.flexStyle.crossInnerAfter - e.flexStyle.crossBorderBefore - e.flexStyle.crossBorderAfter - e.flexStyle.crossLines, e.flexStyle.mainOuter = e.flexStyle.main + e.flexStyle.mainBefore + e.flexStyle.mainAfter, e.flexStyle.crossOuter = e.flexStyle.cross + e.flexStyle.crossBefore + e.flexStyle.crossAfter
                }
            }, {
                "../reduce": 12
            }],
            7: [function(e, t, n) {
                function i(t) {
                    for (var n, i = -1; n = t.children[++i];) e("./flex-direction")(n, t.style.flexDirection);
                    e("./flex-direction")(t, t.style.flexDirection), e("./order")(t), e("./flexbox-lines")(t), e("./align-content")(t), i = -1;
                    for (var r; r = t.lines[++i];) r.mainSpace = t.flexStyle.main - t.flexStyle.mainInnerBefore - t.flexStyle.mainInnerAfter - t.flexStyle.mainBorderBefore - t.flexStyle.mainBorderAfter - r.main, e("./flex-grow")(r), e("./flex-shrink")(r), e("./margin-main")(r), e("./margin-cross")(r), e("./justify-content")(r, t.style.justifyContent, t);
                    e("./align-items")(t)
                }
                t.exports = i
            }, {
                "./align-content": 1,
                "./align-items": 2,
                "./flex-direction": 3,
                "./flex-grow": 4,
                "./flex-shrink": 5,
                "./flexbox-lines": 6,
                "./justify-content": 8,
                "./margin-cross": 9,
                "./margin-main": 10,
                "./order": 11
            }],
            8: [function(e, t, n) {
                t.exports = function(e, t, n) {
                    var i, r, o, a = n.flexStyle.mainInnerBefore,
                        s = -1;
                    if ("flex-end" === t)
                        for (i = e.mainSpace, i += a; o = e.children[++s];) o.flexStyle.mainStart = i, i += o.flexStyle.mainOuter;
                    else if ("center" === t)
                        for (i = e.mainSpace / 2, i += a; o = e.children[++s];) o.flexStyle.mainStart = i, i += o.flexStyle.mainOuter;
                    else if ("space-between" === t)
                        for (r = e.mainSpace / (e.children.length - 1), i = 0, i += a; o = e.children[++s];) o.flexStyle.mainStart = i, i += o.flexStyle.mainOuter + r;
                    else if ("space-around" === t)
                        for (r = 2 * e.mainSpace / (2 * e.children.length), i = r / 2, i += a; o = e.children[++s];) o.flexStyle.mainStart = i, i += o.flexStyle.mainOuter + r;
                    else
                        for (i = 0, i += a; o = e.children[++s];) o.flexStyle.mainStart = i, i += o.flexStyle.mainOuter
                }
            }, {}],
            9: [function(e, t, n) {
                t.exports = function(e) {
                    for (var t, n = -1; t = e.children[++n];) {
                        var i = 0;
                        "auto" === t.flexStyle.crossBefore && ++i, "auto" === t.flexStyle.crossAfter && ++i;
                        var r = e.cross - t.flexStyle.crossOuter;
                        "auto" === t.flexStyle.crossBefore && (t.flexStyle.crossBefore = r / i), "auto" === t.flexStyle.crossAfter && (t.flexStyle.crossAfter = r / i), "auto" === t.flexStyle.cross ? t.flexStyle.crossOuter = t.flexStyle.crossOffset + t.flexStyle.crossBefore + t.flexStyle.crossAfter : t.flexStyle.crossOuter = t.flexStyle.cross + t.flexStyle.crossBefore + t.flexStyle.crossAfter
                    }
                }
            }, {}],
            10: [function(e, t, n) {
                t.exports = function(e) {
                    for (var t, n = 0, i = -1; t = e.children[++i];) "auto" === t.flexStyle.mainBefore && ++n, "auto" === t.flexStyle.mainAfter && ++n;
                    if (n > 0) {
                        for (i = -1; t = e.children[++i];) "auto" === t.flexStyle.mainBefore && (t.flexStyle.mainBefore = e.mainSpace / n), "auto" === t.flexStyle.mainAfter && (t.flexStyle.mainAfter = e.mainSpace / n), "auto" === t.flexStyle.main ? t.flexStyle.mainOuter = t.flexStyle.mainOffset + t.flexStyle.mainBefore + t.flexStyle.mainAfter : t.flexStyle.mainOuter = t.flexStyle.main + t.flexStyle.mainBefore + t.flexStyle.mainAfter;
                        e.mainSpace = 0
                    }
                }
            }, {}],
            11: [function(e, t, n) {
                var i = /^(column|row)-reverse$/;
                t.exports = function(e) {
                    e.children.sort(function(e, t) {
                        return e.style.order - t.style.order || e.index - t.index
                    }), i.test(e.style.flexDirection) && e.children.reverse()
                }
            }, {}],
            12: [function(e, t, n) {
                function i(e, t, n) {
                    for (var i = e.length, r = -1; ++r < i;) r in e && (n = t(n, e[r], r));
                    return n
                }
                t.exports = i
            }, {}],
            13: [function(e, t, n) {
                function i(e) {
                    s(a(e))
                }
                var r = e("./read"),
                    o = e("./write"),
                    a = e("./readAll"),
                    s = e("./writeAll");
                t.exports = i, t.exports.read = r, t.exports.write = o, t.exports.readAll = a, t.exports.writeAll = s
            }, {
                "./read": 15,
                "./readAll": 16,
                "./write": 17,
                "./writeAll": 18
            }],
            14: [function(e, t, n) {
                function i(e, t) {
                    var n = String(e).match(o);
                    if (!n) return e;
                    var i = n[1],
                        a = n[2];
                    return "px" === a ? 1 * i : "cm" === a ? .3937 * i * 96 : "in" === a ? 96 * i : "mm" === a ? .3937 * i * 96 / 10 : "pc" === a ? 12 * i * 96 / 72 : "pt" === a ? 96 * i / 72 : "rem" === a ? 16 * i : r(e, t)
                }

                function r(e, t) {
                    a.style.cssText = "border:none!important;clip:rect(0 0 0 0)!important;display:block!important;font-size:1em!important;height:0!important;margin:0!important;padding:0!important;position:relative!important;width:" + e + "!important", t.parentNode.insertBefore(a, t.nextSibling);
                    var n = a.offsetWidth;
                    return t.parentNode.removeChild(a), n
                }
                t.exports = i;
                var o = /^([-+]?\d*\.?\d+)(%|[a-z]+)$/,
                    a = document.createElement("div")
            }, {}],
            15: [function(e, t, n) {
                function i(e) {
                    var t = {
                            alignContent: "stretch",
                            alignItems: "stretch",
                            alignSelf: "auto",
                            borderBottomWidth: 0,
                            borderLeftWidth: 0,
                            borderRightWidth: 0,
                            borderTopWidth: 0,
                            boxSizing: "content-box",
                            display: "inline",
                            flexBasis: "auto",
                            flexDirection: "row",
                            flexGrow: 0,
                            flexShrink: 1,
                            flexWrap: "nowrap",
                            justifyContent: "flex-start",
                            height: "auto",
                            marginTop: 0,
                            marginRight: 0,
                            marginLeft: 0,
                            marginBottom: 0,
                            paddingTop: 0,
                            paddingRight: 0,
                            paddingLeft: 0,
                            paddingBottom: 0,
                            maxHeight: "none",
                            maxWidth: "none",
                            minHeight: 0,
                            minWidth: 0,
                            order: 0,
                            position: "static",
                            width: "auto"
                        },
                        n = e instanceof Element;
                    if (n) {
                        var i = e.hasAttribute("data-style"),
                            s = i ? e.getAttribute("data-style") : e.getAttribute("style") || "";
                        i || e.setAttribute("data-style", s);
                        var u = window.getComputedStyle && getComputedStyle(e) || {};
                        a(t, u);
                        var c = e.currentStyle || {};
                        r(t, c), o(t, s);
                        for (var f in t) t[f] = l(t[f], e);
                        var d = e.getBoundingClientRect();
                        t.offsetHeight = d.height || e.offsetHeight, t.offsetWidth = d.width || e.offsetWidth
                    }
                    var h = {
                        element: e,
                        style: t
                    };
                    return h
                }

                function r(e, t) {
                    for (var n in e) {
                        var i = n in t;
                        if (i) e[n] = t[n];
                        else {
                            var r = n.replace(/[A-Z]/g, "-$&").toLowerCase(),
                                o = r in t;
                            o && (e[n] = t[r])
                        }
                    }
                    var a = "-js-display" in t;
                    a && (e.display = t["-js-display"])
                }

                function o(e, t) {
                    for (var n; n = s.exec(t);) {
                        var i = n[1].toLowerCase().replace(/-[a-z]/g, function(e) {
                            return e.slice(1).toUpperCase()
                        });
                        e[i] = n[2]
                    }
                }

                function a(e, t) {
                    for (var n in e) {
                        var i = n in t;
                        i && !/^(alignSelf|height|width)$/.test(n) && (e[n] = t[n])
                    }
                }
                t.exports = i;
                var s = /([^\s:;]+)\s*:\s*([^;]+?)\s*(;|$)/g,
                    l = e("./getComputedLength")
            }, {
                "./getComputedLength": 14
            }],
            16: [function(e, t, n) {
                function i(e) {
                    var t = [];
                    return r(e, t), t
                }

                function r(e, t) {
                    for (var n, i = o(e), s = [], l = -1; n = e.childNodes[++l];) {
                        var u = 3 === n.nodeType && !/^\s*$/.test(n.nodeValue);
                        if (i && u) {
                            var c = n;
                            n = e.insertBefore(document.createElement("flex-item"), c), n.appendChild(c)
                        }
                        var f = n instanceof Element;
                        if (f) {
                            var d = r(n, t);
                            if (i) {
                                var h = n.style;
                                h.display = "inline-block", h.position = "absolute", d.style = a(n).style, s.push(d)
                            }
                        }
                    }
                    var p = {
                        element: e,
                        children: s
                    };
                    return i && (p.style = a(e).style, t.push(p)), p
                }

                function o(e) {
                    var t = e instanceof Element,
                        n = t && e.getAttribute("data-style"),
                        i = t && e.currentStyle && e.currentStyle["-js-display"],
                        r = s.test(n) || l.test(i);
                    return r
                }
                t.exports = i;
                var a = e("../read"),
                    s = /(^|;)\s*display\s*:\s*(inline-)?flex\s*(;|$)/i,
                    l = /^(inline-)?flex$/i
            }, {
                "../read": 15
            }],
            17: [function(e, t, n) {
                function i(e) {
                    o(e);
                    var t = e.element.style,
                        n = "inline" === e.mainAxis ? ["main", "cross"] : ["cross", "main"];
                    t.boxSizing = "content-box", t.display = "block", t.position = "relative", t.width = r(e.flexStyle[n[0]] - e.flexStyle[n[0] + "InnerBefore"] - e.flexStyle[n[0] + "InnerAfter"] - e.flexStyle[n[0] + "BorderBefore"] - e.flexStyle[n[0] + "BorderAfter"]), t.height = r(e.flexStyle[n[1]] - e.flexStyle[n[1] + "InnerBefore"] - e.flexStyle[n[1] + "InnerAfter"] - e.flexStyle[n[1] + "BorderBefore"] - e.flexStyle[n[1] + "BorderAfter"]);
                    for (var i, a = -1; i = e.children[++a];) {
                        var s = i.element.style,
                            l = "inline" === i.mainAxis ? ["main", "cross"] : ["cross", "main"];
                        s.boxSizing = "content-box", s.display = "block", s.position = "absolute", "auto" !== i.flexStyle[l[0]] && (s.width = r(i.flexStyle[l[0]] - i.flexStyle[l[0] + "InnerBefore"] - i.flexStyle[l[0] + "InnerAfter"] - i.flexStyle[l[0] + "BorderBefore"] - i.flexStyle[l[0] + "BorderAfter"])), "auto" !== i.flexStyle[l[1]] && (s.height = r(i.flexStyle[l[1]] - i.flexStyle[l[1] + "InnerBefore"] - i.flexStyle[l[1] + "InnerAfter"] - i.flexStyle[l[1] + "BorderBefore"] - i.flexStyle[l[1] + "BorderAfter"])), s.top = r(i.flexStyle[l[1] + "Start"]), s.left = r(i.flexStyle[l[0] + "Start"]), s.marginTop = r(i.flexStyle[l[1] + "Before"]), s.marginRight = r(i.flexStyle[l[0] + "After"]), s.marginBottom = r(i.flexStyle[l[1] + "After"]), s.marginLeft = r(i.flexStyle[l[0] + "Before"])
                    }
                }

                function r(e) {
                    return "string" == typeof e ? e : Math.max(e, 0) + "px"
                }
                t.exports = i;
                var o = e("../flexbox")
            }, {
                "../flexbox": 7
            }],
            18: [function(e, t, n) {
                function i(e) {
                    for (var t, n = -1; t = e[++n];) r(t)
                }
                t.exports = i;
                var r = e("../write")
            }, {
                "../write": 17
            }]
        }, {}, [13])(13)
    })
}, function(e, t) {
    ! function(e) {
        "use strict";

        function t(e, t) {
            return e + ".touchspin_" + t
        }

        function n(n, i) {
            return e.map(n, function(e) {
                return t(e, i)
            })
        }
        var i = 0;
        e.fn.TouchSpin = function(t) {
            if ("destroy" === t) return void this.each(function() {
                var t = e(this),
                    i = t.data();
                e(document).off(n(["mouseup", "touchend", "touchcancel", "mousemove", "touchmove", "scroll", "scrollstart"], i.spinnerid).join(" "))
            });
            var r = {
                    min: 0,
                    max: 100,
                    initval: "",
                    replacementval: "",
                    step: 1,
                    decimals: 0,
                    stepinterval: 100,
                    forcestepdivisibility: "round",
                    stepintervaldelay: 500,
                    verticalbuttons: !1,
                    verticalupclass: "glyphicon glyphicon-chevron-up",
                    verticaldownclass: "glyphicon glyphicon-chevron-down",
                    prefix: "",
                    postfix: "",
                    prefix_extraclass: "",
                    postfix_extraclass: "",
                    booster: !0,
                    boostat: 10,
                    maxboostedstep: !1,
                    mousewheel: !0,
                    buttondown_class: "btn btn-default",
                    buttonup_class: "btn btn-default",
                    buttondown_txt: "-",
                    buttonup_txt: "+"
                },
                o = {
                    min: "min",
                    max: "max",
                    initval: "init-val",
                    replacementval: "replacement-val",
                    step: "step",
                    decimals: "decimals",
                    stepinterval: "step-interval",
                    verticalbuttons: "vertical-buttons",
                    verticalupclass: "vertical-up-class",
                    verticaldownclass: "vertical-down-class",
                    forcestepdivisibility: "force-step-divisibility",
                    stepintervaldelay: "step-interval-delay",
                    prefix: "prefix",
                    postfix: "postfix",
                    prefix_extraclass: "prefix-extra-class",
                    postfix_extraclass: "postfix-extra-class",
                    booster: "booster",
                    boostat: "boostat",
                    maxboostedstep: "max-boosted-step",
                    mousewheel: "mouse-wheel",
                    buttondown_class: "button-down-class",
                    buttonup_class: "button-up-class",
                    buttondown_txt: "button-down-txt",
                    buttonup_txt: "button-up-txt"
                };
            return this.each(function() {
                function a() {
                    if (!j.data("alreadyinitialized")) {
                        if (j.data("alreadyinitialized", !0), i += 1, j.data("spinnerid", i), !j.is("input")) return void console.log("Must be an input.");
                        u(), s(), _(), d(), m(), g(), v(), y(), I.input.css("display", "block")
                    }
                }

                function s() {
                    "" !== A.initval && "" === j.val() && j.val(A.initval)
                }

                function l(e) {
                    f(e), _();
                    var t = I.input.val();
                    "" !== t && (t = Number(I.input.val()), I.input.val(t.toFixed(A.decimals)))
                }

                function u() {
                    A = e.extend({}, r, B, c(), t)
                }

                function c() {
                    var t = {};
                    return e.each(o, function(e, n) {
                        var i = "bts-" + n;
                        j.is("[data-" + i + "]") && (t[e] = j.data(i))
                    }), t
                }

                function f(t) {
                    A = e.extend({}, A, t)
                }

                function d() {
                    var e = j.val(),
                        t = j.parent();
                    "" !== e && (e = Number(e).toFixed(A.decimals)), j.data("initvalue", e).val(e), j.addClass("form-control"), t.hasClass("input-group") ? h(t) : p()
                }

                function h(t) {
                    t.addClass("bootstrap-touchspin");
                    var n, i, r = j.prev(),
                        o = j.next(),
                        a = '<span class="input-group-addon bootstrap-touchspin-prefix">' + A.prefix + "</span>",
                        s = '<span class="input-group-addon bootstrap-touchspin-postfix">' + A.postfix + "</span>";
                    r.hasClass("input-group-btn") ? (n = '<button class="' + A.buttondown_class + ' bootstrap-touchspin-down" type="button">' + A.buttondown_txt + "</button>", r.append(n)) : (n = '<span class="input-group-btn"><button class="' + A.buttondown_class + ' bootstrap-touchspin-down" type="button">' + A.buttondown_txt + "</button></span>", e(n).insertBefore(j)), o.hasClass("input-group-btn") ? (i = '<button class="' + A.buttonup_class + ' bootstrap-touchspin-up" type="button">' + A.buttonup_txt + "</button>", o.prepend(i)) : (i = '<span class="input-group-btn"><button class="' + A.buttonup_class + ' bootstrap-touchspin-up" type="button">' + A.buttonup_txt + "</button></span>", e(i).insertAfter(j)), e(a).insertBefore(j), e(s).insertAfter(j), k = t
                }

                function p() {
                    var t;
                    t = A.verticalbuttons ? '<div class="input-group bootstrap-touchspin"><span class="input-group-addon bootstrap-touchspin-prefix">' + A.prefix + '</span><span class="input-group-addon bootstrap-touchspin-postfix">' + A.postfix + '</span><span class="input-group-btn-vertical"><button class="' + A.buttondown_class + ' bootstrap-touchspin-up" type="button"><i class="' + A.verticalupclass + '"></i></button><button class="' + A.buttonup_class + ' bootstrap-touchspin-down" type="button"><i class="' + A.verticaldownclass + '"></i></button></span></div>' : '<div class="input-group bootstrap-touchspin"><span class="input-group-btn"><button class="' + A.buttondown_class + ' bootstrap-touchspin-down" type="button">' + A.buttondown_txt + '</button></span><span class="input-group-addon bootstrap-touchspin-prefix">' + A.prefix + '</span><span class="input-group-addon bootstrap-touchspin-postfix">' + A.postfix + '</span><span class="input-group-btn"><button class="' + A.buttonup_class + ' bootstrap-touchspin-up" type="button">' + A.buttonup_txt + "</button></span></div>",
                        k = e(t).insertBefore(j), e(".bootstrap-touchspin-prefix", k).after(j), j.hasClass("input-sm") ? k.addClass("input-group-sm") : j.hasClass("input-lg") && k.addClass("input-group-lg")
                }

                function m() {
                    I = {
                        down: e(".bootstrap-touchspin-down", k),
                        up: e(".bootstrap-touchspin-up", k),
                        input: e("input", k),
                        prefix: e(".bootstrap-touchspin-prefix", k).addClass(A.prefix_extraclass),
                        postfix: e(".bootstrap-touchspin-postfix", k).addClass(A.postfix_extraclass)
                    }
                }

                function g() {
                    "" === A.prefix && I.prefix.hide(), "" === A.postfix && I.postfix.hide()
                }

                function v() {
                    j.on("keydown", function(e) {
                        var t = e.keyCode || e.which;
                        38 === t ? ("up" !== F && (w(), C()), e.preventDefault()) : 40 === t && ("down" !== F && (S(), E()), e.preventDefault())
                    }), j.on("keyup", function(e) {
                        var t = e.keyCode || e.which;
                        38 === t ? T() : 40 === t && T()
                    }), j.on("blur", function() {
                        _()
                    }), I.down.on("keydown", function(e) {
                        var t = e.keyCode || e.which;
                        32 !== t && 13 !== t || ("down" !== F && (S(), E()), e.preventDefault())
                    }), I.down.on("keyup", function(e) {
                        var t = e.keyCode || e.which;
                        32 !== t && 13 !== t || T()
                    }), I.up.on("keydown", function(e) {
                        var t = e.keyCode || e.which;
                        32 !== t && 13 !== t || ("up" !== F && (w(), C()), e.preventDefault())
                    }), I.up.on("keyup", function(e) {
                        var t = e.keyCode || e.which;
                        32 !== t && 13 !== t || T()
                    }), I.down.on("mousedown.touchspin", function(e) {
                        I.down.off("touchstart.touchspin"), j.is(":disabled") || (S(), E(), e.preventDefault(), e.stopPropagation())
                    }), I.down.on("touchstart.touchspin", function(e) {
                        I.down.off("mousedown.touchspin"), j.is(":disabled") || (S(), E(), e.preventDefault(), e.stopPropagation())
                    }), I.up.on("mousedown.touchspin", function(e) {
                        I.up.off("touchstart.touchspin"), j.is(":disabled") || (w(), C(), e.preventDefault(), e.stopPropagation())
                    }), I.up.on("touchstart.touchspin", function(e) {
                        I.up.off("mousedown.touchspin"), j.is(":disabled") || (w(), C(), e.preventDefault(), e.stopPropagation())
                    }), I.up.on("mouseout touchleave touchend touchcancel", function(e) {
                        F && (e.stopPropagation(), T())
                    }), I.down.on("mouseout touchleave touchend touchcancel", function(e) {
                        F && (e.stopPropagation(), T())
                    }), I.down.on("mousemove touchmove", function(e) {
                        F && (e.stopPropagation(), e.preventDefault())
                    }), I.up.on("mousemove touchmove", function(e) {
                        F && (e.stopPropagation(), e.preventDefault())
                    }), e(document).on(n(["mouseup", "touchend", "touchcancel"], i).join(" "), function(e) {
                        F && (e.preventDefault(), T())
                    }), e(document).on(n(["mousemove", "touchmove", "scroll", "scrollstart"], i).join(" "), function(e) {
                        F && (e.preventDefault(), T())
                    }), j.on("mousewheel DOMMouseScroll", function(e) {
                        if (A.mousewheel && j.is(":focus")) {
                            var t = e.originalEvent.wheelDelta || -e.originalEvent.deltaY || -e.originalEvent.detail;
                            e.stopPropagation(), e.preventDefault(), t < 0 ? S() : w()
                        }
                    })
                }

                function y() {
                    j.on("touchspin.uponce", function() {
                        T(), w()
                    }), j.on("touchspin.downonce", function() {
                        T(), S()
                    }), j.on("touchspin.startupspin", function() {
                        C()
                    }), j.on("touchspin.startdownspin", function() {
                        E()
                    }), j.on("touchspin.stopspin", function() {
                        T()
                    }), j.on("touchspin.updatesettings", function(e, t) {
                        l(t)
                    })
                }

                function b(e) {
                    switch (A.forcestepdivisibility) {
                        case "round":
                            return (Math.round(e / A.step) * A.step).toFixed(A.decimals);
                        case "floor":
                            return (Math.floor(e / A.step) * A.step).toFixed(A.decimals);
                        case "ceil":
                            return (Math.ceil(e / A.step) * A.step).toFixed(A.decimals);
                        default:
                            return e
                    }
                }

                function _() {
                    var e, t, n;
                    return e = j.val(), "" === e ? void("" !== A.replacementval && (j.val(A.replacementval), j.trigger("change"))) : void(A.decimals > 0 && "." === e || (t = parseFloat(e), isNaN(t) && (t = "" !== A.replacementval ? A.replacementval : 0), n = t, t.toString() !== e && (n = t), t < A.min && (n = A.min), t > A.max && (n = A.max), n = b(n), Number(e).toString() !== n.toString() && (j.val(n), j.trigger("change"))))
                }

                function x() {
                    if (A.booster) {
                        var e = Math.pow(2, Math.floor(V / A.boostat)) * A.step;
                        return A.maxboostedstep && e > A.maxboostedstep && (e = A.maxboostedstep, O = Math.round(O / e) * e), Math.max(A.step, e)
                    }
                    return A.step
                }

                function w() {
                    _(), O = parseFloat(I.input.val()), isNaN(O) && (O = 0);
                    var e = O,
                        t = x();
                    O += t, O > A.max && (O = A.max, j.trigger("touchspin.on.max"), T()), I.input.val(Number(O).toFixed(A.decimals)), e !== O && j.trigger("change")
                }

                function S() {
                    _(), O = parseFloat(I.input.val()), isNaN(O) && (O = 0);
                    var e = O,
                        t = x();
                    O -= t, O < A.min && (O = A.min, j.trigger("touchspin.on.min"), T()), I.input.val(O.toFixed(A.decimals)), e !== O && j.trigger("change")
                }

                function E() {
                    T(), V = 0, F = "down", j.trigger("touchspin.on.startspin"), j.trigger("touchspin.on.startdownspin"), P = setTimeout(function() {
                        D = setInterval(function() {
                            V++, S()
                        }, A.stepinterval)
                    }, A.stepintervaldelay)
                }

                function C() {
                    T(), V = 0, F = "up", j.trigger("touchspin.on.startspin"), j.trigger("touchspin.on.startupspin"), L = setTimeout(function() {
                        N = setInterval(function() {
                            V++, w()
                        }, A.stepinterval)
                    }, A.stepintervaldelay)
                }

                function T() {
                    switch (clearTimeout(P), clearTimeout(L), clearInterval(D), clearInterval(N), F) {
                        case "up":
                            j.trigger("touchspin.on.stopupspin"), j.trigger("touchspin.on.stopspin");
                            break;
                        case "down":
                            j.trigger("touchspin.on.stopdownspin"), j.trigger("touchspin.on.stopspin")
                    }
                    V = 0, F = !1
                }
                var A, k, I, O, D, N, P, L, j = e(this),
                    B = j.data(),
                    V = 0,
                    F = !1;
                a()
            })
        }
    }(jQuery)
}, function(e, t) {}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    /***
     * 2007-2024 PrestaShop
     *
     * NOTICE OF LICENSE
     *
     * This source file is subject to the Open Software License (OSL 3.0)
     * that is bundled with this package in the file LICENSE.txt.
     * It is also available through the world-wide-web at this URL:
     * http://opensource.org/licenses/osl-3.0.php
     * If you did not receive a copy of the license and are unable to
     * obtain it through the world-wide-web, please send an email
     * to license@prestashop.com so we can send you a copy immediately.
     *
     * DISCLAIMER
     *
     * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
     * versions in the future. If you wish to customize PrestaShop for your
     * needs please refer to http://www.prestashop.com for more information.
     *
     * @author    PrestaShop SA <contact@prestashop.com>
     * @copyright 2007-2024 PrestaShop SA
     * @license   http://opensource.org/licenses/osl-3.0.php Open Software License (OSL 3.0)
     * International Registered Trademark & Property of PrestaShop SA
     */
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function r(e, t) {
        var n = t.children().detach();
        t.empty().append(e.children().detach()), e.append(n)
    }

    function o() {
        /**u.default.responsive.mobile ? (0, s.default)("*[id^='_desktop_']").each(function(e, t) {
            var n = (0, s.default)("#" + t.id.replace("_desktop_", "_mobile_"));
            n && r((0, s.default)(t), n)
        }) : (0, s.default)("*[id^='_mobile_']").each(function(e, t) {
            var n = (0, s.default)("#" + t.id.replace("_mobile_", "_desktop_"));
            n && r((0, s.default)(t), n)
        }), u.default.emit("responsive update", {
            mobile: u.default.responsive.mobile
        })*/
    }
    var a = n(53),
        s = i(a),
        l = n(54),
        u = i(l);
    u.default.responsive = u.default.responsive || {}, u.default.responsive.current_width = (0, s.default)(window).width(), u.default.responsive.min_width = 768, u.default.responsive.mobile = u.default.responsive.current_width < u.default.responsive.min_width, (0, s.default)(window).on("resize", function() {
        var e = u.default.responsive.current_width,
            t = u.default.responsive.min_width,
            n = (0, s.default)(window).width(),
            i = e >= t && n < t || e < t && n >= t;
        u.default.responsive.current_width = n, u.default.responsive.mobile = u.default.responsive.current_width < u.default.responsive.min_width, i && o()
    }), (0, s.default)(document).ready(function() {
        u.default.responsive.mobile && o()
    })
}, function(e, t) {
    e.exports = jQuery
}, function(e, t) {
    e.exports = prestashop
}, function(e, t, n) {
    /***
     * 2007-2024 PrestaShop
     *
     * NOTICE OF LICENSE
     *
     * This source file is subject to the Open Software License (OSL 3.0)
     * that is bundled with this package in the file LICENSE.txt.
     * It is also available through the world-wide-web at this URL:
     * http://opensource.org/licenses/osl-3.0.php
     * If you did not receive a copy of the license and are unable to
     * obtain it through the world-wide-web, please send an email
     * to license@prestashop.com so we can send you a copy immediately.
     *
     * DISCLAIMER
     *
     * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
     * versions in the future. If you wish to customize PrestaShop for your
     * needs please refer to http://www.prestashop.com for more information.
     *
     * @author    PrestaShop SA <contact@prestashop.com>
     * @copyright 2007-2024 PrestaShop SA
     * @license   http://opensource.org/licenses/osl-3.0.php Open Software License (OSL 3.0)
     * International Registered Trademark & Property of PrestaShop SA
     */
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function r() {
        0 !== (0, a.default)(".js-cancel-address").length && (0, a.default)(".checkout-step:not(.js-current-step) .step-title").addClass("not-allowed"), (0, a.default)(".js-terms a").on("click", function(e) {
            e.preventDefault();
            var t = (0, a.default)(e.target).attr("href");
            t && (t += "?content_only=1", a.default.get(t, function(e) {
                (0, a.default)("#modal").find(".js-modal-content").html((0, a.default)(e).find(".page-cms").contents())
            }).fail(function(e) {
                l.default.emit("handleError", {
                    eventType: "clickTerms",
                    resp: e
                })
            })), (0, a.default)("#modal").modal("show")
        }), (0, a.default)(".js-gift-checkbox").on("click", function(e) {
            (0, a.default)("#gift").collapse("toggle")
        })
    }
    var o = n(53),
        a = i(o),
        s = n(54),
        l = i(s);
    (0, a.default)(document).ready(function() {
        1 === (0, a.default)("body#checkout").length && r(), l.default.on("updatedDeliveryForm", function(e) {
            (0, a.default)(".carrier-extra-content").hide(), e.deliveryOption.find(".carrier-extra-content").slideDown()
        })
    })
}, function(e, t, n) {
    /***
     * 2007-2024 PrestaShop
     *
     * NOTICE OF LICENSE
     *
     * This source file is subject to the Open Software License (OSL 3.0)
     * that is bundled with this package in the file LICENSE.txt.
     * It is also available through the world-wide-web at this URL:
     * http://opensource.org/licenses/osl-3.0.php
     * If you did not receive a copy of the license and are unable to
     * obtain it through the world-wide-web, please send an email
     * to license@prestashop.com so we can send you a copy immediately.
     *
     * DISCLAIMER
     *
     * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
     * versions in the future. If you wish to customize PrestaShop for your
     * needs please refer to http://www.prestashop.com for more information.
     *
     * @author    PrestaShop SA <contact@prestashop.com>
     * @copyright 2007-2024 PrestaShop SA
     * @license   http://opensource.org/licenses/osl-3.0.php Open Software License (OSL 3.0)
     * International Registered Trademark & Property of PrestaShop SA
     */
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function r() {
        (0, s.default)("#order-return-form table thead input[type=checkbox]").on("click", function() {
            var e = (0, s.default)(this).prop("checked");
            (0, s.default)("#order-return-form table tbody input[type=checkbox]").each(function(t, n) {
                (0, s.default)(n).prop("checked", e)
            })
        })
    }

    function o() {
        (0, s.default)("body#order-detail") && r()
    }
    var a = n(53),
        s = i(a);
    (0, s.default)(document).ready(o)
}, function(e, t, n) {
    /***
     * 2007-2024 PrestaShop
     *
     * NOTICE OF LICENSE
     *
     * This source file is subject to the Open Software License (OSL 3.0)
     * that is bundled with this package in the file LICENSE.txt.
     * It is also available through the world-wide-web at this URL:
     * http://opensource.org/licenses/osl-3.0.php
     * If you did not receive a copy of the license and are unable to
     * obtain it through the world-wide-web, please send an email
     * to license@prestashop.com so we can send you a copy immediately.
     *
     * DISCLAIMER
     *
     * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
     * versions in the future. If you wish to customize PrestaShop for your
     * needs please refer to http://www.prestashop.com for more information.
     *
     * @author    PrestaShop SA <contact@prestashop.com>
     * @copyright 2007-2024 PrestaShop SA
     * @license   http://opensource.org/licenses/osl-3.0.php Open Software License (OSL 3.0)
     * International Registered Trademark & Property of PrestaShop SA
     */
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function r(e) {
        (0, a.default)("#search_filters").replaceWith(e.rendered_facets), (0, a.default)("#js-active-search-filters").replaceWith(e.rendered_active_filters), (0, a.default)("#js-product-list-top").replaceWith(e.rendered_products_top), (0, a.default)("#js-product-list").replaceWith(e.rendered_products), (0, a.default)("#js-product-list-bottom").replaceWith(e.rendered_products_bottom);
        var t = new c.default;
        t.init()
    }
    var o = n(53),
        a = i(o),
        s = n(54),
        l = i(s);
    n(58);
    var u = n(59),
        c = i(u);
    (0, a.default)(document).ready(function() {
        l.default.on("clickQuickView", function(t) {
            var n = {
                action: "quickview",
                id_product: t.dataset.idProduct,
                id_product_attribute: t.dataset.idProductAttribute
            };
            $('body').append('<div class="loading_view"><div></div></div>'); // add div loading
            a.default.post(l.default.urls.pages.product, n, null, "json").then(function(t) {
                (0, a.default)("body").append(t.quickview_html);
                var n = (0, a.default)("#quickview-modal-" + t.product.id + "-" + t.product.id_product_attribute);
                n.modal("show"), e(n), n.on("hidden.bs.modal", function() {
                    n.remove()
                })
                $('.loading_view').remove(); //remove loading 
            }).fail(function(e) {
                l.default.emit("handleError", {
                    eventType: "clickQuickView",
                    resp: e
                })
            })
        });
        var e = function(e) {
                var n = 4,
                    i = (0, a.default)(".js-arrows"),
                    r = e.find(".js-qv-product-images");
                (0, a.default)(".js-thumb").on("click", function(e) {
                    (0, a.default)(".js-thumb").hasClass("selected") && (0, a.default)(".js-thumb").removeClass("selected"), (0, a.default)(e.currentTarget).addClass("selected"), (0, a.default)(".js-qv-product-cover").attr("src", (0, a.default)(e.target).data("image-large-src"))
                }), r.find("li").length <= n ? i.hide() : i.on("click", function(e) {
                    (0, a.default)(e.target).hasClass("arrow-up") && (0, a.default)(".js-qv-product-images").position().top < 0 ? (t("up"), (0, a.default)(".arrow-down").css("opacity", "1")) : (0, a.default)(e.target).hasClass("arrow-down") && r.position().top + r.height() > (0, a.default)(".js-qv-mask").height() && (t("down"), (0, a.default)(".arrow-up").css("opacity", "1"))
                }), e.find("#quantity_wanted").TouchSpin({
                    verticalbuttons: !0,
                    verticalupclass: "material-icons touchspin-up",
                    verticaldownclass: "material-icons touchspin-down",
                    buttondown_class: "btn btn-touchspin js-touchspin",
                    buttonup_class: "btn btn-touchspin js-touchspin",
                    min: 1,
                    max: 1e6
                })
            },
            t = function(e) {
                var t = 20,
                    n = (0, a.default)(".js-qv-product-images"),
                    i = (0, a.default)(".js-qv-product-images li img").height() + t,
                    r = n.position().top;
                n.velocity({
                    translateY: "up" === e ? r + i : r - i
                }, function() {
                    n.position().top >= 0 ? (0, a.default)(".arrow-up").css("opacity", ".2") : n.position().top + n.height() <= (0, a.default)(".js-qv-mask").height() && (0, a.default)(".arrow-down").css("opacity", ".2")
                })
            };
        (0, a.default)("body").on("click", "#search_filter_toggler", function() {
            (0, a.default)("#search_filters_wrapper").removeClass("hidden-sm-down"), (0, a.default)("#content-wrapper").addClass("hidden-sm-down"), (0, a.default)("#footer").addClass("hidden-sm-down")
        }), (0, a.default)("#search_filter_controls .clear").on("click", function() {
            (0, a.default)("#search_filters_wrapper").addClass("hidden-sm-down"), (0, a.default)("#content-wrapper").removeClass("hidden-sm-down"), (0, a.default)("#footer").removeClass("hidden-sm-down")
        }), (0, a.default)("#search_filter_controls .ok").on("click", function() {
            (0, a.default)("#search_filters_wrapper").addClass("hidden-sm-down"), (0, a.default)("#content-wrapper").removeClass("hidden-sm-down"), (0, a.default)("#footer").removeClass("hidden-sm-down")
        });
        var n = function(e) {
            if (void 0 !== e.target.dataset.searchUrl) return e.target.dataset.searchUrl;
            if (void 0 === (0, a.default)(e.target).parent()[0].dataset.searchUrl) throw new Error("Can not parse search URL");
            return (0, a.default)(e.target).parent()[0].dataset.searchUrl
        };
        (0, a.default)("body").on("change", "#search_filters input[data-search-url]", function(e) {
            l.default.emit("updateFacets", n(e))
        }), (0, a.default)("body").on("click", ".js-search-filters-clear-all", function(e) {
            l.default.emit("updateFacets", n(e))
        }), (0, a.default)("body").on("click", ".js-search-link", function(e) {
            e.preventDefault(), l.default.emit("updateFacets", (0, a.default)(e.target).closest("a").get(0).href)
        }), (0, a.default)("body").on("change", "#search_filters select", function(e) {
            var t = (0, a.default)(e.target).closest("form");
            l.default.emit("updateFacets", "?" + t.serialize())
        }), l.default.on("updateProductList", function(e) {
            r(e)
        })
    })
}, function(e, t, n) {
    var i, r; /**! VelocityJS.org (1.5.0). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */
    /**! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
    ! function(e) {
        "use strict";

        function t(e) {
            var t = e.length,
                i = n.type(e);
            return "function" !== i && !n.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === i || 0 === t || "number" == typeof t && t > 0 && t - 1 in e))
        }
        if (!e.jQuery) {
            var n = function(e, t) {
                return new n.fn.init(e, t)
            };
            n.isWindow = function(e) {
                return e && e === e.window
            }, n.type = function(e) {
                return e ? "object" == typeof e || "function" == typeof e ? r[a.call(e)] || "object" : typeof e : e + ""
            }, n.isArray = Array.isArray || function(e) {
                return "array" === n.type(e)
            }, n.isPlainObject = function(e) {
                var t;
                if (!e || "object" !== n.type(e) || e.nodeType || n.isWindow(e)) return !1;
                try {
                    if (e.constructor && !o.call(e, "constructor") && !o.call(e.constructor.prototype, "isPrototypeOf")) return !1
                } catch (e) {
                    return !1
                }
                for (t in e);
                return void 0 === t || o.call(e, t)
            }, n.each = function(e, n, i) {
                var r, o = 0,
                    a = e.length,
                    s = t(e);
                if (i) {
                    if (s)
                        for (; o < a && (r = n.apply(e[o], i), r !== !1); o++);
                    else
                        for (o in e)
                            if (e.hasOwnProperty(o) && (r = n.apply(e[o], i), r === !1)) break
                } else if (s)
                    for (; o < a && (r = n.call(e[o], o, e[o]), r !== !1); o++);
                else
                    for (o in e)
                        if (e.hasOwnProperty(o) && (r = n.call(e[o], o, e[o]), r === !1)) break; return e
            }, n.data = function(e, t, r) {
                if (void 0 === r) {
                    var o = e[n.expando],
                        a = o && i[o];
                    if (void 0 === t) return a;
                    if (a && t in a) return a[t]
                } else if (void 0 !== t) {
                    var s = e[n.expando] || (e[n.expando] = ++n.uuid);
                    return i[s] = i[s] || {}, i[s][t] = r, r
                }
            }, n.removeData = function(e, t) {
                var r = e[n.expando],
                    o = r && i[r];
                o && (t ? n.each(t, function(e, t) {
                    delete o[t]
                }) : delete i[r])
            }, n.extend = function() {
                var e, t, i, r, o, a, s = arguments[0] || {},
                    l = 1,
                    u = arguments.length,
                    c = !1;
                for ("boolean" == typeof s && (c = s, s = arguments[l] || {}, l++), "object" != typeof s && "function" !== n.type(s) && (s = {}), l === u && (s = this, l--); l < u; l++)
                    if (o = arguments[l])
                        for (r in o) o.hasOwnProperty(r) && (e = s[r], i = o[r], s !== i && (c && i && (n.isPlainObject(i) || (t = n.isArray(i))) ? (t ? (t = !1, a = e && n.isArray(e) ? e : []) : a = e && n.isPlainObject(e) ? e : {}, s[r] = n.extend(c, a, i)) : void 0 !== i && (s[r] = i)));
                return s
            }, n.queue = function(e, i, r) {
                function o(e, n) {
                    var i = n || [];
                    return e && (t(Object(e)) ? ! function(e, t) {
                        for (var n = +t.length, i = 0, r = e.length; i < n;) e[r++] = t[i++];
                        if (n !== n)
                            for (; void 0 !== t[i];) e[r++] = t[i++];
                        return e.length = r, e
                    }(i, "string" == typeof e ? [e] : e) : [].push.call(i, e)), i
                }
                if (e) {
                    i = (i || "fx") + "queue";
                    var a = n.data(e, i);
                    return r ? (!a || n.isArray(r) ? a = n.data(e, i, o(r)) : a.push(r), a) : a || []
                }
            }, n.dequeue = function(e, t) {
                n.each(e.nodeType ? [e] : e, function(e, i) {
                    t = t || "fx";
                    var r = n.queue(i, t),
                        o = r.shift();
                    "inprogress" === o && (o = r.shift()), o && ("fx" === t && r.unshift("inprogress"), o.call(i, function() {
                        n.dequeue(i, t)
                    }))
                })
            }, n.fn = n.prototype = {
                init: function(e) {
                    if (e.nodeType) return this[0] = e, this;
                    throw new Error("Not a DOM node.")
                },
                offset: function() {
                    var t = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
                        top: 0,
                        left: 0
                    };
                    return {
                        top: t.top + (e.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
                        left: t.left + (e.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
                    }
                },
                position: function() {
                    function e(e) {
                        for (var t = e.offsetParent; t && "html" !== t.nodeName.toLowerCase() && t.style && "static" === t.style.position;) t = t.offsetParent;
                        return t || document
                    }
                    var t = this[0],
                        i = e(t),
                        r = this.offset(),
                        o = /^(?:body|html)$/i.test(i.nodeName) ? {
                            top: 0,
                            left: 0
                        } : n(i).offset();
                    return r.top -= parseFloat(t.style.marginTop) || 0, r.left -= parseFloat(t.style.marginLeft) || 0, i.style && (o.top += parseFloat(i.style.borderTopWidth) || 0, o.left += parseFloat(i.style.borderLeftWidth) || 0), {
                        top: r.top - o.top,
                        left: r.left - o.left
                    }
                }
            };
            var i = {};
            n.expando = "velocity" + (new Date).getTime(), n.uuid = 0;
            for (var r = {}, o = r.hasOwnProperty, a = r.toString, s = "Boolean Number String Function Array Date RegExp Object Error".split(" "), l = 0; l < s.length; l++) r["[object " + s[l] + "]"] = s[l].toLowerCase();
            n.fn.init.prototype = n.fn, e.Velocity = {
                Utilities: n
            }
        }
    }(window),
    function(o) {
        "use strict";
        "object" == typeof e && "object" == typeof e.exports ? e.exports = o() : (i = o, r = "function" == typeof i ? i.call(t, n, t, e) : i, !(void 0 !== r && (e.exports = r)))
    }(function() {
        "use strict";
        return function(e, t, n, i) {
            function r(e) {
                for (var t = -1, n = e ? e.length : 0, i = []; ++t < n;) {
                    var r = e[t];
                    r && i.push(r)
                }
                return i
            }

            function o(e) {
                return _.isWrapped(e) ? e = y.call(e) : _.isNode(e) && (e = [e]), e
            }

            function a(e) {
                var t = p.data(e, "velocity");
                return null === t ? i : t
            }

            function s(e, t) {
                var n = a(e);
                n && n.delayTimer && !n.delayPaused && (n.delayRemaining = n.delay - t + n.delayBegin, n.delayPaused = !0, clearTimeout(n.delayTimer.setTimeout))
            }

            function l(e, t) {
                var n = a(e);
                n && n.delayTimer && n.delayPaused && (n.delayPaused = !1, n.delayTimer.setTimeout = setTimeout(n.delayTimer.next, n.delayRemaining))
            }

            function u(e) {
                return function(t) {
                    return Math.round(t * e) * (1 / e)
                }
            }

            function c(e, n, i, r) {
                function o(e, t) {
                    return 1 - 3 * t + 3 * e
                }

                function a(e, t) {
                    return 3 * t - 6 * e
                }

                function s(e) {
                    return 3 * e
                }

                function l(e, t, n) {
                    return ((o(t, n) * e + a(t, n)) * e + s(t)) * e
                }

                function u(e, t, n) {
                    return 3 * o(t, n) * e * e + 2 * a(t, n) * e + s(t)
                }

                function c(t, n) {
                    for (var r = 0; r < m; ++r) {
                        var o = u(n, e, i);
                        if (0 === o) return n;
                        var a = l(n, e, i) - t;
                        n -= a / o
                    }
                    return n
                }

                function f() {
                    for (var t = 0; t < b; ++t) S[t] = l(t * _, e, i)
                }

                function d(t, n, r) {
                    var o, a, s = 0;
                    do a = n + (r - n) / 2, o = l(a, e, i) - t, o > 0 ? r = a : n = a; while (Math.abs(o) > v && ++s < y);
                    return a
                }

                function h(t) {
                    for (var n = 0, r = 1, o = b - 1; r !== o && S[r] <= t; ++r) n += _;
                    --r;
                    var a = (t - S[r]) / (S[r + 1] - S[r]),
                        s = n + a * _,
                        l = u(s, e, i);
                    return l >= g ? c(t, s) : 0 === l ? s : d(t, n, n + _)
                }

                function p() {
                    E = !0, e === n && i === r || f()
                }
                var m = 4,
                    g = .001,
                    v = 1e-7,
                    y = 10,
                    b = 11,
                    _ = 1 / (b - 1),
                    x = "Float32Array" in t;
                if (4 !== arguments.length) return !1;
                for (var w = 0; w < 4; ++w)
                    if ("number" != typeof arguments[w] || isNaN(arguments[w]) || !isFinite(arguments[w])) return !1;
                e = Math.min(e, 1), i = Math.min(i, 1), e = Math.max(e, 0), i = Math.max(i, 0);
                var S = x ? new Float32Array(b) : new Array(b),
                    E = !1,
                    C = function(t) {
                        return E || p(), e === n && i === r ? t : 0 === t ? 0 : 1 === t ? 1 : l(h(t), n, r)
                    };
                C.getControlPoints = function() {
                    return [{
                        x: e,
                        y: n
                    }, {
                        x: i,
                        y: r
                    }]
                };
                var T = "generateBezier(" + [e, n, i, r] + ")";
                return C.toString = function() {
                    return T
                }, C
            }

            function f(e, t) {
                var n = e;
                return _.isString(e) ? E.Easings[e] || (n = !1) : n = _.isArray(e) && 1 === e.length ? u.apply(null, e) : _.isArray(e) && 2 === e.length ? C.apply(null, e.concat([t])) : !(!_.isArray(e) || 4 !== e.length) && c.apply(null, e), n === !1 && (n = E.Easings[E.defaults.easing] ? E.defaults.easing : S), n
            }

            function d(e) {
                if (e) {
                    var t = E.timestamp && e !== !0 ? e : v.now(),
                        n = E.State.calls.length;
                    n > 1e4 && (E.State.calls = r(E.State.calls), n = E.State.calls.length);
                    for (var o = 0; o < n; o++)
                        if (E.State.calls[o]) {
                            var s = E.State.calls[o],
                                l = s[0],
                                u = s[2],
                                c = s[3],
                                f = !!c,
                                g = null,
                                y = s[5],
                                b = s[6];
                            if (c || (c = E.State.calls[o][3] = t - 16), y) {
                                if (y.resume !== !0) continue;
                                c = s[3] = Math.round(t - b - 16), s[5] = null
                            }
                            b = s[6] = t - c;
                            for (var x = Math.min(b / u.duration, 1), w = 0, S = l.length; w < S; w++) {
                                var C = l[w],
                                    A = C.element;
                                if (a(A)) {
                                    var I = !1;
                                    if (u.display !== i && null !== u.display && "none" !== u.display) {
                                        if ("flex" === u.display) {
                                            var O = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];
                                            p.each(O, function(e, t) {
                                                T.setPropertyValue(A, "display", t)
                                            })
                                        }
                                        T.setPropertyValue(A, "display", u.display)
                                    }
                                    u.visibility !== i && "hidden" !== u.visibility && T.setPropertyValue(A, "visibility", u.visibility);
                                    for (var D in C)
                                        if (C.hasOwnProperty(D) && "element" !== D) {
                                            var N, P = C[D],
                                                L = _.isString(P.easing) ? E.Easings[P.easing] : P.easing;
                                            if (_.isString(P.pattern)) {
                                                var j = 1 === x ? function(e, t, n) {
                                                    var i = P.endValue[t];
                                                    return n ? Math.round(i) : i
                                                } : function(e, t, n) {
                                                    var i = P.startValue[t],
                                                        r = P.endValue[t] - i,
                                                        o = i + r * L(x, u, r);
                                                    return n ? Math.round(o) : o
                                                };
                                                N = P.pattern.replace(/{(\d+)(!)?}/g, j)
                                            } else if (1 === x) N = P.endValue;
                                            else {
                                                var B = P.endValue - P.startValue;
                                                N = P.startValue + B * L(x, u, B)
                                            }
                                            if (!f && N === P.currentValue) continue;
                                            if (P.currentValue = N, "tween" === D) g = N;
                                            else {
                                                var V;
                                                if (T.Hooks.registered[D]) {
                                                    V = T.Hooks.getRoot(D);
                                                    var F = a(A).rootPropertyValueCache[V];
                                                    F && (P.rootPropertyValue = F)
                                                }
                                                var R = T.setPropertyValue(A, D, P.currentValue + (m < 9 && 0 === parseFloat(N) ? "" : P.unitType), P.rootPropertyValue, P.scrollData);
                                                T.Hooks.registered[D] && (T.Normalizations.registered[V] ? a(A).rootPropertyValueCache[V] = T.Normalizations.registered[V]("extract", null, R[1]) : a(A).rootPropertyValueCache[V] = R[1]), "transform" === R[0] && (I = !0)
                                            }
                                        }
                                    u.mobileHA && a(A).transformCache.translate3d === i && (a(A).transformCache.translate3d = "(0px, 0px, 0px)", I = !0), I && T.flushTransformCache(A)
                                }
                            }
                            u.display !== i && "none" !== u.display && (E.State.calls[o][2].display = !1), u.visibility !== i && "hidden" !== u.visibility && (E.State.calls[o][2].visibility = !1), u.progress && u.progress.call(s[1], s[1], x, Math.max(0, c + u.duration - t), c, g), 1 === x && h(o)
                        }
                }
                E.State.isTicking && k(d)
            }

            function h(e, t) {
                if (!E.State.calls[e]) return !1;
                for (var n = E.State.calls[e][0], r = E.State.calls[e][1], o = E.State.calls[e][2], s = E.State.calls[e][4], l = !1, u = 0, c = n.length; u < c; u++) {
                    var f = n[u].element;
                    t || o.loop || ("none" === o.display && T.setPropertyValue(f, "display", o.display), "hidden" === o.visibility && T.setPropertyValue(f, "visibility", o.visibility));
                    var d = a(f);
                    if (o.loop !== !0 && (p.queue(f)[1] === i || !/\.velocityQueueEntryFlag/i.test(p.queue(f)[1])) && d) {
                        d.isAnimating = !1, d.rootPropertyValueCache = {};
                        var h = !1;
                        p.each(T.Lists.transforms3D, function(e, t) {
                            var n = /^scale/.test(t) ? 1 : 0,
                                r = d.transformCache[t];
                            d.transformCache[t] !== i && new RegExp("^\\(" + n + "[^.]").test(r) && (h = !0, delete d.transformCache[t])
                        }), o.mobileHA && (h = !0, delete d.transformCache.translate3d), h && T.flushTransformCache(f), T.Values.removeClass(f, "velocity-animating")
                    }
                    if (!t && o.complete && !o.loop && u === c - 1) try {
                        o.complete.call(r, r)
                    } catch (e) {
                        setTimeout(function() {
                            throw e
                        }, 1)
                    }
                    s && o.loop !== !0 && s(r), d && o.loop === !0 && !t && (p.each(d.tweensContainer, function(e, t) {
                        if (/^rotate/.test(e) && (parseFloat(t.startValue) - parseFloat(t.endValue)) % 360 === 0) {
                            var n = t.startValue;
                            t.startValue = t.endValue, t.endValue = n
                        }
                        /^backgroundPosition/.test(e) && 100 === parseFloat(t.endValue) && "%" === t.unitType && (t.endValue = 0, t.startValue = 100)
                    }), E(f, "reverse", {
                        loop: !0,
                        delay: o.delay
                    })), o.queue !== !1 && p.dequeue(f, o.queue)
                }
                E.State.calls[e] = !1;
                for (var m = 0, g = E.State.calls.length; m < g; m++)
                    if (E.State.calls[m] !== !1) {
                        l = !0;
                        break
                    }
                l === !1 && (E.State.isTicking = !1, delete E.State.calls, E.State.calls = [])
            }
            var p, m = function() {
                    if (n.documentMode) return n.documentMode;
                    for (var e = 7; e > 4; e--) {
                        var t = n.createElement("div");
                        if (t.innerHTML = "<!--[if IE " + e + "]><span></span><![endif]-->", t.getElementsByTagName("span").length) return t = null, e
                    }
                    return i
                }(),
                g = function() {
                    var e = 0;
                    return t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || function(t) {
                        var n, i = (new Date).getTime();
                        return n = Math.max(0, 16 - (i - e)), e = i + n, setTimeout(function() {
                            t(i + n)
                        }, n)
                    }
                }(),
                v = function() {
                    var e = t.performance || {};
                    if ("function" != typeof e.now) {
                        var n = e.timing && e.timing.navigationStart ? e.timing.navigationStart : (new Date).getTime();
                        e.now = function() {
                            return (new Date).getTime() - n
                        }
                    }
                    return e
                }(),
                y = function() {
                    var e = Array.prototype.slice;
                    try {
                        return e.call(n.documentElement), e
                    } catch (t) {
                        return function(t, n) {
                            var i = this.length;
                            if ("number" != typeof t && (t = 0), "number" != typeof n && (n = i), this.slice) return e.call(this, t, n);
                            var r, o = [],
                                a = t >= 0 ? t : Math.max(0, i + t),
                                s = n < 0 ? i + n : Math.min(n, i),
                                l = s - a;
                            if (l > 0)
                                if (o = new Array(l), this.charAt)
                                    for (r = 0; r < l; r++) o[r] = this.charAt(a + r);
                                else
                                    for (r = 0; r < l; r++) o[r] = this[a + r];
                            return o
                        }
                    }
                }(),
                b = function() {
                    return Array.prototype.includes ? function(e, t) {
                        return e.includes(t)
                    } : Array.prototype.indexOf ? function(e, t) {
                        return e.indexOf(t) >= 0
                    } : function(e, t) {
                        for (var n = 0; n < e.length; n++)
                            if (e[n] === t) return !0;
                        return !1
                    }
                },
                _ = {
                    isNumber: function(e) {
                        return "number" == typeof e
                    },
                    isString: function(e) {
                        return "string" == typeof e
                    },
                    isArray: Array.isArray || function(e) {
                        return "[object Array]" === Object.prototype.toString.call(e)
                    },
                    isFunction: function(e) {
                        return "[object Function]" === Object.prototype.toString.call(e)
                    },
                    isNode: function(e) {
                        return e && e.nodeType
                    },
                    isWrapped: function(e) {
                        return e && e !== t && _.isNumber(e.length) && !_.isString(e) && !_.isFunction(e) && !_.isNode(e) && (0 === e.length || _.isNode(e[0]))
                    },
                    isSVG: function(e) {
                        return t.SVGElement && e instanceof t.SVGElement
                    },
                    isEmptyObject: function(e) {
                        for (var t in e)
                            if (e.hasOwnProperty(t)) return !1;
                        return !0
                    }
                },
                x = !1;
            if (e.fn && e.fn.jquery ? (p = e, x = !0) : p = t.Velocity.Utilities, m <= 8 && !x) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
            if (m <= 7) return void(jQuery.fn.velocity = jQuery.fn.animate);
            var w = 400,
                S = "swing",
                E = {
                    State: {
                        isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                        isAndroid: /Android/i.test(navigator.userAgent),
                        isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                        isChrome: t.chrome,
                        isFirefox: /Firefox/i.test(navigator.userAgent),
                        prefixElement: n.createElement("div"),
                        prefixMatches: {},
                        scrollAnchor: null,
                        scrollPropertyLeft: null,
                        scrollPropertyTop: null,
                        isTicking: !1,
                        calls: [],
                        delayedElements: {
                            count: 0
                        }
                    },
                    CSS: {},
                    Utilities: p,
                    Redirects: {},
                    Easings: {},
                    Promise: t.Promise,
                    defaults: {
                        queue: "",
                        duration: w,
                        easing: S,
                        begin: i,
                        complete: i,
                        progress: i,
                        display: i,
                        visibility: i,
                        loop: !1,
                        delay: !1,
                        mobileHA: !0,
                        _cacheValues: !0,
                        promiseRejectEmpty: !0
                    },
                    init: function(e) {
                        p.data(e, "velocity", {
                            isSVG: _.isSVG(e),
                            isAnimating: !1,
                            computedStyle: null,
                            tweensContainer: null,
                            rootPropertyValueCache: {},
                            transformCache: {}
                        })
                    },
                    hook: null,
                    mock: !1,
                    version: {
                        major: 1,
                        minor: 5,
                        patch: 0
                    },
                    debug: !1,
                    timestamp: !0,
                    pauseAll: function(e) {
                        var t = (new Date).getTime();
                        p.each(E.State.calls, function(t, n) {
                            if (n) {
                                if (e !== i && (n[2].queue !== e || n[2].queue === !1)) return !0;
                                n[5] = {
                                    resume: !1
                                }
                            }
                        }), p.each(E.State.delayedElements, function(e, n) {
                            n && s(n, t)
                        })
                    },
                    resumeAll: function(e) {
                        var t = (new Date).getTime();
                        p.each(E.State.calls, function(t, n) {
                            if (n) {
                                if (e !== i && (n[2].queue !== e || n[2].queue === !1)) return !0;
                                n[5] && (n[5].resume = !0)
                            }
                        }), p.each(E.State.delayedElements, function(e, n) {
                            n && l(n, t)
                        })
                    }
                };
            t.pageYOffset !== i ? (E.State.scrollAnchor = t, E.State.scrollPropertyLeft = "pageXOffset", E.State.scrollPropertyTop = "pageYOffset") : (E.State.scrollAnchor = n.documentElement || n.body.parentNode || n.body, E.State.scrollPropertyLeft = "scrollLeft", E.State.scrollPropertyTop = "scrollTop");
            var C = function() {
                function e(e) {
                    return -e.tension * e.x - e.friction * e.v
                }

                function t(t, n, i) {
                    var r = {
                        x: t.x + i.dx * n,
                        v: t.v + i.dv * n,
                        tension: t.tension,
                        friction: t.friction
                    };
                    return {
                        dx: r.v,
                        dv: e(r)
                    }
                }

                function n(n, i) {
                    var r = {
                            dx: n.v,
                            dv: e(n)
                        },
                        o = t(n, .5 * i, r),
                        a = t(n, .5 * i, o),
                        s = t(n, i, a),
                        l = 1 / 6 * (r.dx + 2 * (o.dx + a.dx) + s.dx),
                        u = 1 / 6 * (r.dv + 2 * (o.dv + a.dv) + s.dv);
                    return n.x = n.x + l * i, n.v = n.v + u * i, n
                }
                return function e(t, i, r) {
                    var o, a, s, l = {
                            x: -1,
                            v: 0,
                            tension: null,
                            friction: null
                        },
                        u = [0],
                        c = 0,
                        f = 1e-4,
                        d = .016;
                    for (t = parseFloat(t) || 500, i = parseFloat(i) || 20, r = r || null, l.tension = t, l.friction = i, o = null !== r, o ? (c = e(t, i), a = c / r * d) : a = d;;)
                        if (s = n(s || l, a), u.push(1 + s.x), c += 16, !(Math.abs(s.x) > f && Math.abs(s.v) > f)) break;
                    return o ? function(e) {
                        return u[e * (u.length - 1) | 0]
                    } : c
                }
            }();
            E.Easings = {
                linear: function(e) {
                    return e
                },
                swing: function(e) {
                    return .5 - Math.cos(e * Math.PI) / 2
                },
                spring: function(e) {
                    return 1 - Math.cos(4.5 * e * Math.PI) * Math.exp(6 * -e)
                }
            }, p.each([
                ["ease", [.25, .1, .25, 1]],
                ["ease-in", [.42, 0, 1, 1]],
                ["ease-out", [0, 0, .58, 1]],
                ["ease-in-out", [.42, 0, .58, 1]],
                ["easeInSine", [.47, 0, .745, .715]],
                ["easeOutSine", [.39, .575, .565, 1]],
                ["easeInOutSine", [.445, .05, .55, .95]],
                ["easeInQuad", [.55, .085, .68, .53]],
                ["easeOutQuad", [.25, .46, .45, .94]],
                ["easeInOutQuad", [.455, .03, .515, .955]],
                ["easeInCubic", [.55, .055, .675, .19]],
                ["easeOutCubic", [.215, .61, .355, 1]],
                ["easeInOutCubic", [.645, .045, .355, 1]],
                ["easeInQuart", [.895, .03, .685, .22]],
                ["easeOutQuart", [.165, .84, .44, 1]],
                ["easeInOutQuart", [.77, 0, .175, 1]],
                ["easeInQuint", [.755, .05, .855, .06]],
                ["easeOutQuint", [.23, 1, .32, 1]],
                ["easeInOutQuint", [.86, 0, .07, 1]],
                ["easeInExpo", [.95, .05, .795, .035]],
                ["easeOutExpo", [.19, 1, .22, 1]],
                ["easeInOutExpo", [1, 0, 0, 1]],
                ["easeInCirc", [.6, .04, .98, .335]],
                ["easeOutCirc", [.075, .82, .165, 1]],
                ["easeInOutCirc", [.785, .135, .15, .86]]
            ], function(e, t) {
                E.Easings[t[0]] = c.apply(null, t[1])
            });
            var T = E.CSS = {
                RegEx: {
                    isHex: /^#([A-f\d]{3}){1,2}$/i,
                    valueUnwrap: /^[A-z]+\((.*)\)$/i,
                    wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                    valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
                },
                Lists: {
                    colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
                    transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
                    transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"],
                    units: ["%", "em", "ex", "ch", "rem", "vw", "vh", "vmin", "vmax", "cm", "mm", "Q", "in", "pc", "pt", "px", "deg", "grad", "rad", "turn", "s", "ms"],
                    colorNames: {
                        aliceblue: "240,248,255",
                        antiquewhite: "250,235,215",
                        aquamarine: "127,255,212",
                        aqua: "0,255,255",
                        azure: "240,255,255",
                        beige: "245,245,220",
                        bisque: "255,228,196",
                        black: "0,0,0",
                        blanchedalmond: "255,235,205",
                        blueviolet: "138,43,226",
                        blue: "0,0,255",
                        brown: "165,42,42",
                        burlywood: "222,184,135",
                        cadetblue: "95,158,160",
                        chartreuse: "127,255,0",
                        chocolate: "210,105,30",
                        coral: "255,127,80",
                        cornflowerblue: "100,149,237",
                        cornsilk: "255,248,220",
                        crimson: "220,20,60",
                        cyan: "0,255,255",
                        darkblue: "0,0,139",
                        darkcyan: "0,139,139",
                        darkgoldenrod: "184,134,11",
                        darkgray: "169,169,169",
                        darkgrey: "169,169,169",
                        darkgreen: "0,100,0",
                        darkkhaki: "189,183,107",
                        darkmagenta: "139,0,139",
                        darkolivegreen: "85,107,47",
                        darkorange: "255,140,0",
                        darkorchid: "153,50,204",
                        darkred: "139,0,0",
                        darksalmon: "233,150,122",
                        darkseagreen: "143,188,143",
                        darkslateblue: "72,61,139",
                        darkslategray: "47,79,79",
                        darkturquoise: "0,206,209",
                        darkviolet: "148,0,211",
                        deeppink: "255,20,147",
                        deepskyblue: "0,191,255",
                        dimgray: "105,105,105",
                        dimgrey: "105,105,105",
                        dodgerblue: "30,144,255",
                        firebrick: "178,34,34",
                        floralwhite: "255,250,240",
                        forestgreen: "34,139,34",
                        fuchsia: "255,0,255",
                        gainsboro: "220,220,220",
                        ghostwhite: "248,248,255",
                        gold: "255,215,0",
                        goldenrod: "218,165,32",
                        gray: "128,128,128",
                        grey: "128,128,128",
                        greenyellow: "173,255,47",
                        green: "0,128,0",
                        honeydew: "240,255,240",
                        hotpink: "255,105,180",
                        indianred: "205,92,92",
                        indigo: "75,0,130",
                        ivory: "255,255,240",
                        khaki: "240,230,140",
                        lavenderblush: "255,240,245",
                        lavender: "230,230,250",
                        lawngreen: "124,252,0",
                        lemonchiffon: "255,250,205",
                        lightblue: "173,216,230",
                        lightcoral: "240,128,128",
                        lightcyan: "224,255,255",
                        lightgoldenrodyellow: "250,250,210",
                        lightgray: "211,211,211",
                        lightgrey: "211,211,211",
                        lightgreen: "144,238,144",
                        lightpink: "255,182,193",
                        lightsalmon: "255,160,122",
                        lightseagreen: "32,178,170",
                        lightskyblue: "135,206,250",
                        lightslategray: "119,136,153",
                        lightsteelblue: "176,196,222",
                        lightyellow: "255,255,224",
                        limegreen: "50,205,50",
                        lime: "0,255,0",
                        linen: "250,240,230",
                        magenta: "255,0,255",
                        maroon: "128,0,0",
                        mediumaquamarine: "102,205,170",
                        mediumblue: "0,0,205",
                        mediumorchid: "186,85,211",
                        mediumpurple: "147,112,219",
                        mediumseagreen: "60,179,113",
                        mediumslateblue: "123,104,238",
                        mediumspringgreen: "0,250,154",
                        mediumturquoise: "72,209,204",
                        mediumvioletred: "199,21,133",
                        midnightblue: "25,25,112",
                        mintcream: "245,255,250",
                        mistyrose: "255,228,225",
                        moccasin: "255,228,181",
                        navajowhite: "255,222,173",
                        navy: "0,0,128",
                        oldlace: "253,245,230",
                        olivedrab: "107,142,35",
                        olive: "128,128,0",
                        orangered: "255,69,0",
                        orange: "255,165,0",
                        orchid: "218,112,214",
                        palegoldenrod: "238,232,170",
                        palegreen: "152,251,152",
                        paleturquoise: "175,238,238",
                        palevioletred: "219,112,147",
                        papayawhip: "255,239,213",
                        peachpuff: "255,218,185",
                        peru: "205,133,63",
                        pink: "255,192,203",
                        plum: "221,160,221",
                        powderblue: "176,224,230",
                        purple: "128,0,128",
                        red: "255,0,0",
                        rosybrown: "188,143,143",
                        royalblue: "65,105,225",
                        saddlebrown: "139,69,19",
                        salmon: "250,128,114",
                        sandybrown: "244,164,96",
                        seagreen: "46,139,87",
                        seashell: "255,245,238",
                        sienna: "160,82,45",
                        silver: "192,192,192",
                        skyblue: "135,206,235",
                        slateblue: "106,90,205",
                        slategray: "112,128,144",
                        snow: "255,250,250",
                        springgreen: "0,255,127",
                        steelblue: "70,130,180",
                        tan: "210,180,140",
                        teal: "0,128,128",
                        thistle: "216,191,216",
                        tomato: "255,99,71",
                        turquoise: "64,224,208",
                        violet: "238,130,238",
                        wheat: "245,222,179",
                        whitesmoke: "245,245,245",
                        white: "255,255,255",
                        yellowgreen: "154,205,50",
                        yellow: "255,255,0"
                    }
                },
                Hooks: {
                    templates: {
                        textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
                        boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                        clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
                        backgroundPosition: ["X Y", "0% 0%"],
                        transformOrigin: ["X Y Z", "50% 50% 0px"],
                        perspectiveOrigin: ["X Y", "50% 50%"]
                    },
                    registered: {},
                    register: function() {
                        for (var e = 0; e < T.Lists.colors.length; e++) {
                            var t = "color" === T.Lists.colors[e] ? "0 0 0 1" : "255 255 255 1";
                            T.Hooks.templates[T.Lists.colors[e]] = ["Red Green Blue Alpha", t]
                        }
                        var n, i, r;
                        if (m)
                            for (n in T.Hooks.templates)
                                if (T.Hooks.templates.hasOwnProperty(n)) {
                                    i = T.Hooks.templates[n], r = i[0].split(" ");
                                    var o = i[1].match(T.RegEx.valueSplit);
                                    "Color" === r[0] && (r.push(r.shift()), o.push(o.shift()), T.Hooks.templates[n] = [r.join(" "), o.join(" ")])
                                }
                        for (n in T.Hooks.templates)
                            if (T.Hooks.templates.hasOwnProperty(n)) {
                                i = T.Hooks.templates[n], r = i[0].split(" ");
                                for (var a in r)
                                    if (r.hasOwnProperty(a)) {
                                        var s = n + r[a],
                                            l = a;
                                        T.Hooks.registered[s] = [n, l]
                                    }
                            }
                    },
                    getRoot: function(e) {
                        var t = T.Hooks.registered[e];
                        return t ? t[0] : e
                    },
                    getUnit: function(e, t) {
                        var n = (e.substr(t || 0, 5).match(/^[a-z%]+/) || [])[0] || "";
                        return n && b(T.Lists.units, n) ? n : ""
                    },
                    fixColors: function(e) {
                        return e.replace(/(rgba?\(\s*)?(\b[a-z]+\b)/g, function(e, t, n) {
                            return T.Lists.colorNames.hasOwnProperty(n) ? (t ? t : "rgba(") + T.Lists.colorNames[n] + (t ? "" : ",1)") : t + n
                        })
                    },
                    cleanRootPropertyValue: function(e, t) {
                        return T.RegEx.valueUnwrap.test(t) && (t = t.match(T.RegEx.valueUnwrap)[1]), T.Values.isCSSNullValue(t) && (t = T.Hooks.templates[e][1]), t
                    },
                    extractValue: function(e, t) {
                        var n = T.Hooks.registered[e];
                        if (n) {
                            var i = n[0],
                                r = n[1];
                            return t = T.Hooks.cleanRootPropertyValue(i, t), t.toString().match(T.RegEx.valueSplit)[r]
                        }
                        return t
                    },
                    injectValue: function(e, t, n) {
                        var i = T.Hooks.registered[e];
                        if (i) {
                            var r, o, a = i[0],
                                s = i[1];
                            return n = T.Hooks.cleanRootPropertyValue(a, n), r = n.toString().match(T.RegEx.valueSplit), r[s] = t, o = r.join(" ")
                        }
                        return n
                    }
                },
                Normalizations: {
                    registered: {
                        clip: function(e, t, n) {
                            switch (e) {
                                case "name":
                                    return "clip";
                                case "extract":
                                    var i;
                                    return T.RegEx.wrappedValueAlreadyExtracted.test(n) ? i = n : (i = n.toString().match(T.RegEx.valueUnwrap), i = i ? i[1].replace(/,(\s+)?/g, " ") : n), i;
                                case "inject":
                                    return "rect(" + n + ")"
                            }
                        },
                        blur: function(e, t, n) {
                            switch (e) {
                                case "name":
                                    return E.State.isFirefox ? "filter" : "-webkit-filter";
                                case "extract":
                                    var i = parseFloat(n);
                                    if (!i && 0 !== i) {
                                        var r = n.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                        i = r ? r[1] : 0
                                    }
                                    return i;
                                case "inject":
                                    return parseFloat(n) ? "blur(" + n + ")" : "none"
                            }
                        },
                        opacity: function(e, t, n) {
                            if (m <= 8) switch (e) {
                                case "name":
                                    return "filter";
                                case "extract":
                                    var i = n.toString().match(/alpha\(opacity=(.*)\)/i);
                                    return n = i ? i[1] / 100 : 1;
                                case "inject":
                                    return t.style.zoom = 1, parseFloat(n) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(n), 10) + ")"
                            } else switch (e) {
                                case "name":
                                    return "opacity";
                                case "extract":
                                    return n;
                                case "inject":
                                    return n
                            }
                        }
                    },
                    register: function() {
                        function e(e, t, n) {
                            var i = "border-box" === T.getPropertyValue(t, "boxSizing").toString().toLowerCase();
                            if (i === (n || !1)) {
                                var r, o, a = 0,
                                    s = "width" === e ? ["Left", "Right"] : ["Top", "Bottom"],
                                    l = ["padding" + s[0], "padding" + s[1], "border" + s[0] + "Width", "border" + s[1] + "Width"];
                                for (r = 0; r < l.length; r++) o = parseFloat(T.getPropertyValue(t, l[r])), isNaN(o) || (a += o);
                                return n ? -a : a
                            }
                            return 0
                        }

                        function t(t, n) {
                            return function(i, r, o) {
                                switch (i) {
                                    case "name":
                                        return t;
                                    case "extract":
                                        return parseFloat(o) + e(t, r, n);
                                    case "inject":
                                        return parseFloat(o) - e(t, r, n) + "px"
                                }
                            }
                        }
                        m && !(m > 9) || E.State.isGingerbread || (T.Lists.transformsBase = T.Lists.transformsBase.concat(T.Lists.transforms3D));
                        for (var n = 0; n < T.Lists.transformsBase.length; n++) ! function() {
                            var e = T.Lists.transformsBase[n];
                            T.Normalizations.registered[e] = function(t, n, r) {
                                switch (t) {
                                    case "name":
                                        return "transform";
                                    case "extract":
                                        return a(n) === i || a(n).transformCache[e] === i ? /^scale/i.test(e) ? 1 : 0 : a(n).transformCache[e].replace(/[()]/g, "");
                                    case "inject":
                                        var o = !1;
                                        switch (e.substr(0, e.length - 1)) {
                                            case "translate":
                                                o = !/(%|px|em|rem|vw|vh|\d)$/i.test(r);
                                                break;
                                            case "scal":
                                            case "scale":
                                                E.State.isAndroid && a(n).transformCache[e] === i && r < 1 && (r = 1), o = !/(\d)$/i.test(r);
                                                break;
                                            case "skew":
                                                o = !/(deg|\d)$/i.test(r);
                                                break;
                                            case "rotate":
                                                o = !/(deg|\d)$/i.test(r)
                                        }
                                        return o || (a(n).transformCache[e] = "(" + r + ")"), a(n).transformCache[e]
                                }
                            }
                        }();
                        for (var r = 0; r < T.Lists.colors.length; r++) ! function() {
                            var e = T.Lists.colors[r];
                            T.Normalizations.registered[e] = function(t, n, r) {
                                switch (t) {
                                    case "name":
                                        return e;
                                    case "extract":
                                        var o;
                                        if (T.RegEx.wrappedValueAlreadyExtracted.test(r)) o = r;
                                        else {
                                            var a, s = {
                                                black: "rgb(0, 0, 0)",
                                                blue: "rgb(0, 0, 255)",
                                                gray: "rgb(128, 128, 128)",
                                                green: "rgb(0, 128, 0)",
                                                red: "rgb(255, 0, 0)",
                                                white: "rgb(255, 255, 255)"
                                            };
                                            /^[A-z]+$/i.test(r) ? a = s[r] !== i ? s[r] : s.black : T.RegEx.isHex.test(r) ? a = "rgb(" + T.Values.hexToRgb(r).join(" ") + ")" : /^rgba?\(/i.test(r) || (a = s.black), o = (a || r).toString().match(T.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                                        }
                                        return (!m || m > 8) && 3 === o.split(" ").length && (o += " 1"), o;
                                    case "inject":
                                        return /^rgb/.test(r) ? r : (m <= 8 ? 4 === r.split(" ").length && (r = r.split(/\s+/).slice(0, 3).join(" ")) : 3 === r.split(" ").length && (r += " 1"), (m <= 8 ? "rgb" : "rgba") + "(" + r.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")")
                                }
                            }
                        }();
                        T.Normalizations.registered.innerWidth = t("width", !0), T.Normalizations.registered.innerHeight = t("height", !0), T.Normalizations.registered.outerWidth = t("width"), T.Normalizations.registered.outerHeight = t("height")
                    }
                },
                Names: {
                    camelCase: function(e) {
                        return e.replace(/-(\w)/g, function(e, t) {
                            return t.toUpperCase()
                        })
                    },
                    SVGAttribute: function(e) {
                        var t = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                        return (m || E.State.isAndroid && !E.State.isChrome) && (t += "|transform"), new RegExp("^(" + t + ")$", "i").test(e)
                    },
                    prefixCheck: function(e) {
                        if (E.State.prefixMatches[e]) return [E.State.prefixMatches[e], !0];
                        for (var t = ["", "Webkit", "Moz", "ms", "O"], n = 0, i = t.length; n < i; n++) {
                            var r;
                            if (r = 0 === n ? e : t[n] + e.replace(/^\w/, function(e) {
                                    return e.toUpperCase()
                                }), _.isString(E.State.prefixElement.style[r])) return E.State.prefixMatches[e] = r, [r, !0]
                        }
                        return [e, !1]
                    }
                },
                Values: {
                    hexToRgb: function(e) {
                        var t, n = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                            i = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
                        return e = e.replace(n, function(e, t, n, i) {
                            return t + t + n + n + i + i
                        }), t = i.exec(e), t ? [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)] : [0, 0, 0]
                    },
                    isCSSNullValue: function(e) {
                        return !e || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)
                    },
                    getUnitType: function(e) {
                        return /^(rotate|skew)/i.test(e) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e) ? "" : "px"
                    },
                    getDisplayType: function(e) {
                        var t = e && e.tagName.toString().toLowerCase();
                        return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t) ? "inline" : /^(li)$/i.test(t) ? "list-item" : /^(tr)$/i.test(t) ? "table-row" : /^(table)$/i.test(t) ? "table" : /^(tbody)$/i.test(t) ? "table-row-group" : "block"
                    },
                    addClass: function(e, t) {
                        if (e)
                            if (e.classList) e.classList.add(t);
                            else if (_.isString(e.className)) e.className += (e.className.length ? " " : "") + t;
                        else {
                            var n = e.getAttribute(m <= 7 ? "className" : "class") || "";
                            e.setAttribute("class", n + (n ? " " : "") + t)
                        }
                    },
                    removeClass: function(e, t) {
                        if (e)
                            if (e.classList) e.classList.remove(t);
                            else if (_.isString(e.className)) e.className = e.className.toString().replace(new RegExp("(^|\\s)" + t.split(" ").join("|") + "(\\s|$)", "gi"), " ");
                        else {
                            var n = e.getAttribute(m <= 7 ? "className" : "class") || "";
                            e.setAttribute("class", n.replace(new RegExp("(^|s)" + t.split(" ").join("|") + "(s|$)", "gi"), " "))
                        }
                    }
                },
                getPropertyValue: function(e, n, r, o) {
                    function s(e, n) {
                        var r = 0;
                        if (m <= 8) r = p.css(e, n);
                        else {
                            var l = !1;
                            /^(width|height)$/.test(n) && 0 === T.getPropertyValue(e, "display") && (l = !0, T.setPropertyValue(e, "display", T.Values.getDisplayType(e)));
                            var u = function() {
                                l && T.setPropertyValue(e, "display", "none")
                            };
                            if (!o) {
                                if ("height" === n && "border-box" !== T.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                    var c = e.offsetHeight - (parseFloat(T.getPropertyValue(e, "borderTopWidth")) || 0) - (parseFloat(T.getPropertyValue(e, "borderBottomWidth")) || 0) - (parseFloat(T.getPropertyValue(e, "paddingTop")) || 0) - (parseFloat(T.getPropertyValue(e, "paddingBottom")) || 0);
                                    return u(), c
                                }
                                if ("width" === n && "border-box" !== T.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                    var f = e.offsetWidth - (parseFloat(T.getPropertyValue(e, "borderLeftWidth")) || 0) - (parseFloat(T.getPropertyValue(e, "borderRightWidth")) || 0) - (parseFloat(T.getPropertyValue(e, "paddingLeft")) || 0) - (parseFloat(T.getPropertyValue(e, "paddingRight")) || 0);
                                    return u(), f
                                }
                            }
                            var d;
                            d = a(e) === i ? t.getComputedStyle(e, null) : a(e).computedStyle ? a(e).computedStyle : a(e).computedStyle = t.getComputedStyle(e, null), "borderColor" === n && (n = "borderTopColor"), r = 9 === m && "filter" === n ? d.getPropertyValue(n) : d[n], "" !== r && null !== r || (r = e.style[n]), u()
                        }
                        if ("auto" === r && /^(top|right|bottom|left)$/i.test(n)) {
                            var h = s(e, "position");
                            ("fixed" === h || "absolute" === h && /top|left/i.test(n)) && (r = p(e).position()[n] + "px")
                        }
                        return r
                    }
                    var l;
                    if (T.Hooks.registered[n]) {
                        var u = n,
                            c = T.Hooks.getRoot(u);
                        r === i && (r = T.getPropertyValue(e, T.Names.prefixCheck(c)[0])), T.Normalizations.registered[c] && (r = T.Normalizations.registered[c]("extract", e, r)), l = T.Hooks.extractValue(u, r)
                    } else if (T.Normalizations.registered[n]) {
                        var f, d;
                        f = T.Normalizations.registered[n]("name", e), "transform" !== f && (d = s(e, T.Names.prefixCheck(f)[0]), T.Values.isCSSNullValue(d) && T.Hooks.templates[n] && (d = T.Hooks.templates[n][1])), l = T.Normalizations.registered[n]("extract", e, d)
                    }
                    if (!/^[\d-]/.test(l)) {
                        var h = a(e);
                        if (h && h.isSVG && T.Names.SVGAttribute(n))
                            if (/^(height|width)$/i.test(n)) try {
                                l = e.getBBox()[n]
                            } catch (e) {
                                l = 0
                            } else l = e.getAttribute(n);
                            else l = s(e, T.Names.prefixCheck(n)[0])
                    }
                    return T.Values.isCSSNullValue(l) && (l = 0), E.debug >= 2 && console.log("Get " + n + ": " + l), l
                },
                setPropertyValue: function(e, n, i, r, o) {
                    var s = n;
                    if ("scroll" === n) o.container ? o.container["scroll" + o.direction] = i : "Left" === o.direction ? t.scrollTo(i, o.alternateValue) : t.scrollTo(o.alternateValue, i);
                    else if (T.Normalizations.registered[n] && "transform" === T.Normalizations.registered[n]("name", e)) T.Normalizations.registered[n]("inject", e, i), s = "transform", i = a(e).transformCache[n];
                    else {
                        if (T.Hooks.registered[n]) {
                            var l = n,
                                u = T.Hooks.getRoot(n);
                            r = r || T.getPropertyValue(e, u), i = T.Hooks.injectValue(l, i, r), n = u
                        }
                        if (T.Normalizations.registered[n] && (i = T.Normalizations.registered[n]("inject", e, i), n = T.Normalizations.registered[n]("name", e)), s = T.Names.prefixCheck(n)[0], m <= 8) try {
                            e.style[s] = i
                        } catch (e) {
                            E.debug && console.log("Browser does not support [" + i + "] for [" + s + "]")
                        } else {
                            var c = a(e);
                            c && c.isSVG && T.Names.SVGAttribute(n) ? e.setAttribute(n, i) : e.style[s] = i
                        }
                        E.debug >= 2 && console.log("Set " + n + " (" + s + "): " + i)
                    }
                    return [s, i]
                },
                flushTransformCache: function(e) {
                    var t = "",
                        n = a(e);
                    if ((m || E.State.isAndroid && !E.State.isChrome) && n && n.isSVG) {
                        var i = function(t) {
                                return parseFloat(T.getPropertyValue(e, t))
                            },
                            r = {
                                translate: [i("translateX"), i("translateY")],
                                skewX: [i("skewX")],
                                skewY: [i("skewY")],
                                scale: 1 !== i("scale") ? [i("scale"), i("scale")] : [i("scaleX"), i("scaleY")],
                                rotate: [i("rotateZ"), 0, 0]
                            };
                        p.each(a(e).transformCache, function(e) {
                            /^translate/i.test(e) ? e = "translate" : /^scale/i.test(e) ? e = "scale" : /^rotate/i.test(e) && (e = "rotate"), r[e] && (t += e + "(" + r[e].join(" ") + ") ", delete r[e])
                        })
                    } else {
                        var o, s;
                        p.each(a(e).transformCache, function(n) {
                            return o = a(e).transformCache[n], "transformPerspective" === n ? (s = o, !0) : (9 === m && "rotateZ" === n && (n = "rotate"), void(t += n + o + " "))
                        }), s && (t = "perspective" + s + " " + t)
                    }
                    T.setPropertyValue(e, "transform", t)
                }
            };
            T.Hooks.register(), T.Normalizations.register(), E.hook = function(e, t, n) {
                var r;
                return e = o(e), p.each(e, function(e, o) {
                    if (a(o) === i && E.init(o), n === i) r === i && (r = T.getPropertyValue(o, t));
                    else {
                        var s = T.setPropertyValue(o, t, n);
                        "transform" === s[0] && E.CSS.flushTransformCache(o), r = s
                    }
                }), r
            };
            var A = function() {
                function e() {
                    return c ? C.promise || null : m
                }

                function r(e, r) {
                    function o(o) {
                        var c, h;
                        if (l.begin && 0 === I) try {
                            l.begin.call(v, v)
                        } catch (e) {
                            setTimeout(function() {
                                throw e
                            }, 1)
                        }
                        if ("scroll" === N) {
                            var m, g, w, S = /^x$/i.test(l.axis) ? "Left" : "Top",
                                A = parseFloat(l.offset) || 0;
                            l.container ? _.isWrapped(l.container) || _.isNode(l.container) ? (l.container = l.container[0] || l.container, m = l.container["scroll" + S], w = m + p(e).position()[S.toLowerCase()] + A) : l.container = null : (m = E.State.scrollAnchor[E.State["scrollProperty" + S]], g = E.State.scrollAnchor[E.State["scrollProperty" + ("Left" === S ? "Top" : "Left")]], w = p(e).offset()[S.toLowerCase()] + A), u = {
                                scroll: {
                                    rootPropertyValue: !1,
                                    startValue: m,
                                    currentValue: m,
                                    endValue: w,
                                    unitType: "",
                                    easing: l.easing,
                                    scrollData: {
                                        container: l.container,
                                        direction: S,
                                        alternateValue: g
                                    }
                                },
                                element: e
                            }, E.debug && console.log("tweensContainer (scroll): ", u.scroll, e)
                        } else if ("reverse" === N) {
                            if (c = a(e), !c) return;
                            if (!c.tweensContainer) return void p.dequeue(e, l.queue);
                            "none" === c.opts.display && (c.opts.display = "auto"), "hidden" === c.opts.visibility && (c.opts.visibility = "visible"), c.opts.loop = !1, c.opts.begin = null, c.opts.complete = null, x.easing || delete l.easing, x.duration || delete l.duration, l = p.extend({}, c.opts, l), h = p.extend(!0, {}, c ? c.tweensContainer : null);
                            for (var O in h)
                                if (h.hasOwnProperty(O) && "element" !== O) {
                                    var D = h[O].startValue;
                                    h[O].startValue = h[O].currentValue = h[O].endValue, h[O].endValue = D, _.isEmptyObject(x) || (h[O].easing = l.easing), E.debug && console.log("reverse tweensContainer (" + O + "): " + JSON.stringify(h[O]), e)
                                }
                            u = h
                        } else if ("start" === N) {
                            c = a(e), c && c.tweensContainer && c.isAnimating === !0 && (h = c.tweensContainer);
                            var P = function(t, n) {
                                    var i, o, a;
                                    return _.isFunction(t) && (t = t.call(e, r, k)), _.isArray(t) ? (i = t[0], !_.isArray(t[1]) && /^[\d-]/.test(t[1]) || _.isFunction(t[1]) || T.RegEx.isHex.test(t[1]) ? a = t[1] : _.isString(t[1]) && !T.RegEx.isHex.test(t[1]) && E.Easings[t[1]] || _.isArray(t[1]) ? (o = n ? t[1] : f(t[1], l.duration), a = t[2]) : a = t[1] || t[2]) : i = t, n || (o = o || l.easing), _.isFunction(i) && (i = i.call(e, r, k)), _.isFunction(a) && (a = a.call(e, r, k)), [i || 0, o, a]
                                },
                                L = function(r, o) {
                                    var a, f = T.Hooks.getRoot(r),
                                        d = !1,
                                        m = o[0],
                                        g = o[1],
                                        v = o[2];
                                    if (!(c && c.isSVG || "tween" === f || T.Names.prefixCheck(f)[1] !== !1 || T.Normalizations.registered[f] !== i)) return void(E.debug && console.log("Skipping [" + f + "] due to a lack of browser support."));
                                    (l.display !== i && null !== l.display && "none" !== l.display || l.visibility !== i && "hidden" !== l.visibility) && /opacity|filter/.test(r) && !v && 0 !== m && (v = 0), l._cacheValues && h && h[r] ? (v === i && (v = h[r].endValue + h[r].unitType), d = c.rootPropertyValueCache[f]) : T.Hooks.registered[r] ? v === i ? (d = T.getPropertyValue(e, f), v = T.getPropertyValue(e, r, d)) : d = T.Hooks.templates[f][1] : v === i && (v = T.getPropertyValue(e, r));
                                    var y, b, x, w = !1,
                                        S = function(e, t) {
                                            var n, i;
                                            return i = (t || "0").toString().toLowerCase().replace(/[%A-z]+$/, function(e) {
                                                return n = e, ""
                                            }), n || (n = T.Values.getUnitType(e)), [i, n]
                                        };
                                    if (v !== m && _.isString(v) && _.isString(m)) {
                                        a = "";
                                        var C = 0,
                                            A = 0,
                                            k = [],
                                            I = [],
                                            O = 0,
                                            D = 0,
                                            N = 0;
                                        for (v = T.Hooks.fixColors(v), m = T.Hooks.fixColors(m); C < v.length && A < m.length;) {
                                            var P = v[C],
                                                L = m[A];
                                            if (/[\d\.-]/.test(P) && /[\d\.-]/.test(L)) {
                                                for (var j = P, B = L, V = ".", R = "."; ++C < v.length;) {
                                                    if (P = v[C], P === V) V = "..";
                                                    else if (!/\d/.test(P)) break;
                                                    j += P
                                                }
                                                for (; ++A < m.length;) {
                                                    if (L = m[A], L === R) R = "..";
                                                    else if (!/\d/.test(L)) break;
                                                    B += L
                                                }
                                                var M = T.Hooks.getUnit(v, C),
                                                    H = T.Hooks.getUnit(m, A);
                                                if (C += M.length, A += H.length, M === H) j === B ? a += j + M : (a += "{" + k.length + (D ? "!" : "") + "}" + M, k.push(parseFloat(j)), I.push(parseFloat(B)));
                                                else {
                                                    var W = parseFloat(j),
                                                        U = parseFloat(B);
                                                    a += (O < 5 ? "calc" : "") + "(" + (W ? "{" + k.length + (D ? "!" : "") + "}" : "0") + M + " + " + (U ? "{" + (k.length + (W ? 1 : 0)) + (D ? "!" : "") + "}" : "0") + H + ")", W && (k.push(W), I.push(0)), U && (k.push(0), I.push(U))
                                                }
                                            } else {
                                                if (P !== L) {
                                                    O = 0;
                                                    break
                                                }
                                                a += P, C++, A++, 0 === O && "c" === P || 1 === O && "a" === P || 2 === O && "l" === P || 3 === O && "c" === P || O >= 4 && "(" === P ? O++ : (O && O < 5 || O >= 4 && ")" === P && --O < 5) && (O = 0), 0 === D && "r" === P || 1 === D && "g" === P || 2 === D && "b" === P || 3 === D && "a" === P || D >= 3 && "(" === P ? (3 === D && "a" === P && (N = 1), D++) : N && "," === P ? ++N > 3 && (D = N = 0) : (N && D < (N ? 5 : 4) || D >= (N ? 4 : 3) && ")" === P && --D < (N ? 5 : 4)) && (D = N = 0)
                                            }
                                        }
                                        C === v.length && A === m.length || (E.debug && console.error('Trying to pattern match mis-matched strings ["' + m + '", "' + v + '"]'), a = i), a && (k.length ? (E.debug && console.log('Pattern found "' + a + '" -> ', k, I, "[" + v + "," + m + "]"), v = k, m = I, b = x = "") : a = i)
                                    }
                                    a || (y = S(r, v), v = y[0], x = y[1], y = S(r, m), m = y[0].replace(/^([+-\/**])=/, function(e, t) {
                                        return w = t, ""
                                    }), b = y[1], v = parseFloat(v) || 0, m = parseFloat(m) || 0, "%" === b && (/^(fontSize|lineHeight)$/.test(r) ? (m /= 100, b = "em") : /^scale/.test(r) ? (m /= 100, b = "") : /(Red|Green|Blue)$/i.test(r) && (m = m / 100 * 255, b = "")));
                                    var q = function() {
                                        var i = {
                                                myParent: e.parentNode || n.body,
                                                position: T.getPropertyValue(e, "position"),
                                                fontSize: T.getPropertyValue(e, "fontSize")
                                            },
                                            r = i.position === F.lastPosition && i.myParent === F.lastParent,
                                            o = i.fontSize === F.lastFontSize;
                                        F.lastParent = i.myParent, F.lastPosition = i.position, F.lastFontSize = i.fontSize;
                                        var a = 100,
                                            s = {};
                                        if (o && r) s.emToPx = F.lastEmToPx, s.percentToPxWidth = F.lastPercentToPxWidth, s.percentToPxHeight = F.lastPercentToPxHeight;
                                        else {
                                            var l = c && c.isSVG ? n.createElementNS("http://www.w3.org/2000/svg", "rect") : n.createElement("div");
                                            E.init(l), i.myParent.appendChild(l), p.each(["overflow", "overflowX", "overflowY"], function(e, t) {
                                                E.CSS.setPropertyValue(l, t, "hidden")
                                            }), E.CSS.setPropertyValue(l, "position", i.position), E.CSS.setPropertyValue(l, "fontSize", i.fontSize), E.CSS.setPropertyValue(l, "boxSizing", "content-box"), p.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function(e, t) {
                                                E.CSS.setPropertyValue(l, t, a + "%")
                                            }), E.CSS.setPropertyValue(l, "paddingLeft", a + "em"), s.percentToPxWidth = F.lastPercentToPxWidth = (parseFloat(T.getPropertyValue(l, "width", null, !0)) || 1) / a, s.percentToPxHeight = F.lastPercentToPxHeight = (parseFloat(T.getPropertyValue(l, "height", null, !0)) || 1) / a, s.emToPx = F.lastEmToPx = (parseFloat(T.getPropertyValue(l, "paddingLeft")) || 1) / a, i.myParent.removeChild(l)
                                        }
                                        return null === F.remToPx && (F.remToPx = parseFloat(T.getPropertyValue(n.body, "fontSize")) || 16), null === F.vwToPx && (F.vwToPx = parseFloat(t.innerWidth) / 100, F.vhToPx = parseFloat(t.innerHeight) / 100), s.remToPx = F.remToPx, s.vwToPx = F.vwToPx, s.vhToPx = F.vhToPx, E.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(s), e), s
                                    };
                                    if (/[\/**]/.test(w)) b = x;
                                    else if (x !== b && 0 !== v)
                                        if (0 === m) b = x;
                                        else {
                                            s = s || q();
                                            var z = /margin|padding|left|right|width|text|word|letter/i.test(r) || /X$/.test(r) || "x" === r ? "x" : "y";
                                            switch (x) {
                                                case "%":
                                                    v *= "x" === z ? s.percentToPxWidth : s.percentToPxHeight;
                                                    break;
                                                case "px":
                                                    break;
                                                default:
                                                    v *= s[x + "ToPx"]
                                            }
                                            switch (b) {
                                                case "%":
                                                    v *= 1 / ("x" === z ? s.percentToPxWidth : s.percentToPxHeight);
                                                    break;
                                                case "px":
                                                    break;
                                                default:
                                                    v *= 1 / s[b + "ToPx"]
                                            }
                                        }
                                    switch (w) {
                                        case "+":
                                            m = v + m;
                                            break;
                                        case "-":
                                            m = v - m;
                                            break;
                                        case "*":
                                            m *= v;
                                            break;
                                        case "/":
                                            m = v / m
                                    }
                                    u[r] = {
                                        rootPropertyValue: d,
                                        startValue: v,
                                        currentValue: v,
                                        endValue: m,
                                        unitType: b,
                                        easing: g
                                    }, a && (u[r].pattern = a), E.debug && console.log("tweensContainer (" + r + "): " + JSON.stringify(u[r]), e)
                                };
                            for (var j in y)
                                if (y.hasOwnProperty(j)) {
                                    var B = T.Names.camelCase(j),
                                        V = P(y[j]);
                                    if (b(T.Lists.colors, B)) {
                                        var M = V[0],
                                            H = V[1],
                                            W = V[2];
                                        if (T.RegEx.isHex.test(M)) {
                                            for (var U = ["Red", "Green", "Blue"], q = T.Values.hexToRgb(M), z = W ? T.Values.hexToRgb(W) : i, $ = 0; $ < U.length; $++) {
                                                var Q = [q[$]];
                                                H && Q.push(H), z !== i && Q.push(z[$]), L(B + U[$], Q)
                                            }
                                            continue
                                        }
                                    }
                                    L(B, V)
                                }
                            u.element = e
                        }
                        u.element && (T.Values.addClass(e, "velocity-animating"), R.push(u), c = a(e), c && ("" === l.queue && (c.tweensContainer = u, c.opts = l), c.isAnimating = !0), I === k - 1 ? (E.State.calls.push([R, v, l, null, C.resolver, null, 0]), E.State.isTicking === !1 && (E.State.isTicking = !0, d())) : I++)
                    }
                    var s, l = p.extend({}, E.defaults, x),
                        u = {};
                    switch (a(e) === i && E.init(e), parseFloat(l.delay) && l.queue !== !1 && p.queue(e, l.queue, function(t) {
                        E.velocityQueueEntryFlag = !0;
                        var n = E.State.delayedElements.count++;
                        E.State.delayedElements[n] = e;
                        var i = function(e) {
                            return function() {
                                E.State.delayedElements[e] = !1, t()
                            }
                        }(n);
                        a(e).delayBegin = (new Date).getTime(), a(e).delay = parseFloat(l.delay), a(e).delayTimer = {
                            setTimeout: setTimeout(t, parseFloat(l.delay)),
                            next: i
                        }
                    }), l.duration.toString().toLowerCase()) {
                        case "fast":
                            l.duration = 200;
                            break;
                        case "normal":
                            l.duration = w;
                            break;
                        case "slow":
                            l.duration = 600;
                            break;
                        default:
                            l.duration = parseFloat(l.duration) || 1
                    }
                    if (E.mock !== !1 && (E.mock === !0 ? l.duration = l.delay = 1 : (l.duration *= parseFloat(E.mock) || 1, l.delay *= parseFloat(E.mock) || 1)), l.easing = f(l.easing, l.duration), l.begin && !_.isFunction(l.begin) && (l.begin = null), l.progress && !_.isFunction(l.progress) && (l.progress = null), l.complete && !_.isFunction(l.complete) && (l.complete = null), l.display !== i && null !== l.display && (l.display = l.display.toString().toLowerCase(), "auto" === l.display && (l.display = E.CSS.Values.getDisplayType(e))), l.visibility !== i && null !== l.visibility && (l.visibility = l.visibility.toString().toLowerCase()), l.mobileHA = l.mobileHA && E.State.isMobile && !E.State.isGingerbread, l.queue === !1)
                        if (l.delay) {
                            var c = E.State.delayedElements.count++;
                            E.State.delayedElements[c] = e;
                            var h = function(e) {
                                return function() {
                                    E.State.delayedElements[e] = !1, o()
                                }
                            }(c);
                            a(e).delayBegin = (new Date).getTime(), a(e).delay = parseFloat(l.delay), a(e).delayTimer = {
                                setTimeout: setTimeout(o, parseFloat(l.delay)),
                                next: h
                            }
                        } else o();
                    else p.queue(e, l.queue, function(e, t) {
                        return t === !0 ? (C.promise && C.resolver(v), !0) : (E.velocityQueueEntryFlag = !0, void o(e))
                    });
                    "" !== l.queue && "fx" !== l.queue || "inprogress" === p.queue(e)[0] || p.dequeue(e)
                }
                var u, c, m, g, v, y, x, S = arguments[0] && (arguments[0].p || p.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || _.isString(arguments[0].properties));
                _.isWrapped(this) ? (c = !1, g = 0, v = this, m = this) : (c = !0, g = 1, v = S ? arguments[0].elements || arguments[0].e : arguments[0]);
                var C = {
                    promise: null,
                    resolver: null,
                    rejecter: null
                };
                if (c && E.Promise && (C.promise = new E.Promise(function(e, t) {
                        C.resolver = e, C.rejecter = t
                    })), S ? (y = arguments[0].properties || arguments[0].p, x = arguments[0].options || arguments[0].o) : (y = arguments[g], x = arguments[g + 1]), v = o(v), !v) return void(C.promise && (y && x && x.promiseRejectEmpty === !1 ? C.resolver() : C.rejecter()));
                var k = v.length,
                    I = 0;
                if (!/^(stop|finish|finishAll|pause|resume)$/i.test(y) && !p.isPlainObject(x)) {
                    var O = g + 1;
                    x = {};
                    for (var D = O; D < arguments.length; D++) _.isArray(arguments[D]) || !/^(fast|normal|slow)$/i.test(arguments[D]) && !/^\d/.test(arguments[D]) ? _.isString(arguments[D]) || _.isArray(arguments[D]) ? x.easing = arguments[D] : _.isFunction(arguments[D]) && (x.complete = arguments[D]) : x.duration = arguments[D]
                }
                var N;
                switch (y) {
                    case "scroll":
                        N = "scroll";
                        break;
                    case "reverse":
                        N = "reverse";
                        break;
                    case "pause":
                        var P = (new Date).getTime();
                        return p.each(v, function(e, t) {
                            s(t, P)
                        }), p.each(E.State.calls, function(e, t) {
                            var n = !1;
                            t && p.each(t[1], function(e, r) {
                                var o = x === i ? "" : x;
                                return o !== !0 && t[2].queue !== o && (x !== i || t[2].queue !== !1) || (p.each(v, function(e, i) {
                                    if (i === r) return t[5] = {
                                        resume: !1
                                    }, n = !0, !1
                                }), !n && void 0)
                            })
                        }), e();
                    case "resume":
                        return p.each(v, function(e, t) {
                            l(t, P)
                        }), p.each(E.State.calls, function(e, t) {
                            var n = !1;
                            t && p.each(t[1], function(e, r) {
                                var o = x === i ? "" : x;
                                return o !== !0 && t[2].queue !== o && (x !== i || t[2].queue !== !1) || (!t[5] || (p.each(v, function(e, i) {
                                    if (i === r) return t[5].resume = !0, n = !0, !1
                                }), !n && void 0))
                            })
                        }), e();
                    case "finish":
                    case "finishAll":
                    case "stop":
                        p.each(v, function(e, t) {
                            a(t) && a(t).delayTimer && (clearTimeout(a(t).delayTimer.setTimeout), a(t).delayTimer.next && a(t).delayTimer.next(), delete a(t).delayTimer), "finishAll" !== y || x !== !0 && !_.isString(x) || (p.each(p.queue(t, _.isString(x) ? x : ""), function(e, t) {
                                _.isFunction(t) && t()
                            }), p.queue(t, _.isString(x) ? x : "", []))
                        });
                        var L = [];
                        return p.each(E.State.calls, function(e, t) {
                            t && p.each(t[1], function(n, r) {
                                var o = x === i ? "" : x;
                                return o !== !0 && t[2].queue !== o && (x !== i || t[2].queue !== !1) || void p.each(v, function(n, i) {
                                    if (i === r)
                                        if ((x === !0 || _.isString(x)) && (p.each(p.queue(i, _.isString(x) ? x : ""), function(e, t) {
                                                _.isFunction(t) && t(null, !0)
                                            }), p.queue(i, _.isString(x) ? x : "", [])), "stop" === y) {
                                            var s = a(i);
                                            s && s.tweensContainer && o !== !1 && p.each(s.tweensContainer, function(e, t) {
                                                t.endValue = t.currentValue
                                            }), L.push(e)
                                        } else "finish" !== y && "finishAll" !== y || (t[2].duration = 1)
                                })
                            })
                        }), "stop" === y && (p.each(L, function(e, t) {
                            h(t, !0)
                        }), C.promise && C.resolver(v)), e();
                    default:
                        if (!p.isPlainObject(y) || _.isEmptyObject(y)) {
                            if (_.isString(y) && E.Redirects[y]) {
                                u = p.extend({}, x);
                                var j = u.duration,
                                    B = u.delay || 0;
                                return u.backwards === !0 && (v = p.extend(!0, [], v).reverse()), p.each(v, function(e, t) {
                                    parseFloat(u.stagger) ? u.delay = B + parseFloat(u.stagger) * e : _.isFunction(u.stagger) && (u.delay = B + u.stagger.call(t, e, k)), u.drag && (u.duration = parseFloat(j) || (/^(callout|transition)/.test(y) ? 1e3 : w), u.duration = Math.max(u.duration * (u.backwards ? 1 - e / k : (e + 1) / k), .75 * u.duration, 200)), E.Redirects[y].call(t, t, u || {}, e, k, v, C.promise ? C : i)
                                }), e()
                            }
                            var V = "Velocity: First argument (" + y + ") was not a property map, a known action, or a registered redirect. Aborting.";
                            return C.promise ? C.rejecter(new Error(V)) : t.console && console.log(V), e()
                        }
                        N = "start"
                }
                var F = {
                        lastParent: null,
                        lastPosition: null,
                        lastFontSize: null,
                        lastPercentToPxWidth: null,
                        lastPercentToPxHeight: null,
                        lastEmToPx: null,
                        remToPx: null,
                        vwToPx: null,
                        vhToPx: null
                    },
                    R = [];
                p.each(v, function(e, t) {
                    _.isNode(t) && r(t, e)
                }), u = p.extend({}, E.defaults, x), u.loop = parseInt(u.loop, 10);
                var M = 2 * u.loop - 1;
                if (u.loop)
                    for (var H = 0; H < M; H++) {
                        var W = {
                            delay: u.delay,
                            progress: u.progress
                        };
                        H === M - 1 && (W.display = u.display, W.visibility = u.visibility, W.complete = u.complete), A(v, "reverse", W)
                    }
                return e()
            };
            E = p.extend(A, E), E.animate = A;
            var k = t.requestAnimationFrame || g;
            if (!E.State.isMobile && n.hidden !== i) {
                var I = function() {
                    n.hidden ? (k = function(e) {
                        return setTimeout(function() {
                            e(!0)
                        }, 16)
                    }, d()) : k = t.requestAnimationFrame || g
                };
                I(), n.addEventListener("visibilitychange", I)
            }
            return e.Velocity = E, e !== t && (e.fn.velocity = A, e.fn.velocity.defaults = E.defaults), p.each(["Down", "Up"], function(e, t) {
                E.Redirects["slide" + t] = function(e, n, r, o, a, s) {
                    var l = p.extend({}, n),
                        u = l.begin,
                        c = l.complete,
                        f = {},
                        d = {
                            height: "",
                            marginTop: "",
                            marginBottom: "",
                            paddingTop: "",
                            paddingBottom: ""
                        };
                    l.display === i && (l.display = "Down" === t ? "inline" === E.CSS.Values.getDisplayType(e) ? "inline-block" : "block" : "none"), l.begin = function() {
                        0 === r && u && u.call(a, a);
                        for (var n in d)
                            if (d.hasOwnProperty(n)) {
                                f[n] = e.style[n];
                                var i = T.getPropertyValue(e, n);
                                d[n] = "Down" === t ? [i, 0] : [0, i]
                            }
                        f.overflow = e.style.overflow, e.style.overflow = "hidden"
                    }, l.complete = function() {
                        for (var t in f) f.hasOwnProperty(t) && (e.style[t] = f[t]);
                        r === o - 1 && (c && c.call(a, a), s && s.resolver(a))
                    }, E(e, d, l)
                }
            }), p.each(["In", "Out"], function(e, t) {
                E.Redirects["fade" + t] = function(e, n, r, o, a, s) {
                    var l = p.extend({}, n),
                        u = l.complete,
                        c = {
                            opacity: "In" === t ? 1 : 0
                        };
                    0 !== r && (l.begin = null), r !== o - 1 ? l.complete = null : l.complete = function() {
                        u && u.call(a, a), s && s.resolver(a)
                    }, l.display === i && (l.display = "In" === t ? "auto" : "none"), E(this, c, l)
                }
            }), E
        }(window.jQuery || window.Zepto || window, window, window ? window.document : void 0)
    })
}, function(e, t, n) {
    /***
     * 2007-2024 PrestaShop
     *
     * NOTICE OF LICENSE
     *
     * This source file is subject to the Open Software License (OSL 3.0)
     * that is bundled with this package in the file LICENSE.txt.
     * It is also available through the world-wide-web at this URL:
     * http://opensource.org/licenses/osl-3.0.php
     * If you did not receive a copy of the license and are unable to
     * obtain it through the world-wide-web, please send an email
     * to license@prestashop.com so we can send you a copy immediately.
     *
     * DISCLAIMER
     *
     * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
     * versions in the future. If you wish to customize PrestaShop for your
     * needs please refer to http://www.prestashop.com for more information.
     *
     * @author    PrestaShop SA <contact@prestashop.com>
     * @copyright 2007-2024 PrestaShop SA
     * @license   http://opensource.org/licenses/osl-3.0.php Open Software License (OSL 3.0)
     * International Registered Trademark & Property of PrestaShop SA
     */
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        a = n(53),
        s = i(a),
        l = function() {
            function e() {
                r(this, e)
            }
            return o(e, [{
                key: "init",
                value: function() {
                    (0, s.default)(".js-product-miniature").each(function(e, t) {
                        var n = 10,
                            i = (0, s.default)(t).find(".discount-percentage"),
                            r = (0, s.default)(t).find(".on-sale"),
                            o = (0, s.default)(t).find(".new");
                        i.length && (o.css("top", 2 * i.height() + n), i.css("top", -(0, s.default)(t).find(".thumbnail-container").height() + (0, s.default)(t).find(".product-description").height() + n)), r.length && (i.css("top", parseFloat(i.css("top")) + r.height() + n), o.css("top", 2 * i.height() + r.height() + 2 * n)), (0, s.default)(t).find(".color").length > 5 && ! function() {
                            var e = 0;
                            (0, s.default)(t).find(".color").each(function(t, n) {
                                t > 4 && ((0, s.default)(n).hide(), e++)
                            }), (0, s.default)(t).find(".js-count").append("+" + e)
                        }()
                    })
                }
            }]), e
        }();
    t.default = l, e.exports = t.default
}, function(e, t, n) {
    /***
     * 2007-2024 PrestaShop
     *
     * NOTICE OF LICENSE
     *
     * This source file is subject to the Open Software License (OSL 3.0)
     * that is bundled with this package in the file LICENSE.txt.
     * It is also available through the world-wide-web at this URL:
     * http://opensource.org/licenses/osl-3.0.php
     * If you did not receive a copy of the license and are unable to
     * obtain it through the world-wide-web, please send an email
     * to license@prestashop.com so we can send you a copy immediately.
     *
     * DISCLAIMER
     *
     * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
     * versions in the future. If you wish to customize PrestaShop for your
     * needs please refer to http://www.prestashop.com for more information.
     *
     * @author    PrestaShop SA <contact@prestashop.com>
     * @copyright 2007-2024 PrestaShop SA
     * @license   http://opensource.org/licenses/osl-3.0.php Open Software License (OSL 3.0)
     * International Registered Trademark & Property of PrestaShop SA
     */
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var r = n(53),
        o = i(r);
    (0, o.default)(document).ready(function() {
        function e() {
            (0, o.default)(".js-thumb").on("click", function(e) {
                (0, o.default)(".js-modal-product-cover").attr("src", (0, o.default)(e.target).data("image-large-src")), (0, o.default)(".selected").removeClass("selected"), (0, o.default)(e.target).addClass("selected"), (0, o.default)(".js-qv-product-cover").prop("src", (0, o.default)(e.currentTarget).data("image-large-src"))
            })
        }

        function t() {
            (0, o.default)("#main .js-qv-product-images li").length > 2 ? ((0, o.default)("#main .js-qv-mask").addClass("scroll"), (0, o.default)(".scroll-box-arrows").addClass("scroll"), (0, o.default)("#main .js-qv-mask").scrollbox({
                
                distance: 113,
                step: 1,
                speed: 50,
                autoPlay: !1
            }), (0, o.default)(".scroll-box-arrows .left").click(function() {
                (0, o.default)("#main .js-qv-mask").trigger("backward")
            }), (0, o.default)(".scroll-box-arrows .right").click(function() {
                (0, o.default)("#main .js-qv-mask").trigger("forward")
            })) : ((0, o.default)("#main .js-qv-mask").removeClass("scroll"), (0, o.default)(".scroll-box-arrows").removeClass("scroll"))
        }

        function n() {
            (0, o.default)(".js-file-input").on("change", function(e) {
                var t = void 0,
                    n = void 0;
                (t = (0, o.default)(e.currentTarget)[0]) && (n = t.files[0]) && (0, o.default)(t).prev().text(n.name)
            })
        }

        function i() {
            var e = (0, o.default)("#quantity_wanted");
            e.TouchSpin({
                verticalbuttons: !0,
                verticalupclass: "material-icons touchspin-up",
                verticaldownclass: "material-icons touchspin-down",
                buttondown_class: "btn btn-touchspin js-touchspin",
                buttonup_class: "btn btn-touchspin js-touchspin",
                min: parseInt(e.attr("min"), 10),
                max: 1e6
            }), e.on("change", function(e) {
                var t = (0, o.default)(".product-refresh");
                return (0, o.default)(e.currentTarget).trigger("touchspin.stopspin"), t.trigger("click", {
                    eventType: "updatedProductQuantity"
                }), e.preventDefault(), !1
            })
        }
        i(), n(), e(), t(), prestashop.on("updatedProduct", function(i) {
            if (n(), e(), i && i.product_minimal_quantity) {
                var r = parseInt(i.product_minimal_quantity, 10),
                    a = "#quantity_wanted",
                    s = (0, o.default)(a);
                s.trigger("touchspin.updatesettings", {
                    min: r
                })
            }
            t(), (0, o.default)((0, o.default)(".tabs .nav-link.active").attr("href")).addClass("active").removeClass("fade"), (0, o.default)(".js-product-images-modal").replaceWith(i.product_images_modal)
        })
    })
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function r() {
        a.default.each((0, a.default)(u), function(e, t) {
            (0, a.default)(t).TouchSpin({
                verticalbuttons: !0,
                verticalupclass: "material-icons touchspin-up",
                verticaldownclass: "material-icons touchspin-down",
                buttondown_class: "btn btn-touchspin js-touchspin js-increase-product-quantity",
                buttonup_class: "btn btn-touchspin js-touchspin js-decrease-product-quantity",
                min: parseInt((0, a.default)(t).attr("min"), 10),
                max: 1e6
            })
        })
    }
    var o = n(53),
        a = i(o),
        s = n(54),
        l = i(s);
    l.default.cart = l.default.cart || {}, l.default.cart.active_inputs = null;
    var u = 'input[name="product-quantity-spin"]';
    (0, a.default)(document).ready(function() {
        function e(e) {
            return "on.startupspin" === e || "on.startdownspin" === e
        }

        function t(e) {
            return "on.startupspin" === e
        }

        function n(e) {
            var t = e.parents(".bootstrap-touchspin").find(h);
            return t.is(":focus") ? null : t
        }

        function i(e) {
            var t = e.split("-"),
                n = void 0,
                i = void 0,
                r = "";
            for (n = 0; n < t.length; n++) i = t[n], 0 !== n && (i = i.substring(0, 1).toUpperCase() + i.substring(1)), r += i;
            return r
        }

        function o(r, o) {
            if (!e(o)) return {
                url: r.attr("href"),
                type: i(r.data("link-action"))
            };
            var a = n(r);
            if (a) {
                var s = {};
                return s = t(o) ? {
                    url: a.data("up-url"),
                    type: "increaseProductQuantity"
                } : {
                    url: a.data("down-url"),
                    type: "decreaseProductQuantity"
                }
            }
        }

        function s(e, t, n) {
            return g(), a.default.ajax({
                url: e,
                method: "POST",
                data: t,
                dataType: "json",
                beforeSend: function(e) {
                    p.push(e)
                }
            }).then(function(e) {
                n.val(e.quantity);
                var t;
                t = n ? n.dataset : null, l.default.emit("updateCart", {
                    reason: t
                })
            }).fail(function(e) {
                l.default.emit("handleError", {
                    eventType: "updateProductQuantityInCart",
                    resp: e
                })
            })
        }

        function c(e) {
            return {
                ajax: "1",
                qty: Math.abs(e),
                action: "update",
                op: f(e)
            }
        }

        function f(e) {
            return e > 0 ? "up" : "down"
        }

        function d(e) {
            var t = (0, a.default)(e.currentTarget),
                n = t.data("update-url"),
                i = t.attr("value"),
                r = t.val();
            if (r != parseInt(r) || r < 0 || isNaN(r)) return void t.val(i);
            var o = r - i;
            if (0 != o) {
                var l = c(o);
                s(n, l, t)
            }
        }
        var h = ".js-cart-line-product-quantity",
            p = [];
        l.default.on("updateCart", function() {
            (0, a.default)(".quickview").modal("hide")
        }), r();
        var m = (0, a.default)("body"),
            g = function() {
                for (var e; p.length > 0;) e = p.pop(), e.abort()
            },
            v = function(e) {
                return (0, a.default)(e.parents(".bootstrap-touchspin").find("input"))
            },
            y = function(e) {
                e.preventDefault();
                var t = (0, a.default)(e.currentTarget),
                    n = e.currentTarget.dataset,
                    i = o(t, e.namespace),
                    r = {
                        ajax: "1",
                        action: "update"
                    };
                "undefined" != typeof i && (g(), a.default.ajax({
                    url: i.url,
                    method: "POST",
                    data: r,
                    dataType: "json",
                    beforeSend: function(e) {
                        p.push(e)
                    }
                }).then(function(e) {
                    var i = v(t);
                    i.val(e.quantity), l.default.emit("updateCart", {
                        reason: n
                    })
                }).fail(function(e) {
                    l.default.emit("handleError", {
                        eventType: "updateProductInCart",
                        resp: e,
                        cartAction: i.type
                    })
                }))
            };
        m.on("click", '[data-link-action="delete-from-cart"], [data-link-action="remove-voucher"]', y), (0, a.default)(u).on("touchspin.on.startdownspin", y), (0, a.default)(u).on("touchspin.on.startupspin", y), m.on("focusout", h, function(e) {
            d(e)
        }), m.on("keyup", h, function(e) {
            13 == e.keyCode && d(e)
        }), m.on("click", ".js-discount .code", function(e) {
            e.stopPropagation();
            var t = (0, a.default)(e.currentTarget),
                n = (0, a.default)("[name=discount_name]");
            return n.val(t.text()), !1
        })
    })
}, function(e, t, n) {
    /***
     * 2007-2024 PrestaShop
     *
     * NOTICE OF LICENSE
     *
     * This source file is subject to the Open Software License (OSL 3.0)
     * that is bundled with this package in the file LICENSE.txt.
     * It is also available through the world-wide-web at this URL:
     * http://opensource.org/licenses/osl-3.0.php
     * If you did not receive a copy of the license and are unable to
     * obtain it through the world-wide-web, please send an email
     * to license@prestashop.com so we can send you a copy immediately.
     *
     * DISCLAIMER
     *
     * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
     * versions in the future. If you wish to customize PrestaShop for your
     * needs please refer to http://www.prestashop.com for more information.
     *
     * @author    PrestaShop SA <contact@prestashop.com>
     * @copyright 2007-2024 PrestaShop SA
     * @license   http://opensource.org/licenses/osl-3.0.php Open Software License (OSL 3.0)
     * International Registered Trademark & Property of PrestaShop SA
     */
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        a = n(53),
        s = i(a),
        l = function() {
            function e(t) {
                r(this, e), this.el = t
            }
            return o(e, [{
                key: "init",
                value: function() {
                    this.el.on("show.bs.dropdown", function(e, t) {
                        t ? (0, s.default)("#" + t).find(".dropdown-menu").first().stop(!0, !0).slideDown() : (0, s.default)(e.target).find(".dropdown-menu").first().stop(!0, !0).slideDown()
                    }), this.el.on("hide.bs.dropdown", function(e, t) {
                        t ? (0, s.default)("#" + t).find(".dropdown-menu").first().stop(!0, !0).slideUp() : (0, s.default)(e.target).find(".dropdown-menu").first().stop(!0, !0).slideUp()
                    }), this.el.find("select.link").each(function(e, t) {
                        (0, s.default)(t).on("change", function(e) {
                            window.location = (0, s.default)(this).val()
                        })
                    })
                }
            }]), e
        }();
    t.default = l, e.exports = t.default
}, function(e, t, n) {
    /***
     * 2007-2024 PrestaShop
     *
     * NOTICE OF LICENSE
     *
     * This source file is subject to the Open Software License (OSL 3.0)
     * that is bundled with this package in the file LICENSE.txt.
     * It is also available through the world-wide-web at this URL:
     * http://opensource.org/licenses/osl-3.0.php
     * If you did not receive a copy of the license and are unable to
     * obtain it through the world-wide-web, please send an email
     * to license@prestashop.com so we can send you a copy immediately.
     *
     * DISCLAIMER
     *
     * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
     * versions in the future. If you wish to customize PrestaShop for your
     * needs please refer to http://www.prestashop.com for more information.
     *
     * @author    PrestaShop SA <contact@prestashop.com>
     * @copyright 2007-2024 PrestaShop SA
     * @license   http://opensource.org/licenses/osl-3.0.php Open Software License (OSL 3.0)
     * International Registered Trademark & Property of PrestaShop SA
     */
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        a = n(53),
        s = i(a),
        l = function() {
            function e() {
                r(this, e)
            }
            return o(e, [{
                key: "init",
                value: function() {
                    this.parentFocus(), this.togglePasswordVisibility()
                }
            }, {
                key: "parentFocus",
                value: function() {
                    (0, s.default)(".js-child-focus").focus(function() {
                        (0, s.default)(this).closest(".js-parent-focus").addClass("focus")
                    }), (0, s.default)(".js-child-focus").focusout(function() {
                        (0, s.default)(this).closest(".js-parent-focus").removeClass("focus")
                    })
                }
            }, {
                key: "togglePasswordVisibility",
                value: function() {
                    (0, s.default)('button[data-action="show-password"]').on("click", function() {
                        var e = (0, s.default)(this).closest(".input-group").children("input.js-visible-password");
                        "password" === e.attr("type") ? (e.attr("type", "text"), (0, s.default)(this).text((0, s.default)(this).data("textHide"))) : (e.attr("type", "password"), (0, s.default)(this).text((0, s.default)(this).data("textShow")))
                    })
                }
            }]), e
        }();
    t.default = l, e.exports = t.default
}, function(e, t, n) {
    /***
     * 2007-2024 PrestaShop
     *
     * NOTICE OF LICENSE
     *
     * This source file is subject to the Open Software License (OSL 3.0)
     * that is bundled with this package in the file LICENSE.txt.
     * It is also available through the world-wide-web at this URL:
     * http://opensource.org/licenses/osl-3.0.php
     * If you did not receive a copy of the license and are unable to
     * obtain it through the world-wide-web, please send an email
     * to license@prestashop.com so we can send you a copy immediately.
     *
     * DISCLAIMER
     *
     * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
     * versions in the future. If you wish to customize PrestaShop for your
     * needs please refer to http://www.prestashop.com for more information.
     *
     * @author    PrestaShop SA <contact@prestashop.com>
     * @copyright 2007-2024 PrestaShop SA
     * @license   http://opensource.org/licenses/osl-3.0.php Open Software License (OSL 3.0)
     * International Registered Trademark & Property of PrestaShop SA
     */
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        a = n(53),
        s = i(a);
    n(58);
    var l = function() {
        function e() {
            r(this, e)
        }
        return o(e, [{
            key: "init",
            value: function() {
                var e = this,
                    t = 5,
                    n = 10,
                    i = (0, s.default)(".js-modal-arrows"),
                    r = (0, s.default)(".js-modal-product-images"),
                    o = (0, s.default)(".on-sale");
                (0, s.default)("body").on("click", ".js-modal-thumb", function(e) {
                    (0, s.default)(".js-modal-thumb").hasClass("selected") && (0, s.default)(".js-modal-thumb").removeClass("selected"), (0, s.default)(e.currentTarget).addClass("selected"), (0, s.default)(".js-modal-product-cover").attr("src", (0, s.default)(e.target).data("image-large-src")), (0, s.default)(".js-modal-product-cover").attr("title", (0, s.default)(e.target).attr("title")), (0, s.default)(".js-modal-product-cover").attr("alt", (0, s.default)(e.target).attr("alt"))
                }), o.length && (0, s.default)("#product").length && (0, s.default)(".new").css("top", o.height() + n), (0, s.default)(".js-modal-product-images li").length <= t ? i.css("opacity", ".2") : i.on("click", function(t) {
                    (0, s.default)(t.target).hasClass("arrow-up") && r.position().top < 0 ? (e.move("up"), (0, s.default)(".js-modal-arrow-down").css("opacity", "1")) : (0, s.default)(t.target).hasClass("arrow-down") && r.position().top + r.height() > (0, s.default)(".js-modal-mask").height() && (e.move("down"), (0, s.default)(".js-modal-arrow-up").css("opacity", "1"))
                })
            }
        }, {
            key: "move",
            value: function(e) {
                var t = 10,
                    n = (0, s.default)(".js-modal-product-images"),
                    i = (0, s.default)(".js-modal-product-images li img").height() + t,
                    r = n.position().top;
                n.velocity({
                    translateY: "up" === e ? r + i : r - i
                }, function() {
                    n.position().top >= 0 ? (0, s.default)(".js-modal-arrow-up").css("opacity", ".2") : n.position().top + n.height() <= (0, s.default)(".js-modal-mask").height() && (0, s.default)(".js-modal-arrow-down").css("opacity", ".2")
                })
            }
        }]), e
    }();
    t.default = l, e.exports = t.default
}, function(e, t, n) {
    /***
     * 2007-2024 PrestaShop
     *
     * NOTICE OF LICENSE
     *
     * This source file is subject to the Open Software License (OSL 3.0)
     * that is bundled with this package in the file LICENSE.txt.
     * It is also available through the world-wide-web at this URL:
     * http://opensource.org/licenses/osl-3.0.php
     * If you did not receive a copy of the license and are unable to
     * obtain it through the world-wide-web, please send an email
     * to license@prestashop.com so we can send you a copy immediately.
     *
     * DISCLAIMER
     *
     * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
     * versions in the future. If you wish to customize PrestaShop for your
     * needs please refer to http://www.prestashop.com for more information.
     *
     * @author    PrestaShop SA <contact@prestashop.com>
     * @copyright 2007-2024 PrestaShop SA
     * @license   http://opensource.org/licenses/osl-3.0.php Open Software License (OSL 3.0)
     * International Registered Trademark & Property of PrestaShop SA
     */
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        s = function(e, t, n) {
            for (var i = !0; i;) {
                var r = e,
                    o = t,
                    a = n;
                i = !1, null === r && (r = Function.prototype);
                var s = Object.getOwnPropertyDescriptor(r, o);
                if (void 0 !== s) {
                    if ("value" in s) return s.value;
                    var l = s.get;
                    if (void 0 === l) return;
                    return l.call(a)
                }
                var u = Object.getPrototypeOf(r);
                if (null === u) return;
                e = u, t = o, n = a, i = !0, s = u = void 0
            }
        },
        l = n(53),
        u = i(l),
        c = n(62),
        f = i(c),
        d = function(e) {
            function t() {
                r(this, t), s(Object.getPrototypeOf(t.prototype), "constructor", this).apply(this, arguments)
            }
            return o(t, e), a(t, [{
                key: "init",
                value: function() {
                    var e = this,
                        n = void 0,
                        i = this;
                    this.el.find("li").hover(function(t) {
                        e.el.parent().hasClass("mobile") || (n !== (0, u.default)(t.currentTarget).attr("id") && (0 === (0, u.default)(t.target).data("depth") && (0, u.default)("#" + n + " .js-sub-menu").hide(), n = (0, u.default)(t.currentTarget).attr("id")), n && 0 === (0, u.default)(t.target).data("depth") && (0, u.default)("#" + n + " .js-sub-menu").show().css({
                            top: (0, u.default)("#" + n).height() + (0, u.default)("#" + n).position().top
                        }))
                    }), (0, u.default)("#menu-icon").on("click", function() {
                        (0, u.default)("#mobile_top_menu_wrapper").toggle(), i.toggleMobileMenu()
                    }), (0, u.default)(".js-top-menu").mouseleave(function() {
                        e.el.parent().hasClass("mobile") || (0, u.default)("#" + n + " .js-sub-menu").hide()
                    }), this.el.on("click", function(t) {
                        e.el.parent().hasClass("mobile") || t.stopPropagation()
                    }), prestashop.on("responsive update", function(e) {
                        (0, u.default)(".js-sub-menu").removeAttr("style"), i.toggleMobileMenu()
                    }), s(Object.getPrototypeOf(t.prototype), "init", this).call(this)
                }
            }, {
                key: "toggleMobileMenu",
                value: function() {
                    (0, u.default)("#mobile_top_menu_wrapper").is(":visible") ? ((0, u.default)("#notifications").hide(), (0, u.default)("#wrapper").hide(), (0, u.default)("#footer").hide()) : ((0, u.default)("#notifications").show(), (0, u.default)("#wrapper").show(), (0, u.default)("#footer").show())
                }
            }]), t
        }(f.default);
    t.default = d, e.exports = t.default
}, function(e, t) {
    function n() {
        this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0
    }

    function i(e) {
        return "function" == typeof e
    }

    function r(e) {
        return "number" == typeof e
    }

    function o(e) {
        return "object" == typeof e && null !== e
    }

    function a(e) {
        return void 0 === e
    }
    e.exports = n, n.EventEmitter = n, n.prototype._events = void 0, n.prototype._maxListeners = void 0, n.defaultMaxListeners = 10, n.prototype.setMaxListeners = function(e) {
        if (!r(e) || e < 0 || isNaN(e)) throw TypeError("n must be a positive number");
        return this._maxListeners = e, this
    }, n.prototype.emit = function(e) {
        var t, n, r, s, l, u;
        if (this._events || (this._events = {}), "error" === e && (!this._events.error || o(this._events.error) && !this._events.error.length)) {
            if (t = arguments[1], t instanceof Error) throw t;
            var c = new Error('Uncaught, unspecified "error" event. (' + t + ")");
            throw c.context = t, c
        }
        if (n = this._events[e], a(n)) return !1;
        if (i(n)) switch (arguments.length) {
            case 1:
                n.call(this);
                break;
            case 2:
                n.call(this, arguments[1]);
                break;
            case 3:
                n.call(this, arguments[1], arguments[2]);
                break;
            default:
                s = Array.prototype.slice.call(arguments, 1), n.apply(this, s)
        } else if (o(n))
            for (s = Array.prototype.slice.call(arguments, 1), u = n.slice(), r = u.length, l = 0; l < r; l++) u[l].apply(this, s);
        return !0
    }, n.prototype.addListener = function(e, t) {
        var r;
        if (!i(t)) throw TypeError("listener must be a function");
        return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", e, i(t.listener) ? t.listener : t), this._events[e] ? o(this._events[e]) ? this._events[e].push(t) : this._events[e] = [this._events[e], t] : this._events[e] = t, o(this._events[e]) && !this._events[e].warned && (r = a(this._maxListeners) ? n.defaultMaxListeners : this._maxListeners, r && r > 0 && this._events[e].length > r && (this._events[e].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[e].length), "function" == typeof console.trace && console.trace())), this
    }, n.prototype.on = n.prototype.addListener, n.prototype.once = function(e, t) {
        function n() {
            this.removeListener(e, n), r || (r = !0, t.apply(this, arguments))
        }
        if (!i(t)) throw TypeError("listener must be a function");
        var r = !1;
        return n.listener = t, this.on(e, n), this
    }, n.prototype.removeListener = function(e, t) {
        var n, r, a, s;
        if (!i(t)) throw TypeError("listener must be a function");
        if (!this._events || !this._events[e]) return this;
        if (n = this._events[e], a = n.length, r = -1, n === t || i(n.listener) && n.listener === t) delete this._events[e], this._events.removeListener && this.emit("removeListener", e, t);
        else if (o(n)) {
            for (s = a; s-- > 0;)
                if (n[s] === t || n[s].listener && n[s].listener === t) {
                    r = s;
                    break
                }
            if (r < 0) return this;
            1 === n.length ? (n.length = 0, delete this._events[e]) : n.splice(r, 1), this._events.removeListener && this.emit("removeListener", e, t)
        }
        return this
    }, n.prototype.removeAllListeners = function(e) {
        var t, n;
        if (!this._events) return this;
        if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[e] && delete this._events[e], this;
        if (0 === arguments.length) {
            for (t in this._events) "removeListener" !== t && this.removeAllListeners(t);
            return this.removeAllListeners("removeListener"), this._events = {}, this
        }
        if (n = this._events[e], i(n)) this.removeListener(e, n);
        else if (n)
            for (; n.length;) this.removeListener(e, n[n.length - 1]);
        return delete this._events[e], this
    }, n.prototype.listeners = function(e) {
        var t;
        return t = this._events && this._events[e] ? i(this._events[e]) ? [this._events[e]] : this._events[e].slice() : []
    }, n.prototype.listenerCount = function(e) {
        if (this._events) {
            var t = this._events[e];
            if (i(t)) return 1;
            if (t) return t.length
        }
        return 0
    }, n.listenerCount = function(e, t) {
        return e.listenerCount(t)
    }
}, function(e, t) {
    /***
     * 2007-2024 PrestaShop
     *
     * NOTICE OF LICENSE
     *
     * This source file is subject to the Open Software License (OSL 3.0)
     * that is bundled with this package in the file LICENSE.txt.
     * It is also available through the world-wide-web at this URL:
     * http://opensource.org/licenses/osl-3.0.php
     * If you did not receive a copy of the license and are unable to
     * obtain it through the world-wide-web, please send an email
     * to license@prestashop.com so we can send you a copy immediately.
     *
     * DISCLAIMER
     *
     * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
     * versions in the future. If you wish to customize PrestaShop for your
     * needs please refer to http://www.prestashop.com for more information.
     *
     * @author    PrestaShop SA <contact@prestashop.com>
     * @copyright 2007-2024 PrestaShop SA
     * @license   http://opensource.org/licenses/osl-3.0.php Open Software License (OSL 3.0)
     * International Registered Trademark & Property of PrestaShop SA
     */
    "use strict";
    ! function(e) {
        var t = 0,
            n = function(t, n) {
                this.options = n, this.$elementFilestyle = [], this.$element = e(t)
            };
        n.prototype = {
            clear: function() {
                this.$element.val(""), this.$elementFilestyle.find(":text").val(""), this.$elementFilestyle.find(".badge").remove()
            },
            destroy: function() {
                this.$element.removeAttr("style").removeData("filestyle"), this.$elementFilestyle.remove()
            },
            disabled: function(e) {
                if (e === !0) this.options.disabled || (this.$element.attr("disabled", "true"), this.$elementFilestyle.find("label").attr("disabled", "true"), this.options.disabled = !0);
                else {
                    if (e !== !1) return this.options.disabled;
                    this.options.disabled && (this.$element.removeAttr("disabled"), this.$elementFilestyle.find("label").removeAttr("disabled"), this.options.disabled = !1)
                }
            },
            buttonBefore: function(e) {
                if (e === !0) this.options.buttonBefore || (this.options.buttonBefore = !0, this.options.input && (this.$elementFilestyle.remove(), this.constructor(), this.pushNameFiles()));
                else {
                    if (e !== !1) return this.options.buttonBefore;
                    this.options.buttonBefore && (this.options.buttonBefore = !1, this.options.input && (this.$elementFilestyle.remove(), this.constructor(), this.pushNameFiles()))
                }
            },
            icon: function(e) {
                if (e === !0) this.options.icon || (this.options.icon = !0, this.$elementFilestyle.find("label").prepend(this.htmlIcon()));
                else {
                    if (e !== !1) return this.options.icon;
                    this.options.icon && (this.options.icon = !1, this.$elementFilestyle.find(".icon-span-filestyle").remove())
                }
            },
            input: function(e) {
                if (e === !0) this.options.input || (this.options.input = !0, this.options.buttonBefore ? this.$elementFilestyle.append(this.htmlInput()) : this.$elementFilestyle.prepend(this.htmlInput()), this.$elementFilestyle.find(".badge").remove(), this.pushNameFiles(), this.$elementFilestyle.find(".group-span-filestyle").addClass("input-group-btn"));
                else {
                    if (e !== !1) return this.options.input;
                    if (this.options.input) {
                        this.options.input = !1, this.$elementFilestyle.find(":text").remove();
                        var t = this.pushNameFiles();
                        t.length > 0 && this.options.badge && this.$elementFilestyle.find("label").append(' <span class="badge">' + t.length + "</span>"), this.$elementFilestyle.find(".group-span-filestyle").removeClass("input-group-btn")
                    }
                }
            },
            size: function(e) {
                if (void 0 === e) return this.options.size;
                var t = this.$elementFilestyle.find("label"),
                    n = this.$elementFilestyle.find("input");
                t.removeClass("btn-lg btn-sm"), n.removeClass("input-lg input-sm"), "nr" != e && (t.addClass("btn-" + e), n.addClass("input-" + e))
            },
            placeholder: function(e) {
                return void 0 === e ? this.options.placeholder : (this.options.placeholder = e, void this.$elementFilestyle.find("input").attr("placeholder", e))
            },
            buttonText: function(e) {
                return void 0 === e ? this.options.buttonText : (this.options.buttonText = e, void this.$elementFilestyle.find("label .buttonText").html(this.options.buttonText))
            },
            buttonName: function(e) {
                return void 0 === e ? this.options.buttonName : (this.options.buttonName = e, void this.$elementFilestyle.find("label").attr({
                    class: "btn " + this.options.buttonName
                }))
            },
            iconName: function(e) {
                return void 0 === e ? this.options.iconName : void this.$elementFilestyle.find(".icon-span-filestyle").attr({
                    class: "icon-span-filestyle " + this.options.iconName
                })
            },
            htmlIcon: function() {
                return this.options.icon ? '<span class="icon-span-filestyle ' + this.options.iconName + '"></span> ' : ""
            },
            htmlInput: function() {
                return this.options.input ? '<input type="text" class="form-control ' + ("nr" == this.options.size ? "" : "input-" + this.options.size) + '" placeholder="' + this.options.placeholder + '" disabled> ' : ""
            },
            pushNameFiles: function() {
                var e = "",
                    t = [];
                void 0 === this.$element[0].files ? t[0] = {
                    name: this.$element[0] && this.$element[0].value
                } : t = this.$element[0].files;
                for (var n = 0; n < t.length; n++) e += t[n].name.split("\\").pop() + ", ";
                return "" !== e ? this.$elementFilestyle.find(":text").val(e.replace(/\, $/g, "")) : this.$elementFilestyle.find(":text").val(""), t
            },
            constructor: function() {
                var n = this,
                    i = "",
                    r = n.$element.attr("id"),
                    o = "";
                "" !== r && r || (r = "filestyle-" + t, n.$element.attr({
                    id: r
                }), t++), o = '<span class="group-span-filestyle ' + (n.options.input ? "input-group-btn" : "") + '"><label for="' + r + '" class="btn ' + n.options.buttonName + " " + ("nr" == n.options.size ? "" : "btn-" + n.options.size) + '" ' + (n.options.disabled ? 'disabled="true"' : "") + ">" + n.htmlIcon() + '<span class="buttonText">' + n.options.buttonText + "</span></label></span>", i = n.options.buttonBefore ? o + n.htmlInput() : n.htmlInput() + o, n.$elementFilestyle = e('<div class="bootstrap-filestyle input-group">' + i + "</div>"), n.$elementFilestyle.find(".group-span-filestyle").attr("tabindex", "0").keypress(function(e) {
                    if (13 === e.keyCode || 32 === e.charCode) return n.$elementFilestyle.find("label").click(), !1
                }), n.$element.css({
                    position: "absolute",
                    clip: "rect(0px 0px 0px 0px)"
                }).attr("tabindex", "-1").after(n.$elementFilestyle), n.options.disabled && n.$element.attr("disabled", "true"), n.$element.change(function() {
                    var e = n.pushNameFiles();
                    0 == n.options.input && n.options.badge ? 0 == n.$elementFilestyle.find(".badge").length ? n.$elementFilestyle.find("label").append(' <span class="badge">' + e.length + "</span>") : 0 == e.length ? n.$elementFilestyle.find(".badge").remove() : n.$elementFilestyle.find(".badge").html(e.length) : n.$elementFilestyle.find(".badge").remove()
                }), window.navigator.userAgent.search(/firefox/i) > -1 && n.$elementFilestyle.find("label").click(function() {
                    return n.$element.click(), !1
                })
            }
        };
        var i = e.fn.filestyle;
        e.fn.filestyle = function(t, i) {
            var r = "",
                o = this.each(function() {
                    if ("file" === e(this).attr("type")) {
                        var o = e(this),
                            a = o.data("filestyle"),
                            s = e.extend({}, e.fn.filestyle.defaults, t, "object" == typeof t && t);
                        a || (o.data("filestyle", a = new n(this, s)), a.constructor()), "string" == typeof t && (r = a[t](i))
                    }
                });
            return void 0 !== typeof r ? r : o
        }, e.fn.filestyle.defaults = {
            buttonText: "Choose file",
            iconName: "glyphicon glyphicon-folder-open",
            buttonName: "btn-default",
            size: "nr",
            input: !0,
            badge: !0,
            icon: !0,
            buttonBefore: !1,
            disabled: !1,
            placeholder: ""
        }, e.fn.filestyle.noConflict = function() {
            return e.fn.filestyle = i, this
        }, e(function() {
            e(".filestyle").each(function() {
                var t = e(this),
                    n = {
                        input: "false" !== t.attr("data-input"),
                        icon: "false" !== t.attr("data-icon"),
                        buttonBefore: "true" === t.attr("data-buttonBefore"),
                        disabled: "true" === t.attr("data-disabled"),
                        size: t.attr("data-size"),
                        buttonText: t.attr("data-buttonText"),
                        buttonName: t.attr("data-buttonName"),
                        iconName: t.attr("data-iconName"),
                        badge: "false" !== t.attr("data-badge"),
                        placeholder: t.attr("data-placeholder")
                    };
                t.filestyle(n)
            })
        })
    }(window.jQuery)
}, function(e, t) {
    /***
     * 2007-2024 PrestaShop
     *
     * NOTICE OF LICENSE
     *
     * This source file is subject to the Open Software License (OSL 3.0)
     * that is bundled with this package in the file LICENSE.txt.
     * It is also available through the world-wide-web at this URL:
     * http://opensource.org/licenses/osl-3.0.php
     * If you did not receive a copy of the license and are unable to
     * obtain it through the world-wide-web, please send an email
     * to license@prestashop.com so we can send you a copy immediately.
     *
     * DISCLAIMER
     *
     * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
     * versions in the future. If you wish to customize PrestaShop for your
     * needs please refer to http://www.prestashop.com for more information.
     *
     * @author    PrestaShop SA <contact@prestashop.com>
     * @copyright 2007-2024 PrestaShop SA
     * @license   http://opensource.org/licenses/osl-3.0.php Open Software License (OSL 3.0)
     * International Registered Trademark & Property of PrestaShop SA
     */
    "use strict";
    ! function(e) {
        e.fn.scrollbox = function(t) {
            var n = {
                linear: !1,
                startDelay: 2,
                delay: 3,
                step: 5,
                speed: 32,
                switchItems: 1,
                direction: "vertical",
                distance: "auto",
                autoPlay: !0,
                onMouseOverPause: !0,
                paused: !1,
                queue: null,
                listElement: "ul",
                listItemElement: "li",
                infiniteLoop: !0,
                switchAmount: 0,
                afterForward: null,
                afterBackward: null,
                triggerStackable: !1
            };
            return t = e.extend(n, t), t.scrollOffset = "vertical" === t.direction ? "scrollTop" : "scrollLeft", t.queue && (t.queue = e("#" + t.queue)), this.each(function() {
                var n, i, r, o, a, s, l, u, c, f = e(this),
                    d = null,
                    h = null,
                    p = !1,
                    m = 0,
                    g = 0;
                t.onMouseOverPause && (f.bind("mouseover", function() {
                    p = !0
                }), f.bind("mouseout", function() {
                    p = !1
                })), n = f.children(t.listElement + ":first-child"), t.infiniteLoop === !1 && 0 === t.switchAmount && (t.switchAmount = n.children().length), s = function() {
                    if (!p) {
                        var r, a, s, l, u;
                        if (r = n.children(t.listItemElement + ":first-child"), l = "auto" !== t.distance ? t.distance : "vertical" === t.direction ? r.outerHeight(!0) : r.outerWidth(!0), t.linear ? s = Math.min(f[0][t.scrollOffset] + t.step, l) : (u = Math.max(3, parseInt(.3 * (l - f[0][t.scrollOffset]), 10)), s = Math.min(f[0][t.scrollOffset] + u, l)), f[0][t.scrollOffset] = s, s >= l) {
                            for (a = 0; a < t.switchItems; a++) t.queue && t.queue.find(t.listItemElement).length > 0 ? (n.append(t.queue.find(t.listItemElement)[0]), n.children(t.listItemElement + ":first-child").remove()) : n.append(n.children(t.listItemElement + ":first-child")), ++m;
                            if (f[0][t.scrollOffset] = 0, clearInterval(d), d = null, e.isFunction(t.afterForward) && t.afterForward.call(f, {
                                    switchCount: m,
                                    currentFirstChild: n.children(t.listItemElement + ":first-child")
                                }), t.triggerStackable && 0 !== g) return void i();
                            if (t.infiniteLoop === !1 && m >= t.switchAmount) return;
                            t.autoPlay && (h = setTimeout(o, 1e3 * t.delay))
                        }
                    }
                }, l = function() {
                    if (!p) {
                        var r, a, s, l, u;
                        if (0 === f[0][t.scrollOffset]) {
                            for (a = 0; a < t.switchItems; a++) n.children(t.listItemElement + ":last-child").insertBefore(n.children(t.listItemElement + ":first-child"));
                            r = n.children(t.listItemElement + ":first-child"), l = "auto" !== t.distance ? t.distance : "vertical" === t.direction ? r.height() : r.width(), f[0][t.scrollOffset] = l
                        }
                        if (t.linear ? s = Math.max(f[0][t.scrollOffset] - t.step, 0) : (u = Math.max(3, parseInt(.3 * f[0][t.scrollOffset], 10)), s = Math.max(f[0][t.scrollOffset] - u, 0)), f[0][t.scrollOffset] = s, 0 === s) {
                            if (--m, clearInterval(d), d = null, e.isFunction(t.afterBackward) && t.afterBackward.call(f, {
                                    switchCount: m,
                                    currentFirstChild: n.children(t.listItemElement + ":first-child")
                                }), t.triggerStackable && 0 !== g) return void i();
                            t.autoPlay && (h = setTimeout(o, 1e3 * t.delay))
                        }
                    }
                }, i = function() {
                    0 !== g && (g > 0 ? (g--, h = setTimeout(o, 0)) : (g++, h = setTimeout(r, 0)))
                }, o = function() {
                    clearInterval(d), d = setInterval(s, t.speed)
                }, r = function() {
                    clearInterval(d), d = setInterval(l, t.speed)
                }, u = function() {
                    t.autoPlay = !0, p = !1, clearInterval(d), d = setInterval(s, t.speed)
                }, c = function() {
                    p = !0
                }, a = function(e) {
                    t.delay = e || t.delay, clearTimeout(h), t.autoPlay && (h = setTimeout(o, 1e3 * t.delay))
                }, t.autoPlay && (h = setTimeout(o, 1e3 * t.startDelay)), f.bind("resetClock", function(e) {
                    a(e)
                }), f.bind("forward", function() {
                    t.triggerStackable ? null !== d ? g++ : o() : (clearTimeout(h), o())
                }), f.bind("backward", function() {
                    t.triggerStackable ? null !== d ? g-- : r() : (clearTimeout(h), r())
                }), f.bind("pauseHover", function() {
                    c()
                }), f.bind("forwardHover", function() {
                    u()
                }), f.bind("speedUp", function(e, n) {
                    "undefined" === n && (n = Math.max(1, parseInt(t.speed / 2, 10))), t.speed = n
                }), f.bind("speedDown", function(e, n) {
                    "undefined" === n && (n = 2 * t.speed), t.speed = n
                }), f.bind("updateConfig", function(n, i) {
                    t = e.extend(t, i)
                })
            })
        }
    }(jQuery)
}, function(e, t, n) {
    /***
     * 2007-2024 PrestaShop
     *
     * NOTICE OF LICENSE
     *
     * This source file is subject to the Open Software License (OSL 3.0)
     * that is bundled with this package in the file LICENSE.txt.
     * It is also available through the world-wide-web at this URL:
     * http://opensource.org/licenses/osl-3.0.php
     * If you did not receive a copy of the license and are unable to
     * obtain it through the world-wide-web, please send an email
     * to license@prestashop.com so we can send you a copy immediately.
     *
     * DISCLAIMER
     *
     * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
     * versions in the future. If you wish to customize PrestaShop for your
     * needs please refer to http://www.prestashop.com for more information.
     *
     * @author    PrestaShop SA <contact@prestashop.com>
     * @copyright 2007-2024 PrestaShop SA
     * @license   http://opensource.org/licenses/osl-3.0.php Open Software License (OSL 3.0)
     * International Registered Trademark & Property of PrestaShop SA
     */
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var r = n(54),
        o = i(r),
        a = n(53),
        s = i(a);
    o.default.blockcart = o.default.blockcart || {}, o.default.blockcart.showModal = function(e) {
        function t() {
            return (0, s.default)("#blockcart-modal")
        }
        var n = t();
        n.length && n.remove(), (0, s.default)("body").append(e), n = t(), n.modal("show").on("hidden.bs.modal", function(e) {
            o.default.emit("updateProduct", {
                reason: e.currentTarget.dataset
            })
        })
    }
}]);
//# sourceMappingURL=theme.js.map