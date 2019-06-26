const names = [
  'Prankster',
  'Coffee_Mug',
  'Mt._Rushmour',
  'Philadelphia',
  'Amish_Boy',
  'Pink_Brick',
  'Glass'
]; // 7 words

function randomWord() {
  let number = Math.random();
  number = number * 7;
  const wholeNumber = Math.floor(number);
  return names[wholeNumber];
}

module.exports = randomWord;
