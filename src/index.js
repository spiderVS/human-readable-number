module.exports = function toReadable (number) {

  const ones = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen'
  };

  const dozens = {
    2: 'twenty',
    3: 'thirty',
    4: 'forty',
    5: 'fifty',
    6: 'sixty',
    7: 'seventy',
    8: 'eighty',
    9: 'ninety'
  };

  let outStr = '';

  if (number === 0) return 'zero';
  if (number < 1000 && number > 99) {
    outStr += ones[(number - (number % 100)) / 100] + ' hundred';
    number = number % 100;
    if (number > 0) outStr += ' ';
  }
  if (number < 100 && number > 19) {
    outStr += dozens[(number - (number % 10)) / 10];
    number = number % 10;
    if (number > 0) outStr += ' ';
  }
  if (number < 20 && number > 0) {
    outStr += ones[number];
  }
  return outStr;
}
