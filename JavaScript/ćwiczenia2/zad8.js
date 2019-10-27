// ARRAY: [1,6,23,8,4,8,3,7]
// 8)	Create a function that takes two parameters: array and number off attempts. Based on number of attempts choose a random number from table that many times and return lowest one.

let tab = [1,6,23,8,4,8,3,7];
let attemps = 5;

function randomNumber(array, attemps){
        let attempsTab = [];
        for ( let i = 0; i < attemps; i++ ){
                attempsTab[i] = array[Math.floor(Math.random()*array.length)];  // Math.random zwraca liczby po przecinku z przedziału od 0 do 1 (bez 1)
        }
        console.log(attempsTab);
        return Math.min.apply( Math, attempsTab );
}
console.log('Smallest number of array is: ' + randomNumber(tab, attemps));