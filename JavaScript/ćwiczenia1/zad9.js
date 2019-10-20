// 9) With a given start value of 0. Iterate the array and add even items and subtract odd ones. [1,6,23,8,4,98,3,7,3,98,4,98]


let items = [1,6,23,8,4,98,3,7,3,98,4,98];
let value = 0;

for ( let i = 0; i < items.length; i++ ){
    let indexValue = items[i];
    if ( indexValue % 2 == 0 ){
        value = value + indexValue;
    }
    else{
        value = value - indexValue;       
    }
};
console.log('Result: ' + value);
