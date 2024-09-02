// Print odd numbers in an array

// Anonymous Function
const printOddNumbers = function(arr) {
    return arr.filter(function(num) {
        return num % 2 !== 0;
    });
};
console.log(printOddNumbers([1, 2, 3, 4, 5]));

// IIFE
(function(arr) {
    console.log(arr.filter(function(num) {
        return num % 2 !== 0;
    }));
})([1, 2, 3, 4, 5]);



// Convert all the strings to title caps in a string array

// Anonymous Function
const titleCaps = function(arr) {
    return arr.map(function(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    });
};
console.log(titleCaps(['hello', 'world']));

// IIFE
(function(arr) {
    console.log(arr.map(function(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }));
})(['hello', 'world']);


//Sum of all numbers in an array

// Anonymous Function
const sumArray = function(arr) {
    return arr.reduce(function(sum, num) {
        return sum + num;
    }, 0);
};
console.log(sumArray([1, 2, 3, 4, 5]));

// IIFE
(function(arr) {
    console.log(arr.reduce(function(sum, num) {
        return sum + num;
    }, 0));
})([1, 2, 3, 4, 5]);


//Return all the prime numbers in an array

// Anonymous Function
const isPrime = function(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
};

const getPrimes = function(arr) {
    return arr.filter(function(num) {
        return isPrime(num);
    });
};
console.log(getPrimes([1, 2, 3, 4, 5, 11, 13]));

// IIFE
(function(arr) {
    const isPrime = function(num) {
        if (num <= 1) return false;
        for (let i = 2; i < num; i++) {
            if (num % i === 0) return false;
        }
        return true;
    };

    console.log(arr.filter(function(num) {
        return isPrime(num);
    }));
})([1, 2, 3, 4, 5, 11, 13]);


// Return all the palindromes in an array

// Anonymous Function
const isPalindrome = function(str) {
    return str === str.split('').reverse().join('');
};

const getPalindromes = function(arr) {
    return arr.filter(function(str) {
        return isPalindrome(str);
    });
};
console.log(getPalindromes(['madam', 'hello', 'racecar']));

// IIFE
(function(arr) {
    const isPalindrome = function(str) {
        return str === str.split('').reverse().join('');
    };

    console.log(arr.filter(function(str) {
        return isPalindrome(str);
    }));
})(['madam', 'hello', 'racecar']);


//Return median of two sorted arrays of the same size

// Anonymous Function
const getMedian = function(arr1, arr2) {
    const merged = arr1.concat(arr2).sort((a, b) => a - b);
    const mid = Math.floor(merged.length / 2);
    return merged.length % 2 !== 0 ? merged[mid] : (merged[mid - 1] + merged[mid]) / 2;
};
console.log(getMedian([1, 3, 5], [2, 4, 6]));

// IIFE
(function(arr1, arr2) {
    const merged = arr1.concat(arr2).sort((a, b) => a - b);
    const mid = Math.floor(merged.length / 2);
    console.log(merged.length % 2 !== 0 ? merged[mid] : (merged[mid - 1] + merged[mid]) / 2);
})([1, 3, 5], [2, 4, 6]);


//Remove duplicates from an array

// Anonymous Function
const removeDuplicates = function(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
};
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

// IIFE
(function(arr) {
    console.log(arr.filter((item, index) => arr.indexOf(item) === index));
})([1, 2, 2, 3, 4, 4, 5]);


//Rotate an array by k times

// Anonymous Function
const rotateArray = function(arr, k) {
    k = k % arr.length;
    return arr.slice(-k).concat(arr.slice(0, -k));
};
console.log(rotateArray([1, 2, 3, 4, 5], 2));

// IIFE
(function(arr, k) {
    k = k % arr.length;
    console.log(arr.slice(-k).concat(arr.slice(0, -k)));
})([1, 2, 3, 4, 5], 2);


