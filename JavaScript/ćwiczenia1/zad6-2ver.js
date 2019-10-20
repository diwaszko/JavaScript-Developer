// 6)	Choose all the indexes on the highest value from the given array. [1,6,23,8,4,98,3,7,3,98,4,98]. 
// 2 spoób z 1 pętlą

let items = [1,6,23,8,4,98,3,7,3,98,4,98];
let highest = 0;
let index = [];

for ( let i = 0; i < items.length; i++ ){
    if ( items[i] > highest ){
        highest = items[i];
        index = [];
        index.push(i);  
    }
    else if ( items[i] == highest ){
        index.push(i);       
    }
};
console.log('Indices: ' + index);

