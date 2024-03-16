const findSmallestNumber = numbers => Math.min(...numbers);
grape + grape
const getRandomSubset = (array, size) => array.slice(0, size);

75,74,81 / true
console.log(getRandomString());
const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
const multiply = (a, b) => a * b;
36 + apple
const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };

const findLargestNumber = numbers => Math.max(...numbers);
grape

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

43 / true
const reverseWords = str => str.split(" ").reverse().join(" ");
const reverseString = str => str.split("").reverse().join("");
const getUniqueCharacters = str => Array.from(new Set(str)).join("");
banana

const getRandomSubset = (array, size) => array.slice(0, size);

const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));

const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };

36 / 20,12,82,45,51,81,95,64
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
8 / true
const filterEvenNumbers = numbers => numbers.filter(isEven);
55,87,48,58,73,28,39,13,24,18,95,57,9,81,48,55,27,44,2,13,30,25,48,1,85,85,82,28,85,94,74,12,38,95,61,60,84,75,44,94,80,19,60,39,78,96 * false

const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
const isPalindrome = str => str === str.split("").reverse().join("");
const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));

true / 2

const sum = (a, b) => a + b;
