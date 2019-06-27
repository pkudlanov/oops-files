const fs = require('fs');

// const fileFolder = './test-files/';

function getModifiedTime(filePath, callback) {
    fs.stat(filePath, (err, stats) => {
        callback(err, stats && stats.mtime.toISOString());
    });
}

// function fileRename(oldPath, newName, callback) {

//     fs.readdir('./test-files', { encoding: 'utf8' }, (err, files) => {
//         for(const file of files) {
//             fs.rename(`${fileFolder}${file}`, `${fileFolder}/some_other_file.txt`, err => {
//                 if(err) console.error(err);
//                 console.log(`${fileFolder}${files[20]}`);
//             });
//         }
//     });
// }

module.exports = { getModifiedTime };
