class User{
    constructor(username){
        this.username = username
    }
    LogMe(){
        console.log(`Username is: ${this.username}`)
    }
    static CreateID(){
        return "1234"
    }
}
class Teacher extends User{
    constructor(username, email){
        super(username);
        this.email = email
    }
}
const test = new User("Garvit")
// console.log(test.CreateID())
const test2 = new Teacher("Aman", "a@aman.com")
// console.log(test2.CreateID());

