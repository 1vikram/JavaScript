const arr01 = [1,2,3,4,5,"VK",]
console.log(arr01);

const arr02 = ["ram", "shyam"]
console.log(arr02);
 
console.log(arr01+arr02);
arr01.push(12)
console.log(arr01);

const arr03 = ["ironman", "thor", "hulk"];
const arr04 = ["superman", "flash", "batman"]

//arr03.push(arr04)
//console.log(arr03);  // for adding other array as a element in any predefing array

const arr05 = arr03.concat(arr04)  // used for adding  all the arrays in single array
console.log(arr05);

const arr06 = [...arr03, ...arr04]  // adding more then 2 array in new array 
console.log(arr06);

const arr07 = [1, 2, 3, [4, 5], [6, 7, [8, 9]]]
const arr08 = arr07.flat(Infinity)  // used for neglate all the inner [] and infinity is defined for depth of [[[ ]]]
console.log(arr08);

const vlaue01 = 100
const vlaue02 = 200
const vlaue03 = 300
const vlaue04 = 400
console.log(Array.of(vlaue01,vlaue02,vlaue03,vlaue04));  // Array.of is used for combine all the value in single array


// topics 01> .concat(line 17), .flat(line 24), Array.of(line 31)