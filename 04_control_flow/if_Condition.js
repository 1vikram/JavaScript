// if (conditions: <, >, <=, >=, ==, !=, ===, !==)

const tempratue = 26

if ( tempratue == 40 ) {
    console.log(`now temprature is ${tempratue} that is less then 40`);
} else {
    console.log(`now temprature is ${tempratue} that is more then 40`);
}

const balance = 0
if (balance>100) {
    console.log(`your current balance is ${balance}, you are rich and having more then 100 rs`);    
} else if(balance>50){
    console.log(`your current balance is ${balance}, you are middle class and you have more then 50rs`);    
} else {
    console.log(`your current balance is ${balance}, GARIBOO!`);    
}

const isUserLogIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromMail = true

// at list one conditon is apply
if (loggedInFromGoogle || loggedInFromMail) {
    console.log("wellcome, your login process is corred you are connected");    
}

// when you want to check more then one condition
if (isUserLogIn && debitCard) {
    console.log("you have debitCard and also log in so you are able to buy anything");    
}

