// 2) Create four function definitions. One for every basic math operations and taking two input parameters. 
// Create one more function. This function is to return calculation object. 
// This object is to have parameters object field that holds two operation parameters inside (x and y) 
// and a function field that points to a function with math operation (defined at the beginning). 
// A function setOperation() that sets the field from previous sentence 
// and a calculate() function that makes calculation and returns its value. 

const add = (a,b) => { return a + b };
const sub = (a,b) => { return a - b };
const mult = (a,b) => { return a * b };
const div = (a,b) => { return a / b };

let operationField;

const setOperation = (operator) => {
    switch (operator) {
        case '+':
            operationField = add;
            break;
        case '-':
            operationField = sub;
            break;
        case '*':
            operationField = mult;
            break;
        case '.':
            operationField = div;
            break;
        default:
            console.log('Operator is not valid. Choose "+", "-", "*" or "/" to calculate value.');
            break;            
    }
}

let calculationObject = {
    x: undefined,
    y: undefined,
    mathOperation: function(){
        return operationField(this.x, this.y);
    }
}

let parameterValues = { x: 5, y: 10 }
let parameterValues2 = { x: 44, y: 44 }
setOperation('*');
console.log(calculationObject.mathOperation.call(parameterValues));
console.log(calculationObject.mathOperation.call(parameterValues2));