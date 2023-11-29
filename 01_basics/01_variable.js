const accountId = 144553;
let accountEmail = "aditya@gmail.com"
var accountPassword = "12345"//scope 
accountCity = "Jaipur"
let accountState;


//accountId = 2
accountEmail = "a@a.gmail.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);
/*  
prefer  not  to use var because  of issue in block scope and function 

*/

console.table([accountId,accountEmail,accountPassword,accountCity])