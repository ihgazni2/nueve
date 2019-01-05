
function n2v(name) {
    return(nvDict[name])
}

function v2n(value) {
    let index = values.indexOf(value)
    return(names[index])
}


module.exports = {
    n2v:n2v,
    v2n:v2n
}
