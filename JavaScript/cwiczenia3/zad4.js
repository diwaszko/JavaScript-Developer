// 4) Given an array of objects, for each object call operation() function in context of next object. 
// If object is last, got back to start of the array for operation function. In loop;

let array = [
    {
        x: 1,
        y: 'object one value',
        operation() {
            return 'object one prafix: ' + this.x + ", " + this.y;
        }
    },
    {
        x: 2,
        y: 'object two value',
        operation() {
            return 'object two prafix: ' + this.x + ", " + this.y;
        }
    },
    {
        x: 3,
        y: 'object three value',
        operation() {
            return 'object three prafix: ' + this.x + ", " + this.y;
        }
    }
]

const callNextObject = (array) => {
    let result = [];
    let len = array.length - 1;
    
    for ( let i = 0; i < len; i++ ) {
        result.push(array[i].operation.call(array[i]));
    }
    result.push(array[len].operation.call(array[0]));

    return result;
}

console.log(callNextObject(array));