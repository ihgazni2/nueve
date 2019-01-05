# nueve
>__simple test-toolset  for shaders webgl__

# Install

>__npm install nueve__


## Usage
-------------------------------------------------------

        var nueve = require("nueve")
        nueve

__1. nueve.config__  

![](/doc/images/nueve.config.0.png)


__2. nueve.prepare__
        
        nueve.prepare()
        
        //will creat a dir(named config.name)include three subdirs: 
        //  config.name
        //     -common
        //(some matrix-calulate funcs copied from https://github.com/mdn/webgl-examples/blob/gh-pages/tutorial/gl-matrix.js)
        //(it will be used by the other js files)
        //     -filters
        //         -filter-dir
        //         -filter-dir
        //         -filter-dir
        //         ........
        //(a exzample filter "cubic" copied from https://github.com/mdn/webgl-examples/tree/gh-pages/tutorial/sample8 already exist)
        //     -videos
        //         -video
        //         -video
        //         ......
        //(a exzample video "Firefox.mp4" copied from https://github.com/mdn/webgl-examples/tree/gh-pages/tutorial/sample8 already exist)
        //  put your video for test to videos
        //  put your filter-dir to filters
        


![](/Images/prepare.0.PNG)
![](/Images/prepare.1.PNG)         
        
__3. nueve.creat__

        nueve.creat()
        // will generate .html and .css in the dir(named config.name)

![](/Images/prepare.0.PNG)
![](/Images/prepare.1.PNG)


__4. config firefox__

        //because using local video file for testing, to avoid webgl CROS related issue, need to disable the security-policy
        //about:config
        //set security.fileuri.strict_origin_policy to false
        //reopen firefox

![](/Images/prepare.0.PNG)
![](/Images/prepare.1.PNG)


__5. open generated .html using firfox__


![](/Images/prepare.0.PNG)
![](/Images/prepare.1.PNG)

        
-------------------------------------------------------

## Doc 
-------------------------------------------------------

In Progressing...
        

        

-------------------------------------------------------


## PACKAGE DEPENDANY

---------------------------------------------------------
[elist](https://www.npmjs.com/package/elist)<br>
[ncp](https://www.npmjs.com/package/ncp)<br>

----------------------------------------------------------

## CODE REFERENCE
_(thanks to)_

------------------------------------------------------------------
[webgl-examples](https://github.com/mdn/webgl-examples)  

--------------------------------------------------------------------


----------------------------------------------


## TODO
-----------------------------------------------
__1.UI__<br>
__2.doc__<br>
__3.load different shaders__<br>
__4.pipeline__<br>
__5.multistream__<br>
__6.shaders in sequence__<br>
__7.some codes was written five years ago in obj-C,need translated to js
[multistream](https://github.com/ihgazni/VTUtils.git)
[voroni](https://github.com/ihgazni/voronoi_modified_GPUImage)

-----------------------------------------------
