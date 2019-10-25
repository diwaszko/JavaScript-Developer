// ARRAY: [1,6,23,8,4,8,3,7]
// 4)	Create a function that returns given array in reverse order. // no build in functions  


let tab = [1,6,23,8,4,8,3,7];

function reverseArray(nums){
        let result = [];
        for ( let i = nums.length - 1; i >= 0; i-- ){
                result.push(nums[i]);
        }
        return result;
}

console.log(reverseArray(tab));
 