//Immediately Invoked  Function Expressions (IIFE)

// function chai() {
//     console.log(`DB CONNECTED`);
// }

// chai()

// `()()` //gobal scope's pollution are removed with the help of this function and it also make the function work very fast
//in iife we have to close the file with ; 
// named iiife as having function name
// unnamed iife as having arrow function and no name 


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')