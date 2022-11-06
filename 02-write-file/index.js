const fs = require('fs');
const path = require('path');
const { stdin, stdout } = process;

let steamWrite = fs.createWriteStream(path.join(__dirname, 'res.txt'))
stdout.write('What is your name?')

stdin.on('data', (data) => {
    if (data.toString().trim() !== 'exit') {
        steamWrite.write(data)
    } else  {
        process.exit()
    }
});

process.on('exit', () => {
    stdout.write('Nice to meet you!')
})
