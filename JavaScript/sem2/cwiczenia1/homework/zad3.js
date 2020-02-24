// 3) Write a function that rotates a list by k elements. 
// For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]. 
// Try solving this without creating a copy of the list.


let list = [1, 2, 3, 4, 5, 6];
console.log('before: ' + list);
const rotateList = (list, roateTimes) => {
    // list.push(list.splice(0, roateTimes));
    for (let i = 0; i < roateTimes; i++) {
        list.push(list.shift());
    }
    return list.flat();
}

console.log('after:  ' + rotateList(list, 8));
