//reduce() takes all values of an array and combines them into a single result (like sum, product, or object).

const numbers=[1,2,3,4,5];
const total=numbers.reduce(function(accumulator, currentValue){
    console.log(`Accumulator: ${accumulator}, Current Value: ${currentValue}`);
    return accumulator + currentValue;
},0)
console.log(total); //15


//with arrow function
const sumofnums=numbers.reduce((accumulator, currentValue) => accumulator + currentValue,0);
console.log(sumofnums); //15