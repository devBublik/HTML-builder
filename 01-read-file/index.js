const fs = require('fs');
const path = require('path');
let stream = fs.createReadStream(path.join(__dirname,'text.txt'), 'utf-8', (err, data) => {})

stream.on('data', (chunck) => {
    console.log(chunck)
})