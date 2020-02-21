// 2) Write a guessing game where the user has to guess a secret number.
// After every guess the program tells the user whether their number was too large or too small. 
// At the end the number of tries needed should be printed. 
// It counts only as one try if they input the same number multiple times consecutively.


let numbers = 100;

const randomNumber = (numbers) => {
    return Math.floor(Math.random() * numbers);
}

const userNumber = (max, min) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

const checkNumbers = (numbers) => {
    let minNumber = 1;
    let maxNumber = numbers;
    let counter = 0;
    let guessedNumber = userNumber(maxNumber, minNumber);
    let randomizedNumber = randomNumber(numbers);
    // console.log(`Random number is ${randomizedNumber}`);
    do {
        // console.log(`user number is ${guessedNumber}`);
        if (guessedNumber > randomizedNumber){
            console.log(`Number is lower than ${guessedNumber}`);
            maxNumber = guessedNumber - 1;

            guessedNumber = userNumber(maxNumber, minNumber);
        } else if (guessedNumber < randomizedNumber) {
            console.log(`Number is higher than ${guessedNumber}`);
            minNumber = guessedNumber + 1;
            guessedNumber = userNumber(maxNumber, minNumber );
        }
        counter++;
    } while (randomizedNumber !== guessedNumber);
    console.log(`You right, number is ${guessedNumber} (${++counter} tries).`);

}

checkNumbers(numbers);