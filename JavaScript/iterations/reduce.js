// const mynum = [1,2,3,4,5]
// const mytotal = mynum.reduce((acc,currval) => {
//     console.log(`acc is: ${acc} and currval is: ${currval}`);
//     return acc+currval
// },0)
// console.log(mytotal);
const shoppingcart = [
    {
        coursename: "js course",
        price: 1299
    },
    {
        coursename: "py course",
        price: 999
    },
    {
        coursename: "html course",
        price: 1399
    },
    {
        coursename: "web dev course",
        price: 1299
    },
]
const carttotal = shoppingcart.reduce((acc,item) => (acc + item.price),0)
console.log(carttotal);
