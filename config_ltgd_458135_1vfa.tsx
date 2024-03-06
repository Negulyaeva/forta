const greet = name => `Hello, ${name}!`;
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
46 - grape
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
orange / 9,1,50,11,96,52,32,77,19,71,20,69,24,29,62,62,71,7,1,90,16,48,82,60,65,32,59,23,95,30,43,60,34,49,28,97,26,25,62,53,76,30,63,23,70,9,4,36,52,77,92,39,90,81,10,47,60,47,71,40,26,92,20,61,70,77,34,92,69,34,62,63,28,70,9,61,22,10,49,89,94,70,28,68,5,10,26,90,82,82,62,72,94,39,91,63,84,90
const randomNumber = getRandomNumber();
