function dayKnow(day) {
    const date =  new Date
    console.log(date.toLocaleDateString());
    console.log(date.toLocaleTimeString());    
}
console.log(dayKnow("day"))

const todays_work = 155
const todays_time = 5
const prise = todays_work * todays_time

if (prise>=1000) {
    console.log(`this ${prise} rs is eniugh for today `);
    
} else {
    console.log(`you must work hard and longer time so that you will come over this ${prise} amount`)
}

((aboutMe)=>{
    name= "vikram",
    year = 4,
    contactNo = 96100
    console.log(`${name} is your name and you are in ${year}th year of study and your no. is ${contactNo}`)
})("vikram")
