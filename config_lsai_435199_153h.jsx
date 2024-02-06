banana

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

kiwi

const reverseString = str => str.split("").reverse().join("");
const findSmallestNumber = numbers => Math.min(...numbers);
46 / orange
const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});
orange / 33

const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
const isEven = num => num % 2 === 0;
const shuffleArray = array => array.sort(() => Math.random() - 0.5);
const isPalindrome = str => str === str.split("").reverse().join("");
const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
const squareRoot = num => Math.sqrt(num);

const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

false / 8

const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
false + 99

const greet = name => `Hello, ${name}!`;
const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);

const getUniqueCharacters = str => Array.from(new Set(str)).join("");

orange + grape
const capitalizeString = str => str.toUpperCase();
apple

const findLargestNumber = numbers => Math.max(...numbers);
kiwi + grape
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
orange

const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;

false / 37,38,52,50,88,70
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);

const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };
61 / 65,77,55,90,84,5,61,42,49,55,9,39,21,77,24,1,11,53,57,44,54,76,33,43,18,35,55,94,22,31,64,9,70,71,5,48,56,47,93,85,75,45,76,35,25,68,13,0,67,99,95,0,29,39,18,67,50,98,62,61,64

const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");

kiwi

const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
