let myArr = ["js","cpp","py","c","ruby"]
// myArr.forEach(function (val){
//     console.log(val);
// })

// myArr.forEach((val)=>{
//     console.log(val);
// })

// function PrintMe(item){
//     console.log(item);
// }

// myArr.forEach(PrintMe)

myArr.forEach( (item,index,arr) => {
    console.log(item,index,arr);
 })