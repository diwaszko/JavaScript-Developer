// aby wywołac nalezy w cmd wpisac: tsc lab.ts
console.log(123);
let liczba = 1;
let text = "daniel";
const wyrazenie = `Moj tekst: ${liczba}, ${text}`;
console.table(wyrazenie);
class MyClass {
  pole: number = 0;
  test() {
    this.pole++;
  }
}
let my = new MyClass();
my.test();
