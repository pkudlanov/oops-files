// const fs = require('fs');
const { randomWord } = require('./create-files');

describe('testing createFiles Function', () => {
    it('creates random word', () => {
        const result = randomWord();
        expect(result).toEqual(expect.any(String));
    });
});
