// most of the loop in this file are array specific
//  (for of) loop
const myArray = [1,2,3,4,5,6,7,8,9,10]
// for (const value of myArray) {
//     console.log(value);
// } this is good as we do not have to tell to increase or decrease the value like value++

// const strArray = ['flash','batman','superman','spiderman','hulk']
// for (const val of strArray) {
//     console.log(val);
    
// }
// funfact-it does not print any duplicate value and in which order we give the value it takes the value in that order.
// const map = new Map()
// map.set('IN',"India")
// map.set('FR',"France")
// map.set('USA',"United States Of America")
// // console.log(map);
// for (const [key,value] of map) {
//     console.log(key,value);
// we cannot use forin in maps because of the same problem we cant use forof in objects, because they are not iterable.
// }
// (for in) loop
// const Myobj = {
//     js:'JavaScript',
//     cpp:'C++',
//     rb:'ruby',
//     HTML:'Hyper Text Markup Language'
// }

// for (const key in Myobj) {
//     console.log(`${key} shortcut for ${Myobj[key]}`);
    
    
// } we use forin because objects are not iterable through forof
//  we can use forin with arrays also but when we print the keys we get arrays indexes

// const arr = [1,2,3,4,5,6]
// for (const key in arr) {
//     console.log(arr[key]);
    
    
// }

// (for each) loop

const coding = ["Flash","Superman","BatMan","Spiderman"]
// coding.forEach(function (value){
//         console.log(value);
        
// })
// coding.forEach((value) => {
//     console.log(value);
    
// })
// function printme(item){
//     console.log(item);
// }
// coding.forEach(printme)

// note-we can also print index and array except the actual value

// coding.forEach((value,index,arr) => {
//     console.log(value,index,arr);
    
// })

// array of object

const mycoding = [{
    languagename: 'JavaScript',
    languagefilename: 'js'
},
{
    languagename: 'Python',
    languagefilename: 'py'
},
{
    languagename: 'Java',
    languagefilename: 'java'
}
]
mycoding.forEach((item) => {
    console.log(item.languagename);
    
})