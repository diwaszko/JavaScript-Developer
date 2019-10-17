// 6)	Choose all the indexes on the highest value from the given array. [1,6,23,8,4,98,3,7,3,98,4,98]. 

let items = [1,6,23,8,4,98,3,7,3,98,4,98];
let highest = 0;

for ( i = 0; i < items.length; i++ ){
    if ( items[i] >= highest ){
        highest = items[i];
    }
};
for ( i = 0; i < items.length; i++ ){
    if ( items[i] == highest ){
        console.log('Real index: ' + items.indexOf( items[i] ) + ', Fake index: ' + i);
    }       
}