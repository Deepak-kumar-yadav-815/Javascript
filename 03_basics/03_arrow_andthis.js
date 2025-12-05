const user = {
    username : "Deepak kumar yadv",
    price :999,
    welcomeMessage : function(){
        // console.log(`${this.username} welcome to the website`);
        // console.log(this);
    }
}

// user.welcomeMessage();
// user.username="Ashish kumar yadav"
// user.welcomeMessage();


// console.log(this);

/**
 * so basically console.log(this):-> tells the context of the perticulaer scope
 * so when this executed in line 6 it gives me the context of if block used 
 * 
 * @interesting 
 * when you execute the same thing in global scope as in line 15 you will get empty object as the scope is nothing in node
 * while if do in windows browser then it will show the window as context
 */

// function chai(){
//     let username = "Deepak kumar yadav";
//     console.log(this.username);
//     // console.log(this); below lines are the output of this 
//     // <ref *1> Object [global] {
//     // global: [Circular *1],
//     // clearImmediate: [Function: clearImmediate],
//     // setImmediate: [Function: setImmediate] {
//     //     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//     // },
//     // clearInterval: [Function: clearInterval],
//     // clearTimeout: [Function: clearTimeout],
//     // setInterval: [Function: setInterval],
//     // setTimeout: [Function: setTimeout] {
//     //     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//     // },
//     // queueMicrotask: [Function: queueMicrotask],
//     // structuredClone: [Getter/Setter],
//     // atob: [Getter/Setter],
//     // btoa: [Getter/Setter],
//     // performance: [Getter/Setter],
//     // fetch: [Function: fetch],
//     // navigator: [Getter],
//     // crypto: [Getter]
//     // }
    
// }
// chai();




// const chai = function(){
//     let username= "deepak";
//     console.log(this.username);
// }
// chai();


const chai = () =>{
    let username = "Deepak"
    // console.log(this);//explore why this gives an empty object while above gives big output   
}
chai();

// const addTwo = (num1,num2) => {
//     return num1+num2
// }
const addTwo = (num1,num2)=>num1+num2;

const returnObject = ()=>({username:"Deepak kumar yadav"})//basically obejct return karane ke liye we use curly brackets

console.log(addTwo(3,4));
console.log(returnObject());


