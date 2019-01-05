const elel=require("elist")
const fs = require("fs")
const css = require("./css")
const html = require("./html")
const utils = require("./utils")

let config = {
    name:"@",
    colnums:3,
    rownums:3,
    margin:2,
    border:2,
    padding:1,
    srctag:"video",
    srcattribs:{controls:"controls",src:"./videos/Firefox.mp4"},
    tag:"canvas",
    attribs:{},
    filter:"cubic",
    text:"",
    tail:"",
    eleBgColor:"#0000ff",
    marginBgColor:"#000000",
    tagList:undefined,
    attribsList:undefined,
    textList:undefined,
    tailList:undefined,
    filterList:undefined
}


function prepare() {
    let dir = path.dirname(require.resolve('nueve'))
    fs.mkdirSync(path.join(".",config.name))
    fs.mkdirSync(path.join(".",config.name,"filters"))
    fs.mkdirSync(path.join(".",config.name,"videos"))
    utils.copyDir(path.join(dir,"common"),path.join(".",config.name,"common"))
    utils.copyDir(path.join(dir,"filters",config.filter),path.join(".",config.name,"filters",config.filter))
    utils.copyDir(path.join(dir,"videos"),path.join(".",config.name,"videos"))
}

function creat() {
    css.css(config)
    html.html(config)
    let dir = path.dirname(require.resolve('nueve'))
}

module.exports = {
    config:config,
    prepare:prepare,
    creat:creat
}
