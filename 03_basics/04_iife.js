// Immediatly Invoked function Expressions (IIFE)
(function chai(){
    //named iife
    console.log(`DB Connected`);//global scope ke pollution se bachne ke liye humlog iife ka use maarte hain
})(); //bina semicolon ke function dont know where to stop context of the scope 
// we have two put a semicolon between two iife

(
    //arrow iife
    ()=>(console.log(`Db connected two`)
))();

( (name)=> (console.log(`Db connected mr ${name}`)))("deepak");