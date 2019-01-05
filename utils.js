const ncp = require("ncp")

function copyDir(from,to) {
    ncp(from, to, function (err) {
        if (err) {
           return console.error(err);
        } else {
           console.log('done!');
        }
    });
}

module.exports = {
    copyDir:copyDir
}
