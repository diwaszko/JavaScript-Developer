// 6)	Choose all the indexes on the highest value from the given array. [1,6,23,8,4,98,3,7,3,98,4,98]. 

let items = [1,6,23,8,4,98,3,7,3,98,4,98];
let highest = 0;
let index = [];

for ( let i = 0; i < items.length; i++ ){
    if ( items[i] >= highest ){                 // items[i] lepiej zadeklarować  od razu w tej linii (od razu po 7 linijce for) jako np let index = itemst[i]; aby nie wczytywac zmiennej za każdym razem
        highest = items[i];             
    }
};
for ( let i = 0; i < items.length; i++ ){
    if ( items[i] == highest ){
        index.push(i);
    }       
};
console.log('Indices: ' + index);