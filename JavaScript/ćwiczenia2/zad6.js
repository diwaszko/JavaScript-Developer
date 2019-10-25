// ARRAY: [1,6,23,8,4,8,3,7]
// 6)	For time of this example remove last element from the given array. 
// Create a function that based on given array return new array in pattern [a,b,c,d,e] -> [a+b, c+d, e+e]

let tab = [1,3,4,1,0,3];

function array(nums){
        let result = [];
        for ( let i = 1; i < nums.length; i+=2 ){
                if ( nums[i] == nums[nums.length-1] ){
                        result.push(nums[i-1] + nums[i-1]);  
                }
                else{
                        result.push(nums[i] + nums[i-1]);  
                }
        }
        return result;
}
console.log(array(tab));
 