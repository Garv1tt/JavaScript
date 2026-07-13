//  Getter and Setter and Stack Overflow
// (Modern Way and is the nicest among the 3 in sintactical clarity also)
class User{
    constructor(email, password){
        this.email = email;
        this.password = password
    }
    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        this._password = value
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }
}
const test = new User("g@gmail.com", "garvit")
console.log(test.email)

