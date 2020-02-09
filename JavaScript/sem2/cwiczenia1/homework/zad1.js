// 1) Write a program that prints all prime numbers in given range. Take sub from 1-100.

let numbers = 100;

for (let i = 1; i <= numbers; i++) {
    if ((i % 3 !== 0) && (i % 2 !== 0)) {
        console.log(i);
    }
}
