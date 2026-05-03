let mydate = new Date()
// console.log(typeof mydate);
// console.log(mydate.toString());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toJSON());
// console.log(mydate.toLocaleString());
// console.log(mydate.toDateString());

let mycreateddate = new Date(2022, 11, 18, 23, 59)
// console.log(mycreateddate.toLocaleString());
let mychoicedate = new Date("2023-1-26")
// console.log(mychoicedate.toString());

let timestamp = Date.now()
// console.log(timestamp);
// console.log(mycreateddate.getTime());
// above will give the value of time in milisecond from 1January, 1970
// for miliseconds into seconds
console.log(Math.floor(Date.now()/1000));
