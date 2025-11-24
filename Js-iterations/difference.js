const games=["Cricket","Football","Hockey","Tennis","Badminton"];

const getGameNames=games.forEach((game)=>{
    //console.log(game)
})

//console.log(getGameNames); //undefined because forEach does not return anything


const getGames=games.filter((game)=>{
    //console.log(game);
})
//console.log(getGames); //[] because filter expects a return value to filter the array.It becomes false we comparing string with undefined.
//because filter needs a true/false return but string > 5 is false


//best way to understand filter by using numbers array

const nums=[1,2,3,4,5,6,7,8,9,10];
const evennumbers=nums.filter((num) => num%2===0);
//console.log(evennumbers); //[ 2, 4, 6, 8, 10 ] filter creates a new array based on conditio

// Do this with foreach
const evennums=[];
nums.forEach((num) =>{
    if(num%2===0){
        evennums.push(num)
    }
})
//console.log(evennums); //[ 2, 4, 6, 8, 10 ]  forEach requires manual push (no return array)



//practise problem
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  //const recentBooks=books.filter((book)=>book.publish>=2005)
  const recentBooks=books.filter((book)=>{
    return book.publish>=2005 && book.genre==="Science"
})
  console.log(recentBooks);

