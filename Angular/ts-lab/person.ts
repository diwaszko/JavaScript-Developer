// class Person
// firstName
// lastName
// sayHello()
// new Person

// 1 wersja
// class Person {
//   private firstName: string; // zabezpieczenie przed widocznoscia na zewnatrz klasy
//   private lastName: string;
//   // w przypadku, gdy nie podamy na dole wartosci do new Person to wyswietlona zostanie domyslna wartosc z pol ponizej
//   constructor(firstName: string = "Domyslna", lastName: string = "Wartosc") {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
//   sayHello() {
//     console.log(this.firstName, this.lastName);
//   }
// }

// const test = new Person("Daniel", "Iwaszko");
// test.sayHello();

// 2 krótsza wersja
class Person {
  constructor(
    private firstName: string = "Daniel", // zabezpieczenie przed widocznoscia na zewnatrz klasy
    private lastName: string = "Iwaszko"
  ) {}
  sayHello() {
    console.log(this.firstName, this.lastName);
  }
}

const test = new Person();
test.sayHello();

// class PesronAccount
// balance: number
// showMyMoney()

class PersonAccount extends Person {
  constructor(firstName: string, lastName: string, private balance: number) {
    super(firstName, lastName);
  }
  showMyMoney() {
    console.table(`Na koncie masz: ${this.balance} zł`);
  }
  giveMeMoney(otherPerson: PersonAccount | null, amount: number = 3) {
    if(otherPerson != null){
    this.sayHello();
    otherPerson.sayHello();
    }

    this.balance += amount;
    if(otherPerson.balance -= amount;
    this.showMyMoney();
    otherPerson.showMyMoney();
  }
}

const myAccount = new PersonAccount("Daniel", "Iwaszko", 112321);
const otherAccount = new PersonAccount("Inny", "Typ", 1000);
myAccount.showMyMoney(otherAccount, 1000);
