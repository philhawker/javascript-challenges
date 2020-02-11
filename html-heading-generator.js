// title
// type of heading

// headingGenerator('hi there', 1) <h1>hi there</h1>

const headingGenerator = (title, heading) => {
    return `<h${heading}>${title}</h${heading}>`
}

console.log(headingGenerator('hello', 1))
console.log(headingGenerator('hows it going', 2))
console.log(headingGenerator('hello', 3))

