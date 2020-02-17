// const str = ''
// str.trim()

let arr = [  'rgdgbfdbfd', 'keep', 'keep', 'ergergv']

function removeFirstLast(arr) {
    arr.pop()
    arr.shift()
        return arr.toString().trim()
}

console.log(removeFirstLast(arr))