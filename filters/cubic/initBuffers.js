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
                  
                    function initBuffers(gl) {
                        //顶点位置数组缓冲区
                        const positionBuffer = gl.createBuffer();
                        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
                       //右手坐标系 z轴穿出纸面
                      const positions = [
                        // Front face
                        -1.0, -1.0,  1.0,
                         1.0, -1.0,  1.0,
                         1.0,  1.0,  1.0,
                        -1.0,  1.0,  1.0,
                    
                        // Back face
                        -1.0, -1.0, -1.0,
                        -1.0,  1.0, -1.0,
                         1.0,  1.0, -1.0,
                         1.0, -1.0, -1.0,
                    
                        // Top face
                        -1.0,  1.0, -1.0,
                        -1.0,  1.0,  1.0,
                         1.0,  1.0,  1.0,
                         1.0,  1.0, -1.0,
                    
                        // Bottom face
                        -1.0, -1.0, -1.0,
                         1.0, -1.0, -1.0,
                         1.0, -1.0,  1.0,
                        -1.0, -1.0,  1.0,
                    
                        // Right face
                         1.0, -1.0, -1.0,
                         1.0,  1.0, -1.0,
                         1.0,  1.0,  1.0,
                         1.0, -1.0,  1.0,
                    
                        // Left face
                        -1.0, -1.0, -1.0,
                        -1.0, -1.0,  1.0,
                        -1.0,  1.0,  1.0,
                        -1.0,  1.0, -1.0,
                      ];
                    
                      // Now pass the list of positions into WebGL to build the
                      // shape. We do this by creating a Float32Array from the
                      // JavaScript array, then use it to fill the current buffer.
                      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
                    
                      //法线buffer
                      // Set up the normals for the vertices, so that we can compute lighting.
                      const normalBuffer = gl.createBuffer();
                      gl.bindBuffer(gl.ARRAY_BUFFER, normalBuffer);
                    
                      const vertexNormals = [
                        // Front
                         0.0,  0.0,  1.0,
                         0.0,  0.0,  1.0,
                         0.0,  0.0,  1.0,
                         0.0,  0.0,  1.0,
                    
                        // Back
                         0.0,  0.0, -1.0,
                         0.0,  0.0, -1.0,
                         0.0,  0.0, -1.0,
                         0.0,  0.0, -1.0,
                    
                        // Top
                         0.0,  1.0,  0.0,
                         0.0,  1.0,  0.0,
                         0.0,  1.0,  0.0,
                         0.0,  1.0,  0.0,
                    
                        // Bottom
                         0.0, -1.0,  0.0,
                         0.0, -1.0,  0.0,
                         0.0, -1.0,  0.0,
                         0.0, -1.0,  0.0,
                    
                        // Right
                         1.0,  0.0,  0.0,
                         1.0,  0.0,  0.0,
                         1.0,  0.0,  0.0,
                         1.0,  0.0,  0.0,
                    
                        // Left
                        -1.0,  0.0,  0.0,
                        -1.0,  0.0,  0.0,
                        -1.0,  0.0,  0.0,
                        -1.0,  0.0,  0.0,
                      ];
                    
                      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexNormals),
                                    gl.STATIC_DRAW);
                    
                      // Now set up the texture coordinates for the faces.
                    
                      const textureCoordBuffer = gl.createBuffer();
                      gl.bindBuffer(gl.ARRAY_BUFFER, textureCoordBuffer);
                    
                      const textureCoordinates = [
                        // Front
                        0.0,  0.0,
                        1.0,  0.0,
                        1.0,  1.0,
                        0.0,  1.0,
                        // Back
                        0.0,  0.0,
                        1.0,  0.0,
                        1.0,  1.0,
                        0.0,  1.0,
                        // Top
                        0.0,  0.0,
                        1.0,  0.0,
                        1.0,  1.0,
                        0.0,  1.0,
                        // Bottom
                        0.0,  0.0,
                        1.0,  0.0,
                        1.0,  1.0,
                        0.0,  1.0,
                        // Right
                        0.0,  0.0,
                        1.0,  0.0,
                        1.0,  1.0,
                        0.0,  1.0,
                        // Left
                        0.0,  0.0,
                        1.0,  0.0,
                        1.0,  1.0,
                        0.0,  1.0,
                      ];
                    
                      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoordinates),
                                    gl.STATIC_DRAW);
                    
                      // Build the element array buffer; this specifies the indices
                      // into the vertex arrays for each face's vertices.
                    
                      const indexBuffer = gl.createBuffer();
                      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
                    
                      // This array defines each face as two triangles, using the
                      // indices into the vertex array to specify each triangle's
                      // position.
                      //这一句是画点顺序 两个三角形连成一个正方形
                      const indices = [
                        0,  1,  2,      0,  2,  3,    // front
                        4,  5,  6,      4,  6,  7,    // back
                        8,  9,  10,     8,  10, 11,   // top
                        12, 13, 14,     12, 14, 15,   // bottom
                        16, 17, 18,     16, 18, 19,   // right
                        20, 21, 22,     20, 22, 23,   // left
                      ];
                    
                      // Now send the element array to GL
                    
                      gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,
                          new Uint16Array(indices), gl.STATIC_DRAW);
                    
                      return {
                        position: positionBuffer,
                        normal: normalBuffer,
                        textureCoord: textureCoordBuffer,
                        indices: indexBuffer,
                      };
                    }

                  exports.initBuffers = initBuffers
                }) 
           ])
        }
);