// function sayMyName(){
//     console.log("A");
//     console.log("D");
//     console.log("I");
//     console.log("T");
//     console.log("Y");
//     console.log("A");
// }
// //sayMyName()

// // function addTwoNumber(num1,num2) {
// //      console.log(num1+num2);
    
// // }
// // const result = addTwoNumber(3,4)
// // console.log(result);

// function loginUserMessage(username="sam") {
//     if (!username) {
//         console.log("Please enter a username");
//         return
//     }
//     return `${username} just logged in`
    
// }
// //console.log(loginUserMessage());

// function calculateCartPrice(...num1) {
//     return num1
    
// }
// //console.log(calculateCartPrice(200,400,500,2000));

// const user = {

//     username:"Aditya",
//     prices:199
// }

// function handleObject(anyobject) {
//     console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}`);

    
// }

// //handleObject(user)

// handleObject({
//     username:"sam"
    
// })

const myNewArray=[200,400,100,600]

function returnSecondValue(getArray) {
    return getArray[1]
    
}

console.log(returnSecondValue([200,400,100,600]));