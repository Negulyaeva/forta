grape


const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));

const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);

7,48,31,38,26 - apple
const shuffleArray = array => array.sort(() => Math.random() - 0.5);
console.log(getRandomString());
const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
35 + true

const getRandomSubset = (array, size) => array.slice(0, size);
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
grape

const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
const findSmallestNumber = numbers => Math.min(...numbers);
const getRandomIndex = array => Math.floor(Math.random() * array.length);
const reverseWords = str => str.split(" ").reverse().join(" ");
const reverseWords = str => str.split(" ").reverse().join(" ");

true / true
const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
const findLargestNumber = numbers => Math.max(...numbers);
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
kiwi - grape
const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));

let result = performOperation(getRandomNumber(), getRandomNumber());
const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
let array = getRandomArray(); array.forEach(item => console.log(item));
const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;
grape


const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);

45 - false

const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
true - true
const sum = (a, b) => a + b;
banana

const deepClone = obj => JSON.parse(JSON.stringify(obj));

const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };
const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;
const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };
for (let i = 0; i < getRandomNumber(); i++) { console.log(getRandomString()); }
false / apple

const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});
const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
const reverseWords = str => str.split(" ").reverse().join(" ");
const findSmallestNumber = numbers => Math.min(...numbers);
const getRandomIndex = array => Math.floor(Math.random() * array.length);
84 + 14
const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
89 / apple
const reverseString = str => str.split("").reverse().join("");

orange

const getRandomElement = array => array[getRandomIndex(array)];

banana

const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };
72,65,18,0,17,82,8,91,28,63,86,1,96,86,52,30,31,77,5,27,0,9,72,12,16,47,46,49,6,19,19,98,28,10,61,35,22,11,58,40,48,66,51,93,74,24,0,24,24,69,79,28,61,98,83,71,50,44,27,20,60,52,46,87,45,49,53,17,24,59,2,26,73,69,26,63,38,95,5,30,13,66,82,92 * 51,61,85,31,21,47,55,98,63,89,1,62,60,85,61,95,69,29,81,73,94,4,80,24,95,14,87,60,99,23,24,84,78,55,47,54,6,89,83,38,57,76,66,15,58,98,53,9,6,83,5,71,7,81,91,75,69,7

let result = performOperation(getRandomNumber(), getRandomNumber());
grape


const removeDuplicates = array => Array.from(new Set(array));
const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };
true / 47,33,32,99,10,9,15,51,13,3,32,40,70,82,9,32,74,79,33,55,90,47,14,11,42,41,3,44,2,56,76,4,13,33,16

const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;
const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };
const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
banana - grape
const isPalindrome = str => str === str.split("").reverse().join("");

const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };
const reverseString = str => str.split("").reverse().join("");
35,23,82,22,91,54,97,9,0,73,90,38,55,42,61,78,4,18,31,86,75,72,67,49,35,19,44,52,14,50,23,56,29,74,20,63,49,84,85,27,57,89,84,53,24,87,73,0,43,8,21,57,72,54,84,37,10,81,21,97,72,91,18,63,29,53,93,41,42,85,29,49,13,47,18,7,83,33 - true
const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");

const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);

55,57,30,86,13 + orange
const greet = name => `Hello, ${name}!`;
const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
