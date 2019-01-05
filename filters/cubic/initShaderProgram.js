(function webpackUniversalModuleDefinition(root, factory) {
    if(typeof exports === 'object' && typeof module === 'object')
        module.exports = factory();
    else if(typeof define === 'function' && define.amd)
        define([], factory);
    else {
        var a = factory();
        console.log(a)
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
                    
                    function initShaderProgram(gl, vertexShader, fragmentShader) {
                        vertexShader = loadShader(gl, gl.VERTEX_SHADER, vertexShader);
                        fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fragmentShader);
                        // Create the shader program
                        const shaderProgram = gl.createProgram();
                        gl.attachShader(shaderProgram, vertexShader);
                        gl.attachShader(shaderProgram, fragmentShader);
                        gl.linkProgram(shaderProgram);
                        // If creating the shader program failed, alert
                        if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
                          alert('Unable to initialize the shader program: ' + gl.getProgramInfoLog(shaderProgram));
                          return null;
                        }
                        return shaderProgram;
                    }
                    exports.initShaderProgram = initShaderProgram
                }) 
           ])
        }
);