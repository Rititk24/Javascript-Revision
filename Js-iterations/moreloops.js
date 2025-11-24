//for of loops

//syntax :
// for ( item of iterable) {
//     // code block to be executed
//   }
//item: A variable that represents the current value in each iteration of the loop. This will be set to each element of the iterable, one by one.
//iterable: An object that can be iterated over (such as an array, string, or other collections like Set, Map, etc.).

let colors = ['red', 'green', 'blue'];
for(const color of colors){
    //console.log(color);
}

const name="Ritik";
for(const char of name){
    //console.log(char);
}

//map
//map is also iterable and known for unique key value pairs
const fruits = new Map();
fruits.set(1, 'Apple');
fruits.set(2, 'Banana');
fruits.set(3, 'Cherry');
console.log(fruits); // it will print the map object

//attch this in for of loop
for(const fruit of fruits){
    console.log(fruit); // it will print each key value pair as an array
}
for(const [fruit,value] of fruits){
    console.log(`Key: ${fruit}, Value: ${value}`); // it will print key and value separately
}