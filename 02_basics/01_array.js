// //array
// // const myarr = [0,1,2,4,5,6,6,true,"Deepak"];
// // console.log(myarr);
// const superHeros  = ["Superman","Shaktiman","Thor"]
// const superHeros1 = new Array("Asish",...superHeros,"Deepak");//destructing happens acctually it takes the individual elements of array and store them
// const superHeros2 = new Array(superHeros);//without destructuring means it will create an array insdie the array
// // console.log(...superHeros);//it will basically opens the array and prints the element in one line individually

// // console.log(superHeros1);
 

//array methods
// const arr = [1,2,3,4]
// arr.push(9);//append 9 in arr
// console.log(arr);

// arr.pop();

// arr.unshift(9)//it adds it in front
// arr.shift();
// console.log(arr);//it removes the number from the front
// console.log(arr.includes(2))
// console.log(arr.indexOf(2));

// const myarr = arr.join()
// console.log(myarr);
// console.log(typeof myarr);


//slice ans splice
const brr = [1,2,3,4,5,6,7,8,9]
console.log(`A :->  ${brr}`);
const brrSlice = brr.slice(1,3);
console.log(brrSlice);
console.log(`B:-> ${brr}`);
const brrsplice = brr.splice(1,3);
console.log(brrsplice);
console.log(`C:-> ${brr}`);



