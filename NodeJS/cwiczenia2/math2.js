function adding(val1, val2, myCallback){                // myCallback zmienna która przekazuje referencje do funkcji
    const result = val1 + val2;
    myCallback(result, Math.PI);
}

function subtraction(val1, val2, myCallback){
    const result = val1 - val2;
    myCallback(result);
}

function muliplay(val1, val2, myCallback){
    const result = val1 * val2;
    myCallback(result);
}

function divide(val1, val2, myCallback){
    const result = val1 / val2;
    myCallback(result);
}

module.exports = {  
    adding: adding,      
    subtraction: subtraction,                            
    muliplay: muliplay,                     
    divide: divide,
}