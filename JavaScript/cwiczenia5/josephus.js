var soldiers = 7;
var soldierToKill; // counter
var people = [];

let start = (soldiers) => {
    for(let i = 1; i <= soldiers; i++){
        people.push(i);
    }
    
    do {
        for(let j = 0; j < people.length; j++){
            soldierToKill = (j + 1);

            //go to begin of array
            if(soldierToKill >= people.length){
                soldierToKill = 0;
            }
            // show killer and victim
            console.log(people[j]+" killed "+people[soldierToKill]);
            
            //kill
            people.splice(soldierToKill, 1);
            }
    } while (people.length > 1);
        // survivor
        console.log(`${people} remains alive!`);
}


start(soldiers);
