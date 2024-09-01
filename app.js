// Find longest word
const findLongestWord = (sentence) => {
    let longestWord = "";
    sentence.split(" ").forEach((word) => word.length > longestWord.length && (longestWord = word));
    return `Longest word: ${longestWord}`;
}

// Check palindrome word
const checkPalindromeWord = (word) => {
    const splitter = word.split("");
    let leftToRight = "";
    let rightToLeft = "";
    for (let index = 0; index < splitter.length; index++) { leftToRight += splitter[index]; }
    for (let index = splitter.length - 1; index >= 0; index--) { rightToLeft += splitter[index]; }
    return `Palindrome word: ${leftToRight.toLowerCase() === rightToLeft.toLowerCase()}`;
}

// Remove duplicates from array
const removeDuplicates = (array) => {
    return [...new Set(array)];
}

// Find reverse string
const reverseString = (word) => {
    let str = "";
    for (let index = word.length - 1; index >= 0; index--) {
        str += word[index];
    }
    return str;
}

// findLongestWord("A quick brown fox jumps up over a lazy dog.");
// checkPalindromeWord("Refer");
// removeDuplicates([1, 2, 3, 2, 5, 6, 3, 7, 9, 3, 1, 6]);
// reverseString("Love yourself first!");

// Program to find Reverse of a string without using built-in method ?