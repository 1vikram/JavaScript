function fullName(){
    console.log("v");
    console.log("i");
    console.log("k");
    console.log("r");
    console.log("a");
    console.log("m");
}
//fullName()

function addTwoNumber(number1, number2){
    // console.log(number1+number2)
    const result = number1+number2
    return result
    //return = number1+number2  // best way to reduse the code 
}
// addTwoNumber(3,6)  //9    all for  console.log(number1+number2)
// addTwoNumber(3,"a") // 3a
// addTwoNumber(3,NaN) //NaN

const result = addTwoNumber(4,6)
console.log("solution:", result);


function isUserLogIn(username){
    return `mr. ${username} just logged in ` ;  // return ke baad me kou bhi function execute ni hota hai 
}
// isUserLogIn("vikram")    // no output will apper , output print kewana pdega
console.log(isUserLogIn("vikram"));

function logInMessege(username01){
    if(!username01){
        console.log(`plese enter your name`);
        
        return
    }
    return `wellcome Mr. ${username01}! `;
}
console.log(logInMessege("SK Yadav"));
console.log(logInMessege());     // undefined

// reset opetator to handle more then one value
function calculatePrice(...num){         
    return num;
}
console.log(calculatePrice(1,2));

// CREATE A OBJECT
const user = {
    name: "vikram",
    rollno: "21ectcy030",
    mob_no : 9610026027 
}

function handleObject(anyObject){
    console.log(`username: ${anyObject.name}, rollno: ${anyObject.rollno} and mobile_number: ${anyObject.mob_no}`);    
}
handleObject(user)

// other way to handle object or directly refer the object but must define in fuction as(name, rollno, mob_no)
handleObject({
    name: "VK",
    rollno: "21ECTCY030",
    mob_no: 9462740663
})

// Handle the array in function
const newArray =[100, 200, 300, 400]

function handleArray(getArray){
    return getArray[0];
}
console.log(handleArray(newArray));

// other way to handle array in function or directly access the array in function
console.log(handleArray([600,700,800]));  // only access the fist number (zero indexing number)
