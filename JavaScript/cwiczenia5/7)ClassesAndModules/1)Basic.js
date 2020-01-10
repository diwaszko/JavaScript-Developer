//1
// class Person {}

// let me = new Person();
// console.log(me);
// console.log(typeof me);

//2  - poniższe stworzy obiekt, przekaze parametry, ale nie ma z nimi co robić to je pomija
class Person {}

let me = new Person(1, 2);
console.log(me)
console.log(typeof me)