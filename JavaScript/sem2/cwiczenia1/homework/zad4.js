// 4) Write a class that prints the list of the first n Fibonacci numbers.
// The first two Fibonacci numbers are 1 and 1. 
// The n+1-st Fibonacci number can be computed by adding the n-th and the n-1-th Fibonacci number. 
// The first few are therefore 1, 1, 1+1=2, 1+2=3, 2+3=5, 3+5=8.

class Fibonacci {
    constructor(n){
        this.n = n;
    }

    printNumbers(){
        let fiboNumbers = [1, 1];
            while (this.n !== fiboNumbers.length) {
                fiboNumbers[fiboNumbers.length] = fiboNumbers[fiboNumbers.length - 1] + fiboNumbers[fiboNumbers.length - 2];
            }
        return fiboNumbers;
    }
}

const print = new Fibonacci(10);
console.log(print.printNumbers());
