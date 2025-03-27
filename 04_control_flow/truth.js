const userEmail = "vik@ram.com"
if (userEmail) {
    console.log(`user email is found which is "${userEmail}"`);
}else{
    console.log("user email is not defined");   
}

/*
falsy values
    false, 0 , -0, BigInt 0n, "", null, undefined, NaN

truthy values
    "0", 'false', " ", [], {}, function(){}
*/

// how to check empty array
const newArray = []
if (newArray.length === 0) {
    console.log("array is empty")
}

// how to find empty object
const newObj = {}
if (Object.keys(newObj).length === 0) {
    console.log("Object is empty")
}

// Nullish Coalescing Poerator (??): null, undefined -?handel the both value

let val1,val2;
val1 = 5 ?? 10
console.log(val1); 

val2 = null ?? 21
console.log(val2);

// terniary Operator

// condition ? true : false
const icePrice =800
icePrice >= 500 ? console.log("ice prise is more then 500") : console.log("ice prise is less then 500")