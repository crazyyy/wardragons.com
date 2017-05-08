// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function() {};
  var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());
if (typeof jQuery === 'undefined') {
  console.warn('jQuery hasn\'t loaded');
} else {
  console.log('jQuery has loaded');
}
// Place any jQuery/helper plugins in here.

function getNow() {
  return Date.now() || function() {
    return (new Date).getTime()
  }
}

function throttle(e, t, i) {
  var o, n, s, r = null,
    a = 0;
  i || (i = {});
  var l = function() {
    a = i.leading === !1 ? 0 : getNow(), r = null, s = e.apply(o, n), r || (o = n = null)
  };
  return function() {
    var d = getNow();
    a || i.leading !== !1 || (a = d);
    var c = t - (d - a);
    return o = this, n = arguments, c <= 0 || c > t ? (r && (clearTimeout(r), r = null), a = d, s = e.apply(o, n), r || (o = n = null)) : r || i.trailing === !1 || (r = setTimeout(l, c)), s
  }
}

function debounce(e, t, i) {
  var o;
  return function() {
    var n = this,
      s = arguments,
      r = function() {
        o = null, i || e.apply(n, s)
      },
      a = i && !o;
    clearTimeout(o), o = setTimeout(r, t), a && e.apply(n, s)
  }
}

function stickyHeader(e) {
  var t;
  t = breakpoints.c940() ? 55 : 0, (window.pageYOffset || document.documentElement.scrollTop) > t ? $body.addClass(states.fixedHeader) : $body.removeClass(states.fixedHeader)
}

function onYouTubeIframeAPIReady() {
  var e = $("#player").data("video-id");
  player = new YT.Player("player", {
    videoId: e,
    height: "390",
    width: "640",
    playerVars: {
      rel: 0,
      showinfo: 0,
      controls: 0,
      modestbranding: 1
    }
  })
}

function changeSlide(e, t, i) {
  if ("undefined" != typeof i.direction) {
    var o, n = i.direction.charAt(0).toUpperCase() + i.direction.slice(1);
    e.slick("slick" + n), o = e.find(".slick-active").data("slick-index"), t.find("." + states.current).removeClass(states.current), t.find("[data-slide-index=" + o + "]").parent("li").addClass(states.current)
  }
  "undefined" != typeof i.slideIndex && (e.slick("slickGoTo", i.slideIndex), i.$activeDot.parents("li").siblings("." + states.current).removeClass(states.current), i.$activeDot.parent().addClass(states.current))
}

