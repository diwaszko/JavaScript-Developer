function diff(tabA, tabB){

    const result = []; 
        for ( let i = 0; i < tabA.length; i++ ){
            if ( tabB.indexOf(tabA[i]) === -1 ){
                result.push(tabA[i]);
            }
        }
    return result;
}

module.exports = {
    diff: diff
};