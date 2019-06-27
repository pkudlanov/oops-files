const fs = require('fs');
const { randomWord } = require('./create-files');
const { deleteFiles } = require('./delete-files');
const { createFiles } = require('./create-files');

const directory = './test-files/';

describe('testing createFiles Function', () => {
    afterEach(done => {
        deleteFiles(directory, done);
    });

    it('creates random word', () => {
        const result = randomWord();
        expect(result).toEqual(expect.any(String));
    });

    it('creates a bunch of files with random words', done => {
        createFiles(directory, 100, err => {
            expect(err).toBeFalsy();
            fs.readdir(directory, { encoding: 'utf8' }, (err, files) => {
                expect(files).toHaveLength(100);
                done();
            });
        });
    });
});
