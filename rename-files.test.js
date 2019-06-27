//const fs = require('fs');
const { createFiles } = require('./create-files');
const { deleteFiles } = require('./delete-files');
//const { renameFiles } = require('./rename-files');

const directory = './test-files/';

describe('testing rename function', () => {
    beforeEach(done => {
        createFiles(directory, 100, done);
    });

    afterEach(done => {
        deleteFiles(directory, done);
    });

    it('get the last modified date of a file', () => {
        const result = 'result';
        expect(result).toEqual('result');
    });
});
