function adding(val1, val2){
    return  val1 + val2;
}
function subtraction(val1, val2){
    return  val1 - val2;
}
function muliplay(val1, val2){
    return  val1 * val2;
}
function divide(val1, val2){
    return  val1 / val2;
}


module.exports = {  
    dodaj: adding,                          // z lewej strony jest odwolanie w app2.js, a z prawej odwolanie do funkcji w math.js
    subtraction,                            // jeżeli nazwa funkcji i nazwa odwołania w app2.js jest taka sama to można zostawić tylko taką nazwę
    muliplay: muliplay,                     // można też dłuższym sposobem jak tu 
    divide: divide,
    PI: 3.14                                // można zwrócić samą wartość pi jako zmienną bez funkcji
}