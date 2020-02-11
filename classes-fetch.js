// Instantiate an object called choice1 and set the type to "house".
// It must return true.Instantiate another object called choice2 and the type must be set to "apartment" and that must return false.


class Home {
    constructor({ type, payment = "renting" }) {
        this.type = type;
        this.payment = payment;
    }

    static homeImprovement(yourHome) {
        return (yourHome.payment === 'mortgage');
    }
}

const choice1 = new Home({type: "house", payment: "mortgage"})
const choice2 = new Home({type: "apartment"})

 console.log(Home.homeImprovement(choice1))
 console.log(Home.homeImprovement(choice2))


// ### Javascript Class Exercise

// - Write a class called Student that accepts a name, email, and favorite programming language.
// - Write two static methods and two instance methods.
// - The first instance method should return the student’s name email and fav language
// - The second instance method should return the students’ favorite programming language
// - The two static methods should just console.log whatever you’d like
// - Extra Credit:
// - Create a static method that returns true if their fav language is “Javascript”

class Student {
    constructor({name, email, favLang}) {
        this.name = name
        this.email = email
        this.favLang = favLang
    }

    returnDetails() {
        return `${this.name}, ${this.email}, ${this.favLang}`
    }

    returnfavLang() {
        return `${this.favLang}`
    }

    static isSatisfied() {
        return `is happy with the instructor`
    }

    static notSatisfied() {
        return `is unsatisfied with the instructor`
    }

    static jsFav(student) {
        return (student.favLang === 'javascript')
    }
}

const student1 = new Student({name: 'Kelsey', email: 'kelsey@gmail.com', favLang: 'python'})
const student2 = new Student({name: 'Phil', email: 'phil@gmail.com', favLang: 'javascript'})

console.log(`Student One: ${student1.name}'s email address is ${student1.email} and her favorite language is ${student1.favLang}. ${student1.name} ${Student.notSatisfied(student1)}`)
console.log(`Student Two: ${student2.name}'s email address is ${student2.email} and his favorite language is ${student2.favLang}. ${student2.name} ${Student.isSatisfied(student2)}`)
console.log(`We asked ${student2.name} if his favorite language is really JavaScript. And it's ${Student.jsFav(student2)}! He really likes JavaScript`)




