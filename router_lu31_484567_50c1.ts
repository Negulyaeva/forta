const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);

grape

const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };
kiwi

const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;

const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
