// 1) Create an iffe that returns an object with fields: function setValue(), function showValue() and function reverseValue(). Calling functions either logs the value or reverse it in an object. If value was not provided yet or is empty showValue function is to return information about that. Value can be type string or number. reverseValue():  If number do (*(-1)), if string reverse it.  Closure pattern.

const iffe = (function() {
  let checkValue;

  const setValue = myValue => {
    if (myValue !== undefined) {
      return (checkValue = myValue);
    }
  };

  const showValue = () => {
    if (checkValue === undefined) {
      console.log("Value is not set!");
      throw new Error("Error. Value is not set!");
    } else if (
      typeof checkValue !== typeof "" &&
      typeof checkValue !== typeof NaN
    ) {
      console.log("Value can be only string or number!");
      throw new Error("Error. Value can be only string or number!");
    } else {
      return checkValue;
    }
  };

  const reverseValue = () => {
    if (typeof checkValue === typeof NaN) {
      return checkValue * -1;
    } else {
      return [...checkValue].reverse().join("");
    }
  };
  return {
    settingValue: setValue,
    showingValue: showValue,
    reversingValue: reverseValue
  };
})();

iffe.settingValue("testowanie");
iffe.settingValue(5);
console.log(iffe.showingValue());
console.log(iffe.reversingValue());
