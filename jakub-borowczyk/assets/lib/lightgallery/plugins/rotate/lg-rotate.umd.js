/*!
 * lightgallery | 2.8.2 | November 28th 2024
 * http://www.lightgalleryjs.com/
 * Copyright (c) 2020 Sachin Neravath;
 * @license GPLv3
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).lgRotate=e()}(this,function(){"use strict";
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
    ***************************************************************************** */var t=function(){return(t=Object.assign||function(t){for(var e,i=1,r=arguments.length;i<r;i++)for(var o in e=arguments[i])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},e={afterAppendSlide:"lgAfterAppendSlide",init:"lgInit",hasVideo:"lgHasVideo",containerResize:"lgContainerResize",updateSlides:"lgUpdateSlides",afterAppendSubHtml:"lgAfterAppendSubHtml",beforeOpen:"lgBeforeOpen",afterOpen:"lgAfterOpen",slideItemLoad:"lgSlideItemLoad",beforeSlide:"lgBeforeSlide",afterSlide:"lgAfterSlide",posterClick:"lgPosterClick",dragStart:"lgDragStart",dragMove:"lgDragMove",dragEnd:"lgDragEnd",beforeNextSlide:"lgBeforeNextSlide",beforePrevSlide:"lgBeforePrevSlide",beforeClose:"lgBeforeClose",afterClose:"lgAfterClose",rotateLeft:"lgRotateLeft",rotateRight:"lgRotateRight",flipHorizontal:"lgFlipHorizontal",flipVertical:"lgFlipVertical",autoplay:"lgAutoplay",autoplayStart:"lgAutoplayStart",autoplayStop:"lgAutoplayStop"},i={rotate:!0,rotateSpeed:400,rotateLeft:!0,rotateRight:!0,flipHorizontal:!0,flipVertical:!0,rotatePluginStrings:{flipVertical:"Flip vertical",flipHorizontal:"Flip horizontal",rotateLeft:"Rotate left",rotateRight:"Rotate right"}};return function(){function r(e,r){return this.core=e,this.$LG=r,this.settings=t(t({},i),this.core.settings),this}return r.prototype.buildTemplates=function(){var t="";this.settings.flipVertical&&(t+='<button type="button" id="lg-flip-ver" aria-label="'+this.settings.rotatePluginStrings.flipVertical+'" class="lg-flip-ver lg-icon"></button>'),this.settings.flipHorizontal&&(t+='<button type="button" id="lg-flip-hor" aria-label="'+this.settings.rotatePluginStrings.flipHorizontal+'" class="lg-flip-hor lg-icon"></button>'),this.settings.rotateLeft&&(t+='<button type="button" id="lg-rotate-left" aria-label="'+this.settings.rotatePluginStrings.rotateLeft+'" class="lg-rotate-left lg-icon"></button>'),this.settings.rotateRight&&(t+='<button type="button" id="lg-rotate-right" aria-label="'+this.settings.rotatePluginStrings.rotateRight+'" class="lg-rotate-right lg-icon"></button>'),this.core.$toolbar.append(t)},r.prototype.init=function(){var t=this;this.settings.rotate&&(this.buildTemplates(),this.rotateValuesList={},this.core.LGel.on(e.slideItemLoad+".rotate",function(e){var i=e.detail.index;t.core.getSlideItem(i).find(".lg-img-rotate").get()||(t.core.getSlideItem(i).find(".lg-object").first().wrap("lg-img-rotate"),t.core.getSlideItem(t.core.index).find(".lg-img-rotate").css("transition-duration",t.settings.rotateSpeed+"ms"))}),this.core.outer.find("#lg-rotate-left").first().on("click.lg",this.rotateLeft.bind(this)),this.core.outer.find("#lg-rotate-right").first().on("click.lg",this.rotateRight.bind(this)),this.core.outer.find("#lg-flip-hor").first().on("click.lg",this.flipHorizontal.bind(this)),this.core.outer.find("#lg-flip-ver").first().on("click.lg",this.flipVertical.bind(this)),this.core.LGel.on(e.beforeSlide+".rotate",function(e){t.rotateValuesList[e.detail.index]||(t.rotateValuesList[e.detail.index]={rotate:0,flipHorizontal:1,flipVertical:1})}))},r.prototype.applyStyles=function(){this.core.getSlideItem(this.core.index).find(".lg-img-rotate").first().css("transform","rotate("+this.rotateValuesList[this.core.index].rotate+"deg) scale3d("+this.rotateValuesList[this.core.index].flipHorizontal+", "+this.rotateValuesList[this.core.index].flipVertical+", 1)")},r.prototype.rotateLeft=function(){this.rotateValuesList[this.core.index].rotate-=90,this.applyStyles(),this.triggerEvents(e.rotateLeft,{rotate:this.rotateValuesList[this.core.index].rotate})},r.prototype.rotateRight=function(){this.rotateValuesList[this.core.index].rotate+=90,this.applyStyles(),this.triggerEvents(e.rotateRight,{rotate:this.rotateValuesList[this.core.index].rotate})},r.prototype.getCurrentRotation=function(t){if(!t)return 0;var e=this.$LG(t).style(),i=e.getPropertyValue("-webkit-transform")||e.getPropertyValue("-moz-transform")||e.getPropertyValue("-ms-transform")||e.getPropertyValue("-o-transform")||e.getPropertyValue("transform")||"none";if("none"!==i){var r=i.split("(")[1].split(")")[0].split(",");if(r){var o=Math.round(Math.atan2(r[1],r[0])*(180/Math.PI));return o<0?o+360:o}}return 0},r.prototype.flipHorizontal=function(){var t=this.core.getSlideItem(this.core.index).find(".lg-img-rotate").first().get(),i=this.getCurrentRotation(t),r="flipHorizontal";90!==i&&270!==i||(r="flipVertical"),this.rotateValuesList[this.core.index][r]*=-1,this.applyStyles(),this.triggerEvents(e.flipHorizontal,{flipHorizontal:this.rotateValuesList[this.core.index][r]})},r.prototype.flipVertical=function(){var t=this.core.getSlideItem(this.core.index).find(".lg-img-rotate").first().get(),i=this.getCurrentRotation(t),r="flipVertical";90!==i&&270!==i||(r="flipHorizontal"),this.rotateValuesList[this.core.index][r]*=-1,this.applyStyles(),this.triggerEvents(e.flipVertical,{flipVertical:this.rotateValuesList[this.core.index][r]})},r.prototype.triggerEvents=function(t,e){var i=this;setTimeout(function(){i.core.LGel.trigger(t,e)},this.settings.rotateSpeed+10)},r.prototype.isImageOrientationChanged=function(){var t=this.rotateValuesList[this.core.index],e=Math.abs(t.rotate)%360!=0,i=t.flipHorizontal<0,r=t.flipVertical<0;return e||i||r},r.prototype.closeGallery=function(){this.isImageOrientationChanged()&&this.core.getSlideItem(this.core.index).css("opacity",0),this.rotateValuesList={}},r.prototype.destroy=function(){this.core.LGel.off(".lg.rotate"),this.core.LGel.off(".rotate")},r}()});