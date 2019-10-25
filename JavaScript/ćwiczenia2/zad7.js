// ARRAY: [1,6,23,8,4,8,3,7]
// 7) Create a function the return one random element from given array. // use random function 

let tab = [1,6,23,8,4,8,3,7];

function randomNumber(array){
        return array[Math.floor(Math.random()*array.length)];
}
console.log(randomNumber(tab));
 