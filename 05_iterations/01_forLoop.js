// for loop syntex
/*
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}
*/

for (let i = 0; i <= 10; i++) {
    const element = i;
    console.log(element);
    if (element==7) {
        console.log("no 7 is best no");
        
    }
}

for (let i = 1; i <= 10; i++) {
    const element = i;
    console.log(`that is the how to write the table`)
    // console.log(`outer loop ${i}`);
    for (let j = 0; j <=2; j++) {
        const element = j;
        // console.log(`outter loop is ${i} and inner loop ${j}`);
        console.log(i + "*" +j + "=" + i*j)
    }
    
}

const myArray = ["vikram", "romik", "pankaj"]
console.log(myArray.length)
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element)
}

// break and continue

for (let index = 1; index <= 10; index++) {
    if (index==7) {
        console.log(`7 is our fev. no so that's it no more discussion`);
        break
    }
    if (index==4) {
        console.log(`no more 4`);
        continue
    }
    console.log(`the value of current index no. is ${index}`)
    
}