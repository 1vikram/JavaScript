// singleton objects declaration

const manID = new Object()
manID.id = "5"
manID.name = "vikram"
manID.age = "21"
manID.panCar = true

console.log(manID);  // way to access object of singliton

console.log(Object.keys(manID));  // direct use id's data
console.log(Object.values(manID));


const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4: "d"}

// acccess menthod
const obj3 ={obj1, obj2}  // very old and useless menthod
console.log(obj3);

const obj4 = {...obj1, ...obj2}
console.log(obj4);

const obj5 = Object.assign( {}, obj1, obj2)
console.log(obj5);

const student = [
    student01 = {
        name: "Suresh",
        surname: "Yadav",
        isPresentHere: false 
    },
    student02 = {
        name: "Vikram",
        surname:"Kumar",
        isPresentHere: true 
    }
]

console.log(student.student01); //kuch to esa hi hoga abhi pta ni kyu ni ho rha 

// Deconstructor

const car = {
    BMW_Colour: "white",
    Beleno_colour: "yellow",
    RollsRoys_colour: "Golden"
}
//const {RollsRoys_colour} = car  // useless
console.log(car.RollsRoys_colour);  // direct access propertiy of object

const {RollsRoys_colour: RR} = car // distructor in object
console.log(RR);
