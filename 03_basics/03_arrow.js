const user = {
    username: "sarthak",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} ,welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "amit"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "sarthak"
//     console.log(this);  
// }

// chai()

// const chai = function () {
//     let username = "sarthak"
//     console.log(this.username); 
// }

const chai =  () => {
    let username = "sarthak"
    console.log(this); 
}
// chai()

// const addTwo = (num1, num2) =>{
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) =>  ( num1 + num2 )

const addTwo = (num1, num2) =>  ({username : "sarthak"})

console.log(addTwo(44,42))

// const myArr = [2,5,3,7,8]

// myArr.forEach()
