//while
//initialization;
// while (condition) {
//  //code to executes as long as the condition is true   
//  // increment or decrement statement
// }

let a=0
while(a<=10){
    console.log(`The value of a is: ${a}`);
    a=a+2; // increment by 2
}

//array
const fruits = ['apple', 'banana', 'cherry'];
let i=0;
while(i<fruits.length){
    //console.log(fruits[i]);
    i++;
}


//do while
//initialization;
// do {
//  //code to be executed
//  // increment or decrement statement
// } while (condition);

let m=0
do{
    console.log(`The value of m is: ${m}`)
    m=m+3; // increment by 3}
}while(m<=12);


/*difference between while and do while loop and for loop
for loop: Best for loops with a known number of iterations (like iterating through an array).

while loop: Best for loops where the number of iterations is not known, and you are waiting for a condition to change.

do...while loop: Best when you need to guarantee that the loop body is executed at least once, even if the condition is false initially.

*/

