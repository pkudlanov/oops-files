const fs = require('fs');
const { createFiles } = require('./create-files');
const { deleteFiles } = require('./delete-files');

const directory = './test-files/';

describe('testingg deleting files function', () => {
    beforeEach(done => {
        createFiles(directory, 100, (err) => {
            done(err);
        });
    });
    
    it('deletes a bunch of file', done => {
        deleteFiles(directory, () => {
            fs.readdir(directory, { encoding: 'utf8' }, (err, files) => {
                if(err) return console.error(err);
                expect(files).toHaveLength(0);
                done();
            });
        });
    });
});
