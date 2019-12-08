let person;

try {                                                           //spróbuj wykonać 
    person = Karol;    
} catch (error) {                                               //jeżeli nie zadziałą zwróc błąd
    person = {}; //damage constrol                              //przypisanie nowej wartości j. bedzie błąd, aby kod działał dalej
    console.log('error: ', error.message); // logging 
}

person.test = 'test Value';
console.log(person);
console.log('done');