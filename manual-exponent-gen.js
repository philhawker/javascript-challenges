function manualExponent(num, pwr) {
    return num ** pwr
}

console.log(manualExponent(2, 3))

function pwrOf(num, pwr) {
    return Math.pow(num, pwr)
}

console.log(pwrOf(4, 4))



const toThePowerOf = (num, exp) => {
    const items = Array(exp).fill(num)
    const reducer = (total, currentValue) => total * currentValue
    return items.reduce(reducer)
}

console.log(toThePowerOf(10, 3))