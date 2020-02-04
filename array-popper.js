class Popper {
    constructor(arr) {
        this.arr = arr         // These lines maintain the results after each time the methods below are used outside of the class.
        this.atBeginning = true
    }
    togglePopper () {
        this.atBeginning = !this.atBeginning         // !this is the opposite or false
        return this.atBeginning ? this.arr.pop() : this.arr.shift()
    }
}

const poppedArray = new Popper([1, 2, 3, 4, 5, 6])

console.log(poppedArray.togglePopper())
console.log(poppedArray.togglePopper())
console.log(poppedArray.togglePopper())
console.log(poppedArray.togglePopper())
console.log(poppedArray.togglePopper())
console.log(poppedArray.togglePopper())
console.log(poppedArray.togglePopper())

