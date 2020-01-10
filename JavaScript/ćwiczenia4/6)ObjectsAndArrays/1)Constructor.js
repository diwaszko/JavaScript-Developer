// 1 BASIC - tworzenie funkcji Person typu obiektu przy pomocy new Person();

// function Person() {}

// let karol = new Person();

// console.log(karol);
// console.log(typeof karol);
// 1,5 new/this
// function Person() {
//   console.log('this is:',this);
//   return 1;
// }

// let karol = new Person(); // tworzy nowy obiekt na podstawie funkcji Person
// let adam = Person(); // przypisuje wartość zwracaną z funkcji Person do zmiennej adam
// console.log(karol);
// console.log(adam);

// let tomek = Person; // przypisuje funkcje Person do zmiennej tomek
// console.log(tomek);

// let pawel = new tomek();
// console.log(pawel);

// 2 FIELDS
// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }
// let karol = new Person("Karol", "Rogowski");
// let adam = new Person("Adam", "Goral");
// console.log(karol);
// console.log(adam);
// console.log(adam.firstName);

// // 3 METHOD
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName; // funkcja strzałkowa wyjątkowo działa z this w tym przypadku
  this.sayHello = () =>
    console.log("Hello from " + this.firstName + " " + this.lastName);
}

let karol = new Person("Karol", "Rogowski");
let adam = new Person("Adam", "Góral");
console.log(karol);
console.log(adam);

karol.sayHello();
adam.sayHello();
