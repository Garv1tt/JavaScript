//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}
// console.log(a);
// console.log(b);
// console.log(c);

// ----------------------------------------PART-2----------------------------------------------



function one(){
    const username = "Garvit"
    function two(){
        const surname = "Jain"
        // console.log(username);        
    }
    // console.log(surname);
    two()
}
one()
// same for if statement


if (true){
    username = "Garvit Jain"
    if (true) {
        const website = "youtube"
        // console.log(username);
        
    }
}