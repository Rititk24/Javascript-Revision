//map() loops through an array and returns a new array with modified values for each item.
const numbers=[1,2,3,4,5,6,7,8,9,10];

const getNumbers=numbers.map((num)=> num+1);
//console.log(getNumbers); //[ 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ] map returns a new array after applying the operation on each element of original array.

//chaing map
const chaingexample=numbers.map((num)=>num*2).map((num)=>num+3)
console.log(chaingexample); //[ 5, 7, 9, 11, 13, 15, 17, 19, 21, 23 ] first map multiply each element by 2 and second map adds 3 to each element of new array created by first map.

//we can add filter also in chaining
const chaingexp=numbers.map((num)=>num*2).map((num)=>num+3).filter((num)=>num>10)
console.log(chaingexp); //[ 11, 13, 15, 17, 19, 21, 23 ] first map multiply each element by 2 and second map adds 3 to each element of new array created by first map.
//then filter filters the elements which are greater than 10 from the new array created by second map.

