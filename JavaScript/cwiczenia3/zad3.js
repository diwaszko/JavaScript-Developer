// 3) Create an array (by hand) of objects and call sum() function in context of each one of them.
// Sum function is to come from this object
// BaseObject = { X,y, sum: function (){ return this.x+this.y}}
// Example array: [{x:2,y:3},{x:-1,x:6,{x:0,x:8},…..]

let array = [
  { x: 2, y: 3 },
  { x: -1, y: 6 },
  { x: 0, y: 8 }
];

let baseObject = {
  x: undefined,
  y: undefined,
  sum: function() {
    return this.x + this.y;
  }
};

const iterateArray = array => {
  let calculatedArray = [];

  for (let i = 0; i < array.length; i++) {
    calculatedArray.push(baseObject.sum.call(array[i]));
  }
  return calculatedArray;
};
console.log("Sums of array objects are: " + iterateArray(array));
