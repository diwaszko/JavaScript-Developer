// 3)	Calculate the sum of the odd items [1,6,23,8,4,98,3,7,3,98,4,98]

let items = [1,6,23,8,4,98,3,7,3,98,4,98];
let sum = 0;

for ( i = 0; i < items.length; i++ ){
    if ( items[i] % 2 != 0 ){
        sum = sum + items[i];
    }
};
console.log(sum);