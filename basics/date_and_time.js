const date = new Date();
console.log(date.toLocaleString());
console.log(date.toDateString());
console.log(date.toJSON())
console.log(date.toISOString())
console.log(date.toLocaleTimeString())
/**
 * below is the respective outputs
 *  3/12/2025, 8:51:55 pm
    Wed Dec 03 2025
    2025-12-03T15:21:55.135Z
    2025-12-03T15:21:55.135Z
    8:51:55 pm
 */
//type of date is object
let mycreatedDate = new Date(2025,11,5);
console.log(mycreatedDate);

// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})