class Popper {
    constructor(arr) {
        this.arr = arr
        this.atBeginning = true
    }
    togglePopper () {
        this.atBeginning = !this.atBeginning
        return this.atBeginning ? this.arr.pop() : this.arr.shift()
    }
}

const ap = new Popper([1, 2, 3, 4, 5, 6])

console.log(ap.togglePopper())
console.log(ap.togglePopper())
console.log(ap.togglePopper())
console.log(ap.togglePopper())
console.log(ap.togglePopper())
console.log(ap.togglePopper())
console.log(ap.togglePopper())
