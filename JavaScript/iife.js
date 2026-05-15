// immediately invoked function expressions(IIFE)

// because of pollution of global scope our files can get polluted ie damaged but there are some files we want to run immediately or tu protect hem from global so then we use iife
// below is the example of a name iife where name is one
(function one(){
    console.log(`DataBase Connected`);  
})();
// the semicolon at the end above makes sure there can be more than one iife 

// below is the example of simple iife which has no name
( (name) => {
   console.log(`DataBase 2 Connected by ${name}`);
   
}
)('Garvit')