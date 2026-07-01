// resolve is directly connected to then 
const PromiseOne = new Promise(function(resolve, reject){
   setTimeout(function(){
    // console.log("Async Task Done")
    resolve()
   }, 1000) 
})
PromiseOne.then(function(){
    // console.log("Promise Consumed")
})
// a short form to write
new Promise(function(resolve, reject){
    setTimeout(function(){
        // console.log("Async Task 2 Done")
        resolve()
    }, 1000)
}).then(function(){
    // console.log("Promise 2 Consumed")
})
// to get values from resolve into then
const PromiseThree = new Promise(function(resolve ,reject){
    setTimeout(function(){
        resolve({username: "Garvit",Country: "India"})
    }, 1000)
})
PromiseThree.then(function(user){
    // console.log(user)
})

const PromiseFour = new Promise(function(resolve, reject)
{
 setTimeout(function(){
    let error = false
    if (!error) {
        resolve({username: "Garvit", ID: 187})
    } else{
        reject('ERROR:Something Went Wrong')
    }
 }, 1000)
})
//  const username = PromiseFour.then((user) => {
//     console.log(user)
//     return user.username
//  })
//  console.log(username);
// above was wrong to call out the username so now 

// perfect and most important
 PromiseFour.then((user) => {
    console.log(user)
    return user.username
 })
 .then((username) => {
    console.log(username)
 })
 .catch(function(error){
    console.log(error);
 })
 .finally(() => console.log("The Problem Is Either Resolved Or Rejected "))

const PromiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        
    }, 1000)
})