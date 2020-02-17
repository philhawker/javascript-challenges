// const str = ''
// str.trim()

let arr = [  'rgdgbfdbfd', 'keep', 'keep', 'ergergv']

const removeFirstLast = (arr) => {
    if (arr.length >= 3) {
        return arr.slice(1, -1)
    } else {
        throw new Error('You need at least three elements in the array')
    }
}

console.log(removeFirstLast([1, 2, 3, 4, 5]))
console.log(removeFirstLast(arr))
console.log(removeFirstLast([1, 2]))
