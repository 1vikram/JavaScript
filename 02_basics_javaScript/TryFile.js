const my_detail = Object()
my_detail.name = "vikram",
my_detail.Rollno = "21ECTCY030",
my_detail.mob = 9610026027,
my_detail.Email = "vikramkataria0987@gmail.com"
console.log(my_detail.mob);

console.log(my_detail)

console.log(Object.keys(my_detail))
console.log(Object.values(my_detail))

console.log(Array.of(my_detail));

console.log(Array.of(Object.keys(my_detail),Object.values(my_detail)))

const arr01= Array.of(Object.keys(my_detail))
const arr02= Array.of(Object.values(my_detail))

// const arr03 = [...arr01,...arr02]
console.log([...arr01,...arr02]);

console.log(arr01.concat(arr02))

const day = new Date()
console.log(day.toDateString()); // for geting day, month, date and year
console.log(day.toTimeString())   // time 
console.log(day.toLocaleDateString()) // day/month/year
console.log(day.toString())
console.log(day.getMonth()+1)

const time = Date.now()
console.log(time.toFixed())