// 5)	Choose longest string from the array. ['Karol', 'Adam','Rogowski','Politechnika','Super','Weekend']. 

let items = ['Karol', 'Adam', 'Rogowski', 'Politechnika', 'Super', 'Weekend'];
let longest = items[0];

for ( let i = 0; i < items.length; i++ ){
    if ( items[i].length >= longest.length ){
        longest = items[i];
    }
};
console.log('Longest is: ' + longest);
