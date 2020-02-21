// 5) Write a code that takes a number and returns a list of its digits. 
// So for 2342 it should return [2,3,4,2].A243b -> [2,4,3].


class NumberToDigits {
    constructor(userNumber) {
        this.userNumber = userNumber;
    }
    get splitNumbers () {
        let num = this.userNumber;
            let numArray = num.split('');
            let convertedNums = [];
            for (let i = 0; i < numArray.length; i++) {
                convertedNums[i] = numArray[i] * 1;
                if (isNaN(convertedNums[i])) {
                    convertedNums.splice(i, 1);
                }
            };
        return convertedNums;
    }
}

let message = new NumberToDigits('s5fdf343fd');

console.log(message.splitNumbers);