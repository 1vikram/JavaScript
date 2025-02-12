/*  two type of data
1. primitive    2. non_primitive
1. primitive is divided in 7 types(all are call by value)
    a) String b) number  c) Boolean  d) null  e) undefined  f) Symbol  g) BigInt

2. non-peimitive or Reference data type
    a) Array  b) Object  c) Function
*/
// Examples
let var1 = "virkam"             //string
let var2 = 1000                 //number
let IsLogedIn = true            //Boolean
let temprature = null           //null
let userEmail;      //undefined            can also write as (let userEmail = undefined;)
console.log(var1);
console.log(var2);
console.log(IsLogedIn);
console.log(temprature);
console.log(userEmail);

const id = Symbol('123')            // Symbol is an another type of data
const anotherId = Symbol('123')
console.log(id === anotherId);      // both id and anotherId is different ye hi Symbol ki khas bat hai

