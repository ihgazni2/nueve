let filterTem = `    <div class="filter" seq="@seq@" name="@filter@">
        <script id="glmatrix" src="./common/glmatrix.js"></script>
        <script id="dimension" src="./common/dimension.js"></script>
        <script id="render" src="./common/render.js"></script>
        <script id="vertexShader" src="./filters/@filter@/vertexShader.js"></script>
        <script id="fragmentShader" src="./filters/@filter@/fragmentShader.js"></script>
        <script id="getWebGLContext" src="./filters/@filter@/getWebGLContext.js"></script>
        <script id="loadShader" src="./filters/@filter@/loadShader.js"></script>
        <script id="initShaderProgram" src="./filters/@filter@/initShaderProgram.js"></script>
        <script id="setProgramInfo" src="./filters/@filter@/setProgramInfo.js"></script>
        <script id="initBuffers" src="./filters/@filter@/initBuffers.js"></script>
        <script id="initTexture" src="./filters/@filter@/initTexture.js"></script>
        <script id="updateTexture" src="./filters/@filter@/updateTexture.js"></script>
        <script id="drawScene" src="./filters/@filter@/drawScene.js"></script>
        <script id="drawSceneOptions" src="./filters/@filter@/drawSceneOptions.js"></script>
    </div>`



function creatFilter(seq,name) {
    let s = filterTem.replace(/@seq@/g,seq.toString())
    s = s.replace(/@filter@/g,name.toString())
    return(s+'\n')
}









let htmlTem=`<html>
<head>
    <link type="text/css" rel="styleSheet"  href="./#name#.css" />
</head>
<body>
    <div id="margin">
@entries@
    </div>
</body>
<div id ="filters">
@filters@
</div>
<script>
    document.addEventListener('DOMContentLoaded', renderAll, false);
</script>
</html>`



function creatAttribStr(attribs) {
    if(attribs===undefined) {
        return("")
    } else {
        let s = ""
        for(let k in attribs) {
            let attrib = k + '=' +'"' + attribs[k] + '"'
            s = s + attrib +"\x20"
        }
        s = s.slice(0,-1)
        return(s)
    }
}

function creatOpenTagStr(tag,attribs,row,col) {
    attribs = JSON.parse(JSON.stringify(attribs))
    attribs.row = row
    attribs.col = col
    let as = creatAttribStr(attribs)
    let s = "<"+tag+"\x20" + as
    s = s.trim()
    s = s +">"
    s = "        " + s
    return(s)
}

function creatCloseTagStr(tag) {
    let s = "        </"+tag+">"
    return(s)
}


function creatEntry(tag,attribs,row,col) {
    let entry = creatOpenTagStr(tag,attribs,row,col)
    entry = entry +"\n"
    entry = entry + creatCloseTagStr(tag) + "\n"
    return(entry)
}

function getFlatSeq(colnums,replace) {
    let seq = (((replace.row -1)<0)?0:(replace.row -1))*colnums
    seq = seq + replace.col
    return(seq)
}

/*
replace = {
    row:0,
    col:0,
    tag:config.tag,
    attribs:config.attribs
}
*/

function doReplace(arr,replaces,config) {
    for(let each of replaces) {
        let seq = getFlatSeq(config.colnums,each)
        arr[seq] = creatEntry(each.tag,each.attribs,each.row,each.col)
    }
    return(arr)
}

function creatEntries(config,replace) {
    let arr=[]
    for(let i=0;i<config.rownums;i++) {
        for(let j=0;j<config.colnums;j++) {
            arr.push(creatEntry(config.tag,config.attribs,i,j))
        }
    }
    let replaces;
    if(replace === undefined) {
        replaces = [{row:0,col:0,tag:config.srctag,attribs:config.srcattribs}]
    } else if(Array.isArray(replace)) {
        replaces = replace
    } else {
        replaces = [replace]
    }
    console.log(replaces)
    arr = doReplace(arr,replaces,config)
    let html = arr.join("") 
    html = html.trim()
    html = "        " + html
    return(html)
}



function creatHtml(config,replace) {
    let html = htmlTem.replace("@entries@",creatEntries(config))
    html = html.replace("#name#",config.name)
    //current version only support 1 filter
    let filter = creatFilter(0,config.filter)
    html = html.replace("@filters@",filter)
    //
    fs.writeFileSync(path.join(".",config.name,config.name)+".html",html)
    return(html)
}

module.exports = {
    html:creatHtml
}

