// syntax
//  --for
//  for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

//example
// for(let i = 0; i <= 5; i++) {
//     console.log(`Iteration number: ${i}`);  
// }
//console.log(i) // ReferenceError: i is not defined

// The variable 'i' is scoped to the for loop and cannot be accessed outside of it. 

// for(let j=0; j<3; j++) {
//     if(j === 2) {
//         //console.log('Breaking the loop at j = 2');
//         break; // Exit the loop when j is 2
//     }
//     console.log(`Value of j is: ${j}`);
// }

// for(let j=0; j<3; j++) {
//     if(j === 2) {
//         //console.log('Breaking the loop at j = 2');
//         continue; // Skip the rest of the loop when j is 2
//     }
//     console.log(`Value of j is: ${j}`);
// }

//difference :- 
// break - stops the loop entirely.
//continue - skips the current iteration and moves to the next one.


// for(let i=1; i<=10; i++) {
//     console.log(`outer loop i: ${i}`);
//     for(let k=1;k<=10;k++){
//         //console.log(`   inner loop k: ${k}`);
//         console.log(`Multiplication: ${i}*${k}= ${i*k}`)
//     }
// }

const Myarray = ['apple', 'banana', 'cherry'];
for (let index = 0; index < Myarray.length; index++) {
    const element = Myarray[index];
    console.log(element);
}