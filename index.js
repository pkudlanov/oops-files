const { fileRename } = require('./rename-files');

const directory = process.argv[2];

fileRename(directory, err => {
    if(err) return console.error(err);

    console.log('Your files have been renamed!!');
});
