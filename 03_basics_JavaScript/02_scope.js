/* 
{} -> is me jo chije define ki jati hai wo scope hoti hai 

scope do type ki hoti hai 
1. Block scope -> jo {} isme define kiya jata hai
2. Global scope  -> jo {} iske bhar define kiya jata hai

Object me {} object declaration ke liye use kiya jata hai or 
baki sab jagah chahe wo function ho ya koi loop ho sab scope hota hai

*/
let  a = 200
if(true){
    let a = 100;
    console.log("inner :", a);
}
console.log(a);

// child function/object parent function/object ke data ko access kr skte hai

function one(){
    let userName = "vikram"
    
    function two(){
        let website = "VS-Code"
        console.log(userName);  // -> child class can access the parent class data
        console.log(website);
    }
    // console.log(website); -> through errow because we can't use child class data in parent class    
    console.log(two.website);    
    two()
}
one()
// test

console.log(addOne(5));  // also run before function declaration  
function addOne(num){
    return num+1
}
// console.log(addOne(5));  // also run before function declaration  


// sone time this is called as "expration"
// console.log(addOne(5));  // can't run before function declaration  
const addTwo = function(num){
    return num+2
}
console.log(addTwo(5));  // can't run before function declaration  
