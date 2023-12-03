const user = {
    username:"aditya",
    price:999,
    welcomeMessage: function () {
        console.log(`${this.username},welcome to website`);
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username="Mayuri"
// user.welcomeMessage()

//console.log(this);// because we are in node 

// function chai() {
//     let username="aditya"
//     console.log(this);
    
// }
// chai()

// const chai= function {
//     let username="aditya"
//     console.log(this.username);
    
// }
// chai()

const chai = ()=> {
    let username = "Mayuri"
    console.log(this);
}

//chai()

const addTwo = (num1,num2) => {
    return num1 + num2 
}

console.log(addTwo(3,4));