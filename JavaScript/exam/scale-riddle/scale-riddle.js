// 5) Scale riddle. With 8 balls  EXAM [1,1,1,1,2,1,1,1]. 
// One of the items will be change to two. 
// Indexes are t be chosen at random. 
// Use compressions only two times. 
 
let tab = [1,1,1,1,1,1,1,1];

// randomize place for ball in array
function addRandomBall(array, callback){
    let randomBall = Math.floor(Math.random() * array.length);
    array.splice(randomBall, 1, 2);
    console.log(array);
    callback(array)
}

// add value and number properties to elements in array
function mapArray(array, callback){
    let result = array.map((v, i) => {
        return { value: v, number: i+1 };
    });   
    callback(result);
}

// divide array into 3 groups
function chunkArray(array, callback) {
    const chunkedArray = [];
    let index = 0;
    
    while (index < array.length) {
        chunkedArray.push(array.slice(index, 3 + index));
        index += 3;
    }
    callback(chunkedArray);
};

// sum each group and create new array
function sumChunkedArray(chunkedArray, callback) {
    let summedArray = [];

    chunkedArray.forEach((val, i) => {
        summedArray.push(chunkedArray[i].reduce((pre, {value})=> pre + value, 0))
    })
    callback(summedArray);
};

// compare groups and return result - 1st compare
function compare(chunkedArray, summedArray, callback){
    let first = summedArray[0];
    let second = summedArray[1];

        if(first > second){
            callback(chunkedArray[0], 1);
        }else if (first < second){
            callback(chunkedArray[1], 2);
        }
        else if (first == second){
            callback(chunkedArray[2], 3);
        }
};

// compare elements in heavier group and return the heaviest ball - 2st compare
function secondCompare(firstWeight, callback){
    let first = firstWeight[0].value;
    let second = firstWeight[1].value;

    if(first > second){
        callback(firstWeight[0].number);
    }else if (first < second){
        callback(firstWeight[1].number);
    }else if (first == second){
        callback(firstWeight[2].number);
    }
};

// callbacks
addRandomBall(tab, (arrayWithRandomBall) => {
    mapArray(arrayWithRandomBall, (mappedArray) => {
        chunkArray(mappedArray, (chunkedArray) => {
            sumChunkedArray(chunkedArray, (summedArray) => {
                compare(chunkedArray, summedArray, (firstWeight, group) => {
                    console.log(`W grupie ${group} jest cięższa piłka - 1 porówanie`);
                    secondCompare(firstWeight, (result) => {
                        console.log(`Najcięższa piłka ukryła się pod numerem ${result} - 2 porówanie`);
                    });
                });
            });
        });
    });
});