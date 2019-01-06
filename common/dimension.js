

(function webpackUniversalModuleDefinition(root, factory) {
    if(typeof exports === 'object' && typeof module === 'object')
        module.exports = factory();
    else if(typeof define === 'function' && define.amd)
        define([], factory);
    else {
        var a = factory();
        for(var i in a) {
            (typeof exports === 'object' ? exports : root)[i] = a[i];
        }
    }
})(
       this, 
       function() {
          return(
              function(modules) {
               var installedModules = {};
               function __webpack_require__(moduleId) {
                   if(installedModules[moduleId]) {
                       return installedModules[moduleId].exports;
                   }
                   var module = installedModules[moduleId] = {
                       i: moduleId,
                       l: false,
                       exports: {}
                   };
                   modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
                   module.l = true;
                   return(module.exports);
               }
               __webpack_require__.m = modules;
               __webpack_require__.c = installedModules;
               __webpack_require__.d = function(exports, name, getter) {
                   if(!__webpack_require__.o(exports, name)) {
                       Object.defineProperty(exports, name, {
                           configurable: false,
                           enumerable: true,
                           get: getter
                       });
                   }
               };
               __webpack_require__.n = function(module) {
                   var getter = module && module.__esModule ?
                       function getDefault() { return module['default']; } :
                       function getModuleExports() { return module; };
                   __webpack_require__.d(getter, 'a', getter);
                   return getter;
               };
               __webpack_require__.o = function(object, property) { 
                   return Object.prototype.hasOwnProperty.call(object, property); 
               };
               __webpack_require__.p = "";
               return __webpack_require__(__webpack_require__.s = 0);
           })([
               (function(module, exports, __webpack_require__) {
                  "use strict";
                   Object.defineProperty(exports, "__esModule", {
                   value: true
                  });
                  
                   function isPowerOf2(value) {
                     return (value & (value - 1)) == 0;
                   }
                   
                   /**
                   *    get video ratio from canvas.clientWidth,canvas.clientHeight,video.videoWidth,video.video
                   *    @param {float} cw - canvas.clientWidth
                   *    @param {float} ch - canvas.clientHeight
                   *    @param {float} vw - video.videoWidth
                   *    @param {float} vh - video.videoHeight
                   **/
                   function getVideoRatio(cw, ch, vw, vh, ref) {
                       let wr = vw / vh
                       let hr = vh / vw
                       if ((vw <= cw) && (vh <= ch)) {
                   
                       } else if ((vw <= cw) && (vh >= ch)) {
                           vh = ch
                           vw = vh * wr
                       } else if ((vw >= cw) && (vh <= ch)) {
                           vw = cw
                           vh = vw * hr
                       } else if ((vw >= cw) && (vh >= ch)) {
                           if (ref === "width") {
                               vw = cw
                               vh = vw * hr
                               if (vh > ch) {
                                   vh = ch
                                   vw = vh * wr
                               } else {}
                           } else {
                               vh = ch
                               vw = vh * wr
                               if (vw > cw) {
                                   vw = cw
                                   vh = vw * hr
                               } else {}
                           }
                       }
                       return ({
                           vw: vw,
                           vh: vh,
                           left: (cw - vw) / 2,
                           top: (ch - vh) / 2
                       })
                   }
                   
                   function setDimension(video,canvas,gl) {
                       var cw = video.clientWidth
                       var ch = video.clientHeight
                       canvas.width = cw;
                       canvas.height = ch;
                       var vw = video.videoWidth;
                       var vh = video.videoHeight;
                       var d = getVideoRatio(cw, ch, vw, vh)
                       gl.vw=d.vw
                       gl.vh=d.vh
                   }
                   
                   exports.isPowerOf2 = isPowerOf2
                   exports.getVideoRatio = getVideoRatio
                   exports.setDimension = setDimension
                }) 
           ])
        }
);
