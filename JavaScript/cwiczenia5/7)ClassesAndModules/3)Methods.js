//1
// class Person {
//   constructor(id) {
//     this.id = id;
//     // this.karolFunc = () => "KAROL";
//     // this.showInfo = () => "KAROL";
//   }
//   // j. prototyp showInfo jest definiowane poza contructorem tzn, ze chce korzystac z prototypu
//   showInfo() {
//     return `Person Id: ${this.id}`;
//   }
// }

// let me = new Person(1);
// console.log(me);
// console.log(me.showInfo());

//2
// class Person {
//   constructor(id, firstName, lastName) {
//     this.id = id;
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
//   showInfo() {
//     return `${this.firstName + " " + this.lastName} Id: ${this.id}`;
//   }
// }

// let me = new Person(1, "Karol", "Rogowski");
// console.log(me);
// console.log(me.showInfo());