function toggleIconArrow(e) {
  var t = "c-icon--up-open-big",
    i = "c-icon--down-open-big";
  e.parent().hasClass(states.active) ? (e.find("i").removeClass(i), e.find("i").addClass(t)) : (e.find("i").removeClass(t), e.find("i").addClass(i))
}! function(e, t, i, o) {
  var n = i("html"),
    s = i(e),
    r = i(t),
    a = i.fancybox = function() {
      a.open.apply(this, arguments)
    },
    l = navigator.userAgent.match(/msie/i),
    d = null,
    c = t.createTouch !== o,
    p = function(e) {
      return e && e.hasOwnProperty && e instanceof i
    },
    u = function(e) {
      return e && "string" === i.type(e)
    },
    f = function(e) {
      return u(e) && 0 < e.indexOf("%")
    },
    h = function(e, t) {
      var i = parseInt(e, 10) || 0;
      return t && f(e) && (i *= a.getViewport()[t] / 100), Math.ceil(i)
    },
    g = function(e, t) {
      return h(e, t) + "px"
    };
  i.extend(a, {
    version: "2.1.5",
    defaults: {
      padding: 15,
      margin: 20,
      width: 800,
      height: 600,
      minWidth: 100,
      minHeight: 100,
      maxWidth: 9999,
      maxHeight: 9999,
      pixelRatio: 1,
      autoSize: !0,
      autoHeight: !1,
      autoWidth: !1,
      autoResize: !0,
      autoCenter: !c,
      fitToView: !0,
      aspectRatio: !1,
      topRatio: .5,
      leftRatio: .5,
      scrolling: "auto",
      wrapCSS: "",
      arrows: !0,
      closeBtn: !0,
      closeClick: !1,
      nextClick: !1,
      mouseWheel: !0,
      autoPlay: !1,
      playSpeed: 3e3,
      preload: 3,
      modal: !1,
      loop: !0,
      ajax: {
        dataType: "html",
        headers: {
          "X-fancyBox": !0
        }
      },
      iframe: {
        scrolling: "auto",
        preload: !0
      },
      swf: {
        wmode: "transparent",
        allowfullscreen: "true",
        allowscriptaccess: "always"
      },
      keys: {
        next: {
          13: "left",
          34: "up",
          39: "left",
          40: "up"
        },
        prev: {
          8: "right",
          33: "down",
          37: "right",
          38: "down"
        },
        close: [27],
        play: [32],
        toggle: [70]
      },
      direction: {
        next: "left",
        prev: "right"
      },
      scrollOutside: !0,
      index: 0,
      type: null,
      href: null,
      content: null,
      title: null,
      tpl: {
        wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
        image: '<img class="fancybox-image" src="{href}" alt="" />',
        iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (l ? ' allowtransparency="true"' : "") + "></iframe>",
        error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
        closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
        next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
        prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
      },
      openEffect: "fade",
      openSpeed: 250,
      openEasing: "swing",
      openOpacity: !0,
      openMethod: "zoomIn",
      closeEffect: "fade",
      closeSpeed: 250,
      closeEasing: "swing",
      closeOpacity: !0,
      closeMethod: "zoomOut",
      nextEffect: "elastic",
      nextSpeed: 250,
      nextEasing: "swing",
      nextMethod: "changeIn",
      prevEffect: "elastic",
      prevSpeed: 250,
      prevEasing: "swing",
      prevMethod: "changeOut",
      helpers: {
        overlay: !0,
        title: !0
      },
      onCancel: i.noop,
      beforeLoad: i.noop,
      afterLoad: i.noop,
      beforeShow: i.noop,
      afterShow: i.noop,
      beforeChange: i.noop,
      beforeClose: i.noop,
      afterClose: i.noop
    },
    group: {},
    opts: {},
    previous: null,
    coming: null,
    current: null,
    isActive: !1,
    isOpen: !1,
    isOpened: !1,
    wrap: null,
    skin: null,
    outer: null,
    inner: null,
    player: {
      timer: null,
      isActive: !1
    },
    ajaxLoad: null,
    imgPreload: null,
    transitions: {},
    helpers: {},
    open: function(e, t) {
      if (e && (i.isPlainObject(t) || (t = {}), !1 !== a.close(!0))) return i.isArray(e) || (e = p(e) ? i(e).get() : [e]), i.each(e, function(n, s) {
        var r, l, d, c, f, h = {};
        "object" === i.type(s) && (s.nodeType && (s = i(s)), p(s) ? (h = {
          href: s.data("fancybox-href") || s.attr("href"),
          title: s.data("fancybox-title") || s.attr("title"),
          isDom: !0,
          element: s
        }, i.metadata && i.extend(!0, h, s.metadata())) : h = s), r = t.href || h.href || (u(s) ? s : null), l = t.title !== o ? t.title : h.title || "", c = (d = t.content || h.content) ? "html" : t.type || h.type, !c && h.isDom && (c = s.data("fancybox-type"), c || (c = (c = s.prop("class").match(/fancybox\.(\w+)/)) ? c[1] : null)), u(r) && (c || (a.isImage(r) ? c = "image" : a.isSWF(r) ? c = "swf" : "#" === r.charAt(0) ? c = "inline" : u(s) && (c = "html", d = s)), "ajax" === c && (f = r.split(/\s+/, 2), r = f.shift(), f = f.shift())), d || ("inline" === c ? r ? d = i(u(r) ? r.replace(/.*(?=#[^\s]+$)/, "") : r) : h.isDom && (d = s) : "html" === c ? d = r : !c && !r && h.isDom && (c = "inline", d = s)), i.extend(h, {
          href: r,
          type: c,
          content: d,
          title: l,
          selector: f
        }), e[n] = h
      }), a.opts = i.extend(!0, {}, a.defaults, t), t.keys !== o && (a.opts.keys = !!t.keys && i.extend({}, a.defaults.keys, t.keys)), a.group = e, a._start(a.opts.index)
    },
    cancel: function() {
      var e = a.coming;
      e && !1 !== a.trigger("onCancel") && (a.hideLoading(), a.ajaxLoad && a.ajaxLoad.abort(), a.ajaxLoad = null, a.imgPreload && (a.imgPreload.onload = a.imgPreload.onerror = null), e.wrap && e.wrap.stop(!0, !0).trigger("onReset").remove(), a.coming = null, a.current || a._afterZoomOut(e))
    },
    close: function(e) {
      a.cancel(), !1 !== a.trigger("beforeClose") && (a.unbindEvents(), a.isActive && (a.isOpen && !0 !== e ? (a.isOpen = a.isOpened = !1, a.isClosing = !0, i(".fancybox-item, .fancybox-nav").remove(), a.wrap.stop(!0, !0).removeClass("fancybox-opened"), a.transitions[a.current.closeMethod]()) : (i(".fancybox-wrap").stop(!0).trigger("onReset").remove(), a._afterZoomOut())))
    },
    play: function(e) {
      var t = function() {
          clearTimeout(a.player.timer)
        },
        i = function() {
          t(), a.current && a.player.isActive && (a.player.timer = setTimeout(a.next, a.current.playSpeed))
        },
        o = function() {
          t(), r.unbind(".player"), a.player.isActive = !1, a.trigger("onPlayEnd")
        };
      !0 === e || !a.player.isActive && !1 !== e ? a.current && (a.current.loop || a.current.index < a.group.length - 1) && (a.player.isActive = !0, r.bind({
        "onCancel.player beforeClose.player": o,
        "onUpdate.player": i,
        "beforeLoad.player": t
      }), i(), a.trigger("onPlayStart")) : o()
    },
    next: function(e) {
      var t = a.current;
      t && (u(e) || (e = t.direction.next), a.jumpto(t.index + 1, e, "next"))
    },
    prev: function(e) {
      var t = a.current;
      t && (u(e) || (e = t.direction.prev), a.jumpto(t.index - 1, e, "prev"))
    },
    jumpto: function(e, t, i) {
      var n = a.current;
      n && (e = h(e), a.direction = t || n.direction[e >= n.index ? "next" : "prev"], a.router = i || "jumpto", n.loop && (0 > e && (e = n.group.length + e % n.group.length), e %= n.group.length), n.group[e] !== o && (a.cancel(), a._start(e)))
    },
    reposition: function(e, t) {
      var o, n = a.current,
        s = n ? n.wrap : null;
      s && (o = a._getPosition(t), e && "scroll" === e.type ? (delete o.position, s.stop(!0, !0).animate(o, 200)) : (s.css(o), n.pos = i.extend({}, n.dim, o)))
    },
    update: function(e) {
      var t = e && e.type,
        i = !t || "orientationchange" === t;
      i && (clearTimeout(d), d = null), a.isOpen && !d && (d = setTimeout(function() {
        var o = a.current;
        o && !a.isClosing && (a.wrap.removeClass("fancybox-tmp"), (i || "load" === t || "resize" === t && o.autoResize) && a._setDimension(), "scroll" === t && o.canShrink || a.reposition(e), a.trigger("onUpdate"), d = null)
      }, i && !c ? 0 : 300))
    },
    toggle: function(e) {
      a.isOpen && (a.current.fitToView = "boolean" === i.type(e) ? e : !a.current.fitToView, c && (a.wrap.removeAttr("style").addClass("fancybox-tmp"), a.trigger("onUpdate")), a.update())
    },
    hideLoading: function() {
      r.unbind(".loading"), i("#fancybox-loading").remove()
    },
    showLoading: function() {
      var e, t;
      a.hideLoading(), e = i('<div id="fancybox-loading"><div></div></div>').click(a.cancel).appendTo("body"), r.bind("keydown.loading", function(e) {
        27 === (e.which || e.keyCode) && (e.preventDefault(), a.cancel())
      }), a.defaults.fixed || (t = a.getViewport(), e.css({
        position: "absolute",
        top: .5 * t.h + t.y,
        left: .5 * t.w + t.x
      }))
    },
    getViewport: function() {
      var t = a.current && a.current.locked || !1,
        i = {
          x: s.scrollLeft(),
          y: s.scrollTop()
        };
      return t ? (i.w = t[0].clientWidth, i.h = t[0].clientHeight) : (i.w = c && e.innerWidth ? e.innerWidth : s.width(), i.h = c && e.innerHeight ? e.innerHeight : s.height()), i
    },
    unbindEvents: function() {
      a.wrap && p(a.wrap) && a.wrap.unbind(".fb"), r.unbind(".fb"), s.unbind(".fb")
    },
    bindEvents: function() {
      var e, t = a.current;
      t && (s.bind("orientationchange.fb" + (c ? "" : " resize.fb") + (t.autoCenter && !t.locked ? " scroll.fb" : ""), a.update), (e = t.keys) && r.bind("keydown.fb", function(n) {
        var s = n.which || n.keyCode,
          r = n.target || n.srcElement;
        return (27 !== s || !a.coming) && void(!n.ctrlKey && !n.altKey && !n.shiftKey && !n.metaKey && (!r || !r.type && !i(r).is("[contenteditable]")) && i.each(e, function(e, r) {
          return 1 < t.group.length && r[s] !== o ? (a[e](r[s]), n.preventDefault(), !1) : -1 < i.inArray(s, r) ? (a[e](), n.preventDefault(), !1) : void 0
        }))
      }), i.fn.mousewheel && t.mouseWheel && a.wrap.bind("mousewheel.fb", function(e, o, n, s) {
        for (var r = i(e.target || null), l = !1; r.length && !l && !r.is(".fancybox-skin") && !r.is(".fancybox-wrap");) l = r[0] && !(r[0].style.overflow && "hidden" === r[0].style.overflow) && (r[0].clientWidth && r[0].scrollWidth > r[0].clientWidth || r[0].clientHeight && r[0].scrollHeight > r[0].clientHeight), r = i(r).parent();
        0 !== o && !l && 1 < a.group.length && !t.canShrink && (0 < s || 0 < n ? a.prev(0 < s ? "down" : "left") : (0 > s || 0 > n) && a.next(0 > s ? "up" : "right"), e.preventDefault())
      }))
    },
    trigger: function(e, t) {
      var o, n = t || a.coming || a.current;
      if (n) {
        if (i.isFunction(n[e]) && (o = n[e].apply(n, Array.prototype.slice.call(arguments, 1))), !1 === o) return !1;
        n.helpers && i.each(n.helpers, function(t, o) {
          o && a.helpers[t] && i.isFunction(a.helpers[t][e]) && a.helpers[t][e](i.extend(!0, {}, a.helpers[t].defaults, o), n)
        }), r.trigger(e)
      }
    },
    isImage: function(e) {
      return u(e) && e.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)
    },
    isSWF: function(e) {
      return u(e) && e.match(/\.(swf)((\?|#).*)?$/i)
    },
    _start: function(e) {
      var t, o, n = {};
      if (e = h(e), t = a.group[e] || null, !t) return !1;
      if (n = i.extend(!0, {}, a.opts, t), t = n.margin, o = n.padding, "number" === i.type(t) && (n.margin = [t, t, t, t]), "number" === i.type(o) && (n.padding = [o, o, o, o]), n.modal && i.extend(!0, n, {
          closeBtn: !1,
          closeClick: !1,
          nextClick: !1,
          arrows: !1,
          mouseWheel: !1,
          keys: null,
          helpers: {
            overlay: {
              closeClick: !1
            }
          }
        }), n.autoSize && (n.autoWidth = n.autoHeight = !0), "auto" === n.width && (n.autoWidth = !0), "auto" === n.height && (n.autoHeight = !0), n.group = a.group, n.index = e, a.coming = n, !1 === a.trigger("beforeLoad")) a.coming = null;
      else {
        if (o = n.type, t = n.href, !o) return a.coming = null, !(!a.current || !a.router || "jumpto" === a.router) && (a.current.index = e, a[a.router](a.direction));
        if (a.isActive = !0, "image" !== o && "swf" !== o || (n.autoHeight = n.autoWidth = !1, n.scrolling = "visible"), "image" === o && (n.aspectRatio = !0), "iframe" === o && c && (n.scrolling = "scroll"), n.wrap = i(n.tpl.wrap).addClass("fancybox-" + (c ? "mobile" : "desktop") + " fancybox-type-" + o + " fancybox-tmp " + n.wrapCSS).appendTo(n.parent || "body"), i.extend(n, {
            skin: i(".fancybox-skin", n.wrap),
            outer: i(".fancybox-outer", n.wrap),
            inner: i(".fancybox-inner", n.wrap)
          }), i.each(["Top", "Right", "Bottom", "Left"], function(e, t) {
            n.skin.css("padding" + t, g(n.padding[e]))
          }), a.trigger("onReady"), "inline" === o || "html" === o) {
          if (!n.content || !n.content.length) return a._error("content")
        } else if (!t) return a._error("href");
        "image" === o ? a._loadImage() : "ajax" === o ? a._loadAjax() : "iframe" === o ? a._loadIframe() : a._afterLoad()
      }
    },
    _error: function(e) {
      i.extend(a.coming, {
        type: "html",
        autoWidth: !0,
        autoHeight: !0,
        minWidth: 0,
        minHeight: 0,
        scrolling: "no",
        hasError: e,
        content: a.coming.tpl.error
      }), a._afterLoad()
    },
    _loadImage: function() {
      var e = a.imgPreload = new Image;
      e.onload = function() {
        this.onload = this.onerror = null, a.coming.width = this.width / a.opts.pixelRatio, a.coming.height = this.height / a.opts.pixelRatio, a._afterLoad()
      }, e.onerror = function() {
        this.onload = this.onerror = null, a._error("image")
      }, e.src = a.coming.href, !0 !== e.complete && a.showLoading()
    },
    _loadAjax: function() {
      var e = a.coming;
      a.showLoading(), a.ajaxLoad = i.ajax(i.extend({}, e.ajax, {
        url: e.href,
        error: function(e, t) {
          a.coming && "abort" !== t ? a._error("ajax", e) : a.hideLoading()
        },
        success: function(t, i) {
          "success" === i && (e.content = t, a._afterLoad())
        }
      }))
    },
    _loadIframe: function() {
      var e = a.coming,
        t = i(e.tpl.iframe.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", c ? "auto" : e.iframe.scrolling).attr("src", e.href);
      i(e.wrap).bind("onReset", function() {
        try {
          i(this).find("iframe").hide().attr("src", "//about:blank").end().empty()
        } catch (e) {}
      }), e.iframe.preload && (a.showLoading(), t.one("load", function() {
        i(this).data("ready", 1), c || i(this).bind("load.fb", a.update), i(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show(), a._afterLoad()
      })), e.content = t.appendTo(e.inner), e.iframe.preload || a._afterLoad()
    },
    _preloadImages: function() {
      var e, t, i = a.group,
        o = a.current,
        n = i.length,
        s = o.preload ? Math.min(o.preload, n - 1) : 0;
      for (t = 1; t <= s; t += 1) e = i[(o.index + t) % n], "image" === e.type && e.href && ((new Image).src = e.href)
    },
    _afterLoad: function() {
      var e, t, o, n, s, r = a.coming,
        l = a.current;
      if (a.hideLoading(), r && !1 !== a.isActive)
        if (!1 === a.trigger("afterLoad", r, l)) r.wrap.stop(!0).trigger("onReset").remove(), a.coming = null;
        else {
          switch (l && (a.trigger("beforeChange", l), l.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove()), a.unbindEvents(), e = r.content, t = r.type, o = r.scrolling, i.extend(a, {
            wrap: r.wrap,
            skin: r.skin,
            outer: r.outer,
            inner: r.inner,
            current: r,
            previous: l
          }), n = r.href, t) {
            case "inline":
            case "ajax":
            case "html":
              r.selector ? e = i("<div>").html(e).find(r.selector) : p(e) && (e.data("fancybox-placeholder") || e.data("fancybox-placeholder", i('<div class="fancybox-placeholder"></div>').insertAfter(e).hide()), e = e.show().detach(), r.wrap.bind("onReset", function() {
                i(this).find(e).length && e.hide().replaceAll(e.data("fancybox-placeholder")).data("fancybox-placeholder", !1)
              }));
              break;
            case "image":
              e = r.tpl.image.replace("{href}", n);
              break;
            case "swf":
              e = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + n + '"></param>', s = "", i.each(r.swf, function(t, i) {
                e += '<param name="' + t + '" value="' + i + '"></param>', s += " " + t + '="' + i + '"'
              }), e += '<embed src="' + n + '" type="application/x-shockwave-flash" width="100%" height="100%"' + s + "></embed></object>"
          }(!p(e) || !e.parent().is(r.inner)) && r.inner.append(e), a.trigger("beforeShow"), r.inner.css("overflow", "yes" === o ? "scroll" : "no" === o ? "hidden" : o), a._setDimension(), a.reposition(), a.isOpen = !1, a.coming = null, a.bindEvents(), a.isOpened ? l.prevMethod && a.transitions[l.prevMethod]() : i(".fancybox-wrap").not(r.wrap).stop(!0).trigger("onReset").remove(), a.transitions[a.isOpened ? r.nextMethod : r.openMethod](), a._preloadImages()
        }
    },
    _setDimension: function() {
      var e, t, o, n, s, r, l, d, c, p = a.getViewport(),
        u = 0,
        v = !1,
        y = !1,
        v = a.wrap,
        m = a.skin,
        w = a.inner,
        b = a.current,
        y = b.width,
        x = b.height,
        k = b.minWidth,
        S = b.minHeight,
        T = b.maxWidth,
        $ = b.maxHeight,
        C = b.scrolling,
        P = b.scrollOutside ? b.scrollbarWidth : 0,
        A = b.margin,
        H = h(A[1] + A[3]),
        j = h(A[0] + A[2]);
      if (v.add(m).add(w).width("auto").height("auto").removeClass("fancybox-tmp"), A = h(m.outerWidth(!0) - m.width()), e = h(m.outerHeight(!0) - m.height()), t = H + A, o = j + e, n = f(y) ? (p.w - t) * h(y) / 100 : y, s = f(x) ? (p.h - o) * h(x) / 100 : x, "iframe" === b.type) {
        if (c = b.content, b.autoHeight && 1 === c.data("ready")) try {
          c[0].contentWindow.document.location && (w.width(n).height(9999), r = c.contents().find("body"), P && r.css("overflow-x", "hidden"), s = r.outerHeight(!0))
        } catch (O) {}
      } else(b.autoWidth || b.autoHeight) && (w.addClass("fancybox-tmp"), b.autoWidth || w.width(n), b.autoHeight || w.height(s), b.autoWidth && (n = w.width()), b.autoHeight && (s = w.height()), w.removeClass("fancybox-tmp"));
      if (y = h(n), x = h(s), d = n / s, k = h(f(k) ? h(k, "w") - t : k), T = h(f(T) ? h(T, "w") - t : T), S = h(f(S) ? h(S, "h") - o : S), $ = h(f($) ? h($, "h") - o : $), r = T, l = $, b.fitToView && (T = Math.min(p.w - t, T), $ = Math.min(p.h - o, $)), t = p.w - H, j = p.h - j, b.aspectRatio ? (y > T && (y = T, x = h(y / d)), x > $ && (x = $, y = h(x * d)), y < k && (y = k, x = h(y / d)), x < S && (x = S, y = h(x * d))) : (y = Math.max(k, Math.min(y, T)), b.autoHeight && "iframe" !== b.type && (w.width(y), x = w.height()), x = Math.max(S, Math.min(x, $))), b.fitToView)
        if (w.width(y).height(x), v.width(y + A), p = v.width(), H = v.height(), b.aspectRatio)
          for (;
            (p > t || H > j) && y > k && x > S && !(19 < u++);) x = Math.max(S, Math.min($, x - 10)), y = h(x * d), y < k && (y = k, x = h(y / d)), y > T && (y = T, x = h(y / d)), w.width(y).height(x), v.width(y + A), p = v.width(), H = v.height();
        else y = Math.max(k, Math.min(y, y - (p - t))), x = Math.max(S, Math.min(x, x - (H - j)));
      P && "auto" === C && x < s && y + A + P < t && (y += P), w.width(y).height(x), v.width(y + A), p = v.width(), H = v.height(), v = (p > t || H > j) && y > k && x > S, y = b.aspectRatio ? y < r && x < l && y < n && x < s : (y < r || x < l) && (y < n || x < s), i.extend(b, {
        dim: {
          width: g(p),
          height: g(H)
        },
        origWidth: n,
        origHeight: s,
        canShrink: v,
        canExpand: y,
        wPadding: A,
        hPadding: e,
        wrapSpace: H - m.outerHeight(!0),
        skinSpace: m.height() - x
      }), !c && b.autoHeight && x > S && x < $ && !y && w.height("auto")
    },
    _getPosition: function(e) {
      var t = a.current,
        i = a.getViewport(),
        o = t.margin,
        n = a.wrap.width() + o[1] + o[3],
        s = a.wrap.height() + o[0] + o[2],
        o = {
          position: "absolute",
          top: o[0],
          left: o[3]
        };
      return t.autoCenter && t.fixed && !e && s <= i.h && n <= i.w ? o.position = "fixed" : t.locked || (o.top += i.y, o.left += i.x), o.top = g(Math.max(o.top, o.top + (i.h - s) * t.topRatio)), o.left = g(Math.max(o.left, o.left + (i.w - n) * t.leftRatio)), o
    },
    _afterZoomIn: function() {
      var e = a.current;
      e && (a.isOpen = a.isOpened = !0, a.wrap.css("overflow", "visible").addClass("fancybox-opened"), a.update(), (e.closeClick || e.nextClick && 1 < a.group.length) && a.inner.css("cursor", "pointer").bind("click.fb", function(t) {
        !i(t.target).is("a") && !i(t.target).parent().is("a") && (t.preventDefault(), a[e.closeClick ? "close" : "next"]())
      }), e.closeBtn && i(e.tpl.closeBtn).appendTo(a.skin).bind("click.fb", function(e) {
        e.preventDefault(), a.close()
      }), e.arrows && 1 < a.group.length && ((e.loop || 0 < e.index) && i(e.tpl.prev).appendTo(a.outer).bind("click.fb", a.prev), (e.loop || e.index < a.group.length - 1) && i(e.tpl.next).appendTo(a.outer).bind("click.fb", a.next)), a.trigger("afterShow"), e.loop || e.index !== e.group.length - 1 ? a.opts.autoPlay && !a.player.isActive && (a.opts.autoPlay = !1, a.play()) : a.play(!1))
    },
    _afterZoomOut: function(e) {
      e = e || a.current, i(".fancybox-wrap").trigger("onReset").remove(), i.extend(a, {
        group: {},
        opts: {},
        router: !1,
        current: null,
        isActive: !1,
        isOpened: !1,
        isOpen: !1,
        isClosing: !1,
        wrap: null,
        skin: null,
        outer: null,
        inner: null
      }), a.trigger("afterClose", e)
    }
  }), a.transitions = {
    getOrigPosition: function() {
      var e = a.current,
        t = e.element,
        i = e.orig,
        o = {},
        n = 50,
        s = 50,
        r = e.hPadding,
        l = e.wPadding,
        d = a.getViewport();
      return !i && e.isDom && t.is(":visible") && (i = t.find("img:first"), i.length || (i = t)), p(i) ? (o = i.offset(), i.is("img") && (n = i.outerWidth(), s = i.outerHeight())) : (o.top = d.y + (d.h - s) * e.topRatio, o.left = d.x + (d.w - n) * e.leftRatio), ("fixed" === a.wrap.css("position") || e.locked) && (o.top -= d.y, o.left -= d.x), o = {
        top: g(o.top - r * e.topRatio),
        left: g(o.left - l * e.leftRatio),
        width: g(n + l),
        height: g(s + r)
      }
    },
    step: function(e, t) {
      var i, o, n = t.prop;
      o = a.current;
      var s = o.wrapSpace,
        r = o.skinSpace;
      "width" !== n && "height" !== n || (i = t.end === t.start ? 1 : (e - t.start) / (t.end - t.start), a.isClosing && (i = 1 - i), o = "width" === n ? o.wPadding : o.hPadding, o = e - o, a.skin[n](h("width" === n ? o : o - s * i)), a.inner[n](h("width" === n ? o : o - s * i - r * i)))
    },
    zoomIn: function() {
      var e = a.current,
        t = e.pos,
        o = e.openEffect,
        n = "elastic" === o,
        s = i.extend({
          opacity: 1
        }, t);
      delete s.position, n ? (t = this.getOrigPosition(), e.openOpacity && (t.opacity = .1)) : "fade" === o && (t.opacity = .1), a.wrap.css(t).animate(s, {
        duration: "none" === o ? 0 : e.openSpeed,
        easing: e.openEasing,
        step: n ? this.step : null,
        complete: a._afterZoomIn
      })
    },
    zoomOut: function() {
      var e = a.current,
        t = e.closeEffect,
        i = "elastic" === t,
        o = {
          opacity: .1
        };
      i && (o = this.getOrigPosition(), e.closeOpacity && (o.opacity = .1)), a.wrap.animate(o, {
        duration: "none" === t ? 0 : e.closeSpeed,
        easing: e.closeEasing,
        step: i ? this.step : null,
        complete: a._afterZoomOut
      })
    },
    changeIn: function() {
      var e, t = a.current,
        i = t.nextEffect,
        o = t.pos,
        n = {
          opacity: 1
        },
        s = a.direction;
      o.opacity = .1, "elastic" === i && (e = "down" === s || "up" === s ? "top" : "left", "down" === s || "right" === s ? (o[e] = g(h(o[e]) - 200), n[e] = "+=200px") : (o[e] = g(h(o[e]) + 200), n[e] = "-=200px")), "none" === i ? a._afterZoomIn() : a.wrap.css(o).animate(n, {
        duration: t.nextSpeed,
        easing: t.nextEasing,
        complete: a._afterZoomIn
      })
    },
    changeOut: function() {
      var e = a.previous,
        t = e.prevEffect,
        o = {
          opacity: .1
        },
        n = a.direction;
      "elastic" === t && (o["down" === n || "up" === n ? "top" : "left"] = ("up" === n || "left" === n ? "-" : "+") + "=200px"), e.wrap.animate(o, {
        duration: "none" === t ? 0 : e.prevSpeed,
        easing: e.prevEasing,
        complete: function() {
          i(this).trigger("onReset").remove()
        }
      })
    }
  }, a.helpers.overlay = {
    defaults: {
      closeClick: !0,
      speedOut: 200,
      showEarly: !0,
      css: {},
      locked: !c,
      fixed: !0
    },
    overlay: null,
    fixed: !1,
    el: i("html"),
    create: function(e) {
      e = i.extend({}, this.defaults, e), this.overlay && this.close(), this.overlay = i('<div class="fancybox-overlay"></div>').appendTo(a.coming ? a.coming.parent : e.parent), this.fixed = !1, e.fixed && a.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"), this.fixed = !0)
    },
    open: function(e) {
      var t = this;
      e = i.extend({}, this.defaults, e), this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(e), this.fixed || (s.bind("resize.overlay", i.proxy(this.update, this)), this.update()), e.closeClick && this.overlay.bind("click.overlay", function(e) {
        if (i(e.target).hasClass("fancybox-overlay")) return a.isActive ? a.close() : t.close(), !1
      }), this.overlay.css(e.css).show()
    },
    close: function() {
      var e, t;
      s.unbind("resize.overlay"), this.el.hasClass("fancybox-lock") && (i(".fancybox-margin").removeClass("fancybox-margin"), e = s.scrollTop(), t = s.scrollLeft(), this.el.removeClass("fancybox-lock"), s.scrollTop(e).scrollLeft(t)), i(".fancybox-overlay").remove().hide(), i.extend(this, {
        overlay: null,
        fixed: !1
      })
    },
    update: function() {
      var e, i = "100%";
      this.overlay.width(i).height("100%"), l ? (e = Math.max(t.documentElement.offsetWidth, t.body.offsetWidth), r.width() > e && (i = r.width())) : r.width() > s.width() && (i = r.width()), this.overlay.width(i).height(r.height())
    },
    onReady: function(e, t) {
      var o = this.overlay;
      i(".fancybox-overlay").stop(!0, !0), o || this.create(e), e.locked && this.fixed && t.fixed && (o || (this.margin = r.height() > s.height() && i("html").css("margin-right").replace("px", "")), t.locked = this.overlay.append(t.wrap), t.fixed = !1), !0 === e.showEarly && this.beforeShow.apply(this, arguments)
    },
    beforeShow: function(e, t) {
      var o, n;
      t.locked && (!1 !== this.margin && (i("*").filter(function() {
        return "fixed" === i(this).css("position") && !i(this).hasClass("fancybox-overlay") && !i(this).hasClass("fancybox-wrap")
      }).addClass("fancybox-margin"), this.el.addClass("fancybox-margin")), o = s.scrollTop(), n = s.scrollLeft(), this.el.addClass("fancybox-lock"), s.scrollTop(o).scrollLeft(n)), this.open(e)
    },
    onUpdate: function() {
      this.fixed || this.update()
    },
    afterClose: function(e) {
      this.overlay && !a.coming && this.overlay.fadeOut(e.speedOut, i.proxy(this.close, this))
    }
  }, a.helpers.title = {
    defaults: {
      type: "float",
      position: "bottom"
    },
    beforeShow: function(e) {
      var t = a.current,
        o = t.title,
        n = e.type;
      if (i.isFunction(o) && (o = o.call(t.element, t)), u(o) && "" !== i.trim(o)) {
        switch (t = i('<div class="fancybox-title fancybox-title-' + n + '-wrap">' + o + "</div>"), n) {
          case "inside":
            n = a.skin;
            break;
          case "outside":
            n = a.wrap;
            break;
          case "over":
            n = a.inner;
            break;
          default:
            n = a.skin, t.appendTo("body"), l && t.width(t.width()), t.wrapInner('<span class="child"></span>'), a.current.margin[2] += Math.abs(h(t.css("margin-bottom")))
        }
        t["top" === e.position ? "prependTo" : "appendTo"](n)
      }
    }
  }, i.fn.fancybox = function(e) {
    var t, o = i(this),
      n = this.selector || "",
      s = function(s) {
        var r, l, d = i(this).blur(),
          c = t;
        !s.ctrlKey && !s.altKey && !s.shiftKey && !s.metaKey && !d.is(".fancybox-wrap") && (r = e.groupAttr || "data-fancybox-group", l = d.attr(r), l || (r = "rel", l = d.get(0)[r]), l && "" !== l && "nofollow" !== l && (d = n.length ? i(n) : o, d = d.filter("[" + r + '="' + l + '"]'), c = d.index(this)), e.index = c, !1 !== a.open(d, e) && s.preventDefault())
      };
    return e = e || {}, t = e.index || 0, n && !1 !== e.live ? r.undelegate(n, "click.fb-start").delegate(n + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", s) : o.unbind("click.fb-start").bind("click.fb-start", s), this.filter("[data-fancybox-start=1]").trigger("click"), this
  }, r.ready(function() {
    var t, s;
    if (i.scrollbarWidth === o && (i.scrollbarWidth = function() {
        var e = i('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),
          t = e.children(),
          t = t.innerWidth() - t.height(99).innerWidth();
        return e.remove(), t
      }), i.support.fixedPosition === o) {
      t = i.support, s = i('<div style="position:fixed;top:20px;"></div>').appendTo("body");
      var r = 20 === s[0].offsetTop || 15 === s[0].offsetTop;
      s.remove(), t.fixedPosition = r
    }
    i.extend(a.defaults, {
      scrollbarWidth: i.scrollbarWidth(),
      fixed: i.support.fixedPosition,
      parent: i("body")
    }), t = i(e).width(), n.addClass("fancybox-lock-test"), s = i(e).width(), n.removeClass("fancybox-lock-test"), i("<style type='text/css'>.fancybox-margin{margin-right:" + (s - t) + "px;}</style>").appendTo("head")
  })
}(window, document, jQuery), ! function(e) {
  function t(e) {
    var t = e.length,
      o = i.type(e);
    return "function" !== o && !i.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === o || 0 === t || "number" == typeof t && t > 0 && t - 1 in e))
  }
  if (!e.jQuery) {
    var i = function(e, t) {
      return new i.fn.init(e, t)
    };
    i.isWindow = function(e) {
      return null != e && e == e.window
    }, i.type = function(e) {
      return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[r.call(e)] || "object" : typeof e
    }, i.isArray = Array.isArray || function(e) {
      return "array" === i.type(e)
    }, i.isPlainObject = function(e) {
      var t;
      if (!e || "object" !== i.type(e) || e.nodeType || i.isWindow(e)) return !1;
      try {
        if (e.constructor && !s.call(e, "constructor") && !s.call(e.constructor.prototype, "isPrototypeOf")) return !1
      } catch (o) {
        return !1
      }
      for (t in e);
      return void 0 === t || s.call(e, t)
    }, i.each = function(e, i, o) {
      var n, s = 0,
        r = e.length,
        a = t(e);
      if (o) {
        if (a)
          for (; r > s && (n = i.apply(e[s], o), n !== !1); s++);
        else
          for (s in e)
            if (n = i.apply(e[s], o), n === !1) break
      } else if (a)
        for (; r > s && (n = i.call(e[s], s, e[s]), n !== !1); s++);
      else
        for (s in e)
          if (n = i.call(e[s], s, e[s]), n === !1) break; return e
    }, i.data = function(e, t, n) {
      if (void 0 === n) {
        var s = e[i.expando],
          r = s && o[s];
        if (void 0 === t) return r;
        if (r && t in r) return r[t]
      } else if (void 0 !== t) {
        var s = e[i.expando] || (e[i.expando] = ++i.uuid);
        return o[s] = o[s] || {}, o[s][t] = n, n
      }
    }, i.removeData = function(e, t) {
      var n = e[i.expando],
        s = n && o[n];
      s && i.each(t, function(e, t) {
        delete s[t]
      })
    }, i.extend = function() {
      var e, t, o, n, s, r, a = arguments[0] || {},
        l = 1,
        d = arguments.length,
        c = !1;
      for ("boolean" == typeof a && (c = a, a = arguments[l] || {}, l++), "object" != typeof a && "function" !== i.type(a) && (a = {}), l === d && (a = this, l--); d > l; l++)
        if (null != (s = arguments[l]))
          for (n in s) e = a[n], o = s[n], a !== o && (c && o && (i.isPlainObject(o) || (t = i.isArray(o))) ? (t ? (t = !1, r = e && i.isArray(e) ? e : []) : r = e && i.isPlainObject(e) ? e : {}, a[n] = i.extend(c, r, o)) : void 0 !== o && (a[n] = o));
      return a
    }, i.queue = function(e, o, n) {
      function s(e, i) {
        var o = i || [];
        return null != e && (t(Object(e)) ? ! function(e, t) {
          for (var i = +t.length, o = 0, n = e.length; i > o;) e[n++] = t[o++];
          if (i !== i)
            for (; void 0 !== t[o];) e[n++] = t[o++];
          return e.length = n, e
        }(o, "string" == typeof e ? [e] : e) : [].push.call(o, e)), o
      }
      if (e) {
        o = (o || "fx") + "queue";
        var r = i.data(e, o);
        return n ? (!r || i.isArray(n) ? r = i.data(e, o, s(n)) : r.push(n), r) : r || []
      }
    }, i.dequeue = function(e, t) {
      i.each(e.nodeType ? [e] : e, function(e, o) {
        t = t || "fx";
        var n = i.queue(o, t),
          s = n.shift();
        "inprogress" === s && (s = n.shift()), s && ("fx" === t && n.unshift("inprogress"), s.call(o, function() {
          i.dequeue(o, t)
        }))
      })
    }, i.fn = i.prototype = {
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
        function e() {
          for (var e = this.offsetParent || document; e && "html" === !e.nodeType.toLowerCase && "static" === e.style.position;) e = e.offsetParent;
          return e || document
        }
        var t = this[0],
          e = e.apply(t),
          o = this.offset(),
          n = /^(?:body|html)$/i.test(e.nodeName) ? {
            top: 0,
            left: 0
          } : i(e).offset();
        return o.top -= parseFloat(t.style.marginTop) || 0, o.left -= parseFloat(t.style.marginLeft) || 0, e.style && (n.top += parseFloat(e.style.borderTopWidth) || 0, n.left += parseFloat(e.style.borderLeftWidth) || 0), {
          top: o.top - n.top,
          left: o.left - n.left
        }
      }
    };
    var o = {};
    i.expando = "velocity" + (new Date).getTime(), i.uuid = 0;
    for (var n = {}, s = n.hasOwnProperty, r = n.toString, a = "Boolean Number String Function Array Date RegExp Object Error".split(" "), l = 0; l < a.length; l++) n["[object " + a[l] + "]"] = a[l].toLowerCase();
    i.fn.init.prototype = i.fn, e.Velocity = {
      Utilities: i
    }
  }
}(window),
function(e) {
  "object" == typeof module && "object" == typeof module.exports ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : e()
}(function() {
  return function(e, t, i, o) {
    function n(e) {
      for (var t = -1, i = e ? e.length : 0, o = []; ++t < i;) {
        var n = e[t];
        n && o.push(n)
      }
      return o
    }

    function s(e) {
      return g.isWrapped(e) ? e = [].slice.call(e) : g.isNode(e) && (e = [e]), e
    }

    function r(e) {
      var t = u.data(e, "velocity");
      return null === t ? o : t
    }

    function a(e) {
      return function(t) {
        return Math.round(t * e) * (1 / e)
      }
    }

    function l(e, i, o, n) {
      function s(e, t) {
        return 1 - 3 * t + 3 * e
      }

      function r(e, t) {
        return 3 * t - 6 * e
      }

      function a(e) {
        return 3 * e
      }

      function l(e, t, i) {
        return ((s(t, i) * e + r(t, i)) * e + a(t)) * e
      }

      function d(e, t, i) {
        return 3 * s(t, i) * e * e + 2 * r(t, i) * e + a(t)
      }

      function c(t, i) {
        for (var n = 0; g > n; ++n) {
          var s = d(i, e, o);
          if (0 === s) return i;
          var r = l(i, e, o) - t;
          i -= r / s
        }
        return i
      }

      function p() {
        for (var t = 0; w > t; ++t) S[t] = l(t * b, e, o)
      }

      function u(t, i, n) {
        var s, r, a = 0;
        do r = i + (n - i) / 2, s = l(r, e, o) - t, s > 0 ? n = r : i = r; while (Math.abs(s) > y && ++a < m);
        return r
      }

      function f(t) {
        for (var i = 0, n = 1, s = w - 1; n != s && S[n] <= t; ++n) i += b;
        --n;
        var r = (t - S[n]) / (S[n + 1] - S[n]),
          a = i + r * b,
          l = d(a, e, o);
        return l >= v ? c(t, a) : 0 == l ? a : u(t, i, i + b)
      }

      function h() {
        T = !0, (e != i || o != n) && p()
      }
      var g = 4,
        v = .001,
        y = 1e-7,
        m = 10,
        w = 11,
        b = 1 / (w - 1),
        x = "Float32Array" in t;
      if (4 !== arguments.length) return !1;
      for (var k = 0; 4 > k; ++k)
        if ("number" != typeof arguments[k] || isNaN(arguments[k]) || !isFinite(arguments[k])) return !1;
      e = Math.min(e, 1), o = Math.min(o, 1), e = Math.max(e, 0), o = Math.max(o, 0);
      var S = x ? new Float32Array(w) : new Array(w),
        T = !1,
        $ = function(t) {
          return T || h(), e === i && o === n ? t : 0 === t ? 0 : 1 === t ? 1 : l(f(t), i, n)
        };
      $.getControlPoints = function() {
        return [{
          x: e,
          y: i
        }, {
          x: o,
          y: n
        }]
      };
      var C = "generateBezier(" + [e, i, o, n] + ")";
      return $.toString = function() {
        return C
      }, $
    }

    function d(e, t) {
      var i = e;
      return g.isString(e) ? w.Easings[e] || (i = !1) : i = g.isArray(e) && 1 === e.length ? a.apply(null, e) : g.isArray(e) && 2 === e.length ? b.apply(null, e.concat([t])) : !(!g.isArray(e) || 4 !== e.length) && l.apply(null, e), i === !1 && (i = w.Easings[w.defaults.easing] ? w.defaults.easing : m), i
    }

    function c(e) {
      if (e) {
        var t = (new Date).getTime(),
          i = w.State.calls.length;
        i > 1e4 && (w.State.calls = n(w.State.calls));
        for (var s = 0; i > s; s++)
          if (w.State.calls[s]) {
            var a = w.State.calls[s],
              l = a[0],
              d = a[2],
              f = a[3],
              h = !!f,
              v = null;
            f || (f = w.State.calls[s][3] = t - 16);
            for (var y = Math.min((t - f) / d.duration, 1), m = 0, b = l.length; b > m; m++) {
              var k = l[m],
                T = k.element;
              if (r(T)) {
                var $ = !1;
                if (d.display !== o && null !== d.display && "none" !== d.display) {
                  if ("flex" === d.display) {
                    var C = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];
                    u.each(C, function(e, t) {
                      x.setPropertyValue(T, "display", t)
                    })
                  }
                  x.setPropertyValue(T, "display", d.display)
                }
                d.visibility !== o && "hidden" !== d.visibility && x.setPropertyValue(T, "visibility", d.visibility);
                for (var P in k)
                  if ("element" !== P) {
                    var A, H = k[P],
                      j = g.isString(H.easing) ? w.Easings[H.easing] : H.easing;
                    if (1 === y) A = H.endValue;
                    else {
                      var O = H.endValue - H.startValue;
                      if (A = H.startValue + O * j(y, d, O), !h && A === H.currentValue) continue
                    }
                    if (H.currentValue = A, "tween" === P) v = A;
                    else {
                      if (x.Hooks.registered[P]) {
                        var V = x.Hooks.getRoot(P),
                          E = r(T).rootPropertyValueCache[V];
                        E && (H.rootPropertyValue = E)
                      }
                      var L = x.setPropertyValue(T, P, H.currentValue + (0 === parseFloat(A) ? "" : H.unitType), H.rootPropertyValue, H.scrollData);
                      x.Hooks.registered[P] && (r(T).rootPropertyValueCache[V] = x.Normalizations.registered[V] ? x.Normalizations.registered[V]("extract", null, L[1]) : L[1]), "transform" === L[0] && ($ = !0)
                    }
                  }
                d.mobileHA && r(T).transformCache.translate3d === o && (r(T).transformCache.translate3d = "(0px, 0px, 0px)", $ = !0), $ && x.flushTransformCache(T)
              }
            }
            d.display !== o && "none" !== d.display && (w.State.calls[s][2].display = !1), d.visibility !== o && "hidden" !== d.visibility && (w.State.calls[s][2].visibility = !1), d.progress && d.progress.call(a[1], a[1], y, Math.max(0, f + d.duration - t), f, v), 1 === y && p(s)
          }
      }
      w.State.isTicking && S(c)
    }

    function p(e, t) {
      if (!w.State.calls[e]) return !1;
      for (var i = w.State.calls[e][0], n = w.State.calls[e][1], s = w.State.calls[e][2], a = w.State.calls[e][4], l = !1, d = 0, c = i.length; c > d; d++) {
        var p = i[d].element;
        if (t || s.loop || ("none" === s.display && x.setPropertyValue(p, "display", s.display), "hidden" === s.visibility && x.setPropertyValue(p, "visibility", s.visibility)), s.loop !== !0 && (u.queue(p)[1] === o || !/\.velocityQueueEntryFlag/i.test(u.queue(p)[1])) && r(p)) {
          r(p).isAnimating = !1, r(p).rootPropertyValueCache = {};
          var f = !1;
          u.each(x.Lists.transforms3D, function(e, t) {
            var i = /^scale/.test(t) ? 1 : 0,
              n = r(p).transformCache[t];
            r(p).transformCache[t] !== o && new RegExp("^\\(" + i + "[^.]").test(n) && (f = !0, delete r(p).transformCache[t])
          }), s.mobileHA && (f = !0, delete r(p).transformCache.translate3d), f && x.flushTransformCache(p), x.Values.removeClass(p, "velocity-animating")
        }
        if (!t && s.complete && !s.loop && d === c - 1) try {
          s.complete.call(n, n)
        } catch (h) {
          setTimeout(function() {
            throw h
          }, 1)
        }
        a && s.loop !== !0 && a(n), r(p) && s.loop === !0 && !t && (u.each(r(p).tweensContainer, function(e, t) {
          /^rotate/.test(e) && 360 === parseFloat(t.endValue) && (t.endValue = 0, t.startValue = 360), /^backgroundPosition/.test(e) && 100 === parseFloat(t.endValue) && "%" === t.unitType && (t.endValue = 0, t.startValue = 100)
        }), w(p, "reverse", {
          loop: !0,
          delay: s.delay
        })), s.queue !== !1 && u.dequeue(p, s.queue)
      }
      w.State.calls[e] = !1;
      for (var g = 0, v = w.State.calls.length; v > g; g++)
        if (w.State.calls[g] !== !1) {
          l = !0;
          break
        }
      l === !1 && (w.State.isTicking = !1, delete w.State.calls, w.State.calls = [])
    }
    var u, f = function() {
        if (i.documentMode) return i.documentMode;
        for (var e = 7; e > 4; e--) {
          var t = i.createElement("div");
          if (t.innerHTML = "<!--[if IE " + e + "]><span></span><![endif]-->", t.getElementsByTagName("span").length) return t = null, e
        }
        return o
      }(),
      h = function() {
        var e = 0;
        return t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || function(t) {
          var i, o = (new Date).getTime();
          return i = Math.max(0, 16 - (o - e)), e = o + i, setTimeout(function() {
            t(o + i)
          }, i)
        }
      }(),
      g = {
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
        isNodeList: function(e) {
          return "object" == typeof e && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e)) && e.length !== o && (0 === e.length || "object" == typeof e[0] && e[0].nodeType > 0)
        },
        isWrapped: function(e) {
          return e && (e.jquery || t.Zepto && t.Zepto.zepto.isZ(e))
        },
        isSVG: function(e) {
          return t.SVGElement && e instanceof t.SVGElement
        },
        isEmptyObject: function(e) {
          for (var t in e) return !1;
          return !0
        }
      },
      v = !1;
    if (e.fn && e.fn.jquery ? (u = e, v = !0) : u = t.Velocity.Utilities, 8 >= f && !v) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
    if (7 >= f) return void(jQuery.fn.velocity = jQuery.fn.animate);
    var y = 400,
      m = "swing",
      w = {
        State: {
          isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
          isAndroid: /Android/i.test(navigator.userAgent),
          isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
          isChrome: t.chrome,
          isFirefox: /Firefox/i.test(navigator.userAgent),
          prefixElement: i.createElement("div"),
          prefixMatches: {},
          scrollAnchor: null,
          scrollPropertyLeft: null,
          scrollPropertyTop: null,
          isTicking: !1,
          calls: []
        },
        CSS: {},
        Utilities: u,
        Redirects: {},
        Easings: {},
        Promise: t.Promise,
        defaults: {
          queue: "",
          duration: y,
          easing: m,
          begin: o,
          complete: o,
          progress: o,
          display: o,
          visibility: o,
          loop: !1,
          delay: !1,
          mobileHA: !0,
          _cacheValues: !0
        },
        init: function(e) {
          u.data(e, "velocity", {
            isSVG: g.isSVG(e),
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
          minor: 2,
          patch: 2
        },
        debug: !1
      };
    t.pageYOffset !== o ? (w.State.scrollAnchor = t, w.State.scrollPropertyLeft = "pageXOffset", w.State.scrollPropertyTop = "pageYOffset") : (w.State.scrollAnchor = i.documentElement || i.body.parentNode || i.body, w.State.scrollPropertyLeft = "scrollLeft", w.State.scrollPropertyTop = "scrollTop");
    var b = function() {
      function e(e) {
        return -e.tension * e.x - e.friction * e.v
      }

      function t(t, i, o) {
        var n = {
          x: t.x + o.dx * i,
          v: t.v + o.dv * i,
          tension: t.tension,
          friction: t.friction
        };
        return {
          dx: n.v,
          dv: e(n)
        }
      }

      function i(i, o) {
        var n = {
            dx: i.v,
            dv: e(i)
          },
          s = t(i, .5 * o, n),
          r = t(i, .5 * o, s),
          a = t(i, o, r),
          l = 1 / 6 * (n.dx + 2 * (s.dx + r.dx) + a.dx),
          d = 1 / 6 * (n.dv + 2 * (s.dv + r.dv) + a.dv);
        return i.x = i.x + l * o, i.v = i.v + d * o, i
      }
      return function o(e, t, n) {
        var s, r, a, l = {
            x: -1,
            v: 0,
            tension: null,
            friction: null
          },
          d = [0],
          c = 0,
          p = 1e-4,
          u = .016;
        for (e = parseFloat(e) || 500, t = parseFloat(t) || 20, n = n || null, l.tension = e, l.friction = t, s = null !== n, s ? (c = o(e, t), r = c / n * u) : r = u; a = i(a || l, r), d.push(1 + a.x), c += 16, Math.abs(a.x) > p && Math.abs(a.v) > p;);
        return s ? function(e) {
          return d[e * (d.length - 1) | 0]
        } : c
      }
    }();
    w.Easings = {
      linear: function(e) {
        return e
      },
      swing: function(e) {
        return .5 - Math.cos(e * Math.PI) / 2
      },
      spring: function(e) {
        return 1 - Math.cos(4.5 * e * Math.PI) * Math.exp(6 * -e)
      }
    }, u.each([
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
      w.Easings[t[0]] = l.apply(null, t[1])
    });
    var x = w.CSS = {
      RegEx: {
        isHex: /^#([A-f\d]{3}){1,2}$/i,
        valueUnwrap: /^[A-z]+\((.*)\)$/i,
        wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
        valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
      },
      Lists: {
        colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
        transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
        transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"]
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
          for (var e = 0; e < x.Lists.colors.length; e++) {
            var t = "color" === x.Lists.colors[e] ? "0 0 0 1" : "255 255 255 1";
            x.Hooks.templates[x.Lists.colors[e]] = ["Red Green Blue Alpha", t]
          }
          var i, o, n;
          if (f)
            for (i in x.Hooks.templates) {
              o = x.Hooks.templates[i], n = o[0].split(" ");
              var s = o[1].match(x.RegEx.valueSplit);
              "Color" === n[0] && (n.push(n.shift()), s.push(s.shift()), x.Hooks.templates[i] = [n.join(" "), s.join(" ")])
            }
          for (i in x.Hooks.templates) {
            o = x.Hooks.templates[i], n = o[0].split(" ");
            for (var e in n) {
              var r = i + n[e],
                a = e;
              x.Hooks.registered[r] = [i, a]
            }
          }
        },
        getRoot: function(e) {
          var t = x.Hooks.registered[e];
          return t ? t[0] : e
        },
        cleanRootPropertyValue: function(e, t) {
          return x.RegEx.valueUnwrap.test(t) && (t = t.match(x.RegEx.valueUnwrap)[1]), x.Values.isCSSNullValue(t) && (t = x.Hooks.templates[e][1]), t
        },
        extractValue: function(e, t) {
          var i = x.Hooks.registered[e];
          if (i) {
            var o = i[0],
              n = i[1];
            return t = x.Hooks.cleanRootPropertyValue(o, t), t.toString().match(x.RegEx.valueSplit)[n]
          }
          return t
        },
        injectValue: function(e, t, i) {
          var o = x.Hooks.registered[e];
          if (o) {
            var n, s, r = o[0],
              a = o[1];
            return i = x.Hooks.cleanRootPropertyValue(r, i), n = i.toString().match(x.RegEx.valueSplit), n[a] = t, s = n.join(" ")
          }
          return i
        }
      },
      Normalizations: {
        registered: {
          clip: function(e, t, i) {
            switch (e) {
              case "name":
                return "clip";
              case "extract":
                var o;
                return x.RegEx.wrappedValueAlreadyExtracted.test(i) ? o = i : (o = i.toString().match(x.RegEx.valueUnwrap), o = o ? o[1].replace(/,(\s+)?/g, " ") : i), o;
              case "inject":
                return "rect(" + i + ")"
            }
          },
          blur: function(e, t, i) {
            switch (e) {
              case "name":
                return w.State.isFirefox ? "filter" : "-webkit-filter";
              case "extract":
                var o = parseFloat(i);
                if (!o && 0 !== o) {
                  var n = i.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                  o = n ? n[1] : 0
                }
                return o;
              case "inject":
                return parseFloat(i) ? "blur(" + i + ")" : "none"
            }
          },
          opacity: function(e, t, i) {
            if (8 >= f) switch (e) {
              case "name":
                return "filter";
              case "extract":
                var o = i.toString().match(/alpha\(opacity=(.*)\)/i);
                return i = o ? o[1] / 100 : 1;
              case "inject":
                return t.style.zoom = 1, parseFloat(i) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(i), 10) + ")"
            } else switch (e) {
              case "name":
                return "opacity";
              case "extract":
                return i;
              case "inject":
                return i
            }
          }
        },
        register: function() {
          9 >= f || w.State.isGingerbread || (x.Lists.transformsBase = x.Lists.transformsBase.concat(x.Lists.transforms3D));
          for (var e = 0; e < x.Lists.transformsBase.length; e++) ! function() {
            var t = x.Lists.transformsBase[e];
            x.Normalizations.registered[t] = function(e, i, n) {
              switch (e) {
                case "name":
                  return "transform";
                case "extract":
                  return r(i) === o || r(i).transformCache[t] === o ? /^scale/i.test(t) ? 1 : 0 : r(i).transformCache[t].replace(/[()]/g, "");
                case "inject":
                  var s = !1;
                  switch (t.substr(0, t.length - 1)) {
                    case "translate":
                      s = !/(%|px|em|rem|vw|vh|\d)$/i.test(n);
                      break;
                    case "scal":
                    case "scale":
                      w.State.isAndroid && r(i).transformCache[t] === o && 1 > n && (n = 1), s = !/(\d)$/i.test(n);
                      break;
                    case "skew":
                      s = !/(deg|\d)$/i.test(n);
                      break;
                    case "rotate":
                      s = !/(deg|\d)$/i.test(n)
                  }
                  return s || (r(i).transformCache[t] = "(" + n + ")"), r(i).transformCache[t]
              }
            }
          }();
          for (var e = 0; e < x.Lists.colors.length; e++) ! function() {
            var t = x.Lists.colors[e];
            x.Normalizations.registered[t] = function(e, i, n) {
              switch (e) {
                case "name":
                  return t;
                case "extract":
                  var s;
                  if (x.RegEx.wrappedValueAlreadyExtracted.test(n)) s = n;
                  else {
                    var r, a = {
                      black: "rgb(0, 0, 0)",
                      blue: "rgb(0, 0, 255)",
                      gray: "rgb(128, 128, 128)",
                      green: "rgb(0, 128, 0)",
                      red: "rgb(255, 0, 0)",
                      white: "rgb(255, 255, 255)"
                    };
                    /^[A-z]+$/i.test(n) ? r = a[n] !== o ? a[n] : a.black : x.RegEx.isHex.test(n) ? r = "rgb(" + x.Values.hexToRgb(n).join(" ") + ")" : /^rgba?\(/i.test(n) || (r = a.black), s = (r || n).toString().match(x.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                  }
                  return 8 >= f || 3 !== s.split(" ").length || (s += " 1"), s;
                case "inject":
                  return 8 >= f ? 4 === n.split(" ").length && (n = n.split(/\s+/).slice(0, 3).join(" ")) : 3 === n.split(" ").length && (n += " 1"), (8 >= f ? "rgb" : "rgba") + "(" + n.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")"
              }
            }
          }()
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
          return (f || w.State.isAndroid && !w.State.isChrome) && (t += "|transform"), new RegExp("^(" + t + ")$", "i").test(e)
        },
        prefixCheck: function(e) {
          if (w.State.prefixMatches[e]) return [w.State.prefixMatches[e], !0];
          for (var t = ["", "Webkit", "Moz", "ms", "O"], i = 0, o = t.length; o > i; i++) {
            var n;
            if (n = 0 === i ? e : t[i] + e.replace(/^\w/, function(e) {
                return e.toUpperCase()
              }), g.isString(w.State.prefixElement.style[n])) return w.State.prefixMatches[e] = n, [n, !0]
          }
          return [e, !1]
        }
      },
      Values: {
        hexToRgb: function(e) {
          var t, i = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
            o = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
          return e = e.replace(i, function(e, t, i, o) {
            return t + t + i + i + o + o
          }), t = o.exec(e), t ? [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)] : [0, 0, 0]
        },
        isCSSNullValue: function(e) {
          return 0 == e || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)
        },
        getUnitType: function(e) {
          return /^(rotate|skew)/i.test(e) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e) ? "" : "px"
        },
        getDisplayType: function(e) {
          var t = e && e.tagName.toString().toLowerCase();
          return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t) ? "inline" : /^(li)$/i.test(t) ? "list-item" : /^(tr)$/i.test(t) ? "table-row" : /^(table)$/i.test(t) ? "table" : /^(tbody)$/i.test(t) ? "table-row-group" : "block"
        },
        addClass: function(e, t) {
          e.classList ? e.classList.add(t) : e.className += (e.className.length ? " " : "") + t
        },
        removeClass: function(e, t) {
          e.classList ? e.classList.remove(t) : e.className = e.className.toString().replace(new RegExp("(^|\\s)" + t.split(" ").join("|") + "(\\s|$)", "gi"), " ")
        }
      },
      getPropertyValue: function(e, i, n, s) {
        function a(e, i) {
          function n() {
            d && x.setPropertyValue(e, "display", "none")
          }
          var l = 0;
          if (8 >= f) l = u.css(e, i);
          else {
            var d = !1;
            if (/^(width|height)$/.test(i) && 0 === x.getPropertyValue(e, "display") && (d = !0, x.setPropertyValue(e, "display", x.Values.getDisplayType(e))), !s) {
              if ("height" === i && "border-box" !== x.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                var c = e.offsetHeight - (parseFloat(x.getPropertyValue(e, "borderTopWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "borderBottomWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingTop")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingBottom")) || 0);
                return n(), c
              }
              if ("width" === i && "border-box" !== x.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                var p = e.offsetWidth - (parseFloat(x.getPropertyValue(e, "borderLeftWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "borderRightWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingLeft")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingRight")) || 0);
                return n(), p
              }
            }
            var h;
            h = r(e) === o ? t.getComputedStyle(e, null) : r(e).computedStyle ? r(e).computedStyle : r(e).computedStyle = t.getComputedStyle(e, null), "borderColor" === i && (i = "borderTopColor"), l = 9 === f && "filter" === i ? h.getPropertyValue(i) : h[i], ("" === l || null === l) && (l = e.style[i]), n()
          }
          if ("auto" === l && /^(top|right|bottom|left)$/i.test(i)) {
            var g = a(e, "position");
            ("fixed" === g || "absolute" === g && /top|left/i.test(i)) && (l = u(e).position()[i] + "px")
          }
          return l
        }
        var l;
        if (x.Hooks.registered[i]) {
          var d = i,
            c = x.Hooks.getRoot(d);
          n === o && (n = x.getPropertyValue(e, x.Names.prefixCheck(c)[0])), x.Normalizations.registered[c] && (n = x.Normalizations.registered[c]("extract", e, n)), l = x.Hooks.extractValue(d, n)
        } else if (x.Normalizations.registered[i]) {
          var p, h;
          p = x.Normalizations.registered[i]("name", e), "transform" !== p && (h = a(e, x.Names.prefixCheck(p)[0]), x.Values.isCSSNullValue(h) && x.Hooks.templates[i] && (h = x.Hooks.templates[i][1])), l = x.Normalizations.registered[i]("extract", e, h)
        }
        if (!/^[\d-]/.test(l))
          if (r(e) && r(e).isSVG && x.Names.SVGAttribute(i))
            if (/^(height|width)$/i.test(i)) try {
              l = e.getBBox()[i]
            } catch (g) {
              l = 0
            } else l = e.getAttribute(i);
            else l = a(e, x.Names.prefixCheck(i)[0]);
        return x.Values.isCSSNullValue(l) && (l = 0), w.debug >= 2 && void 0, l
      },
      setPropertyValue: function(e, i, o, n, s) {
        var a = i;
        if ("scroll" === i) s.container ? s.container["scroll" + s.direction] = o : "Left" === s.direction ? t.scrollTo(o, s.alternateValue) : t.scrollTo(s.alternateValue, o);
        else if (x.Normalizations.registered[i] && "transform" === x.Normalizations.registered[i]("name", e)) x.Normalizations.registered[i]("inject", e, o), a = "transform", o = r(e).transformCache[i];
        else {
          if (x.Hooks.registered[i]) {
            var l = i,
              d = x.Hooks.getRoot(i);
            n = n || x.getPropertyValue(e, d), o = x.Hooks.injectValue(l, o, n), i = d
          }
          if (x.Normalizations.registered[i] && (o = x.Normalizations.registered[i]("inject", e, o), i = x.Normalizations.registered[i]("name", e)), a = x.Names.prefixCheck(i)[0], 8 >= f) try {
            e.style[a] = o
          } catch (c) {
            w.debug && void 0
          } else r(e) && r(e).isSVG && x.Names.SVGAttribute(i) ? e.setAttribute(i, o) : e.style[a] = o;
          w.debug >= 2 && void 0
        }
        return [a, o]
      },
      flushTransformCache: function(e) {
        function t(t) {
          return parseFloat(x.getPropertyValue(e, t))
        }
        var i = "";
        if ((f || w.State.isAndroid && !w.State.isChrome) && r(e).isSVG) {
          var o = {
            translate: [t("translateX"), t("translateY")],
            skewX: [t("skewX")],
            skewY: [t("skewY")],
            scale: 1 !== t("scale") ? [t("scale"), t("scale")] : [t("scaleX"), t("scaleY")],
            rotate: [t("rotateZ"), 0, 0]
          };
          u.each(r(e).transformCache, function(e) {
            /^translate/i.test(e) ? e = "translate" : /^scale/i.test(e) ? e = "scale" : /^rotate/i.test(e) && (e = "rotate"), o[e] && (i += e + "(" + o[e].join(" ") + ") ", delete o[e])
          })
        } else {
          var n, s;
          u.each(r(e).transformCache, function(t) {
            return n = r(e).transformCache[t], "transformPerspective" === t ? (s = n, !0) : (9 === f && "rotateZ" === t && (t = "rotate"), void(i += t + n + " "))
          }), s && (i = "perspective" + s + " " + i)
        }
        x.setPropertyValue(e, "transform", i)
      }
    };
    x.Hooks.register(), x.Normalizations.register(), w.hook = function(e, t, i) {
      var n = o;
      return e = s(e), u.each(e, function(e, s) {
        if (r(s) === o && w.init(s), i === o) n === o && (n = w.CSS.getPropertyValue(s, t));
        else {
          var a = w.CSS.setPropertyValue(s, t, i);
          "transform" === a[0] && w.CSS.flushTransformCache(s), n = a
        }
      }), n
    };
    var k = function() {
      function e() {
        return a ? P.promise || null : l
      }

      function n() {
        function e() {
          function e(e, t) {
            var i = o,
              n = o,
              r = o;
            return g.isArray(e) ? (i = e[0], !g.isArray(e[1]) && /^[\d-]/.test(e[1]) || g.isFunction(e[1]) || x.RegEx.isHex.test(e[1]) ? r = e[1] : (g.isString(e[1]) && !x.RegEx.isHex.test(e[1]) || g.isArray(e[1])) && (n = t ? e[1] : d(e[1], a.duration), e[2] !== o && (r = e[2]))) : i = e, t || (n = n || a.easing), g.isFunction(i) && (i = i.call(s, T, S)), g.isFunction(r) && (r = r.call(s, T, S)), [i || 0, n, r]
          }

          function p(e, t) {
            var i, o;
            return o = (t || "0").toString().toLowerCase().replace(/[%A-z]+$/, function(e) {
              return i = e, ""
            }), i || (i = x.Values.getUnitType(e)), [o, i]
          }

          function f() {
            var e = {
                myParent: s.parentNode || i.body,
                position: x.getPropertyValue(s, "position"),
                fontSize: x.getPropertyValue(s, "fontSize")
              },
              o = e.position === L.lastPosition && e.myParent === L.lastParent,
              n = e.fontSize === L.lastFontSize;
            L.lastParent = e.myParent, L.lastPosition = e.position, L.lastFontSize = e.fontSize;
            var a = 100,
              l = {};
            if (n && o) l.emToPx = L.lastEmToPx, l.percentToPxWidth = L.lastPercentToPxWidth, l.percentToPxHeight = L.lastPercentToPxHeight;
            else {
              var d = r(s).isSVG ? i.createElementNS("http://www.w3.org/2000/svg", "rect") : i.createElement("div");
              w.init(d), e.myParent.appendChild(d), u.each(["overflow", "overflowX", "overflowY"], function(e, t) {
                w.CSS.setPropertyValue(d, t, "hidden")
              }), w.CSS.setPropertyValue(d, "position", e.position), w.CSS.setPropertyValue(d, "fontSize", e.fontSize), w.CSS.setPropertyValue(d, "boxSizing", "content-box"), u.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function(e, t) {
                w.CSS.setPropertyValue(d, t, a + "%")
              }), w.CSS.setPropertyValue(d, "paddingLeft", a + "em"), l.percentToPxWidth = L.lastPercentToPxWidth = (parseFloat(x.getPropertyValue(d, "width", null, !0)) || 1) / a, l.percentToPxHeight = L.lastPercentToPxHeight = (parseFloat(x.getPropertyValue(d, "height", null, !0)) || 1) / a, l.emToPx = L.lastEmToPx = (parseFloat(x.getPropertyValue(d, "paddingLeft")) || 1) / a, e.myParent.removeChild(d)
            }
            return null === L.remToPx && (L.remToPx = parseFloat(x.getPropertyValue(i.body, "fontSize")) || 16), null === L.vwToPx && (L.vwToPx = parseFloat(t.innerWidth) / 100, L.vhToPx = parseFloat(t.innerHeight) / 100), l.remToPx = L.remToPx, l.vwToPx = L.vwToPx, l.vhToPx = L.vhToPx, w.debug >= 1 && void 0, l
          }
          if (a.begin && 0 === T) try {
            a.begin.call(h, h)
          } catch (y) {
            setTimeout(function() {
              throw y
            }, 1)
          }
          if ("scroll" === A) {
            var b, k, $, C = /^x$/i.test(a.axis) ? "Left" : "Top",
              H = parseFloat(a.offset) || 0;
            a.container ? g.isWrapped(a.container) || g.isNode(a.container) ? (a.container = a.container[0] || a.container, b = a.container["scroll" + C], $ = b + u(s).position()[C.toLowerCase()] + H) : a.container = null : (b = w.State.scrollAnchor[w.State["scrollProperty" + C]], k = w.State.scrollAnchor[w.State["scrollProperty" + ("Left" === C ? "Top" : "Left")]], $ = u(s).offset()[C.toLowerCase()] + H), l = {
              scroll: {
                rootPropertyValue: !1,
                startValue: b,
                currentValue: b,
                endValue: $,
                unitType: "",
                easing: a.easing,
                scrollData: {
                  container: a.container,
                  direction: C,
                  alternateValue: k
                }
              },
              element: s
            }, w.debug && void 0
          } else if ("reverse" === A) {
            if (!r(s).tweensContainer) return void u.dequeue(s, a.queue);
            "none" === r(s).opts.display && (r(s).opts.display = "auto"), "hidden" === r(s).opts.visibility && (r(s).opts.visibility = "visible"), r(s).opts.loop = !1, r(s).opts.begin = null, r(s).opts.complete = null, m.easing || delete a.easing, m.duration || delete a.duration, a = u.extend({}, r(s).opts, a);
            var j = u.extend(!0, {}, r(s).tweensContainer);
            for (var O in j)
              if ("element" !== O) {
                var V = j[O].startValue;
                j[O].startValue = j[O].currentValue = j[O].endValue, j[O].endValue = V, g.isEmptyObject(m) || (j[O].easing = a.easing), w.debug && void 0
              }
            l = j
          } else if ("start" === A) {
            var j;
            r(s).tweensContainer && r(s).isAnimating === !0 && (j = r(s).tweensContainer), u.each(v, function(t, i) {
              if (RegExp("^" + x.Lists.colors.join("$|^") + "$").test(t)) {
                var n = e(i, !0),
                  s = n[0],
                  r = n[1],
                  a = n[2];
                if (x.RegEx.isHex.test(s)) {
                  for (var l = ["Red", "Green", "Blue"], d = x.Values.hexToRgb(s), c = a ? x.Values.hexToRgb(a) : o, p = 0; p < l.length; p++) {
                    var u = [d[p]];
                    r && u.push(r), c !== o && u.push(c[p]), v[t + l[p]] = u
                  }
                  delete v[t]
                }
              }
            });
            for (var E in v) {
              var z = e(v[E]),
                I = z[0],
                D = z[1],
                W = z[2];
              E = x.Names.camelCase(E);
              var N = x.Hooks.getRoot(E),
                R = !1;
              if (r(s).isSVG || "tween" === N || x.Names.prefixCheck(N)[1] !== !1 || x.Normalizations.registered[N] !== o) {
                (a.display !== o && null !== a.display && "none" !== a.display || a.visibility !== o && "hidden" !== a.visibility) && /opacity|filter/.test(E) && !W && 0 !== I && (W = 0), a._cacheValues && j && j[E] ? (W === o && (W = j[E].endValue + j[E].unitType), R = r(s).rootPropertyValueCache[N]) : x.Hooks.registered[E] ? W === o ? (R = x.getPropertyValue(s, N), W = x.getPropertyValue(s, E, R)) : R = x.Hooks.templates[N][1] : W === o && (W = x.getPropertyValue(s, E));
                var F, q, _, B = !1;
                if (F = p(E, W), W = F[0], _ = F[1], F = p(E, I), I = F[0].replace(/^([+-\/*])=/, function(e, t) {
                    return B = t, ""
                  }), q = F[1], W = parseFloat(W) || 0, I = parseFloat(I) || 0, "%" === q && (/^(fontSize|lineHeight)$/.test(E) ? (I /= 100, q = "em") : /^scale/.test(E) ? (I /= 100, q = "") : /(Red|Green|Blue)$/i.test(E) && (I = I / 100 * 255, q = "")), /[\/*]/.test(B)) q = _;
                else if (_ !== q && 0 !== W)
                  if (0 === I) q = _;
                  else {
                    n = n || f();
                    var U = /margin|padding|left|right|width|text|word|letter/i.test(E) || /X$/.test(E) || "x" === E ? "x" : "y";
                    switch (_) {
                      case "%":
                        W *= "x" === U ? n.percentToPxWidth : n.percentToPxHeight;
                        break;
                      case "px":
                        break;
                      default:
                        W *= n[_ + "ToPx"]
                    }
                    switch (q) {
                      case "%":
                        W *= 1 / ("x" === U ? n.percentToPxWidth : n.percentToPxHeight);
                        break;
                      case "px":
                        break;
                      default:
                        W *= 1 / n[q + "ToPx"]
                    }
                  }
                switch (B) {
                  case "+":
                    I = W + I;
                    break;
                  case "-":
                    I = W - I;
                    break;
                  case "*":
                    I = W * I;
                    break;
                  case "/":
                    I = W / I
                }
                l[E] = {
                  rootPropertyValue: R,
                  startValue: W,
                  currentValue: W,
                  endValue: I,
                  unitType: q,
                  easing: D
                }, w.debug && void 0
              } else w.debug && void 0
            }
            l.element = s
          }
          l.element && (x.Values.addClass(s, "velocity-animating"), M.push(l), "" === a.queue && (r(s).tweensContainer = l, r(s).opts = a), r(s).isAnimating = !0, T === S - 1 ? (w.State.calls.push([M, h, a, null, P.resolver]), w.State.isTicking === !1 && (w.State.isTicking = !0, c())) : T++)
        }
        var n, s = this,
          a = u.extend({}, w.defaults, m),
          l = {};
        switch (r(s) === o && w.init(s), parseFloat(a.delay) && a.queue !== !1 && u.queue(s, a.queue, function(e) {
          w.velocityQueueEntryFlag = !0, r(s).delayTimer = {
            setTimeout: setTimeout(e, parseFloat(a.delay)),
            next: e
          }
        }), a.duration.toString().toLowerCase()) {
          case "fast":
            a.duration = 200;
            break;
          case "normal":
            a.duration = y;
            break;
          case "slow":
            a.duration = 600;
            break;
          default:
            a.duration = parseFloat(a.duration) || 1
        }
        w.mock !== !1 && (w.mock === !0 ? a.duration = a.delay = 1 : (a.duration *= parseFloat(w.mock) || 1, a.delay *= parseFloat(w.mock) || 1)), a.easing = d(a.easing, a.duration), a.begin && !g.isFunction(a.begin) && (a.begin = null), a.progress && !g.isFunction(a.progress) && (a.progress = null), a.complete && !g.isFunction(a.complete) && (a.complete = null), a.display !== o && null !== a.display && (a.display = a.display.toString().toLowerCase(), "auto" === a.display && (a.display = w.CSS.Values.getDisplayType(s))), a.visibility !== o && null !== a.visibility && (a.visibility = a.visibility.toString().toLowerCase()), a.mobileHA = a.mobileHA && w.State.isMobile && !w.State.isGingerbread, a.queue === !1 ? a.delay ? setTimeout(e, a.delay) : e() : u.queue(s, a.queue, function(t, i) {
          return i === !0 ? (P.promise && P.resolver(h), !0) : (w.velocityQueueEntryFlag = !0, void e(t))
        }), "" !== a.queue && "fx" !== a.queue || "inprogress" === u.queue(s)[0] || u.dequeue(s)
      }
      var a, l, f, h, v, m, b = arguments[0] && (arguments[0].p || u.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || g.isString(arguments[0].properties));
      if (g.isWrapped(this) ? (a = !1, f = 0, h = this, l = this) : (a = !0, f = 1, h = b ? arguments[0].elements || arguments[0].e : arguments[0]), h = s(h)) {
        b ? (v = arguments[0].properties || arguments[0].p, m = arguments[0].options || arguments[0].o) : (v = arguments[f], m = arguments[f + 1]);
        var S = h.length,
          T = 0;
        if (!/^(stop|finish|finishAll)$/i.test(v) && !u.isPlainObject(m)) {
          var $ = f + 1;
          m = {};
          for (var C = $; C < arguments.length; C++) g.isArray(arguments[C]) || !/^(fast|normal|slow)$/i.test(arguments[C]) && !/^\d/.test(arguments[C]) ? g.isString(arguments[C]) || g.isArray(arguments[C]) ? m.easing = arguments[C] : g.isFunction(arguments[C]) && (m.complete = arguments[C]) : m.duration = arguments[C]
        }
        var P = {
          promise: null,
          resolver: null,
          rejecter: null
        };
        a && w.Promise && (P.promise = new w.Promise(function(e, t) {
          P.resolver = e, P.rejecter = t
        }));
        var A;
        switch (v) {
          case "scroll":
            A = "scroll";
            break;
          case "reverse":
            A = "reverse";
            break;
          case "finish":
          case "finishAll":
          case "stop":
            u.each(h, function(e, t) {
              r(t) && r(t).delayTimer && (clearTimeout(r(t).delayTimer.setTimeout), r(t).delayTimer.next && r(t).delayTimer.next(), delete r(t).delayTimer), "finishAll" !== v || m !== !0 && !g.isString(m) || (u.each(u.queue(t, g.isString(m) ? m : ""), function(e, t) {
                g.isFunction(t) && t()
              }), u.queue(t, g.isString(m) ? m : "", []))
            });
            var H = [];
            return u.each(w.State.calls, function(e, t) {
              t && u.each(t[1], function(i, n) {
                var s = m === o ? "" : m;
                return s !== !0 && t[2].queue !== s && (m !== o || t[2].queue !== !1) || void u.each(h, function(i, o) {
                  o === n && ((m === !0 || g.isString(m)) && (u.each(u.queue(o, g.isString(m) ? m : ""), function(e, t) {
                    g.isFunction(t) && t(null, !0)
                  }), u.queue(o, g.isString(m) ? m : "", [])), "stop" === v ? (r(o) && r(o).tweensContainer && s !== !1 && u.each(r(o).tweensContainer, function(e, t) {
                    t.endValue = t.currentValue
                  }), H.push(e)) : ("finish" === v || "finishAll" === v) && (t[2].duration = 1))
                })
              })
            }), "stop" === v && (u.each(H, function(e, t) {
              p(t, !0)
            }), P.promise && P.resolver(h)), e();
          default:
            if (!u.isPlainObject(v) || g.isEmptyObject(v)) {
              if (g.isString(v) && w.Redirects[v]) {
                var j = u.extend({}, m),
                  O = j.duration,
                  V = j.delay || 0;
                return j.backwards === !0 && (h = u.extend(!0, [], h).reverse()), u.each(h, function(e, t) {
                  parseFloat(j.stagger) ? j.delay = V + parseFloat(j.stagger) * e : g.isFunction(j.stagger) && (j.delay = V + j.stagger.call(t, e, S)), j.drag && (j.duration = parseFloat(O) || (/^(callout|transition)/.test(v) ? 1e3 : y), j.duration = Math.max(j.duration * (j.backwards ? 1 - e / S : (e + 1) / S), .75 * j.duration, 200)), w.Redirects[v].call(t, t, j || {}, e, S, h, P.promise ? P : o)
                }), e()
              }
              var E = "Velocity: First argument (" + v + ") was not a property map, a known action, or a registered redirect. Aborting.";
              return P.promise ? P.rejecter(new Error(E)) : void 0, e()
            }
            A = "start"
        }
        var L = {
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
          M = [];
        u.each(h, function(e, t) {
          g.isNode(t) && n.call(t)
        });
        var z, j = u.extend({}, w.defaults, m);
        if (j.loop = parseInt(j.loop), z = 2 * j.loop - 1, j.loop)
          for (var I = 0; z > I; I++) {
            var D = {
              delay: j.delay,
              progress: j.progress
            };
            I === z - 1 && (D.display = j.display, D.visibility = j.visibility, D.complete = j.complete), k(h, "reverse", D)
          }
        return e()
      }
    };
    w = u.extend(k, w), w.animate = k;
    var S = t.requestAnimationFrame || h;
    return w.State.isMobile || i.hidden === o || i.addEventListener("visibilitychange", function() {
      i.hidden ? (S = function(e) {
        return setTimeout(function() {
          e(!0)
        }, 16)
      }, c()) : S = t.requestAnimationFrame || h
    }), e.Velocity = w, e !== t && (e.fn.velocity = k, e.fn.velocity.defaults = w.defaults), u.each(["Down", "Up"], function(e, t) {
      w.Redirects["slide" + t] = function(e, i, n, s, r, a) {
        var l = u.extend({}, i),
          d = l.begin,
          c = l.complete,
          p = {
            height: "",
            marginTop: "",
            marginBottom: "",
            paddingTop: "",
            paddingBottom: ""
          },
          f = {};
        l.display === o && (l.display = "Down" === t ? "inline" === w.CSS.Values.getDisplayType(e) ? "inline-block" : "block" : "none"), l.begin = function() {
          d && d.call(r, r);
          for (var i in p) {
            f[i] = e.style[i];
            var o = w.CSS.getPropertyValue(e, i);
            p[i] = "Down" === t ? [o, 0] : [0, o]
          }
          f.overflow = e.style.overflow, e.style.overflow = "hidden"
        }, l.complete = function() {
          for (var t in f) e.style[t] = f[t];
          c && c.call(r, r), a && a.resolver(r)
        }, w(e, p, l)
      }
    }), u.each(["In", "Out"], function(e, t) {
      w.Redirects["fade" + t] = function(e, i, n, s, r, a) {
        var l = u.extend({}, i),
          d = {
            opacity: "In" === t ? 1 : 0
          },
          c = l.complete;
        l.complete = n !== s - 1 ? l.begin = null : function() {
          c && c.call(r, r), a && a.resolver(r)
        }, l.display === o && (l.display = "In" === t ? "auto" : "none"), w(this, d, l)
      }
    }), w
  }(window.jQuery || window.Zepto || window, window, document)
}), ! function(e) {
  "use strict";
  "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(e) {
  "use strict";
  var t = window.Slick || {};
  t = function() {
    function t(t, o) {
      var n, s = this;
      s.defaults = {
        accessibility: !0,
        adaptiveHeight: !1,
        appendArrows: e(t),
        appendDots: e(t),
        arrows: !0,
        asNavFor: null,
        prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
        nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
        autoplay: !1,
        autoplaySpeed: 3e3,
        centerMode: !1,
        centerPadding: "50px",
        cssEase: "ease",
        customPaging: function(e, t) {
          return '<button type="button" data-role="none" role="button" aria-required="false" tabindex="0">' + (t + 1) + "</button>"
        },
        dots: !1,
        dotsClass: "slick-dots",
        draggable: !0,
        easing: "linear",
        edgeFriction: .35,
        fade: !1,
        focusOnSelect: !1,
        infinite: !0,
        initialSlide: 0,
        lazyLoad: "ondemand",
        mobileFirst: !1,
        pauseOnHover: !0,
        pauseOnDotsHover: !1,
        respondTo: "window",
        responsive: null,
        rows: 1,
        rtl: !1,
        slide: "",
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: !0,
        swipeToSlide: !1,
        touchMove: !0,
        touchThreshold: 5,
        useCSS: !0,
        variableWidth: !1,
        vertical: !1,
        verticalSwiping: !1,
        waitForAnimate: !0,
        zIndex: 1e3
      }, s.initials = {
        animating: !1,
        dragging: !1,
        autoPlayTimer: null,
        currentDirection: 0,
        currentLeft: null,
        currentSlide: 0,
        direction: 1,
        $dots: null,
        listWidth: null,
        listHeight: null,
        loadIndex: 0,
        $nextArrow: null,
        $prevArrow: null,
        slideCount: null,
        slideWidth: null,
        $slideTrack: null,
        $slides: null,
        sliding: !1,
        slideOffset: 0,
        swipeLeft: null,
        $list: null,
        touchObject: {},
        transformsEnabled: !1,
        unslicked: !1
      }, e.extend(s, s.initials), s.activeBreakpoint = null, s.animType = null, s.animProp = null, s.breakpoints = [], s.breakpointSettings = [], s.cssTransitions = !1, s.hidden = "hidden", s.paused = !1, s.positionProp = null, s.respondTo = null, s.rowCount = 1, s.shouldClick = !0, s.$slider = e(t), s.$slidesCache = null, s.transformType = null, s.transitionType = null, s.visibilityChange = "visibilitychange", s.windowWidth = 0, s.windowTimer = null, n = e(t).data("slick") || {}, s.options = e.extend({}, s.defaults, n, o), s.currentSlide = s.options.initialSlide, s.originalSettings = s.options, "undefined" != typeof document.mozHidden ? (s.hidden = "mozHidden", s.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (s.hidden = "webkitHidden", s.visibilityChange = "webkitvisibilitychange"), s.autoPlay = e.proxy(s.autoPlay, s), s.autoPlayClear = e.proxy(s.autoPlayClear, s), s.changeSlide = e.proxy(s.changeSlide, s), s.clickHandler = e.proxy(s.clickHandler, s), s.selectHandler = e.proxy(s.selectHandler, s), s.setPosition = e.proxy(s.setPosition, s), s.swipeHandler = e.proxy(s.swipeHandler, s), s.dragHandler = e.proxy(s.dragHandler, s), s.keyHandler = e.proxy(s.keyHandler, s), s.autoPlayIterator = e.proxy(s.autoPlayIterator, s), s.instanceUid = i++, s.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, s.registerBreakpoints(), s.init(!0), s.checkResponsive(!0)
    }
    var i = 0;
    return t
  }(), t.prototype.addSlide = t.prototype.slickAdd = function(t, i, o) {
    var n = this;
    if ("boolean" == typeof i) o = i, i = null;
    else if (0 > i || i >= n.slideCount) return !1;
    n.unload(), "number" == typeof i ? 0 === i && 0 === n.$slides.length ? e(t).appendTo(n.$slideTrack) : o ? e(t).insertBefore(n.$slides.eq(i)) : e(t).insertAfter(n.$slides.eq(i)) : o === !0 ? e(t).prependTo(n.$slideTrack) : e(t).appendTo(n.$slideTrack), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slides.each(function(t, i) {
      e(i).attr("data-slick-index", t)
    }), n.$slidesCache = n.$slides, n.reinit()
  }, t.prototype.animateHeight = function() {
    var e = this;
    if (1 === e.options.slidesToShow && e.options.adaptiveHeight === !0 && e.options.vertical === !1) {
      var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
      e.$list.animate({
        height: t
      }, e.options.speed)
    }
  }, t.prototype.animateSlide = function(t, i) {
    var o = {},
      n = this;
    n.animateHeight(), n.options.rtl === !0 && n.options.vertical === !1 && (t = -t), n.transformsEnabled === !1 ? n.options.vertical === !1 ? n.$slideTrack.animate({
      left: t
    }, n.options.speed, n.options.easing, i) : n.$slideTrack.animate({
      top: t
    }, n.options.speed, n.options.easing, i) : n.cssTransitions === !1 ? (n.options.rtl === !0 && (n.currentLeft = -n.currentLeft), e({
      animStart: n.currentLeft
    }).animate({
      animStart: t
    }, {
      duration: n.options.speed,
      easing: n.options.easing,
      step: function(e) {
        e = Math.ceil(e), n.options.vertical === !1 ? (o[n.animType] = "translate(" + e + "px, 0px)", n.$slideTrack.css(o)) : (o[n.animType] = "translate(0px," + e + "px)", n.$slideTrack.css(o))
      },
      complete: function() {
        i && i.call()
      }
    })) : (n.applyTransition(), t = Math.ceil(t), o[n.animType] = n.options.vertical === !1 ? "translate3d(" + t + "px, 0px, 0px)" : "translate3d(0px," + t + "px, 0px)", n.$slideTrack.css(o), i && setTimeout(function() {
      n.disableTransition(), i.call()
    }, n.options.speed))
  }, t.prototype.asNavFor = function(t) {
    var i = this,
      o = i.options.asNavFor;
    o && null !== o && (o = e(o).not(i.$slider)), null !== o && "object" == typeof o && o.each(function() {
      var i = e(this).slick("getSlick");
      i.unslicked || i.slideHandler(t, !0);
    })
  }, t.prototype.applyTransition = function(e) {
    var t = this,
      i = {};
    i[t.transitionType] = t.options.fade === !1 ? t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : "opacity " + t.options.speed + "ms " + t.options.cssEase, t.options.fade === !1 ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i)
  }, t.prototype.autoPlay = function() {
    var e = this;
    e.autoPlayTimer && clearInterval(e.autoPlayTimer), e.slideCount > e.options.slidesToShow && e.paused !== !0 && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
  }, t.prototype.autoPlayClear = function() {
    var e = this;
    e.autoPlayTimer && clearInterval(e.autoPlayTimer)
  }, t.prototype.autoPlayIterator = function() {
    var e = this;
    e.options.infinite === !1 ? 1 === e.direction ? (e.currentSlide + 1 === e.slideCount - 1 && (e.direction = 0), e.slideHandler(e.currentSlide + e.options.slidesToScroll)) : (0 === e.currentSlide - 1 && (e.direction = 1), e.slideHandler(e.currentSlide - e.options.slidesToScroll)) : e.slideHandler(e.currentSlide + e.options.slidesToScroll)
  }, t.prototype.buildArrows = function() {
    var t = this;
    t.options.arrows === !0 && (t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow"), t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow"), t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), t.options.infinite !== !0 && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
      "aria-disabled": "true",
      tabindex: "-1"
    }))
  }, t.prototype.buildDots = function() {
    var t, i, o = this;
    if (o.options.dots === !0 && o.slideCount > o.options.slidesToShow) {
      for (i = '<ul class="' + o.options.dotsClass + '">', t = 0; t <= o.getDotCount(); t += 1) i += "<li>" + o.options.customPaging.call(this, o, t) + "</li>";
      i += "</ul>", o.$dots = e(i).appendTo(o.options.appendDots), o.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
    }
  }, t.prototype.buildOut = function() {
    var t = this;
    t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), t.slideCount = t.$slides.length, t.$slides.each(function(t, i) {
      e(i).attr("data-slick-index", t).data("originalStyling", e(i).attr("style") || "")
    }), t.$slidesCache = t.$slides, t.$slider.addClass("slick-slider"), t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(), t.$list = t.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), t.$slideTrack.css("opacity", 0), (t.options.centerMode === !0 || t.options.swipeToSlide === !0) && (t.options.slidesToScroll = 1), e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"), t.setupInfinite(), t.buildArrows(), t.buildDots(), t.updateDots(), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), t.options.draggable === !0 && t.$list.addClass("draggable")
  }, t.prototype.buildRows = function() {
    var e, t, i, o, n, s, r, a = this;
    if (o = document.createDocumentFragment(), s = a.$slider.children(), a.options.rows > 1) {
      for (r = a.options.slidesPerRow * a.options.rows, n = Math.ceil(s.length / r), e = 0; n > e; e++) {
        var l = document.createElement("div");
        for (t = 0; t < a.options.rows; t++) {
          var d = document.createElement("div");
          for (i = 0; i < a.options.slidesPerRow; i++) {
            var c = e * r + (t * a.options.slidesPerRow + i);
            s.get(c) && d.appendChild(s.get(c))
          }
          l.appendChild(d)
        }
        o.appendChild(l)
      }
      a.$slider.html(o), a.$slider.children().children().children().css({
        width: 100 / a.options.slidesPerRow + "%",
        display: "inline-block"
      })
    }
  }, t.prototype.checkResponsive = function(t, i) {
    var o, n, s, r = this,
      a = !1,
      l = r.$slider.width(),
      d = window.innerWidth || e(window).width();
    if ("window" === r.respondTo ? s = d : "slider" === r.respondTo ? s = l : "min" === r.respondTo && (s = Math.min(d, l)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
      n = null;
      for (o in r.breakpoints) r.breakpoints.hasOwnProperty(o) && (r.originalSettings.mobileFirst === !1 ? s < r.breakpoints[o] && (n = r.breakpoints[o]) : s > r.breakpoints[o] && (n = r.breakpoints[o]));
      null !== n ? null !== r.activeBreakpoint ? (n !== r.activeBreakpoint || i) && (r.activeBreakpoint = n, "unslick" === r.breakpointSettings[n] ? r.unslick(n) : (r.options = e.extend({}, r.originalSettings, r.breakpointSettings[n]), t === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(t)), a = n) : (r.activeBreakpoint = n, "unslick" === r.breakpointSettings[n] ? r.unslick(n) : (r.options = e.extend({}, r.originalSettings, r.breakpointSettings[n]), t === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(t)), a = n) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, t === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(t), a = n), t || a === !1 || r.$slider.trigger("breakpoint", [r, a])
    }
  }, t.prototype.changeSlide = function(t, i) {
    var o, n, s, r = this,
      a = e(t.target);
    switch (a.is("a") && t.preventDefault(), a.is("li") || (a = a.closest("li")), s = 0 !== r.slideCount % r.options.slidesToScroll, o = s ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, t.data.message) {
      case "previous":
        n = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - n, !1, i);
        break;
      case "next":
        n = 0 === o ? r.options.slidesToScroll : o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + n, !1, i);
        break;
      case "index":
        var l = 0 === t.data.index ? 0 : t.data.index || a.index() * r.options.slidesToScroll;
        r.slideHandler(r.checkNavigable(l), !1, i), a.children().trigger("focus");
        break;
      default:
        return
    }
  }, t.prototype.checkNavigable = function(e) {
    var t, i, o = this;
    if (t = o.getNavigableIndexes(), i = 0, e > t[t.length - 1]) e = t[t.length - 1];
    else
      for (var n in t) {
        if (e < t[n]) {
          e = i;
          break
        }
        i = t[n]
      }
    return e
  }, t.prototype.cleanUpEvents = function() {
    var t = this;
    t.options.dots && null !== t.$dots && (e("li", t.$dots).off("click.slick", t.changeSlide), t.options.pauseOnDotsHover === !0 && t.options.autoplay === !0 && e("li", t.$dots).off("mouseenter.slick", e.proxy(t.setPaused, t, !0)).off("mouseleave.slick", e.proxy(t.setPaused, t, !1))), t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide), t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide)), t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler), t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler), t.$list.off("touchend.slick mouseup.slick", t.swipeHandler), t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler), t.$list.off("click.slick", t.clickHandler), e(document).off(t.visibilityChange, t.visibility), t.$list.off("mouseenter.slick", e.proxy(t.setPaused, t, !0)), t.$list.off("mouseleave.slick", e.proxy(t.setPaused, t, !1)), t.options.accessibility === !0 && t.$list.off("keydown.slick", t.keyHandler), t.options.focusOnSelect === !0 && e(t.$slideTrack).children().off("click.slick", t.selectHandler), e(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange), e(window).off("resize.slick.slick-" + t.instanceUid, t.resize), e("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault), e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition), e(document).off("ready.slick.slick-" + t.instanceUid, t.setPosition)
  }, t.prototype.cleanUpRows = function() {
    var e, t = this;
    t.options.rows > 1 && (e = t.$slides.children().children(), e.removeAttr("style"), t.$slider.html(e))
  }, t.prototype.clickHandler = function(e) {
    var t = this;
    t.shouldClick === !1 && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
  }, t.prototype.destroy = function(t) {
    var i = this;
    i.autoPlayClear(), i.touchObject = {}, i.cleanUpEvents(), e(".slick-cloned", i.$slider).detach(), i.$dots && i.$dots.remove(), i.$prevArrow && i.$prevArrow.length && (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()), i.$nextArrow && i.$nextArrow.length && (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()), i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
      e(this).attr("style", e(this).data("originalStyling"))
    }), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.detach(), i.$list.detach(), i.$slider.append(i.$slides)), i.cleanUpRows(), i.$slider.removeClass("slick-slider"), i.$slider.removeClass("slick-initialized"), i.unslicked = !0, t || i.$slider.trigger("destroy", [i])
  }, t.prototype.disableTransition = function(e) {
    var t = this,
      i = {};
    i[t.transitionType] = "", t.options.fade === !1 ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i)
  }, t.prototype.fadeSlide = function(e, t) {
    var i = this;
    i.cssTransitions === !1 ? (i.$slides.eq(e).css({
      zIndex: i.options.zIndex
    }), i.$slides.eq(e).animate({
      opacity: 1
    }, i.options.speed, i.options.easing, t)) : (i.applyTransition(e), i.$slides.eq(e).css({
      opacity: 1,
      zIndex: i.options.zIndex
    }), t && setTimeout(function() {
      i.disableTransition(e), t.call()
    }, i.options.speed))
  }, t.prototype.fadeSlideOut = function(e) {
    var t = this;
    t.cssTransitions === !1 ? t.$slides.eq(e).animate({
      opacity: 0,
      zIndex: t.options.zIndex - 2
    }, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({
      opacity: 0,
      zIndex: t.options.zIndex - 2
    }))
  }, t.prototype.filterSlides = t.prototype.slickFilter = function(e) {
    var t = this;
    null !== e && (t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit())
  }, t.prototype.getCurrent = t.prototype.slickCurrentSlide = function() {
    var e = this;
    return e.currentSlide
  }, t.prototype.getDotCount = function() {
    var e = this,
      t = 0,
      i = 0,
      o = 0;
    if (e.options.infinite === !0)
      for (; t < e.slideCount;) ++o, t = i + e.options.slidesToShow, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
    else if (e.options.centerMode === !0) o = e.slideCount;
    else
      for (; t < e.slideCount;) ++o, t = i + e.options.slidesToShow, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
    return o - 1
  }, t.prototype.getLeft = function(e) {
    var t, i, o, n = this,
      s = 0;
    return n.slideOffset = 0, i = n.$slides.first().outerHeight(!0), n.options.infinite === !0 ? (n.slideCount > n.options.slidesToShow && (n.slideOffset = -1 * n.slideWidth * n.options.slidesToShow, s = -1 * i * n.options.slidesToShow), 0 !== n.slideCount % n.options.slidesToScroll && e + n.options.slidesToScroll > n.slideCount && n.slideCount > n.options.slidesToShow && (e > n.slideCount ? (n.slideOffset = -1 * (n.options.slidesToShow - (e - n.slideCount)) * n.slideWidth, s = -1 * (n.options.slidesToShow - (e - n.slideCount)) * i) : (n.slideOffset = -1 * n.slideCount % n.options.slidesToScroll * n.slideWidth, s = -1 * n.slideCount % n.options.slidesToScroll * i))) : e + n.options.slidesToShow > n.slideCount && (n.slideOffset = (e + n.options.slidesToShow - n.slideCount) * n.slideWidth, s = (e + n.options.slidesToShow - n.slideCount) * i), n.slideCount <= n.options.slidesToShow && (n.slideOffset = 0, s = 0), n.options.centerMode === !0 && n.options.infinite === !0 ? n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth : n.options.centerMode === !0 && (n.slideOffset = 0, n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2)), t = n.options.vertical === !1 ? -1 * e * n.slideWidth + n.slideOffset : -1 * e * i + s, n.options.variableWidth === !0 && (o = n.slideCount <= n.options.slidesToShow || n.options.infinite === !1 ? n.$slideTrack.children(".slick-slide").eq(e) : n.$slideTrack.children(".slick-slide").eq(e + n.options.slidesToShow), t = o[0] ? -1 * o[0].offsetLeft : 0, n.options.centerMode === !0 && (o = n.options.infinite === !1 ? n.$slideTrack.children(".slick-slide").eq(e) : n.$slideTrack.children(".slick-slide").eq(e + n.options.slidesToShow + 1), t = o[0] ? -1 * o[0].offsetLeft : 0, t += (n.$list.width() - o.outerWidth()) / 2)), t
  }, t.prototype.getOption = t.prototype.slickGetOption = function(e) {
    var t = this;
    return t.options[e]
  }, t.prototype.getNavigableIndexes = function() {
    var e, t = this,
      i = 0,
      o = 0,
      n = [];
    for (t.options.infinite === !1 ? e = t.slideCount : (i = -1 * t.options.slidesToScroll, o = -1 * t.options.slidesToScroll, e = 2 * t.slideCount); e > i;) n.push(i), i = o + t.options.slidesToScroll, o += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
    return n
  }, t.prototype.getSlick = function() {
    return this
  }, t.prototype.getSlideCount = function() {
    var t, i, o, n = this;
    return o = n.options.centerMode === !0 ? n.slideWidth * Math.floor(n.options.slidesToShow / 2) : 0, n.options.swipeToSlide === !0 ? (n.$slideTrack.find(".slick-slide").each(function(t, s) {
      return s.offsetLeft - o + e(s).outerWidth() / 2 > -1 * n.swipeLeft ? (i = s, !1) : void 0
    }), t = Math.abs(e(i).attr("data-slick-index") - n.currentSlide) || 1) : n.options.slidesToScroll
  }, t.prototype.goTo = t.prototype.slickGoTo = function(e, t) {
    var i = this;
    i.changeSlide({
      data: {
        message: "index",
        index: parseInt(e)
      }
    }, t)
  }, t.prototype.init = function(t) {
    var i = this;
    e(i.$slider).hasClass("slick-initialized") || (e(i.$slider).addClass("slick-initialized"), i.buildRows(), i.buildOut(), i.setProps(), i.startLoad(), i.loadSlider(), i.initializeEvents(), i.updateArrows(), i.updateDots()), t && i.$slider.trigger("init", [i]), i.options.accessibility === !0 && i.initADA()
  }, t.prototype.initArrowEvents = function() {
    var e = this;
    e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.on("click.slick", {
      message: "previous"
    }, e.changeSlide), e.$nextArrow.on("click.slick", {
      message: "next"
    }, e.changeSlide))
  }, t.prototype.initDotEvents = function() {
    var t = this;
    t.options.dots === !0 && t.slideCount > t.options.slidesToShow && e("li", t.$dots).on("click.slick", {
      message: "index"
    }, t.changeSlide), t.options.dots === !0 && t.options.pauseOnDotsHover === !0 && t.options.autoplay === !0 && e("li", t.$dots).on("mouseenter.slick", e.proxy(t.setPaused, t, !0)).on("mouseleave.slick", e.proxy(t.setPaused, t, !1))
  }, t.prototype.initializeEvents = function() {
    var t = this;
    t.initArrowEvents(), t.initDotEvents(), t.$list.on("touchstart.slick mousedown.slick", {
      action: "start"
    }, t.swipeHandler), t.$list.on("touchmove.slick mousemove.slick", {
      action: "move"
    }, t.swipeHandler), t.$list.on("touchend.slick mouseup.slick", {
      action: "end"
    }, t.swipeHandler), t.$list.on("touchcancel.slick mouseleave.slick", {
      action: "end"
    }, t.swipeHandler), t.$list.on("click.slick", t.clickHandler), e(document).on(t.visibilityChange, e.proxy(t.visibility, t)), t.$list.on("mouseenter.slick", e.proxy(t.setPaused, t, !0)), t.$list.on("mouseleave.slick", e.proxy(t.setPaused, t, !1)), t.options.accessibility === !0 && t.$list.on("keydown.slick", t.keyHandler), t.options.focusOnSelect === !0 && e(t.$slideTrack).children().on("click.slick", t.selectHandler), e(window).on("orientationchange.slick.slick-" + t.instanceUid, e.proxy(t.orientationChange, t)), e(window).on("resize.slick.slick-" + t.instanceUid, e.proxy(t.resize, t)), e("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault), e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition), e(document).on("ready.slick.slick-" + t.instanceUid, t.setPosition)
  }, t.prototype.initUI = function() {
    var e = this;
    e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), e.options.dots === !0 && e.slideCount > e.options.slidesToShow && e.$dots.show(), e.options.autoplay === !0 && e.autoPlay()
  }, t.prototype.keyHandler = function(e) {
    var t = this;
    e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && t.options.accessibility === !0 ? t.changeSlide({
      data: {
        message: "previous"
      }
    }) : 39 === e.keyCode && t.options.accessibility === !0 && t.changeSlide({
      data: {
        message: "next"
      }
    }))
  }, t.prototype.lazyLoad = function() {
    function t(t) {
      e("img[data-lazy]", t).each(function() {
        var t = e(this),
          i = e(this).attr("data-lazy"),
          o = document.createElement("img");
        o.onload = function() {
          t.animate({
            opacity: 0
          }, 100, function() {
            t.attr("src", i).animate({
              opacity: 1
            }, 200, function() {
              t.removeAttr("data-lazy").removeClass("slick-loading")
            })
          })
        }, o.src = i
      })
    }
    var i, o, n, s, r = this;
    r.options.centerMode === !0 ? r.options.infinite === !0 ? (n = r.currentSlide + (r.options.slidesToShow / 2 + 1), s = n + r.options.slidesToShow + 2) : (n = Math.max(0, r.currentSlide - (r.options.slidesToShow / 2 + 1)), s = 2 + (r.options.slidesToShow / 2 + 1) + r.currentSlide) : (n = r.options.infinite ? r.options.slidesToShow + r.currentSlide : r.currentSlide, s = n + r.options.slidesToShow, r.options.fade === !0 && (n > 0 && n--, s <= r.slideCount && s++)), i = r.$slider.find(".slick-slide").slice(n, s), t(i), r.slideCount <= r.options.slidesToShow ? (o = r.$slider.find(".slick-slide"), t(o)) : r.currentSlide >= r.slideCount - r.options.slidesToShow ? (o = r.$slider.find(".slick-cloned").slice(0, r.options.slidesToShow), t(o)) : 0 === r.currentSlide && (o = r.$slider.find(".slick-cloned").slice(-1 * r.options.slidesToShow), t(o))
  }, t.prototype.loadSlider = function() {
    var e = this;
    e.setPosition(), e.$slideTrack.css({
      opacity: 1
    }), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
  }, t.prototype.next = t.prototype.slickNext = function() {
    var e = this;
    e.changeSlide({
      data: {
        message: "next"
      }
    })
  }, t.prototype.orientationChange = function() {
    var e = this;
    e.checkResponsive(), e.setPosition()
  }, t.prototype.pause = t.prototype.slickPause = function() {
    var e = this;
    e.autoPlayClear(), e.paused = !0
  }, t.prototype.play = t.prototype.slickPlay = function() {
    var e = this;
    e.paused = !1, e.autoPlay()
  }, t.prototype.postSlide = function(e) {
    var t = this;
    t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.setPosition(), t.swipeLeft = null, t.options.autoplay === !0 && t.paused === !1 && t.autoPlay(), t.options.accessibility === !0 && t.initADA()
  }, t.prototype.prev = t.prototype.slickPrev = function() {
    var e = this;
    e.changeSlide({
      data: {
        message: "previous"
      }
    })
  }, t.prototype.preventDefault = function(e) {
    e.preventDefault()
  }, t.prototype.progressiveLazyLoad = function() {
    var t, i, o = this;
    t = e("img[data-lazy]", o.$slider).length, t > 0 && (i = e("img[data-lazy]", o.$slider).first(), i.attr("src", i.attr("data-lazy")).removeClass("slick-loading").load(function() {
      i.removeAttr("data-lazy"), o.progressiveLazyLoad(), o.options.adaptiveHeight === !0 && o.setPosition()
    }).error(function() {
      i.removeAttr("data-lazy"), o.progressiveLazyLoad()
    }))
  }, t.prototype.refresh = function(t) {
    var i = this,
      o = i.currentSlide;
    i.destroy(!0), e.extend(i, i.initials, {
      currentSlide: o
    }), i.init(), t || i.changeSlide({
      data: {
        message: "index",
        index: o
      }
    }, !1)
  }, t.prototype.registerBreakpoints = function() {
    var t, i, o, n = this,
      s = n.options.responsive || null;
    if ("array" === e.type(s) && s.length) {
      n.respondTo = n.options.respondTo || "window";
      for (t in s)
        if (o = n.breakpoints.length - 1, i = s[t].breakpoint, s.hasOwnProperty(t)) {
          for (; o >= 0;) n.breakpoints[o] && n.breakpoints[o] === i && n.breakpoints.splice(o, 1), o--;
          n.breakpoints.push(i), n.breakpointSettings[i] = s[t].settings
        }
      n.breakpoints.sort(function(e, t) {
        return n.options.mobileFirst ? e - t : t - e
      })
    }
  }, t.prototype.reinit = function() {
    var t = this;
    t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"), t.slideCount = t.$slides.length, t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.registerBreakpoints(), t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), t.initDotEvents(), t.checkResponsive(!1, !0), t.options.focusOnSelect === !0 && e(t.$slideTrack).children().on("click.slick", t.selectHandler), t.setSlideClasses(0), t.setPosition(), t.$slider.trigger("reInit", [t]), t.options.autoplay === !0 && t.focusHandler()
  }, t.prototype.resize = function() {
    var t = this;
    e(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout(function() {
      t.windowWidth = e(window).width(), t.checkResponsive(), t.unslicked || t.setPosition()
    }, 50))
  }, t.prototype.removeSlide = t.prototype.slickRemove = function(e, t, i) {
    var o = this;
    return "boolean" == typeof e ? (t = e, e = t === !0 ? 0 : o.slideCount - 1) : e = t === !0 ? --e : e, !(o.slideCount < 1 || 0 > e || e > o.slideCount - 1) && (o.unload(), i === !0 ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(e).remove(), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slidesCache = o.$slides, void o.reinit())
  }, t.prototype.setCSS = function(e) {
    var t, i, o = this,
      n = {};
    o.options.rtl === !0 && (e = -e), t = "left" == o.positionProp ? Math.ceil(e) + "px" : "0px", i = "top" == o.positionProp ? Math.ceil(e) + "px" : "0px", n[o.positionProp] = e, o.transformsEnabled === !1 ? o.$slideTrack.css(n) : (n = {}, o.cssTransitions === !1 ? (n[o.animType] = "translate(" + t + ", " + i + ")", o.$slideTrack.css(n)) : (n[o.animType] = "translate3d(" + t + ", " + i + ", 0px)", o.$slideTrack.css(n)))
  }, t.prototype.setDimensions = function() {
    var e = this;
    e.options.vertical === !1 ? e.options.centerMode === !0 && e.$list.css({
      padding: "0px " + e.options.centerPadding
    }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), e.options.centerMode === !0 && e.$list.css({
      padding: e.options.centerPadding + " 0px"
    })), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), e.options.vertical === !1 && e.options.variableWidth === !1 ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : e.options.variableWidth === !0 ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
    var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
    e.options.variableWidth === !1 && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
  }, t.prototype.setFade = function() {
    var t, i = this;
    i.$slides.each(function(o, n) {
      t = -1 * i.slideWidth * o, i.options.rtl === !0 ? e(n).css({
        position: "relative",
        right: t,
        top: 0,
        zIndex: i.options.zIndex - 2,
        opacity: 0
      }) : e(n).css({
        position: "relative",
        left: t,
        top: 0,
        zIndex: i.options.zIndex - 2,
        opacity: 0
      })
    }), i.$slides.eq(i.currentSlide).css({
      zIndex: i.options.zIndex - 1,
      opacity: 1
    })
  }, t.prototype.setHeight = function() {
    var e = this;
    if (1 === e.options.slidesToShow && e.options.adaptiveHeight === !0 && e.options.vertical === !1) {
      var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
      e.$list.css("height", t)
    }
  }, t.prototype.setOption = t.prototype.slickSetOption = function(t, i, o) {
    var n, s, r = this;
    if ("responsive" === t && "array" === e.type(i))
      for (s in i)
        if ("array" !== e.type(r.options.responsive)) r.options.responsive = [i[s]];
        else {
          for (n = r.options.responsive.length - 1; n >= 0;) r.options.responsive[n].breakpoint === i[s].breakpoint && r.options.responsive.splice(n, 1), n--;
          r.options.responsive.push(i[s])
        } else r.options[t] = i;
    o === !0 && (r.unload(), r.reinit())
  }, t.prototype.setPosition = function() {
    var e = this;
    e.setDimensions(), e.setHeight(), e.options.fade === !1 ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e])
  }, t.prototype.setProps = function() {
    var e = this,
      t = document.body.style;
    e.positionProp = e.options.vertical === !0 ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), (void 0 !== t.WebkitTransition || void 0 !== t.MozTransition || void 0 !== t.msTransition) && e.options.useCSS === !0 && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && e.animType !== !1 && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = null !== e.animType && e.animType !== !1
  }, t.prototype.setSlideClasses = function(e) {
    var t, i, o, n, s = this;
    i = s.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), s.$slides.eq(e).addClass("slick-current"), s.options.centerMode === !0 ? (t = Math.floor(s.options.slidesToShow / 2), s.options.infinite === !0 && (e >= t && e <= s.slideCount - 1 - t ? s.$slides.slice(e - t, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (o = s.options.slidesToShow + e, i.slice(o - t + 1, o + t + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? i.eq(i.length - 1 - s.options.slidesToShow).addClass("slick-center") : e === s.slideCount - 1 && i.eq(s.options.slidesToShow).addClass("slick-center")), s.$slides.eq(e).addClass("slick-center")) : e >= 0 && e <= s.slideCount - s.options.slidesToShow ? s.$slides.slice(e, e + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= s.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (n = s.slideCount % s.options.slidesToShow, o = s.options.infinite === !0 ? s.options.slidesToShow + e : e, s.options.slidesToShow == s.options.slidesToScroll && s.slideCount - e < s.options.slidesToShow ? i.slice(o - (s.options.slidesToShow - n), o + n).addClass("slick-active").attr("aria-hidden", "false") : i.slice(o, o + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === s.options.lazyLoad && s.lazyLoad()
  }, t.prototype.setupInfinite = function() {
    var t, i, o, n = this;
    if (n.options.fade === !0 && (n.options.centerMode = !1), n.options.infinite === !0 && n.options.fade === !1 && (i = null, n.slideCount > n.options.slidesToShow)) {
      for (o = n.options.centerMode === !0 ? n.options.slidesToShow + 1 : n.options.slidesToShow, t = n.slideCount; t > n.slideCount - o; t -= 1) i = t - 1, e(n.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - n.slideCount).prependTo(n.$slideTrack).addClass("slick-cloned");
      for (t = 0; o > t; t += 1) i = t, e(n.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + n.slideCount).appendTo(n.$slideTrack).addClass("slick-cloned");
      n.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
        e(this).attr("id", "")
      })
    }
  }, t.prototype.setPaused = function(e) {
    var t = this;
    t.options.autoplay === !0 && t.options.pauseOnHover === !0 && (t.paused = e, e ? t.autoPlayClear() : t.autoPlay())
  }, t.prototype.selectHandler = function(t) {
    var i = this,
      o = e(t.target).is(".slick-slide") ? e(t.target) : e(t.target).parents(".slick-slide"),
      n = parseInt(o.attr("data-slick-index"));
    return n || (n = 0), i.slideCount <= i.options.slidesToShow ? (i.setSlideClasses(n), void i.asNavFor(n)) : void i.slideHandler(n)
  }, t.prototype.slideHandler = function(e, t, i) {
    var o, n, s, r, a = null,
      l = this;
    return t = t || !1, l.animating === !0 && l.options.waitForAnimate === !0 || l.options.fade === !0 && l.currentSlide === e || l.slideCount <= l.options.slidesToShow ? void 0 : (t === !1 && l.asNavFor(e), o = e, a = l.getLeft(o), r = l.getLeft(l.currentSlide), l.currentLeft = null === l.swipeLeft ? r : l.swipeLeft, l.options.infinite === !1 && l.options.centerMode === !1 && (0 > e || e > l.getDotCount() * l.options.slidesToScroll) ? void(l.options.fade === !1 && (o = l.currentSlide, i !== !0 ? l.animateSlide(r, function() {
      l.postSlide(o)
    }) : l.postSlide(o))) : l.options.infinite === !1 && l.options.centerMode === !0 && (0 > e || e > l.slideCount - l.options.slidesToScroll) ? void(l.options.fade === !1 && (o = l.currentSlide, i !== !0 ? l.animateSlide(r, function() {
      l.postSlide(o)
    }) : l.postSlide(o))) : (l.options.autoplay === !0 && clearInterval(l.autoPlayTimer), n = 0 > o ? 0 !== l.slideCount % l.options.slidesToScroll ? l.slideCount - l.slideCount % l.options.slidesToScroll : l.slideCount + o : o >= l.slideCount ? 0 !== l.slideCount % l.options.slidesToScroll ? 0 : o - l.slideCount : o, l.animating = !0, l.$slider.trigger("beforeChange", [l, l.currentSlide, n]), s = l.currentSlide, l.currentSlide = n, l.setSlideClasses(l.currentSlide), l.updateDots(), l.updateArrows(), l.options.fade === !0 ? (i !== !0 ? (l.fadeSlideOut(s), l.fadeSlide(n, function() {
      l.postSlide(n)
    })) : l.postSlide(n), void l.animateHeight()) : void(i !== !0 ? l.animateSlide(a, function() {
      l.postSlide(n)
    }) : l.postSlide(n))))
  }, t.prototype.startLoad = function() {
    var e = this;
    e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), e.options.dots === !0 && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
  }, t.prototype.swipeDirection = function() {
    var e, t, i, o, n = this;
    return e = n.touchObject.startX - n.touchObject.curX, t = n.touchObject.startY - n.touchObject.curY, i = Math.atan2(t, e), o = Math.round(180 * i / Math.PI), 0 > o && (o = 360 - Math.abs(o)), 45 >= o && o >= 0 ? n.options.rtl === !1 ? "left" : "right" : 360 >= o && o >= 315 ? n.options.rtl === !1 ? "left" : "right" : o >= 135 && 225 >= o ? n.options.rtl === !1 ? "right" : "left" : n.options.verticalSwiping === !0 ? o >= 35 && 135 >= o ? "left" : "right" : "vertical"
  }, t.prototype.swipeEnd = function() {
    var e, t = this;
    if (t.dragging = !1, t.shouldClick = !(t.touchObject.swipeLength > 10), void 0 === t.touchObject.curX) return !1;
    if (t.touchObject.edgeHit === !0 && t.$slider.trigger("edge", [t, t.swipeDirection()]), t.touchObject.swipeLength >= t.touchObject.minSwipe) switch (t.swipeDirection()) {
      case "left":
        e = t.options.swipeToSlide ? t.checkNavigable(t.currentSlide + t.getSlideCount()) : t.currentSlide + t.getSlideCount(), t.slideHandler(e), t.currentDirection = 0, t.touchObject = {}, t.$slider.trigger("swipe", [t, "left"]);
        break;
      case "right":
        e = t.options.swipeToSlide ? t.checkNavigable(t.currentSlide - t.getSlideCount()) : t.currentSlide - t.getSlideCount(), t.slideHandler(e), t.currentDirection = 1, t.touchObject = {}, t.$slider.trigger("swipe", [t, "right"])
    } else t.touchObject.startX !== t.touchObject.curX && (t.slideHandler(t.currentSlide), t.touchObject = {})
  }, t.prototype.swipeHandler = function(e) {
    var t = this;
    if (!(t.options.swipe === !1 || "ontouchend" in document && t.options.swipe === !1 || t.options.draggable === !1 && -1 !== e.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, t.options.verticalSwiping === !0 && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), e.data.action) {
      case "start":
        t.swipeStart(e);
        break;
      case "move":
        t.swipeMove(e);
        break;
      case "end":
        t.swipeEnd(e)
    }
  }, t.prototype.swipeMove = function(e) {
    var t, i, o, n, s, r = this;
    return s = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !(!r.dragging || s && 1 !== s.length) && (t = r.getLeft(r.currentSlide), r.touchObject.curX = void 0 !== s ? s[0].pageX : e.clientX, r.touchObject.curY = void 0 !== s ? s[0].pageY : e.clientY, r.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(r.touchObject.curX - r.touchObject.startX, 2))), r.options.verticalSwiping === !0 && (r.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(r.touchObject.curY - r.touchObject.startY, 2)))), i = r.swipeDirection(), "vertical" !== i ? (void 0 !== e.originalEvent && r.touchObject.swipeLength > 4 && e.preventDefault(), n = (r.options.rtl === !1 ? 1 : -1) * (r.touchObject.curX > r.touchObject.startX ? 1 : -1), r.options.verticalSwiping === !0 && (n = r.touchObject.curY > r.touchObject.startY ? 1 : -1), o = r.touchObject.swipeLength, r.touchObject.edgeHit = !1, r.options.infinite === !1 && (0 === r.currentSlide && "right" === i || r.currentSlide >= r.getDotCount() && "left" === i) && (o = r.touchObject.swipeLength * r.options.edgeFriction, r.touchObject.edgeHit = !0), r.swipeLeft = r.options.vertical === !1 ? t + o * n : t + o * (r.$list.height() / r.listWidth) * n, r.options.verticalSwiping === !0 && (r.swipeLeft = t + o * n), r.options.fade !== !0 && r.options.touchMove !== !1 && (r.animating === !0 ? (r.swipeLeft = null, !1) : void r.setCSS(r.swipeLeft))) : void 0)
  }, t.prototype.swipeStart = function(e) {
    var t, i = this;
    return 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow ? (i.touchObject = {}, !1) : (void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, void(i.dragging = !0))
  }, t.prototype.unfilterSlides = t.prototype.slickUnfilter = function() {
    var e = this;
    null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
  }, t.prototype.unload = function() {
    var t = this;
    e(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(), t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
  }, t.prototype.unslick = function(e) {
    var t = this;
    t.$slid
    er.trigger("unslick", [t, e]), t.destroy()
  }, t.prototype.updateArrows = function() {
    var e, t = this;
    e = Math.floor(t.options.slidesToShow / 2),
      t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && !t.options.infinite && (t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === t.currentSlide ? (t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - t.options.slidesToShow && t.options.centerMode === !1 ? (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - 1 && t.options.centerMode === !0 && (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
  }, t.prototype.updateDots = function() {
    var e = this;
    null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
  }, t.prototype.visibility = function() {
    var e = this;
    document[e.hidden] ? (e.paused = !0, e.autoPlayClear()) : e.options.autoplay === !0 && (e.paused = !1, e.autoPlay())
  }, t.prototype.initADA = function() {
    var t = this;
    t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({
      "aria-hidden": "true",
      tabindex: "-1"
    }).find("a, input, button, select").attr({
      tabindex: "-1"
    }), t.$slideTrack.attr("role", "listbox"), t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function(i) {
      e(this).attr({
        role: "option",
        "aria-describedby": "slick-slide" + t.instanceUid + i
      })
    }), null !== t.$dots && t.$dots.attr("role", "tablist").find("li").each(function(i) {
      e(this).attr({
        role: "presentation",
        "aria-selected": "false",
        "aria-controls": "navigation" + t.instanceUid + i,
        id: "slick-slide" + t.instanceUid + i
      })
    }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), t.activateADA()
  }, t.prototype.activateADA = function() {
    var e = this,
      t = e.$slider.find("*").is(":focus");
    e.$slideTrack.find(".slick-active").attr({
      "aria-hidden": "false",
      tabindex: "0"
    }).find("a, input, button, select").attr({
      tabindex: "0"
    }), t && e.$slideTrack.find(".slick-active").focus()
  }, t.prototype.focusHandler = function() {
    var t = this;
    t.$slider.on("focus.slick blur.slick", "*", function(i) {
      i.stopImmediatePropagation();
      var o = e(this);
      setTimeout(function() {
        t.isPlay && (o.is(":focus") ? (t.autoPlayClear(), t.paused = !0) : (t.paused = !1, t.autoPlay()))
      }, 0)
    })
  }, e.fn.slick = function() {
    var e, i = this,
      o = arguments[0],
      n = Array.prototype.slice.call(arguments, 1),
      s = i.length,
      r = 0;
    for (r; s > r; r++)
      if ("object" == typeof o || "undefined" == typeof o ? i[r].slick = new t(i[r], o) : e = i[r].slick[o].apply(i[r].slick, n), "undefined" != typeof e) return e;
    return i
  }
});
var ft = 1e3 / 60;
String.prototype.toCamelCase = function() {
  return this.replace(/\s(.)/g, function(e) {
    return e.toUpperCase()
  }).replace(/\s/g, "").replace(/^(.)/, function(e) {
    return e.toLowerCase()
  })
};
var $doc = $(document),
  $win = $(window),
  $body = $("body"),
  events = {
    timer: 2e3,
    state: !1,
    setState: function(e) {
      this.state = e || !this.state
    },
    getState: function() {
      return this.state
    },
    detectEvents: function(e, t) {
      var i = this,
        o = t || i.timer;
      i.getState() || (i.setState(!0), setTimeout(function() {
        i.setState(!1)
      }, o), e())
    }
  };
$(document.body).on("click", ".js-toggle-active", function(e) {
  e.preventDefault();
  var t = $(this),
    i = t.data("target"),
    o = i ? $(i) : t;
  o.toggleClass("is-active")
});
var states = {
    open: "is-open",
    active: "is-active",
    current: "is-current",
    loading: "is-loading",
    fixedHeader: "header-fixed"
  },
  breakpoints = {
    mobile: function() {
      return !Modernizr.mq("(min-width: 768px)")
    },
    desktop: function() {
      return Modernizr.mq("(min-width: 768px)")
    },
    c940: function() {
      return Modernizr.mq("(min-width: 940px)")
    }
  };
stickyHeader(), window.addEventListener("scroll", throttle(stickyHeader, ft));
var $menuToggle = $(".js-toggle-menu"),
  $mobileMenu = $(".js-mobile-menu");
$menuToggle.on("click", function(e) {
  e.preventDefault(), $mobileMenu.toggleClass(states.open)
});
var $dragonSlider = $(".js-slider-dragon"),
  $dragonSliderArrows = $(".js-slider-dragon-arrow");
$dragonSlider.slick({
  fade: !0,
  arrows: !1,
  draggable: !1
}), $dragonSliderArrows.on("click", function(e) {
  "prev" == $(this).data("direction") ? $dragonSlider.slick("slickPrev") : $dragonSlider.slick("slickNext")
});
var $newsSlider = $(".js-slider-news"),
  $newsSliderArrows = $(".js-slider-news-arrow"),
  $newsHeroDots = $(".js-slider-news-dot");
$newsSlider.slick({
  arrows: !1,
  adaptiveHeight: !0
}), $newsSliderArrows.on("click", function(e) {
  "prev" == $(this).data("direction") ? $newsSlider.slick("slickPrev") : $newsSlider.slick("slickNext");
  var t = $newsSlider.find(".slick-active").data("slide");
  $newsHeroDots.parents("li").siblings("." + states.current).removeClass(states.current), $newsHeroDots.filter('[data-slide="' + t + '"]').parent().addClass(states.current)
}), $newsHeroDots.on("click", function(e) {
  $newsSlider.slick("slickGoTo", $(this).data("slide") - 1), $(this).parents("li").siblings("." + states.current).removeClass(states.current), $(this).parent().addClass(states.current)
});
var scrollLink = document.querySelector(".js-scroll-top");
scrollLink.addEventListener("click", function(e) {
  e.preventDefault(), $.Velocity(document.body, "scroll", {
    duration: 1e3
  })
});
var player, $videoTrigger = $(".js-video-trigger"),
  currentVideoId = "";
$videoTrigger.on("click", function(e) {
  e.preventDefault();
  var t = $(this),
    i = t.data("video-id"),
    o = t.data("video-title");
  currentVideoId === i || events.getState() || ($("[data-video-id]").removeClass("is-current"), $('[data-video-id="' + i + '"]').addClass("is-current"), currentVideoId = i, $("#video-title").html(o), player.loadVideoById && player.loadVideoById(i))
});
var $videoNavSlider = $(".js-slider-video-thumbs"),
  $videoNavSliderArrows = $(".js-slider-video-thumbs-arrow"),
  $videoNavSliderDots = $(".js-slider-video-thumb-dot");
$videoNavSlider.slick({
  arrows: !1,
  slidesToShow: 4,
  responsive: [{
    breakpoint: 700,
    settings: {
      slidesToShow: 3
    }
  }, {
    breakpoint: 520,
    settings: {
      slidesToShow: 2
    }
  }, {
    breakpoint: 360,
    settings: {
      slidesToShow: 1
    }
  }]
}), $videoNavSliderArrows.on("click", function(e) {
  "prev" == $(this).data("direction") ? $videoNavSlider.slick("slickPrev") : $videoNavSlider.slick("slickNext");
  var t = $videoNavSlider.find(".slick-active").data("slide");
  $videoNavSliderDots.parents("li").siblings("." + states.current).removeClass(states.current), $videoNavSliderDots.filter('[data-slide="' + t + '"]').parent().addClass(states.current)
}), $videoNavSliderDots.on("click", function(e) {
  $videoNavSlider.slick("slickGoTo", $(this).data("slide") - 1), $(this).parents("li").siblings("." + states.current).removeClass(states.current), $(this).parent().addClass(states.current)
});
var $sliders = $(".js-slider"),
  $sliderNavs = $(".js-slider-nav"),
  $slidersAsNav = $(".js-slider-as-nav-link"),
  $sliderControls = $(".js-slider-pagination");
$sliders.slick(), $sliderNavs.on("click", function(e) {
  var t, i = $(this),
    o = {
      direction: i.data("direction")
    },
    n = i.closest($sliderControls);
  t = $sliders.filter("[data-slider=" + n.data("slider") + "]"), changeSlide(t, n, o)
}), $sliderControls.on("click", "button:not(.js-slider-nav)", function(e) {
  var t, i = $(this),
    o = {
      slideIndex: i.data("slide-index"),
      $activeDot: i
    },
    n = i.closest($sliderControls);
  t = $sliders.filter("[data-slider=" + n.data("slider") + "]"), changeSlide(t, n, o)
}), $slidersAsNav.on("click", function(e) {
  e.preventDefault();
  var t = $(this),
    i = t.data("container"),
    o = t.data("ajax-url"),
    n = $("#" + i);
  n.addClass(states.loading), $.get(o, function(e) {
    n.html(e.html), $slidersAsNav.removeClass(states.current), t.addClass(states.current)
  }, "json").always(function() {
    var e = 0,
      t = n.find("img");
    0 !== t.length ? t.load(function() {
      e++, e == t.length && n.removeClass(states.loading)
    }) : n.removeClass(states.loading)
  })
});
var $accordionContent = $(".js-accordion-content"),
  $accordionToggle = $(".js-toggle-accordion"),
  $initialActiveHeader = $accordionToggle.eq(0);
$initialActiveHeader.next($accordionContent).css("height", "auto"), $initialActiveHeader.addClass(states.active), toggleIconArrow($accordionToggle.find(".js-accordion-arrow")), $accordionToggle.on("click", function(e) {
  e.preventDefault();
  var t = $(this),
    i = t.next($accordionContent);
  t.hasClass(states.active) ? (i.velocity("slideUp", {
    duration: 350
  }), t.removeClass(states.active)) : (i.velocity("slideDown", {
    duration: 350,
    begin: function(e) {
      $(e).css({
        height: "auto",
        display: "block"
      })
    }
  }), t.addClass(states.active)), toggleIconArrow(t.find(".js-accordion-arrow"))
});
var $dropdownToggle = $(".js-has-dropdown");
$dropdownToggle.filter("." + states.active).next().css("display", "block"), $dropdownToggle.on("click", function(e) {
  e.preventDefault();
  var t = $(this),
    i = t.next();
  t.hasClass(states.active) ? (i.velocity("slideUp", {
    duration: 350
  }), t.removeClass(states.active)) : (i.velocity("slideDown", {
    duration: 350
  }), t.addClass(states.active))
});
var fancyboxPrev = '<a title="Previous" href="javascript:;" class="fancybox-nav fancybox-prev c-pagination__nav c-pagination__nav--prev"><i class="c-icon c-icon--left-open c-pagination__nav-icon"></i><span class="u-sr-only">Previous</span></a>',
  fancyboxNext = '<a title="Next" href="javascript:;" class="fancybox-nav fancybox-next c-pagination__nav c-pagination__nav--next"><i class="c-icon c-icon--right-open c-pagination__nav-icon"></i><span class="u-sr-only">Next</span></a>';
$(".js-fancybox").fancybox({
  padding: 1,
  tpl: {
    next: fancyboxNext,
    prev: fancyboxPrev
  }
});
var featuredArtImages = $(".js-featured-artwork-area").find("img");
featuredArtImages.on("click", function(e) {
  if (breakpoints.desktop()) {
    e.preventDefault();
    var t = $(this).attr("src");
    $.fancybox({
      href: t,
      padding: 1,
      tpl: {
        next: fancyboxNext,
        prev: fancyboxPrev
      }
    })
  }
}), $win.on("load", function() {
  if ($body.addClass("is-loaded"), breakpoints.desktop()) {
    var e = 3,
      t = $(".js-social-expander"),
      i = $(".js-social-wrap"),
      o = $(".js-social-item"),
      n = o.outerWidth();
    i.width(n * e - 1), $(".js-expander-toggle").on("click", function() {
      t.hasClass("is-active") ? i.velocity({
        width: n * e - 1
      }) : i.velocity({
        width: n * o.length
      }), t.toggleClass("is-active")
    }), $(".js-force-two-lines").each(function() {
      var e = $(this),
        t = parseInt(e.css("line-height")) + 5;
      if (e.height() < 2 * t) {
        var i = e.text(),
          o = Math.floor(i.length / 2),
          n = i.lastIndexOf(" ", o),
          s = i.indexOf(" ", o + 1);
        o = o - n < s - o ? n : s;
        var r = i.substr(0, o),
          a = i.substr(o + 1);
        e.html(r + "<br>" + a)
      }
    })
  }
});


$('.page-numbers li').each(function(index, el) {

  $(this).addClass('c-pagination__item c-pagination__list-item ');
  $(this).find('a').addClass('c-pagination__dot');
  $(this).find('.current').parent().addClass('is-current');
  $(this).find('.current').addClass('c-pagination__dot');
  $(this).find('.next').addClass('c-pagination__nav c-pagination__nav--next').removeClass('c-pagination__dot').parent().addClass('page-numbers--next');
  $(this).find('.next').parent().addClass('page-numbers--next');
  $(this).find('.next').html('<span class="u-sr-only">Next</span><i class="c-icon c-icon--right-open c-pagination__nav-icon"></i>');
  $(this).find('.prev').addClass('c-pagination__nav c-pagination__nav--next').removeClass('c-pagination__dot').parent().addClass('page-numbers--prev');
  $(this).find('.prev').parent().addClass('page-numbers--prev');
  $(this).find('.prev').html('<span class="u-sr-only">Next</span><i class="c-icon c-icon--left-open c-pagination__nav-icon"></i>');

});

