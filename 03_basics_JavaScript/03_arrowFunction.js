const user = {
    userName: "vikram",
    rollNo: "21ECTY030",
    mobNo: 9610000000,

    wellcomeMsg: function(){
        console.log(`hello ${this.userName}, kese hai aap!`);
        console.log(this);         
    }
}
console.log(user.rollNo);
console.log(this);
user.wellcomeMsg()

// function me "this" ka use ni kiya jata hai 
function one(){
    userName: "hitish sir"
    console.log(this)
}
one()


// arrow function
const chai = () => {
    console.log(`hello vikram you study js by hitish sir by 'chai our code' chanel`)
    console.log(this);    // this keyword is not working in function 
}
chai();

// 2nd way to declar arrow function
const addTwo = (num1, num2)=>{
    // result = num1+num2
    // console.log("result:", result ); 
    return num1+num2
}
// addTwo(6,7)  // for fist two line in addTwo function
console.log(addTwo(6,7));

// 3rd way to declar arrow function

// const addThree =(num1,num2,num3) => num1+num2+num3

// jb hum () ka use krte hai to "return" keyword ka use ni kiya jata h
const addThree =(num1,num2,num3) => (num1+num2+num3)
console.log(addThree(3,4,5))

// access objects by arrow function
const handleObject = () => ({userName: "vikram"})
console.log(handleObject())

// those functions are called "impleset return function" in which return keyword are are not used and must in arrow function