// 2)	Extend Number type with the reverse() function. The function is to reverse the value of the Number on which it was called.

Number.prototype.reverseString = function(){
    console.log(this * -1);
    console.log(parseInt(this.toString().split("").reverse().join("")));
};

(123456789).reverseString();
