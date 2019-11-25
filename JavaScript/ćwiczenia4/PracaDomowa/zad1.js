// 1)	Extend String type with the reverse() function. The function is to reverse the value of the string on which it was called.

String.prototype.reverseString = function(){
    console.log(this.split("").reverse().join(""));
};

let text = "Testowy tekst :)";

text.reverseString();
