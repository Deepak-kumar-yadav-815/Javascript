if(true){
    let a = 10
    const b = 20
    // var c = 30 
}
c=40;
// console.log(a);
// console.log(b);
console.log(c);

//explore node scpoe and window scope

//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++
// this is hoisting problem
/**
 * basically yaad yeah rakhna hain ki 
 * function ko hum declare kaise kerte hain kuch decleration types humlog ko ek pre call krne dete hain 
 * while kuch ni krne dete hain
 * 
 * 
 * neeche addone jo hain usme humlog kr skate aisa samjhlo ki async call h
 * wahi addtwo will give error kyuki humlogo n usse pahle hi declare kr liya hain
 */

console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)
const addTwo = function(num){
    return num + 2
}