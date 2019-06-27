const fs = require('fs');
const { createFiles } = require('./create-files');
const { deleteFiles } = require('./delete-files');
const { getModifiedTime, fileRename } = require('./rename-files');

const directory = './test-files/';

describe('testing rename function', () => {
    beforeEach(done => {
        createFiles(directory, 100, done);
    });

    afterEach(done => {
        deleteFiles(directory, done);
    });

    it('get the last modified date of a file', done => {
        getModifiedTime(`${directory}1.txt`, (err, modifiedTime) => {
            expect(err).toBeFalsy();
            expect(modifiedTime).toEqual(expect.any(String));
            done();
        });
    });

    it('renames the files to the scheme of content-filenumber-dateModified', done => {
        fileRename(directory, err => {
            expect(err).toBeFalsy();
            fs.readdir(directory, (err, files) => {
                expect(err).toBeFalsy();
                expect(files).toHaveLength(100);
                files.forEach(file => {
                    expect(file).toMatch(/\w+-\d+-\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d+Z/);
                    done();
                });
            });
        });
    });
});
