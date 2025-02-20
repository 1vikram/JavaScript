// Immediately Invoked Function Experssions (IIFE)
    // Used for remove the global and local scope polution
    // or we can say global scope ke polution ko htane ke liye "iife" ka use kiya jata hai

(function chai () {
    // called named IIFE
    console.log(`database (DB) is connected`)
})();  // ; is msut used in these type of function 

// syntex-
// ()()  -> first () is used for define the function and second () is used for call/run it
// ( () => {} )() -> arrow function me iife

((name)=>{
    // simple IIFE
    console.log(`here is used Arrow function and IIFE learn by ${name}`);
})("vikram");