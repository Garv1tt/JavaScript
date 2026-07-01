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
    let error = true
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
    // console.log(username)
 })
 .catch(function(error){
    // console.log(error);
 })
//  .finally(() => console.log("The Problem Is Either Resolved Or Rejected "))

const PromiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
    if (!error) {
        resolve({username: "JavaScript", ID: 187})
    } else{
        reject('ERROR:JS Went Wrong')
    }
    }, 1000)
})
async function ConsumePromiseFive(){
   try {
         const response = await PromiseFive
    console.log(response)
   } catch (error) {
        console.log(error)
   }
}
ConsumePromiseFive()


// something about fetch()
//1st Way
// async function GetAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log('E:', error)
//     }
    
// }
// GetAllUsers()
// 2nd Way

// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response) => {
//        return response.json()
// })
// .then((data) => {
//     console.log(data);
    
// })
// .catch((error) => console.log(errror))