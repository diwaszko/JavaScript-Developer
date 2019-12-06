/* 
3)	Based on included JSON file. 
a.	Create a function that will return Json from the file. a
b.	Create a structures to hold data from the file. b
c.	Map data from function a to structure from b.
d.	Create object that will give us data about:
i.	How much money was spend in 2014
ii.	What company was earning how much
iii.	What type on transaction was having what spending�s.
iv.	Values of the spending in each month
v.	Values of the spending in each day of the week
*/


let jsonData = require("./Data.json");


function returnJsonFromFile(jsonData){
    return jsonData;
}
// console.log(returnJsonFromFile(jsonData));

function MainStructure(index, id, cost, detailsOfPayent){
    this.index = index;
    this._id = id;
    this.cost = Number(cost);
    this.detailsOfPayent = new DetailsOfPayent(
        detailsOfPayent.Type, 
        detailsOfPayent.company,
        detailsOfPayent.date
    );
}
function DetailsOfPayent(type, company, date) {
    this.Type = type;
    this.company = company;
    this.date = date;
  }

// data.map( (value, index) =>
// new mainStructure(value.index, value._id, value.cost, detailsOfPayent)
// );


function maptoObjects(objectData) {
    return objectData.map(
      (value, index) =>
        new MainStructure(value.index, value._id, value.cost, value.detailsOfPayent)
    );
  }
  
  const data = maptoObjects(jsonData);


let showSpecificData = {
    moneySpend: function(data, year){
      return data
      .filter(entry => entry.detailsOfPayent.date.split("-")[2] === String(year))
      .reduce( (accumulator, currentValue) => accumulator + currentValue.cost, 0);
    },
    companyEarnings: function(data, year){

    }

}


console.log(typeof data[67].cost);
let resultMoneySpend = showSpecificData.moneySpend(data, 2014);
console.log(resultMoneySpend.toFixed(2));


