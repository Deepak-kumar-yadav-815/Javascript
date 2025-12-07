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

const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter( (num) => num>4)
const newNums = myNums.filter( (num) => {
    return num>4
})

/**
 * jb bhi () yeah likho do not write return statement
 * {} => yeah likho toh write return statement
 */
console.log(newNums);