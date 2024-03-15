const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
36 * true
const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);

orange

const findSmallestNumber = numbers => Math.min(...numbers);
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
59,32,25 + 49,98,66,69,79,11,16,3,17,62,25,83,97,38,48,57,70,53,27,11,20,47,50,98,36,95,79,54,36,86,39,56,93,5,93,24,18,76,56,38,64,68,80,45,31
const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };

68 / 16,24,20,71,1,88,10,61,12,11,52,13,55,66,83,12,61,59,57,8,22,90,97,18,33,65,53,32,27,69,16,13,48,42,92,77,62,57,24,42,73,21,54,85,51,72,73,49,93,93,37,33,99,74,56,91,29,50,21,3,56,12,34,6,8,18,88,23,75,33,58,40,4,67,79,37,48,10,27,10,74,53,22,11,84,54,62,44,11,33,96,3,24,35,76,91
const findLargestNumber = numbers => Math.max(...numbers);

banana


const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
apple - true
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
false * true
const findLargestNumber = numbers => Math.max(...numbers);

const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));

80,85,99,85,48,57,12,79,26,20,54,6,61,46,18,73,50,40,91,18,97,78,99,30,62,17,63,2,0,46,55,15,16,24,18,30,13,99,58 + 46
const formatDate = date => new Date(date).toLocaleDateString();
const isPalindrome = str => str === str.split("").reverse().join("");
apple

const deepClone = obj => JSON.parse(JSON.stringify(obj));

false * true
const reverseString = str => str.split("").reverse().join("");
orange - 26,27,3,64,73,32,64,2,11,72,63,98,18,38,32,63,80,82,81,61,90,9,73,75,75,83,49,3,68,15,11,81,68,74,83,11,40,6,42,77,88,42,61,32,74,44,39,8,22,88,79,53,95,73,29,71,52,0,16,67,46
const reverseString = str => str.split("").reverse().join("");
const randomNumber = getRandomNumber();

kiwi * true
const greet = name => `Hello, ${name}!`;
apple

const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
orange + 68
const reverseString = str => str.split("").reverse().join("");
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);

function addNumbers(a, b) { return a + b; }
apple

const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);

11 * 97,86,7,70,91,68,75,28,13,83,33,3,45,11,13,18,88,29,53,37,40,86,20,47,54,47,13,70,86,53,49,70,31,41,34,56,38,8,78,64,38,89
const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});
