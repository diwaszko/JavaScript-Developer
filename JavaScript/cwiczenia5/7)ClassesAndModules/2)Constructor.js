//1
// class Person {
//   constructor(id) {
//     this.id = id;
//   }
// }

// let me = new Person(1);
// console.log(me);

//2
// w konstruktorze nie można robić niejawnego przypisania ze scopem globalnym (presonId = id) jest błędne
// class Person {
//   constructor(id) {
//     personId = id;
//   }
// }

// let me = new Person(1);
// console.log(me);

//3
// zamiast powyższego należy przypisać do zmiennej z let bez scopa globalnego 
class Person {
  constructor(id) {
    let personId = id;
  }
}

let me = new Person(1);
console.log(me);
