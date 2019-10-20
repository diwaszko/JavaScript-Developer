// 8) Calculate average value of items at even indexes. Zero is not considered to be even number. [1,6,23,8,4,98,3,7,3,98,4,98]

let items = [1,6,23,8,4,98,3,7,3,98,4,98];
let avg = 0;
let evenNumbers = 0;
let index = [];

for ( let i = 0; i < items.length; i++ ){
    index.push(i);
    if (( index[i] % 2 == 0 ) && ( i != 0 )){
        avg = avg + index[i];
        ++evenNumbers;
    }
};
avg = avg / evenNumbers;
console.log('Average value: ' + avg);