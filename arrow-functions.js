// # Homework 02 - 05;

//  Write a function that takes in a string and returns the letters in alphabetical order
//     - function (“Hi there”); // eehhirt

alphabetize = str => {return str.split('').sort().join('').trim()}

console.log(alphabetize('well hello there sir'))


//  Write a function that takes in an object and prints all of the values inside of the given object;

const userOne = {
    name: 'Kelsey',
    email: 'kelsey@gmail.com',
    age: 29,
    city: 'Lehi',
    State: 'UT'
}

const userTwo = {
    name: 'Phil',
    email: 'phil@gmail.com',
    age: 29,
    city: 'Lehi',
    State: 'UT'
}
    
findValue = obj => {
    for(const key in obj) {
        console.log(key + '--' + obj[key] + [key.value])
}}

findValue(userOne)
findValue(userTwo)

