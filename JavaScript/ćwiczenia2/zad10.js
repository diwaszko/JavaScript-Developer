// ARRAY: [1,6,23,8,4,8,3,7]
// 10)	Create a function that on given array will perform operation of adding or subtracting elements. Operation is to be chosen at random. And return a result.[a,b,c,d] =>(((a+-b)+-c)+-d)

let tab = [1,6,23,8,4,8,3,7];
let operation = ['+', '-']

function mathOperation(array, operator){
        let newArray = [];

        for ( i = 0; i < array.length; i++ ){
                let randomEl = Math.floor(Math.random()*operator.length);

                if ( operation[randomEl] == '+' ){
                        newArray += array[i];
                }
                else{
                        newArray -= array[i];                       
                }
        }
        return newArray;
}

console.log(mathOperation(tab, operation));