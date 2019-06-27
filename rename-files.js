const fs = require('fs');

//const fileFolder = './test-files/';

function getModifiedTime(filePath, callback) {
    fs.stat(filePath, (err, stats) => {
        callback(err, stats && stats.mtime.toISOString());
    });
}

function fileRename(directory, callback) {

    fs.readdir(directory, { encoding: 'utf8' }, (err, files) => {
        if(err) return callback(err);
        let renamedFiles = 0;

        for(const file of files) {
            fs.readFile(`${directory}${file}`, (err, fileContent) => {
                if(err) return callback(err);

                getModifiedTime(`${directory}${file}`, (err, modifiedTime) => {
                    if(err) return callback(err);
                    const number = file.split('.')[0];
                    fs.rename(`${directory}${file}`, `${directory}${fileContent}-${number}-${modifiedTime}`, err => {
                        if(err) return callback(err);
                        renamedFiles++;
                        if(renamedFiles === files.length) callback();
                    });
                });
            });
        }
    });
}

module.exports = { getModifiedTime, fileRename }; 
