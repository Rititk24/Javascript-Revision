/*control flow
Control flow in JavaScript refers to the order in which the statements 
and instructions within a program are executed. By default, JavaScript
executes code sequentially from top to bottom. However, control flow 
statements allow developers to alter this default order based on 
certain conditions, repetitive tasks, or to handle errors. 
In other words ,we can say that which statement will be executed first ,
second or last based on the conditions or loops.
*/
// 1. Conditional Statements 

//<,>,<=,>=,==,!=,===,!==   
// let age = 20;
// if(age>18){
//     console.log("You are eligible to vote.");
// }


// if(6!=5){
//     console.log("6 is not equal to 5");
// }

/*let marks=86;
if(marks>=33){
    console.log("You have passed the exam."); //This block will execute if the condition in if is true
}
else{
    console.log("You have failed the exam."); //This block will execute if the condition in if is false
}
console.log("End of the program."); //This statement will always execute
*/

//scope related
// const marks = 10; // Global scope
// if(marks > 0){
//     const Marks = 20; // Block scope we can access this variable only in this block
//     console.log("Inside if block:", marks); // Outputs: 20
// }
// console.log("Outside if block:", marks); // Outputs: 10



//nested if-else
// let balance = 1000;
// if(balance >500){
//     console.log("less than")
// }
// else if(balance > 800){
//     console.log("Less than 800")
// }
// else {
//     console.log("More than 800")
// }

// let userloggedIn = true;
// let userLocation = "India";
// if(userloggedIn && userLocation){
//     console.log("Show user dashboard");
// }