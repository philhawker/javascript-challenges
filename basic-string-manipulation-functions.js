// # Homework 02 - 03;
// # Write a JavaScript function to check whether an ‘input’ or argument passed into your function is a string or not

const word = 'hello'
const sentence = 'hello there good sir'
const numOne = 30
const numTwo = 22

function stringChecker(s) {
    if ( typeof s == 'string') {
        return true
    } else {
        return false
    }
}   

console.log(stringChecker(word))
console.log(stringChecker(numOne))
console.log(stringChecker(numTwo))
console.log(stringChecker('hi there'))


// #Write a JavaScript function to capitalize the first letter of a string or argument.

function capitalizeMe(i) {
    i = i.charAt(0).toUpperCase() + i.slice(1)
    return i 
}

console.log(capitalizeMe(word))
console.log(capitalizeMe(sentence))


// # Write a JavaScript function that accept two integers as arguments and returns the larger number.

function largerNum(num1, num2) {
    if (num1 > num2) {
        return num1
    } else if (num1 < num2) {
        return num2
    } else {
        return `The number ${num1} is the same number as ${num2}`
    }
}

console.log(largerNum(numOne, numTwo))
console.log(largerNum(88, 100))
console.log(largerNum(88, 3))
console.log(largerNum(88, 88))


// # Write a javascript function that adds two strings together

const stringOne = 'Hello sir.'
const stringTwo = 'How are you today?'

function stringAdder(str1, str2) {
    newStr = str1 + ' ' + str2
    return newStr
}

console.log(stringAdder(stringOne, stringTwo))




