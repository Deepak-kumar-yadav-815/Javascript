const MarvelHeros = ["Thor","Ironman","spiderman"]
const DCHeros = ["Superman","Flash","Batman"]
// MarvelHeros.push(DCHeros);
// console.log(MarvelHeros);
//concat :=>returns new array 
// const AllHeros = MarvelHeros.concat(DCHeros);
// console.log(AllHeros);
// MarvelHeros.push(...DCHeros);
// console.log(MarvelHeros);

// ...  :-> spread operator


// const AllHeros = [...DCHeros,...MarvelHeros];
// console.log(AllHeros);


const anotherArray  = [1,2,3,[4,5,6,[7,8,9]]]
const realAnotherArray = anotherArray.flat(Infinity);
// console.log(realAnotherArray);

// converting to array

console.log(Array.isArray("Deepak"));
console.log(Array.from("Deepak"));
console.log(Array.from({name:"Deepak"})); //intersting for interview


let score1c= 20
let score2 = 30
let score3 = 40

console.log(Array.of(score2,score1c,score3));//return new element from the set element


