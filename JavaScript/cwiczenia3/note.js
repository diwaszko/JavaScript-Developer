// 8 zadanie jest to zadanie egzaminacyjne (omawiane na ostatnim zjeździe)
// porównac trzeba 3 pierwsze elementy z 3 nastepnymi (jezeli sa rowne to wiadomo, ze w 3 grupie jest kulka o wartosci 2) 

function dwa() {                          
    console.log(3);
};  

dwa();

//IIFE - natychmiastowo wykonana funkcja ()  - sostuje się np do obektów konfiguracyjnych, tylko 1 raz
(function() {                           // aby wywołać funkcję natychmiastowo należy opakować funkcje w ()
    console.log(2);
})();                                   // (); na końcu wywołuje od razu funkcję, ale tylko w przypadku, gdy jest                                                  potrzebna jeden raz
dwa();


//  wzorzec projektowy "closure" - pozwala na ograniczenie dostępu do nietkorych elementów i ich zmiany (na poziomie wzora kodu, 
// a nie bezpieczeństwa - nie zabezpiecza przed wyciekiem informacji jak np. hasła)

// IIFE i closure PRZETESTOWAC W DOMU!!!!!!!!!!

// słowo kluczowe this
console.log('----------------- działanie this');

(function() {
    console.log(this);
})();



let id = 3;

let obj = {
    id: 1,
    getThisId: function(){
        let id = 2;
        return this.id;
    },
    getId: function(){
        let id = 2;
        return id;
    },
    getOuterId: function(){
        return id;
    }
};
console.log(obj.getThisId());   // zwróci 1, bo this odnosi się do obiektu tak jak: obj.id
console.log(obj.getId());       // zwróci 2, bo zwraca zmienną ze scope funkcji getId
console.log(obj.getOuterId());  // zwróci 3, bo nie ma wartości w scope funkcji, ale jest globalnie przed                                              utworzeniem obiektu


// metoda "call" jest to działanie na funkcji (nie polega na wywołaniu funkcji)

console.log('----------------- call');

function thisExample(){
    console.log(this);
}

let obj1 = { x: 1};
let obj2 = {};
let obj3 = { arr: [1,2,3] };

thisExample.call(obj1);
thisExample.call(obj2);
thisExample.call(obj3);

console.log('----------------- call i apply');

let obj10 = {
    id: 1,
    getId: function(){
        return this.id;
    }
};
let contextObject = { id: 2 };
console.log('obj10.getId()  ' + obj10.getId());                                        // POCZYTAĆ !!!!
console.log('obj10.getId.call(contextObject)  ' + obj10.getId.call(contextObject));    // wywołanie z obiektu obj10                                                                                                  wartości obiektu contextObject                                                                                               - natychmiastowo wywołuje funkcje
console.log('obj10.getId.apply(contextObject)  ' + obj10.getId.apply(contextObject));  //  Funkcja apply - działa tak jak                                                                                               call, ale jako drugi parametr                                                                                                   może przekazać tablicę 
console.log('----------------- bind');

let newGetId = obj10.getId.bind(contextObject);         //  Funkcja bind - przypisuje do zmiennej newGetId metode getId                                                                 obiektu obj10 do wywołania wartości id z obiektu contextObcet  

console.log(obj10.getId());           
console.log(newGetId());                                // wywołanie funkcji przypisanej do zmiennej newGetId metodą bind
                                                        // bind można wywoływać w różnych miejscach w kodzie wielokrotnie
console.log('----------------- parametry w funkcji');


// Parametry w funkcji

let showInfo = function(main, prefix = "P", sufix = "S"){
    console.log(prefix,main,sufix);
}

showInfo();
showInfo("example");
showInfo("example", undefined, "My Sufix");
showInfo("example", "My Prefix", "My Sufix");