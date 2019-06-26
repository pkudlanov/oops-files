const fs = require('fs');
const path = require('path');
const randomWord = require('./random-word');

describe('rename a large group of files according to a certain syntax', () => {
  beforeEach(done => {
    for(let i = 0; i < 100; i++) {
      const path = `./${i}.txt`;
      const data = randomWord();
      fs.writeFile(path, data, done);
    }
  });
  afterEach(done => {
    fs.readdir('./test-files', (err, files) => {
      if(err) console.error(err);

      for(const file of files) {
        fs.unlink(path.join('/test-files', file), done);
      }
    });
  });
});
