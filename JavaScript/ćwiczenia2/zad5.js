// ARRAY: [1,6,23,8,4,8,3,7]
// 5)	Create a function that based on given array returns new array in pattern [a,b,c,d,e,f] -> [a+b, c+d, e+f]   
// [1,3,4,1,0,3] => [4,5,3] function(array)=>array



let tab = [1,3,4,1,0,3,999];

function array(nums){
        let result = [];
        for ( let i = 0; i < nums.length; i+=2 ){
                // if array is odd then last item is pushing without adding
                if ( nums[i] == nums[nums.length-1] && nums.length % 2 != 0 ){
                        result.push(nums[i]);  
                }
                else{
                        result.push(nums[i] + nums[i+1]);  
                }
        }
        return result;
}
console.log(array(tab));
 