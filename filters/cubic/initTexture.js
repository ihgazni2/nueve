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
                    function initTexture(gl) {
                      const texture = gl.createTexture();
                      gl.bindTexture(gl.TEXTURE_2D, texture);
                      // Because video havs to be download over the internet
                      // they might take a moment until it's ready so
                      // put a single pixel in the texture so we can
                      // use it immediately.
                      const level = 0;
                      const internalFormat = gl.RGBA;
                      const width = 1;
                      const height = 1;
                      const border = 0;
                      const srcFormat = gl.RGBA;
                      const srcType = gl.UNSIGNED_BYTE;
                      const pixel = new Uint8Array([0, 0, 255, 255]);  // opaque blue
                      gl.texImage2D(gl.TEXTURE_2D, level, internalFormat,
                                    width, height, border, srcFormat, srcType,
                                    pixel);
                    
                      // Turn off mips and set  wrapping to clamp to edge so it
                      // will work regardless of the dimensions of the video.
                      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
                      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
                      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
                      return texture;
                    }
                    exports.initTexture = initTexture
                }) 
           ])
        }
);
