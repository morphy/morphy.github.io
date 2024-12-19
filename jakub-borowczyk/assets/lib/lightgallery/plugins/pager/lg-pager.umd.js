/*!
 * lightgallery | 2.8.2 | November 28th 2024
 * http://www.lightgalleryjs.com/
 * Copyright (c) 2020 Sachin Neravath;
 * @license GPLv3
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).lgPager=t()}(this,function(){"use strict";
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */var e=function(){return(e=Object.assign||function(e){for(var t,r=1,l=arguments.length;r<l;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},t={afterAppendSlide:"lgAfterAppendSlide",init:"lgInit",hasVideo:"lgHasVideo",containerResize:"lgContainerResize",updateSlides:"lgUpdateSlides",afterAppendSubHtml:"lgAfterAppendSubHtml",beforeOpen:"lgBeforeOpen",afterOpen:"lgAfterOpen",slideItemLoad:"lgSlideItemLoad",beforeSlide:"lgBeforeSlide",afterSlide:"lgAfterSlide",posterClick:"lgPosterClick",dragStart:"lgDragStart",dragMove:"lgDragMove",dragEnd:"lgDragEnd",beforeNextSlide:"lgBeforeNextSlide",beforePrevSlide:"lgBeforePrevSlide",beforeClose:"lgBeforeClose",afterClose:"lgAfterClose",rotateLeft:"lgRotateLeft",rotateRight:"lgRotateRight",flipHorizontal:"lgFlipHorizontal",flipVertical:"lgFlipVertical",autoplay:"lgAutoplay",autoplayStart:"lgAutoplayStart",autoplayStop:"lgAutoplayStop"},r={pager:!0};return function(){function l(t,l){return this.core=t,this.$LG=l,this.settings=e(e({},r),this.core.settings),this}return l.prototype.getPagerHtml=function(e){for(var t="",r=0;r<e.length;r++)t+='<span  data-lg-item-id="'+r+'" class="lg-pager-cont"> \n                    <span data-lg-item-id="'+r+'" class="lg-pager"></span>\n                    <div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="'+e[r].thumb+'" /></div>\n                    </span>';return t},l.prototype.init=function(){var e=this;if(this.settings.pager){var r;this.core.$lgComponents.prepend('<div class="lg-pager-outer"></div>');var l=this.core.outer.find(".lg-pager-outer");l.html(this.getPagerHtml(this.core.galleryItems)),l.first().on("click.lg touchend.lg",function(t){var r=e.$LG(t.target);if(r.hasAttribute("data-lg-item-id")){var l=parseInt(r.attr("data-lg-item-id"));e.core.slide(l,!1,!0,!1)}}),l.first().on("mouseover.lg",function(){clearTimeout(r),l.addClass("lg-pager-hover")}),l.first().on("mouseout.lg",function(){r=setTimeout(function(){l.removeClass("lg-pager-hover")})}),this.core.LGel.on(t.beforeSlide+".pager",function(t){var r=t.detail.index;e.manageActiveClass.call(e,r)}),this.core.LGel.on(t.updateSlides+".pager",function(){l.empty(),l.html(e.getPagerHtml(e.core.galleryItems)),e.manageActiveClass(e.core.index)})}},l.prototype.manageActiveClass=function(e){var t=this.core.outer.find(".lg-pager-cont");t.removeClass("lg-pager-active"),t.eq(e).addClass("lg-pager-active")},l.prototype.destroy=function(){this.core.outer.find(".lg-pager-outer").remove(),this.core.LGel.off(".lg.pager"),this.core.LGel.off(".pager")},l}()});