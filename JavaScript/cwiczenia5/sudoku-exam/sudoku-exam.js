
const sudoku = [
    [7, 0, 4, 8, 0, 0, 3, 0, 1],
    [8, 2, 0, 5, 0, 0, 0, 4, 0],
    [0, 0, 9, 4, 3, 0, 5, 0, 0],
    [3, 1, 0, 0, 0, 0, 8, 0, 7],
    [0, 8, 0, 0, 0, 0, 0, 1, 0],
    [9, 0, 7, 0, 0, 0, 0, 3, 2],
    [0, 0, 6, 0, 1, 5, 4, 0, 0],
    [0, 7, 0, 0, 0, 9, 0, 6, 5],
    [5, 0, 8, 0, 0, 2, 1, 0, 3]
];

// const sudoku = [
//     [1, 0, 0, 0, 0, 0, 0, 0, 0],
//     [5, 9, 8, 3, 0, 4, 6, 2, 0],
//     [7, 6, 4, 1, 0, 0, 3, 8, 0],
//     [8, 0, 1, 2, 0, 6, 4, 0, 0],
//     [0, 4, 0, 0, 0, 1, 2, 0, 0],
//     [0, 5, 6, 7, 0, 0, 0, 0, 0],
//     [4, 2, 0, 0, 5, 8, 0, 3, 0],
//     [0, 0, 0, 0, 3, 2, 8, 7, 6],
//     [6, 0, 0, 0, 0, 7, 0, 4, 0]
// ];


const sudokuAllAvailableNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Each element of each row is checked if value = 0 and return it as an array
const getEmptyCellsInRow = (sudokuRow) => { 
    return sudokuRow.map((value, index) => {
        if (value === 0){
            return index;
        }
    }).filter(x => x !== undefined); 
}

// Creates a new table with indexes of empty cells
const getEmptyCellsVectors = (sudoku) => {
    const emptyCellsVectors = [];

    sudoku.forEach((row, rowIndex) =>
        getEmptyCellsInRow(row).map(columnIndex =>
            emptyCellsVectors.push([rowIndex, columnIndex])
        )
    );
    return emptyCellsVectors;
};

const getAvailableNumbersInRow = (rowIndex, sudoku) => {
    return sudokuAllAvailableNumbers.filter(
        number => !sudoku[rowIndex].includes(number)
    );
}

const getAvailableNumbersInColumn = (columnIndex, sudoku) =>
    sudokuAllAvailableNumbers.filter((number) => {
        // map returns only if value of element is > 0 and is true
        // filter returns only truthy value
        // includes checks if value is avialable, ! negative inversing it
        return !sudoku.map(row => row[columnIndex] > 0 && row[columnIndex]).filter(x => x).includes(number);
    });

    // returns array of available numbers in each grid 3x3
    // flat() - returns new table and flats it 
const getAvailableNumbersInGrid = (startRowIndex, endRowIndex, startColumnIndex, endColumnIndex, sudoku) => {
    return sudokuAllAvailableNumbers.filter((number) => {
        return !sudoku.slice(startRowIndex, endRowIndex + 1)
                            .map(row => row.slice(startColumnIndex, endColumnIndex + 1))
                            .flat()
                            .includes(number)
        }
    )};

const getAvailableNumbersInCell = (rowIndex, columnIndex, sudoku) => {
    const gridPos = ((rowIndex, columnIndex) => {
        // Math.trunc() Removes fractorial (return integer number)
        const nearestStartRowIndex = Math.trunc(rowIndex / 3) * 3;
        const nearestStartColumnIndex = Math.trunc(columnIndex / 3) * 3;

        return {
            startRowIndex: nearestStartRowIndex,
            endRowIndex: nearestStartRowIndex + 2,
            startColumnIndex: nearestStartColumnIndex,
            endColumnIndex: nearestStartColumnIndex + 2
        };
    })(rowIndex, columnIndex);

    const availableNumbersInGrid = getAvailableNumbersInGrid(gridPos.startRowIndex, gridPos.endRowIndex, gridPos.startColumnIndex, gridPos.endColumnIndex, sudoku);
    const availableNumbersInRow = getAvailableNumbersInRow(rowIndex, sudoku);
    const availableNumbersInColumn = getAvailableNumbersInColumn(columnIndex, sudoku);
    
    return availableNumbersInGrid
        .filter(numberInRow => availableNumbersInRow.includes(numberInRow))
        .filter(numberInColumn => availableNumbersInColumn.includes(numberInColumn));
};

// console.table(sudoku);
const emptyCells = getEmptyCellsVectors(sudoku);

const newSudoku = [...sudoku];

while (emptyCells) {
    let stop = true;
    
    for (let i = 0; i < emptyCells.length; i++) {
        const vector = emptyCells[i];

        const [rowIndex, columnIndex] = vector;
        const availableNumbersInCell = getAvailableNumbersInCell(rowIndex, columnIndex, newSudoku);
        
        console.log(`row:[${rowIndex}] colmn:[${columnIndex}] ----- left numbers: ${availableNumbersInCell}`);

        // if only one number is avaiable assign this number to index of that cell and stop
        if (availableNumbersInCell.length === 1) {
            newSudoku[rowIndex][columnIndex] = availableNumbersInCell[0];
            emptyCells.splice(i, 1);
            stop = false;
        }
    }
    if (stop === true) {
        console.table(newSudoku);
        if (emptyCells.length !== 0){
            console.log(`Can't resolve cells: ${emptyCells}`);
        } else{
            console.log(`----------------- Yay! Sudoku Solved! -----------------`);            
        }
        break;
    }
}