/**
 * (c) 2013 Rob Wu <gwnRob@gmail.com>
 * Released under the MIT license.
 *
 * Auto-generated from "data" dir by build.js
 * Because the Add-on SDK does not support loading assets
 * from the data dir for third-party modules.
 **/

'use strict';

const base64 = require('sdk/base64');

function uri(path) {
    path = (''+path).split(/[#?]/, 1)[0];
    if (!dataFiles[path]) throw new Error('Resource not found: ' + path);
    return dataFiles[path];
}
exports.url = uri;
exports.load = function(path) {
    var fileAsBase64 = uri(path).split(',')[1];
    return base64.decode(fileAsBase64);
};

const dataFiles = {
  "browserActionBadge.html": '<!DOCTYPE html><html><head><meta charset="utf-8"><title>Browser action button</title><style>* { -moz-box-sizing: border-box; box-sizing: border-box;}html, body, button { display: block; margin: 0; padding: 0; width: 100%; height: 100%;}button { -moz-appearance: toolbarbutton;}button::-moz-focus-inner { border: 0;}#button-img { width: 19px; height: 19px; max-width: 100%; max-height: 100%; position: absolute; margin: auto; top: 0; left: 0; right: 0; bottom: 0;}/** * Styles created using my eyes and a peek into badge_util.cc */#badgeText { position: absolute; display: inline-block; vertical-align: middle; bottom: 0px; right: 0px; height: 12px; max-width: 100%; padding: 0 1px; pointer-events: none; overflow: hidden; white-space: pre; font-size: 9.5px; font-weight: bold; font-family: Arial, Helvetica, sans-serif; color: #FFF; background-image: linear-gradient( to bottom, rgba(255, 255, 255, 0.624) 0, rgba( 0, 0, 0, 0 ) 10%, rgba( 0, 0, 0, 0.255) 90%, rgba( 0, 0, 0, 0.377) 100% ); background-clip: padding-box; border-radius: 2px; border-style: solid; border-width: 1px; /* overridden by script */ background-color: #E00000; border-color: #E00000;}#badgeText:empty { display: none;}@media (max-height: 19px) { #badgeText { height: 11px; padding: 0; font-size: 8.2px; border-left-width: 0.5px; border-right-width: 0.5px; }}</style></head><body><button> <img id="button-img" src="default_icon.png"></button><span id="badgeText"></span></body></html>',
    "browserActionBadge.js": '"use strict";var badgeText=document.getElementById("badgeText");self.port.on("setBadgeText",function(a){badgeText.textContent=a;badgeText.style.display=a?"":"none"});self.port.on("setBadgeBackgroundColor",function(b){if(b.every(function(c){c===0})){b=[238,0,0,255]}b[3]=b[3]/255;function a(){"rgba("+b.join(",")+")"}badgeText.style.backgroundColor=a();for(let i=0;i<3;++i){b[i]=Math.round(b[i]*0.95)}badgeText.style.borderColor=a()});self.port.on("setIcon",function(a){document.getElementById("button-img").src=a});self.port.on("enabled",function(a){document.documentElement.classList[a?"remove":"add"]("disabled");document.querySelector("button").disabled=!a});self.postMessage("");',
    "popup.html": '<!DOCTYPE html><html><head><metacharset="utf-8"><title></title></head><body></body></html>',
    "popup.js": '"use strict";var lastHeight=0;var lastWidth=0;function updatePanelDimensions(){let wrapper=document.documentElement;let height=wrapper.scrollHeight;let width=wrapper.scrollWidth;if(height===lastHeight&&width===lastWidth){return}let dimensions={height:height,width:width};self.port.emit("dimensions",dimensions)}var deferredDimensionCheck;var lastChecked=0;var rootObserver=new MutationObserver(function(){var a=Date.now();clearTimeout(deferredDimensionCheck);if(a-lastChecked>200){updatePanelDimensions()}else{deferredDimensionCheck=setTimeout(updatePanelDimensions,10)}lastChecked=a});rootObserver.observe(document.documentElement,{attributes:true,childList:true,characterData:true,subtree:true,attributeOldValue:false,characterDataOldValue:false});if(document.readyState=="complete"){updatePanelDimensions()}else{document.addEventListener("DOMContentLoaded",updatePanelDimensions)}const CLOSE_TOKEN="window.close."+Math.random();document.addEventListener(CLOSE_TOKEN,function(){self.port.emit("hide")});self.on("detach",function(){window.dispatchEvent(new CustomEvent("unload"))});document.documentElement.setAttribute("onreset",\'document.documentElement.removeAttribute("onreset");window.close=function(){document.dispatchEvent(new CustomEvent("\'+CLOSE_TOKEN+\'"));};\');document.documentElement.onreset();' 
};
