const fs = require('fs');

function deleteFiles(path, callback) {
    fs.readdir(path, (err, files) => {
        if(files.length === 0) callback();
        let deletedFiles = 0;

        for(const file of files) {
            fs.unlink(`${path}${file}`, err => {
                if(err) return callback();
                deletedFiles++;
                if(deletedFiles === files.length) callback();
            });
        }
    });
}

module.exports = { deleteFiles };
