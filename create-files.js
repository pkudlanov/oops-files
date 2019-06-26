const fs = require('fs');

const names = [
    'Prankster',
    'Coffee_Mug',
    'Mt._Rushmour',
    'Philadelphia',
    'Amish_Boy',
    'Pink_Brick',
    'Glass',
    'glasssssss'
];

function randomWord() {
    let number = Math.random();
    number = number * names.length;
    const wholeNumber = Math.floor(number);
    return names[wholeNumber];
}

function createFiles(directory, count, callback) {
    let filesWritten = 0;
    for(let i = 1; i <= count; i++) {
        const path = `${directory}${i}.txt`;
        fs.writeFile(path, randomWord(), err => {
            if(err) return callback(err);
            filesWritten++;
            if(filesWritten === count) callback();
        });
    }
}

module.exports = { randomWord, createFiles };
