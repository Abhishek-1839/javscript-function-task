// Print odd numbers in an array

const printOddNumbers = arr => arr.filter(num => num % 2 !== 0);
console.log(printOddNumbers([1, 2, 3, 4, 5]));

//Convert all the strings to title caps in a string array

const titleCaps = arr => arr.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
console.log(titleCaps(['hello', 'world']));

//Sum of all numbers in an array

const sumArray = arr => arr.reduce((sum, num) => sum + num, 0);
console.log(sumArray([1, 2, 3, 4, 5]));

//Return all the prime numbers in an array

const isPrime = num => {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
};

const getPrimes = arr => arr.filter(num => isPrime(num));
console.log(getPrimes([1, 2, 3, 4, 5, 11, 13]));


//Return all the palindromes in an array

const isPalindrome = str => str === str.split('').reverse().join('');

const getPalindromes = arr => arr.filter(str => isPalindrome(str));
console.log(getPalindromes(['madam', 'hello', 'racecar']));
