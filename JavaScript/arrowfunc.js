// also we will study about this keyword

const user = {
    username: "Garvit",
    price: 999,
    welcomemessage: function(){
        // console.log(`${this.username}, welcome to website`);
        // console.log(this);
        
    }
}
// console.log(this);

user.welcomemessage()
user.username = "Sam"
user.welcomemessage()
// this does not word under function but works under objects

function two(){
    y: "Garvit"
    // console.log(this.y);
    
    
}
// console.log(two());


// declaration of arrow function iw this is also known as explicit return
 const addition= (num1,num2) => {
    num3 = num1 + num2
    return num3
 }
//  console.log(addition(3,7));
//  if there is only one line in the code then you can also write it as note it is really important whike studying react ie this process is known as implicit return
const subtraction = (num1,num2) => (num1 - num2)
console.log(subtraction(13,3));
