const userEmail="ritik@email.com";
if(userEmail){
    console.log(`Your email is ${userEmail}`);
}else{
    console.log("Please provide your email");
}

//Rules to determine truthy and falsy values
//Falsy values
//1. false
//2. 0
//3. "" (empty string)
//4. null
//5. undefined
//6. NaN
//7 BigInt(0n) 


//Everything else is truthy value
//[]
//{}
//function(){}
//"0"
//"false"
//Any number other than 0
//Any BigInt other than 0n

//how to check empty array and object

const checkarray=[];
if(checkarray.length===0){
    console.log(`empty array ${checkarray}`);
}

const checkObject={};
if(Object.keys(checkObject).length===0){
    console.log(`empty object ${checkObject}`);
}


//nullish coalescing operator(??)
//It returns the right-hand side operand when the left-hand side operand is null or undefined

let val;;
val=5??10
console.log(val); //5

val=null??10
console.log(val); //10

val=undefined??10
console.log(val); //10

val=0??10
console.log(val); //0

val=""??"default string"
console.log(val); //""
val=false??true
console.log(val); //false

//Ternary operator
//syntax
//condition ? true : false

const course=500
course >=300 ? console.log("enrolled") : console.log("not enrolled");