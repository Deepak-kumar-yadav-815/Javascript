//stack(primitive)  and heap(non primitive )
let myYoutubename = "hiteshchoudharydotcom"
let anothername = myYoutubename

console.log(myYoutubename)
console.log(anothername)

let useOne = {
    email:"Deepak@gmail.com",
    password:"1234@123"
}
let useTwo = useOne;
useTwo.email = "aman@gmail.com"
console.log(useOne.email)
console.log(useTwo.email)
//reference type same as c++,java python you can relate it
