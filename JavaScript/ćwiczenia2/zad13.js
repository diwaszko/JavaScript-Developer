// 13)	Create a function that take two numbers and return the object with 4 fields. Result on 4 basic arithmetic operations. 

let a = 20;
let b = 4;


function operations(a, b){
    let result = {
        add: a + b,
        sub: a - b,
        mult: a * b,
        div: a / b
    }
    return result;
}

console.log(operations(a,b));