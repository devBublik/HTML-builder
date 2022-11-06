const readdir = require('node:fs/promises');
const path = require('path');
const  fs = require('fs');
const { stat } = require('node:fs');
const files = fs.readdir(path.join(__dirname, 'secret-folder'), {withFileTypes : true}, (err, files) => {
    if (err)
        console.log(err);
    else {
        for (let file of files) {
            if (file.isFile()) {
                stat(path.join(__dirname, `secret-folder/${file.name}`), (err, stats) => {
                    if (stats) {
                        let nameFile = file.name.split('.')[0];
                        let ext = path.extname(file.name).slice(1);
                        let sizeFile = (stats.size / 1024).toFixed(3);
                        console.log(`${nameFile} - ${ext} - ${sizeFile}kb`)
                    }
                    
                })
            }
            
        }
    }
})