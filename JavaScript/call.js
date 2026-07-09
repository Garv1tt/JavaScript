function SetUsername(username){
    this.username = username
    console.log("Called");
    
}
function CreateUser(username, email, password){
    SetUsername.call(this, username)
    this.email = email
    this.password = password
}

let User=new CreateUser("Garvit", "Garvit@google.com", "garvit242")
console.log(User);
