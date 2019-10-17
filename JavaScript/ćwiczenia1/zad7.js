//   7)	Calculate average value from the given array for even numbers [1,6,23,8,4,98,3,7,3,98,4,98]

let items = [1,6,23,8,4,98,3,7,3,98,4,98];
let avg = 0;
let evenNumbers = 0;

for ( i = 0; i < items.length; i++ ){
    if ( items[i] % 2 == 0 ){
        avg = avg + items[i];
        ++evenNumbers;
    }
};
avg = avg / evenNumbers;
console.log(avg);