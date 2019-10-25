// ARRAY: [1,6,23,8,4,8,3,7]
// 9)	Create a function that takes given array. Then takes a random element, removes it from the array and pushes it to result arrays. This takes place as long as there are elements in source array. 

let tab = [1,6,23,8,4,8,3,7];

function reorderArray(array){
        let newArray = [];
        for ( let i = 0; i <= array.length; i++ ){
                let randomEl = Math.floor(Math.random()*array.length);
                newArray.push(array[randomEl]);
                array.splice(randomEl, 1);
                i = 0;
        }
        return newArray;
}
console.log(reorderArray(tab));