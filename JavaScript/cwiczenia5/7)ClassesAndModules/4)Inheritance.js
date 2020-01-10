//1
// class Person {
//   constructor() {
//     this.type = "basic person";
//   }
//   showInfo() {
//     return `Of type ${this.type}`;
//   }
// }
// // JsDeveloper extends (rozszerza) klasę Person
// class JsDeveloper extends Person {}

// let jsDev = new JsDeveloper();
// console.log(jsDev);
// console.log(jsDev.showInfo());

// let per = new Person();
// console.log(per);
// console.log(per.showInfo());

//2

// class Person {
//   constructor(id) {
//     this.id = id;
//     this.type = "basic person";
//   }
//   showInfo() {
//     return `Of type ${this.type} and id ${this.id}`;
//   }
// }

// class JsDeveloper extends Person {
//   constructor(id) {
//     super(id); // odnosi sie do klasy bazowej / j. wywolujemy super w construktorze nie można przed super napisac this. ... bo jeszcze nie istnieje - this bedzie dostepny dopiero jak wywoła się super(id)
//   }
// }

// let jsDev = new JsDeveloper(5);
// console.log(jsDev);
// console.log(jsDev.showInfo());

// 3
// class Person {
//   constructor(id, id2) {
//     // two part
//     this.id = id;
//     this.id2 = id2;
//     this.type = "basic person";
//   }
//   showInfo() {
//     return `Of type ${this.type} and id ${this.id}`;
//   }
// }

// class JsDeveloper extends Person {
//   constructor(id) {
//     super(id);
//     this.type = "JS Developer";
//   }
// }

// let jsDev = new JsDeveloper(5);
// console.log(jsDev);
// console.log(jsDev.showInfo());

// 4
// class Person {
//   constructor(id) {
//     this.id = id;
//     this.type = "basic person";
//   }
//   showInfo() {
//     return `Of type ${this.type} and id ${this.id}`;
//     // return `Of type ${this.type} and id ${this.id}  fw ${this.framework}`; // zły kod!!!! łamie zasady
//   }
// }

// class JsDeveloper extends Person {
//   constructor(id, framework) {
//     super(id);
//     this.type = "JS Developer";
//     this.framework = framework;
//   }
// }

// let jsDev = new JsDeveloper(5, "React");
// console.log(jsDev);
// console.log(jsDev.showInfo());

// let per = new Person(1);
// console.log(per);
// console.log(per.showInfo());

// 5
// class Person {
//   constructor(id) {
//     this.id = id;
//     this.type = "basic person";
//   }
//   showInfo() {
//     return `Of type ${this.type} and id ${this.id}`;
//   }
// }

// class JsDeveloper extends Person {
//   constructor(id, framework) {
//     super(id);
//     this.type = "JS Developer";
//     this.framework = framework;
//   }

//   showDeveloperInfo() {
//     return `Of type ${this.type}, id ${this.id} and favourite frameworks is ${this.framework}`;
//   }
// }

// let jsDev = new JsDeveloper(5, "React");
// console.log(jsDev);
// console.log(jsDev.showDeveloperInfo());
// console.log(jsDev.showInfo());

//6
// class Person {
//   constructor(id) {
//     this.id = id;
//     this.type = "basic person";
//   }
//   showInfo() {
//     return `Of type ${this.type} and id ${this.id}`;
//   }
// }

// class JsDeveloper extends Person {
//   constructor(id, framework) {
//     super(id);
//     this.type = "JS Developer";
//     this.framework = framework;
//     //this.showInfo = () => "Karol";
//   }

//   showInfo() {
//     return `Of type ${this.type}, id ${this.id} and favourite frameworks is ${this.framework}`;
//   }
// }

// let jsDev = new JsDeveloper(5, "React");
// console.log(jsDev);
// console.log(jsDev.showInfo());

//7
class Person {
  constructor(id) {
    this.id = id;
    this.type = "basic person";
  }
  showInfo() {
    return `Of type ${this.type} and id ${this.id}`;
  }
}

class JsDeveloper extends Person {
  constructor(id, framework) {
    super(id);
    this.type = "JS Developer";
    this.framework = framework;
  }

  showInfo() {
    return super.showInfo() + ` and favourite frameworks is ${this.framework}`; // dobrze napisany kod, słówko super tutaj pozwala się odność do rodzica, wybrać pole 
  }
}

let jsDev = new JsDeveloper(5, "React");
let per = new Person(225);
console.log(jsDev);
console.log(jsDev.showInfo());
console.log(per);
console.log(per.showInfo());
