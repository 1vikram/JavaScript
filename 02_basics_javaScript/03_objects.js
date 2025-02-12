// singleton

// object literals

const symbol = Symbol("symbol01")  // define the symbol

const JsUser = {
    name: "vikram",
    courese: "Btech",
    [symbol]: "symbol01", // way to represent the symbol
    rollno: "21ectcy030",
    isLoggedIn: false,
    lastLogIn: ["monday", "sunday"],
    "full name": "vikram kumar" // can't be accessed by . method (first way to access) only accessed by []
}

// access method
 console.log(JsUser.isLoggedIn);
 console.log(JsUser["isLoggedIn"])
 console.log(JsUser[symbol]); // this is the way to define the symbol 
 console.log(typeof symbol);  // this is the confermation of symbol
 
 JsUser.courese = "cyber security" // way to change the part of objects
 Object.freeze(JsUser)  // way to fix the object so that no one can change it 
 console.log(JsUser["courese"]);
 //console.log(JsUser);
 
 //adding a method to object
JsUser.greeting = function(){
    console.log("hello vikram sir, kese hai aap! ");
    console.log(`hello, ${this.name} kese hai aap! `);
    
}

// JsUser.greeting()
// console.log(JsUser.greeting());  // which one is correct?
