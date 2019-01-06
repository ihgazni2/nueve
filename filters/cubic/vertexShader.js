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
                  //
                  const vertexShader = `
                    attribute vec4 aVertexPosition;
                    attribute vec3 aVertexNormal;
                    attribute vec2 aTextureCoord;
                  
                    uniform mat4 uNormalMatrix;
                    uniform mat4 uModelViewMatrix;
                    uniform mat4 uProjectionMatrix;
                  
                    varying highp vec2 vTextureCoord;
                    varying highp vec3 vLighting;
                  
                    void main(void) {
                      gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
                      vTextureCoord = aTextureCoord;
                  
                      // Apply lighting effect
                  
                      highp vec3 ambientLight = vec3(0.3, 0.3, 0.3);
                      highp vec3 directionalLightColor = vec3(1, 1, 1);
                      highp vec3 directionalVector = normalize(vec3(0.85, 0.8, 0.75));
                  
                      highp vec4 transformedNormal = uNormalMatrix * vec4(aVertexNormal, 1.0);
                  
                      highp float directional = max(dot(transformedNormal.xyz, directionalVector), 0.0);
                      vLighting = ambientLight + (directionalLightColor * directional);
                    }
                  `;
                  //
                  exports.vertexShader = vertexShader
                }) 
           ])
        }
);
