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
                    function goRender (i,canvases,vertexShader,fragmentShader,video,drawScene,options) {
                        var id
                        var canvas = canvases[i]
                        var gl = getWebGLContext(canvas)
                        var shaderProgram = initShaderProgram(gl, vertexShader, fragmentShader);
                        var programInfo = setProgramInfo(gl,shaderProgram)
                        var buffers = initBuffers(gl);
                        var texture = initTexture(gl);
                        var copyVideo = false;
                        video.addEventListener('pause', function() {
                            copyVideo = false
                            cancelAnimationFrame(id)
                        }, true);
                        video.addEventListener('play', function() {
                            setDimension(video,canvas,gl)
                            copyVideo = true
                            var now = (new Date()).getTime()
                            var then = 0;
                            function render(now) {
                                now *= 0.001;
                                const deltaTime = now - then;
                                then = now;
                                if (copyVideo) {
                                    updateTexture(gl, texture, video);
                                } else {
                                }
                                options = drawScene(gl, programInfo, buffers, texture, deltaTime,options);
                                id = requestAnimationFrame(render);
                            }
                            id = requestAnimationFrame(render);
                        }, false);
                    }
                    function renderAll() {
                        var video = document.getElementsByTagName('video')[0];
                        var canvases = document.getElementsByTagName('canvas');
                        for(var i=0;i<canvases.length;i++) {
                            (function(i){
                                let options = JSON.parse(JSON.stringify(drawSceneOptions))
                                goRender (i,canvases,vertexShader,fragmentShader,video,drawScene,options)
                            })(i)
                        }
                    }
                    exports.goRender = goRender
                    exports.renderAll = renderAll
                }) 
           ])
        }
);
