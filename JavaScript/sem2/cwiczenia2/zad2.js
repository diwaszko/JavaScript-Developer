// 2) Write a program that finds the longest palindromic substring of a given string. 
//    �karakis�, �baerren�, �kajak�, �inni�.


"use strict";

class Palindromic {
    constructor(text) {
        this.text = text;
    }
    isPalindrome(textPart) {
        return textPart.split("").reverse().join("") === textPart;
    }
    checkLongestPalindome() {
        let maxLength = 0;
        let longestPalindrome = '';
        let firstTextPart;
        let nextTextPart;
        for (let i = 0; i < this.text.length; i++) {
            firstTextPart = this.text.substr(i, this.text.length);

            for (let j = firstTextPart.length; j > 1; j--) {
                nextTextPart = firstTextPart.substr(0, j);

                if(this.isPalindrome(nextTextPart) && nextTextPart.length > maxLength) {
                    longestPalindrome = nextTextPart;
                    maxLength = nextTextPart.length;
                }
            }
        }
        if (maxLength > 1) {
            return longestPalindrome;
        } else {
            return 'Text has not palindrome substring.';
        }
    }
}

let message = new Palindromic('bananas');
let message2 = new Palindromic('cocacola');
let message3 = new Palindromic('123456121');

console.log(message.checkLongestPalindome());
console.log(message2.checkLongestPalindome());
console.log(message3.checkLongestPalindome());
