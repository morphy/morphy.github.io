/*!
 * lightgallery | 2.8.2 | November 28th 2024
 * http://www.lightgalleryjs.com/
 * Copyright (c) 2020 Sachin Neravath;
 * @license GPLv3
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).lgMediumZoom=t()}(this,function(){"use strict";
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
    ***************************************************************************** */var e=function(){return(e=Object.assign||function(e){for(var t,o=1,r=arguments.length;o<r;o++)for(var i in t=arguments[o])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},t={afterAppendSlide:"lgAfterAppendSlide",init:"lgInit",hasVideo:"lgHasVideo",containerResize:"lgContainerResize",updateSlides:"lgUpdateSlides",afterAppendSubHtml:"lgAfterAppendSubHtml",beforeOpen:"lgBeforeOpen",afterOpen:"lgAfterOpen",slideItemLoad:"lgSlideItemLoad",beforeSlide:"lgBeforeSlide",afterSlide:"lgAfterSlide",posterClick:"lgPosterClick",dragStart:"lgDragStart",dragMove:"lgDragMove",dragEnd:"lgDragEnd",beforeNextSlide:"lgBeforeNextSlide",beforePrevSlide:"lgBeforePrevSlide",beforeClose:"lgBeforeClose",afterClose:"lgAfterClose",rotateLeft:"lgRotateLeft",rotateRight:"lgRotateRight",flipHorizontal:"lgFlipHorizontal",flipVertical:"lgFlipVertical",autoplay:"lgAutoplay",autoplayStart:"lgAutoplayStart",autoplayStop:"lgAutoplayStop"},o={margin:40,mediumZoom:!0,backgroundColor:"#000"};return function(){function r(t,r){var i=this;this.core=t,this.$LG=r,this.core.getMediaContainerPosition=function(){return{top:i.settings.margin,bottom:i.settings.margin}};var l={controls:!1,download:!1,counter:!1,showCloseIcon:!1,extraProps:["lgBackgroundColor"],closeOnTap:!1,enableSwipe:!1,enableDrag:!1,swipeToClose:!1,addClass:this.core.settings.addClass+" lg-medium-zoom"};return this.core.settings=e(e({},this.core.settings),l),this.settings=e(e(e({},o),this.core.settings),l),this}return r.prototype.toggleItemClass=function(){for(var e=0;e<this.core.items.length;e++){this.$LG(this.core.items[e]).toggleClass("lg-medium-zoom-item")}},r.prototype.init=function(){var e=this;this.settings.mediumZoom&&(this.core.LGel.on(t.beforeOpen+".medium",function(){e.core.$backdrop.css("background-color",e.core.galleryItems[e.core.index].lgBackgroundColor||e.settings.backgroundColor)}),this.toggleItemClass(),this.core.outer.on("click.lg.medium",function(){e.core.closeGallery()}))},r.prototype.destroy=function(){this.toggleItemClass()},r}()});