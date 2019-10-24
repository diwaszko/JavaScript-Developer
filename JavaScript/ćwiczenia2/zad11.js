// ARRAY: [1,6,23,8,4,8,3,7]
// 11)	Create a function that will return the current day name in Polish. 

function todayDay() {
        var date = new Date();
        let weekDays = ["niedziela","poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota"];
        return weekDays[date.getDay()];
}
console.log('Dziś jest: ' + todayDay());
