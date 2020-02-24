//1
// "use strict";                       // utrzymuje scope'y w ryzach i nie pozwala, aby byly w niejawny sposob deklarowane jak ponizej
// function show(param) {
//     innerParam = param;             // niejawna deklaracja zmiennej (zla praktyka)
//     console.log(param);
// }
// show("test");
// console.log(innerParam);

// function show(param) {
//   "use strict";
//   innerParam = param;
//   console.log(param);
// }
// show("test");
// console.log(innerParam);

// function show(param) {
//     "use strict";                       // use scrict może działać wewnątrz jakiegoś scopea i będzie się odnosić tylko do wartosci ponizej w tej funkcji
//     var innerParam = param;
//     console.log(param);
// }
// show("test");
// notCreatedVariable = 5;
// console.log(notCreatedVariable);

// "use strict";
// notCreatedVariable = 5;

// "use strict";               // na obiektach można rozszerzać istniejacy obiekt o element a (use strict w tym przypadku nie przeszkadza w takiej akcji)
// var obj = {};
// obj.a = "sdfs";
// console.log(obj);

//2

// function foo() {
//   console.log(this);
// }
// foo();

// function foo() {
//     "use strict";              // w przypadku use strict i wywolaniu this bedzie jako undefined
//     console.log(this);
// }
// foo();

// function foo() {
//     "use strict";
//     console.log(this);
// }
// foo.call(this);
