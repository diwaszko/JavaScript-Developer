// ARRAY: [1,6,23,8,4,8,3,7]
// 3)	Create a function that takes a number and return factorial of that number.

let tab = [1,6,23,8,4,8,3,7];

function getFactorials(nums) {
        let result = [];
        for ( let i = 0; i < nums.length; i++ ){
            result.push(calcFactorial(nums[i]));
        }
        return result;
}
    
function calcFactorial(number) {
        if ( number == 0 || number == 1 ){
                return 1;
        }
        else{
                return number * calcFactorial(number - 1);
        }
}

console.log(getFactorials(tab));
 