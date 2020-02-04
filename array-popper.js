class Popper {
    constructor(arr) {
        this.arr = arr         // These lines maintain the classes beginning state
        this.atBeginning = true
    }
    togglePopper () {
        this.atBeginning = !this.atBeginning
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

