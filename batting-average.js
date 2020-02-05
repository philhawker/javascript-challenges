function battingAverage () {
    var hits = 100;
    var atBats = 300;

    return {
        gertCurrentAverage: function () {     // This is the "closure". Notice the use of an expression when creating a function within a function
            return (hits/atBats)
        },
        updateHitsAndAtBats: function (hit, atBat) {      // This return is just an object (ditctionary), a key value pair with {}
            hits += hit
            atBats += atBat
        }
    }
}


var altuve = battingAverage()
console.log(altuve.gertCurrentAverage())
altuve.updateHitsAndAtBats(0, 20)
console.log(altuve.gertCurrentAverage())