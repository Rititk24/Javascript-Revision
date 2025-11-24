//for in loop 
//syntax :
// for ( item in object) {
//     // code block to be executed
//   }
//item: A variable that represents the current key in each iteration of the loop. This will be set to each property name of the object, one by one.
//object: An object whose enumerable properties are to be iterated over.


const games ={
    game1:"Cricket",
    game2:"Football",
    game3:"Hockey"
}
for (const game in games) {
    //console.log(game); // it will print the keys of the object
    //console.log(games[game]); // it will print the values of the object

}
//forinloop is mostly used with objects rathen then for of loop


//array
const animals = ['Lion', 'Tiger', 'Elephant'];
for(const animal in animals){
    //console.log(animal); // it will print the indices of the array
    //console.log(animals[animal]); // it will print the values of the array
}
//note : for in loop is not recommended for array as it iterates over indices not values directly. for of loop is better for array.

const fruits = new Map();
fruits.set(1, 'Apple');
fruits.set(2, 'Banana');
fruits.set(3, 'Cherry');
//console.log(fruits); 

for(const fruit in fruits){
    console.log(fruit); //it is not recommended to use for in loop with map as it doesn't give expected results
}