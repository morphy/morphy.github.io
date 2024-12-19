/*!
 * lightgallery | 2.8.2 | November 28th 2024
 * http://www.lightgalleryjs.com/
 * Copyright (c) 2020 Sachin Neravath;
 * @license GPLv3
 */
!function(e,o){"object"==typeof exports&&"undefined"!=typeof module?module.exports=o():"function"==typeof define&&define.amd?define(o):(e="undefined"!=typeof globalThis?globalThis:e||self).lgVideo=o()}(this,function(){"use strict";
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
    ***************************************************************************** */var e=function(){return(e=Object.assign||function(e){for(var o,t=1,i=arguments.length;t<i;t++)for(var l in o=arguments[t])Object.prototype.hasOwnProperty.call(o,l)&&(e[l]=o[l]);return e}).apply(this,arguments)},o={autoplayFirstVideo:!0,youTubePlayerParams:!1,vimeoPlayerParams:!1,wistiaPlayerParams:!1,gotoNextSlideOnVideoEnd:!0,autoplayVideoOnSlide:!1,videojs:!1,videojsTheme:"",videojsOptions:{}},t={afterAppendSlide:"lgAfterAppendSlide",init:"lgInit",hasVideo:"lgHasVideo",containerResize:"lgContainerResize",updateSlides:"lgUpdateSlides",afterAppendSubHtml:"lgAfterAppendSubHtml",beforeOpen:"lgBeforeOpen",afterOpen:"lgAfterOpen",slideItemLoad:"lgSlideItemLoad",beforeSlide:"lgBeforeSlide",afterSlide:"lgAfterSlide",posterClick:"lgPosterClick",dragStart:"lgDragStart",dragMove:"lgDragMove",dragEnd:"lgDragEnd",beforeNextSlide:"lgBeforeNextSlide",beforePrevSlide:"lgBeforePrevSlide",beforeClose:"lgBeforeClose",afterClose:"lgAfterClose",rotateLeft:"lgRotateLeft",rotateRight:"lgRotateRight",flipHorizontal:"lgFlipHorizontal",flipVertical:"lgFlipVertical",autoplay:"lgAutoplay",autoplayStart:"lgAutoplayStart",autoplayStop:"lgAutoplayStop"},i=function(e){return Object.keys(e).map(function(o){return encodeURIComponent(o)+"="+encodeURIComponent(e[o])}).join("&")},l=function(e){return e.slice(1).split("&").map(function(e){return e.split("=")}).reduce(function(e,o){var t=o.map(decodeURIComponent),i=t[0],l=t[1];return e[i]=l,e},{})},s=function(o,t){if(!o.youtube)return"";var s=o.youtube[2]?l(o.youtube[2]):"",r=t||{},n=e(e(e({},{wmode:"opaque",autoplay:0,mute:1,enablejsapi:1}),r),s);return"?"+i(n)},r=function(e){return e.includes("youtube-nocookie.com")},n=function(e,o){if(!o||!o.vimeo)return"";var t=o.vimeo[2]||"",l=Object.assign({},{autoplay:0,muted:1},e),s=l&&0!==Object.keys(l).length?i(l):"",r=((o.vimeo[0].split("/").pop()||"").split("?")[0]||"").split("#")[0],n=o.vimeo[1]!==r;n&&(t=t.replace("/"+r,""));var d=n?"h="+r:"";return"?"+d+(s=d?"&"+s:s)+(t="?"==t[0]?"&"+t.slice(1):t||"")};return function(){function l(t){return this.core=t,this.settings=e(e({},o),this.core.settings),this}return l.prototype.init=function(){var e=this;this.core.LGel.on(t.hasVideo+".video",this.onHasVideo.bind(this)),this.core.LGel.on(t.posterClick+".video",function(){var o=e.core.getSlideItem(e.core.index);e.loadVideoOnPosterClick(o)}),this.core.LGel.on(t.slideItemLoad+".video",this.onSlideItemLoad.bind(this)),this.core.LGel.on(t.beforeSlide+".video",this.onBeforeSlide.bind(this)),this.core.LGel.on(t.afterSlide+".video",this.onAfterSlide.bind(this))},l.prototype.onSlideItemLoad=function(e){var o=this,t=e.detail,i=t.isFirstSlide,l=t.index;this.settings.autoplayFirstVideo&&i&&l===this.core.index&&setTimeout(function(){o.loadAndPlayVideo(l)},200),!i&&this.settings.autoplayVideoOnSlide&&l===this.core.index&&this.loadAndPlayVideo(l)},l.prototype.onHasVideo=function(e){var o=e.detail,t=o.index,i=o.src,l=o.html5Video;o.hasPoster||(this.appendVideos(this.core.getSlideItem(t),{src:i,addClass:"lg-object",index:t,html5Video:l}),this.gotoNextSlideOnVideoEnd(i,t))},l.prototype.onBeforeSlide=function(e){if(this.core.lGalleryOn){var o=e.detail.prevIndex;this.pauseVideo(o)}},l.prototype.onAfterSlide=function(e){var o=this,t=e.detail,i=t.index,l=t.prevIndex,s=this.core.getSlideItem(i);this.settings.autoplayVideoOnSlide&&i!==l&&s.hasClass("lg-complete")&&setTimeout(function(){o.loadAndPlayVideo(i)},100)},l.prototype.loadAndPlayVideo=function(e){var o=this.core.getSlideItem(e);this.core.galleryItems[e].poster?this.loadVideoOnPosterClick(o,!0):this.playVideo(e)},l.prototype.playVideo=function(e){this.controlVideo(e,"play")},l.prototype.pauseVideo=function(e){this.controlVideo(e,"pause")},l.prototype.getVideoHtml=function(e,o,t,l){var d="",a=this.core.galleryItems[t].__slideVideoInfo||{},c=this.core.galleryItems[t],u=c.title||c.alt;u=u?'title="'+u+'"':"";var f='allowtransparency="true"\n            frameborder="0"\n            scrolling="no"\n            allowfullscreen\n            mozallowfullscreen\n            webkitallowfullscreen\n            oallowfullscreen\n            msallowfullscreen';if(a.youtube){var g="lg-youtube"+t,p=s(a,this.settings.youTubePlayerParams);d='<iframe allow="autoplay" id='+g+' class="lg-video-object lg-youtube '+o+'" '+u+' src="'+(r(e)?"//www.youtube-nocookie.com/":"//www.youtube.com/")+"embed/"+(a.youtube[1]+p)+'" '+f+"></iframe>"}else if(a.vimeo){g="lg-vimeo"+t;var h=n(this.settings.vimeoPlayerParams,a);d='<iframe allow="autoplay" id='+g+' class="lg-video-object lg-vimeo '+o+'" '+u+' src="//player.vimeo.com/video/'+(a.vimeo[1]+h)+'" '+f+"></iframe>"}else if(a.wistia){var y="lg-wistia"+t;h=(h=i(this.settings.wistiaPlayerParams))?"?"+h:"",d='<iframe allow="autoplay" id="'+y+'" src="//fast.wistia.net/embed/iframe/'+(a.wistia[4]+h)+'" '+u+' class="wistia_embed lg-video-object lg-wistia '+o+'" name="wistia_embed" '+f+"></iframe>"}else if(a.html5){for(var v="",m=0;m<l.source.length;m++){var b=l.source[m].type,V=b?'type="'+b+'"':"";v+='<source src="'+l.source[m].src+'" '+V+">"}if(l.tracks){var w=function(e){var o="",t=l.tracks[e];Object.keys(t||{}).forEach(function(e){o+=e+'="'+t[e]+'" '}),v+="<track "+o+">"};for(m=0;m<l.tracks.length;m++)w(m)}var S="",j=l.attributes||{};Object.keys(j||{}).forEach(function(e){S+=e+'="'+j[e]+'" '}),d='<video class="lg-video-object lg-html5 '+(this.settings.videojs&&this.settings.videojsTheme?this.settings.videojsTheme+" ":"")+" "+(this.settings.videojs?" video-js":"")+'" '+S+">\n                "+v+"\n                Your browser does not support HTML5 video.\n            </video>"}return d},l.prototype.appendVideos=function(e,o){var t,i=this.getVideoHtml(o.src,o.addClass,o.index,o.html5Video);e.find(".lg-video-cont").append(i);var l=e.find(".lg-video-object").first();if(o.html5Video&&l.on("mousedown.lg.video",function(e){e.stopPropagation()}),this.settings.videojs&&(null===(t=this.core.galleryItems[o.index].__slideVideoInfo)||void 0===t?void 0:t.html5))try{return videojs(l.get(),this.settings.videojsOptions)}catch(s){console.error("lightGallery:- Make sure you have included videojs")}},l.prototype.gotoNextSlideOnVideoEnd=function(e,o){var t=this,i=this.core.getSlideItem(o).find(".lg-video-object").first(),l=this.core.galleryItems[o].__slideVideoInfo||{};if(this.settings.gotoNextSlideOnVideoEnd)if(l.html5)i.on("ended",function(){t.core.goToNextSlide()});else if(l.vimeo)try{new Vimeo.Player(i.get()).on("ended",function(){t.core.goToNextSlide()})}catch(s){console.error("lightGallery:- Make sure you have included //github.com/vimeo/player.js")}else if(l.wistia)try{window._wq=window._wq||[],window._wq.push({id:i.attr("id"),onReady:function(e){e.bind("end",function(){t.core.goToNextSlide()})}})}catch(s){console.error("lightGallery:- Make sure you have included //fast.wistia.com/assets/external/E-v1.js")}},l.prototype.controlVideo=function(e,o){var t=this.core.getSlideItem(e).find(".lg-video-object").first(),i=this.core.galleryItems[e].__slideVideoInfo||{};if(t.get())if(i.youtube)try{t.get().contentWindow.postMessage('{"event":"command","func":"'+o+'Video","args":""}',"*")}catch(l){console.error("lightGallery:- "+l)}else if(i.vimeo)try{new Vimeo.Player(t.get())[o]()}catch(l){console.error("lightGallery:- Make sure you have included //github.com/vimeo/player.js")}else if(i.html5)if(this.settings.videojs)try{videojs(t.get())[o]()}catch(l){console.error("lightGallery:- Make sure you have included videojs")}else t.get()[o]();else if(i.wistia)try{window._wq=window._wq||[],window._wq.push({id:t.attr("id"),onReady:function(e){e[o]()}})}catch(l){console.error("lightGallery:- Make sure you have included //fast.wistia.com/assets/external/E-v1.js")}},l.prototype.loadVideoOnPosterClick=function(e,o){var t=this;if(e.hasClass("lg-video-loaded"))o&&this.playVideo(this.core.index);else if(e.hasClass("lg-has-video"))this.playVideo(this.core.index);else{e.addClass("lg-has-video");var i=void 0,l=this.core.galleryItems[this.core.index].src,s=this.core.galleryItems[this.core.index].video;s&&(i="string"==typeof s?JSON.parse(s):s);var r=this.appendVideos(e,{src:l,addClass:"",index:this.core.index,html5Video:i});this.gotoNextSlideOnVideoEnd(l,this.core.index);var n=e.find(".lg-object").first().get();e.find(".lg-video-cont").first().append(n),e.addClass("lg-video-loading"),r&&r.ready(function(){r.on("loadedmetadata",function(){t.onVideoLoadAfterPosterClick(e,t.core.index)})}),e.find(".lg-video-object").first().on("load.lg error.lg loadedmetadata.lg",function(){setTimeout(function(){t.onVideoLoadAfterPosterClick(e,t.core.index)},50)})}},l.prototype.onVideoLoadAfterPosterClick=function(e,o){e.addClass("lg-video-loaded"),this.playVideo(o)},l.prototype.destroy=function(){this.core.LGel.off(".lg.video"),this.core.LGel.off(".video")},l}()});