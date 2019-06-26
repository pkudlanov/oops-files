// const fs = require('fs');

// const fileFolder = './test-files/';

// const readDirectory = (directory, callback) => {
//   fs.readdir(directory, (err, files) => {
//     callback(err, files);
//   });
// };

// function fileRename(oldPath, newName, callback) {

//   fs.readdir('./test-files', { encoding: 'utf8' }, (err, files) => {
//     for(const file of files) {
//       fs.rename(`${fileFolder}${file}`, `${fileFolder}/some_other_file.txt`, err => {
//         if(err) console.error(err);
//         console.log(`${fileFolder}${files[20]}`);
//       });
//     }
//   });
// }
