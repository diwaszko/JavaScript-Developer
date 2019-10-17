// 8)Calculate average value of items at even indexes. Zero is not considered to be even number. [1,6,23,8,4,98,3,7,3,98,4,98]

let items = [1,6,23,8,4,98,3,7,3,98,4,98];
let avg = 0;
let fakeAvg = 0;
let evenNumbers = 0;
let fakeEvenNumbers = 0;

for ( i = 0; i < items.length; i++ ){
    if (( items.indexOf( items[i] ) % 2 == 0 ) && ( i != 0 )){
        avg = avg + items.indexOf( items[i] );
        ++evenNumbers;
    }
};
avg = avg / evenNumbers;
console.log('Real avg: ' + avg);

for ( i = 0; i < items.length; i++ ){
    if (( i % 2 == 0 ) && ( i != 0 )){
        fakeAvg = fakeAvg + i;
        ++fakeEvenNumbers;
    }
};
fakeAvg = fakeAvg / fakeEvenNumbers;
console.log('Fake avg: ' + fakeAvg);