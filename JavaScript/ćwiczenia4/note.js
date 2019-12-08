// Praca domowa (3 zad)

// i. funkcje filter i reduce (do sumowania)
// ii.
// iii.

// w pliku jsonDATA.js jest pseudokod

// Zad egzaminacyjne 4
// 52 obiekty w postaci kart - mozna zrobic 2 petlami for (jedna od 2 do 14 - czyli Asa, a druga po kolorach)
// wynik ma pokazywać jaki najwyższy układ mają Twoje karty
// po wylosowaniu/wypisaniu kart warto je posortować, aby łatwiej było sprawdzić układ
// trzeba stworzyć ok 10 funkcji
// sprawdzać jakims sposobem, ograniczyć 'if'
// trzeba wypisać jaki układ i jakie karty są w tym układzie np. Twój układ to para króli lub wysoka karta 7 

/********** Omówienie przykładów z zajęć **********/

// Object.assign({}, dataObject));          // kopiuje wszystkie wartości z wartości źródeł i zwraca                                                 obiekt celu. {} tworzy nowy obiekt, a bez tego będzie                                                  wskazywał na to samo miejsce w pamięci co w obiekcie                                                  z którego kopiowany był obiekt
function Person() {}
let karol = new Person(); // nowa instancja funkcji person
console.log(karol);
console.log(typeof karol);

// Przeklikać plik constructor.js (szczególnie jak zachowuje się funkcja z new a jak bez) !!!

function Person2(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  // funkcja strzałkowa i słówko kluczowe this rzadko działają (są wyjątki tj. poniżej)
  this.sayHello = () => {
    console.log("Hello2 from " + this.firstName + " " + this.lastName);
  };
}
// new w funkcji zwraca kontekst, a nie wynik!
let karol2 = new Person2("Karol", "Rogowski");
console.log(karol2);
karol2.sayHello();

// lepsze rozwiązanie to Prototypy zamiast umieszczanie funkcji w Person2 poniżej:

function Person3(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}
// funkcja strzałkowa poniżej nie zadziała
// prototypy są wydajniejsze niż metoda wewnątrz funkcji ponieważ w przypadku wielu obiektów nie powiela metody
Person3.prototype.sayHello = function() {
  console.log("Hello3 from " + this.firstName + " " + this.lastName);
  console.log(this);
};

let karol3 = new Person3("Karol", "Rogowski");
console.log(karol3);
karol3.sayHello();

// Można prototypować np. typy zmiennych jak string, number, funkcje (do opakowania funkcji np. przydatne do mierzenia czasu wykonania funkcji)
// wywołując z numberów należy wziąć liczbę w nawias np. (4).getValueDescription();

// JSON - format tekstowy podobny do obiektów, ale to nie są obiekty, aby się nim stały trzeba zastosować deserializację (aby obiekt przekształcić na JSON trzeba zastosować serializację)
// JSON.stringify(people);   - serializacja z JSON na obiekty
// JSON.parse(people);       - deserializacja z obiektów na JSON
// deserializować można też tablicę
// zapis pól w JSON jest w ""

//ArrayIteration funkcje- przydadzą się do 3 zadania z pracy domowej i do zadan egzaminacyjnych:

// funkcja forEach - działa jak pętla (można też dokonywać operacji na obiektach)
// funkcja filter - zwraca elementy dla których ta funkcja zwróci wartość true (predykata - funkcja zwracająca true lub false). Trzeba uważać na zwracane typy, ponieważ nawet false może zwrócić pustego arraya
// funkcja every
// funkcja some
// funkcja find (zwraca pierwszy element)
// funkcja map

// Aby otrzymać wynik z ww. funkcji trzeba je sobie przypisać do jakiejś zmiennej

// funkcja map - do 1 pracy domowej - może sie przydać!!!
let value = [1, 2, 1, 1, 1, 1, 1, 1];
let result = value.map((v, i) => {
  return { value: v, index: i };
});

console.log(result);

// funkcja map - do 3 zadania z pracy domowej!!
// ostatni przykład z pliku 5)ArrayIteration.js
// oraz z pliku Flow.js
