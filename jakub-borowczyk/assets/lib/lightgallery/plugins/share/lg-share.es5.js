/*!
 * lightgallery | 2.8.2 | November 28th 2024
 * http://www.lightgalleryjs.com/
 * Copyright (c) 2020 Sachin Neravath;
 * @license GPLv3
 */
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
***************************************************************************** */
function __spreadArrays(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var o=Array(e),i=0;for(t=0;t<r;t++)for(var n=arguments[t],a=0,s=n.length;a<s;a++,i++)o[i]=n[a];return o}function getFacebookShareLink(e){return"//www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(e.facebookShareUrl||window.location.href)}function getTwitterShareLink(e){var t="//twitter.com/intent/tweet?text=",r=encodeURIComponent(e.twitterShareUrl||window.location.href);return t+e.tweetText+"&url="+r}function getPinterestShareLink(e){var t="http://www.pinterest.com/pin/create/button/?url=",r=e.pinterestText,o=encodeURIComponent(e.src);return t+encodeURIComponent(e.pinterestShareUrl||window.location.href)+"&media="+o+"&description="+r}var __assign=function(){return(__assign=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},shareSettings={share:!0,facebook:!0,facebookDropdownText:"Facebook",twitter:!0,twitterDropdownText:"Twitter",pinterest:!0,pinterestDropdownText:"Pinterest",additionalShareOptions:[],sharePluginStrings:{share:"Share"}},lGEvents={afterAppendSlide:"lgAfterAppendSlide",init:"lgInit",hasVideo:"lgHasVideo",containerResize:"lgContainerResize",updateSlides:"lgUpdateSlides",afterAppendSubHtml:"lgAfterAppendSubHtml",beforeOpen:"lgBeforeOpen",afterOpen:"lgAfterOpen",slideItemLoad:"lgSlideItemLoad",beforeSlide:"lgBeforeSlide",afterSlide:"lgAfterSlide",posterClick:"lgPosterClick",dragStart:"lgDragStart",dragMove:"lgDragMove",dragEnd:"lgDragEnd",beforeNextSlide:"lgBeforeNextSlide",beforePrevSlide:"lgBeforePrevSlide",beforeClose:"lgBeforeClose",afterClose:"lgAfterClose",rotateLeft:"lgRotateLeft",rotateRight:"lgRotateRight",flipHorizontal:"lgFlipHorizontal",flipVertical:"lgFlipVertical",autoplay:"lgAutoplay",autoplayStart:"lgAutoplayStart",autoplayStop:"lgAutoplayStop"},Share=function(){function e(e){return this.shareOptions=[],this.core=e,this.settings=__assign(__assign({},shareSettings),this.core.settings),this}return e.prototype.init=function(){this.settings.share&&(this.shareOptions=__spreadArrays(this.getDefaultShareOptions(),this.settings.additionalShareOptions),this.setLgShareMarkup(),this.core.outer.find(".lg-share .lg-dropdown").append(this.getShareListHtml()),this.core.LGel.on(lGEvents.afterSlide+".share",this.onAfterSlide.bind(this)))},e.prototype.getShareListHtml=function(){var e="";return this.shareOptions.forEach(function(t){e+=t.dropdownHTML}),e},e.prototype.setLgShareMarkup=function(){var e=this;this.core.$toolbar.append('<button type="button" aria-label="'+this.settings.sharePluginStrings.share+'" aria-haspopup="true" aria-expanded="false" class="lg-share lg-icon">\n                <ul class="lg-dropdown" style="position: absolute;"></ul></button>'),this.core.outer.append('<div class="lg-dropdown-overlay"></div>'),this.core.outer.find(".lg-share").first().on("click.lg",function(){e.core.outer.toggleClass("lg-dropdown-active"),e.core.outer.hasClass("lg-dropdown-active")?e.core.outer.attr("aria-expanded",!0):e.core.outer.attr("aria-expanded",!1)}),this.core.outer.find(".lg-dropdown-overlay").first().on("click.lg",function(){e.core.outer.removeClass("lg-dropdown-active"),e.core.outer.attr("aria-expanded",!1)})},e.prototype.onAfterSlide=function(e){var t=this,r=e.detail.index,o=this.core.galleryItems[r];setTimeout(function(){t.shareOptions.forEach(function(e){var r=e.selector;t.core.outer.find(r).attr("href",e.generateLink(o))})},100)},e.prototype.getShareListItemHTML=function(e,t){return'<li><a class="lg-share-'+e+'" rel="noopener" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">'+t+"</span></a></li>"},e.prototype.getDefaultShareOptions=function(){return __spreadArrays(this.settings.facebook?[{type:"facebook",generateLink:getFacebookShareLink,dropdownHTML:this.getShareListItemHTML("facebook",this.settings.facebookDropdownText),selector:".lg-share-facebook"}]:[],this.settings.twitter?[{type:"twitter",generateLink:getTwitterShareLink,dropdownHTML:this.getShareListItemHTML("twitter",this.settings.twitterDropdownText),selector:".lg-share-twitter"}]:[],this.settings.pinterest?[{type:"pinterest",generateLink:getPinterestShareLink,dropdownHTML:this.getShareListItemHTML("pinterest",this.settings.pinterestDropdownText),selector:".lg-share-pinterest"}]:[])},e.prototype.destroy=function(){this.core.outer.find(".lg-dropdown-overlay").remove(),this.core.outer.find(".lg-share").remove(),this.core.LGel.off(".lg.share"),this.core.LGel.off(".share")},e}();export default Share;