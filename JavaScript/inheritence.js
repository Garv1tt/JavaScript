

class Student{
    constructor(username){
        this.username = username;
    }

    LogMe(){
        console.log(`Student Name is: ${this.username}`);
        
    }
}
class Teacher extends Student{
    constructor(username, email, password){
        super(username);
        this.email = email;
        this.password = password;
    }

    AddCourse(){
        console.log(`A new Course Was Added By Teacher: ${this.username}`);
        
    }
}
const test3 = new Teacher("Garvit", "Teacher@gmail.com","17890")
const test4 = new Student("Aman")
// test3.AddCourse()
// test4.LogMe()
// console.log(test3 instanceof Teacher); ----> true
// console.log(test3 instanceof Student); ----> true
// console.log(test4 instanceof Student); ----> true 
// console.log(test4 instanceof Teacher); ----> false 



// test4.AddCourse() this will result in error 