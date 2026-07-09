function MultipleBy5(num){
    return num*5
}

// console.log(MultipleBy5(5))
// console.log(MultipleBy5.power = 2);
// console.log(MultipleBy5.prototype)
// this tells us that function can behave as both a function and also a object because of prototypal inheritance
// prototype of object is null.

function CreateUser(username, score){
    this.username = username
    this.score = score
}
 CreateUser.prototype.increment = function(){
    this.score++
 }
 CreateUser.prototype.printMe = function(){
    console.log(`price is: ${this.score} for ${this.username}`);
    
 }
 const test = new CreateUser("Chai", 25)
 const test2 = new CreateUser("Coffee", 110)

//  test.printMe()
//  test2.printMe()