// 9) With a given start value of 0. Iterate the array and add even items and subtract odd ones. [1,6,23,8,4,98,3,7,3,98,4,98]


let items = [1,6,23,8,4,98,3,7,3,98,4,98];
let value = 0;

for ( let i = 0; i < items.length; i++ ){
    if ( items[i] % 2 == 0 ){
        value = value + items[i];
    }
    else{
        value = value - items[i];       
    }
};
console.log('Result: ' + value);
