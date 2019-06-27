//const fs = require('fs');
const { createFiles } = require('./create-files');
const { deleteFiles } = require('./delete-files');
const { getModifiedTime } = require('./rename-files');

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
});
