
const fs = require('fs');
const path = require('path');

let curDir = path.join( __dirname + '\\files');
let copyDir = path.join(__dirname + '\\files-copy');

function toMakeDir(copyDir) {
    fs.access(copyDir, (error) => {
        if (error && error.code === 'ENOENT') {
            fs.mkdir(copyDir, {recursive: true}, (error) => {
                if (error) {
                    return console.log(error.message);
                }
            });
            duplicateDir(curDir, copyDir)
        } else {
            fs.readdir(copyDir, (error, fileNames) => {
                if (error) {
                    return console.log(error.message);
                }
                fileNames.forEach(filename => {
                    fs.unlink(path.join(copyDir, filename), (error) => {
                        if (error) {
                            return console.log(error.message);
                        }
                    })
                })
            })
            duplicateDir(curDir, copyDir)
        }
    });
}

function duplicateDir(curDir, copyDir) {
    fs.readdir(curDir, {withFileTypes: true}, (error, fileBuffer) => {

        fileBuffer.forEach(filename => {

            let src = path.join(curDir, filename.name);
            let copy = path.join(copyDir, filename.name);

                fs.copyFile(src, copy, function(error) {
                    if (error) {
                       return console.log(error.message);
                    }
                });
        })
    })
}

toMakeDir(copyDir);

