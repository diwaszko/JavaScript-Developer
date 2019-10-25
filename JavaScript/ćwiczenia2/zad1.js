// ARRAY: [1,6,23,8,4,8,3,7]
//  1)	Create a function that returns the sum of all elements passed in array as parameter. Function (array)=>number

let tab = [1,6,23,8,4,8,3,7];

function addArrayEl(pervValue, currentValue){
        return pervValue + currentValue;
}
console.log(tab.reduce(addArrayEl));