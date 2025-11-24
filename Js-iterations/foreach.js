//syntax : forEach
// array.forEach(element => {
//     // code block to be executed
// });

const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number){ //with basic function
    //console.log(number); 
})

numbers.forEach((number) =>{
    //console.log(number); // with arrow function
})

function exampleFunction(number){
    //console.log(number);
}

numbers.forEach(exampleFunction); // passing function as callback. we gave only reference of function not calling it.

//forEach with index and array
numbers.forEach((number, index, arr) =>{
    console.log(`Index: ${index}, Number: ${number}, Array: ${arr}`);
});




