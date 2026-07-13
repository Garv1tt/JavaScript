const User = {
    _email: "Garvit@gmail.com",
    _paassword: "abc",
    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value 
    }
}
const test = Object.create(User)
console.log(test.email);
