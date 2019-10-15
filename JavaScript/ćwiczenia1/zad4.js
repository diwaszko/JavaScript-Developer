// 4)	Choose highest and lowest values from the given array. [1,6,23,8,4,98,3,7,3,98,4,98]. One loop run.


let items = [1,6,23,8,4,98,3,7,3,98,4,98];
let highest = 0;
let lowest = items[0];

for ( i = 0; i < items.length; i++ ){
    if ( items[i] >= highest ){
        highest = items[i];
    }
    else if( items[i] <= lowest ){
        lowest = items[i];
    }
};
console.log('Highest: ' + highest + ', ' + 'Lowest: ' + lowest);