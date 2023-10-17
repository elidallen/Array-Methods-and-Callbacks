const isAllPositive = nums.every(num => num >= 0);
// The result will be true because all numbers in the array are greater than or equal to 0.

const isAllShortWords = panagram.every(word => word.length < 8);
// The result will be true because all words in the array have a length less than 8.

const numbersLessThan4 = nums.filter(num => num < 4);
// The result will be [1, 2, 3, 0].

const evenLengthWords = panagram.filter(word => word.length % 2 === 0);
// The result will be ['over', 'the', 'lazy', 'dog'].

const firstDivisibleBy5 = nums.find(num => num % 5 === 0);
// The result will be 5.

const firstLongWord = panagram.find(word => word.length > 5);
// The result will be 'quick'.

const firstDivisibleBy3Index = nums.findIndex(num => num % 3 === 0);
// The result will be 2 because the first number divisible by 3 is at index 2 (value 3).

const firstShortWordIndex = panagram.findIndex(word => word.length < 2);
// The result will be -1 because there are no words with a length less than 2 characters in the array.

nums.forEach(num => {
    console.log(num * 3);
  });

  panagram.forEach(word => {
    console.log(word + '!');
  });

  const multipliedBy100 = nums.map(num => num * 100);
// The result will be [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 0].

const uppercaseWords = panagram.map(word => word.toUpperCase());
// The result will be ['THE', 'QUICK', 'BROWN', 'FOX', 'JUMPS', 'OVER', 'THE', 'LAZY', 'DOG'].

const isSomeDivisibleBy7 = nums.some(num => num % 7 === 0);
// The result will be true because there are numbers in the array divisible by 7.

const hasSomeWordsWithA = panagram.some(word => word.includes('a'));
// The result will be true because there are words in the array containing the letter 'a'.

const sumOfNumbers = nums.reduce((acc, num) => acc + num, 0);
// The result will be 45 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 + 0).

const concatenatedWords = panagram.reduce((acc, word) => acc + ' ' + word, '');
// The result will be 'The quick brown fox jumps over the lazy dog'.

nums.sort((a, b) => a - b);
// The result will be [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].

nums.sort((a, b) => b - a);
// The result will be [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0].

panagram.sort();
// The result will be ['The', 'brown', 'dog', 'fox', 'jumps', 'lazy', 'over', 'quick'].

panagram.sort().reverse();
// The result will be ['quick', 'over', 'lazy', 'jumps', 'fox', 'dog', 'brown', 'The'].

const isPanagram = (() => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    return [...alphabet].every(letter => panagram.join('').toLowerCase().includes(letter));
  })();
  // The result will be true because all the letters from 'a' to 'z' are used at least once in the panagram.

  const cheapProducts = products.filter(product => product.price < 10);
// This will result in an array of products with prices less than 10.

products.sort((a, b) => a.name.localeCompare(b.name));
// This will result in the products sorted alphabetically by product name.