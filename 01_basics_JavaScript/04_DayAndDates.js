const day = new Date()

console.log(day.toString());  // day month date year and time 
console.log(day.toLocaleString());  // date and time
console.log(day.toDateString());  // day mont date and year

const time = Date.now()
console.log(time);  // in milisec
console.log(Math.floor(Date.now()/1000));  // in sec 
console.log(day.getMonth()+1); // in js months are started at 0 