const { createFiles } = require('./create-files');
const { deleteFiles } = require('./delete-files');
// const { readDirector, renameFiles } = require('./rename-files');

const directory = './test-files/';

describe('testing rename function', () => {
    beforeEach(done => {
        createFiles(directory, 100, done);
    });

    afterEach(done => {
        deleteFiles(directory, done);
    });
    
    it('passing test', () => {
        const result = 'yes sir';
        expect(result).toEqual('yes sir');
    });
});
