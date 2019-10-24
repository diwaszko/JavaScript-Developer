// 12)	Create a function that tells us how many days till Friday 

function friday() {
        let date = new Date;
        let today = date.getDay();
        const friday = 5;
        let daysLeft = friday - today;
        if ( friday == today ) {
            console.log("Today is friday!")
        } 
        else if ( daysLeft == -1 ) {
            console.log(6 + ' days to friday.');
        } 
        else if ( daysLeft == 1 ) {
            console.log(daysLeft + ' day to friday!');
        } 
        else {
            console.log(daysLeft + ' days to friday.');
        }
}
friday();