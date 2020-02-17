const greeting = 'hello there sir'
const dinner = 'what the crap is for dinner tonight?'
const longStr = 'the quick brown fox jumped over the lazy dog'


const toUpper = str => {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
};

console.log(toUpper(greeting))
console.log(toUpper(dinner))
console.log(toUpper(longStr))
console.log(toUpper('do you always smell this bad?'))