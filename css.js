
let cssTems = {
    "margin":`#margin {
    background:@background@;
    position:fixed;
    left:0vw;
    top:0vh;
    width: 100vw;
    height: 100vh;
}`,
    "ele":`@row@@col@ {
    position:fixed;
    left:@left@vw;
    top:@top@vh;
    width: @width@vw;
    height: @height@vh;
    margin: @marginTB@vh @marginLR@vw @marginTB@vh @marginLR@vw;
    border-top:@borderTB@vh silver solid;
    border-left:@borderLR@vw silver solid;
    border-bottom:@borderTB@vh silver solid;
    border-right:@borderLR@vw silver solid;
    padding:@paddingTB@vh @paddingLR@vw @paddingTB@vh @paddingLR@vw;
    background:@background@;
}`
}


function getWHratio(config) {
    return((100- config.margin*2-config.border*2-config.padding*2) / 100)
}


function getRatios(config){
    let hwratio = getWHratio(config)
    let d = {}
    d.totalWidth = 100 / config.colnums
    d.totalHeight = 100 /config.rownums
    d.width = d.totalWidth * hwratio
    d.height = d.totalHeight * hwratio
    d.marginLR = d.totalWidth * config.margin /100
    d.marginTB = d.totalHeight * config.margin /100
    d.borderLR = d.totalWidth * config.border /100
    d.borderTB = d.totalHeight * config.border /100
    d.paddingLR = d.totalWidth * config.padding /100
    d.paddingTB = d.totalHeight * config.padding /100
    return(d)
}

function creatMarginCss(config) {
    return(cssTems.margin.replace("@background@",`${config.marginBgColor}`))
}

function creatEleCss(config,i,j) {
    d = getRatios(config)
    d.attribs = {row:i,col:j}
    d.left = d.totalWidth * j
    d.top = d.totalHeight * i
    let css = cssTems.ele
    css = css.replace("@row@",`[row="${i}"]`)
    css = css.replace("@col@",`[col="${j}"]`)
    css = css.replace("@left@",`${d.left}`)
    css = css.replace("@top@",`${d.top}`)
    css = css.replace("@width@",`${d.width}`)
    css = css.replace("@height@",`${d.height}`)
    css = css.replace(/@marginTB@/g,`${d.marginTB}`)
    css = css.replace(/@marginLR@/g,`${d.marginLR}`)
    css = css.replace(/@borderTB@/g,`${d.borderTB}`)
    css = css.replace(/@borderLR@/g,`${d.borderLR}`)
    css = css.replace(/@paddingTB@/g,`${d.paddingTB}`)
    css = css.replace(/@paddingLR@/g,`${d.paddingLR}`)
    css = css.replace("@background@",`${config.eleBgColor}`)
    return(css)
}


function creatCss(config) {
    let css = creatMarginCss(config) + "\n\n\n"
    for(let i=0;i<config.rownums;i++) {
        for(let j=0;j<config.colnums;j++) {
            css = css + creatEleCss(config,i,j) + "\n\n"
        }
    }
    fs.writeFileSync(path.join(".",config.name,config.name)+".css",css)
    return(css)
}

module.exports = {
    css:creatCss
}

