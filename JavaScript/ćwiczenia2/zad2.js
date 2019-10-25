// ARRAY: [1,6,23,8,4,8,3,7]
// 2)	Create a function that returns sum of first and last elements of given array.

let tab = [1,6,23,8,4,8,3,7];

function sumArray(firstElement, lastElement){
        return firstElement + lastElement;
}
console.log(sumArray(tab[0], tab[tab.length-1]));


