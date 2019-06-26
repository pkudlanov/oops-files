// const fs = require('fs');
const { randomWord } = require('./create-files');
const { deleteFiles } = require('./delete-files');

describe('testing createFiles Function', () => {
    afterEach(done => {
        deleteFiles('./test-files/', done);
    });

    it('creates random word', () => {
        const result = randomWord();
        expect(result).toEqual(expect.any(String));
    });

    
});
