//if
// const isUserloggedIn = true
// const temprature = 16

// if (temprature === 43) {
//     console.log("less than 20");
// }
// else{
//     console.log("greater than 20");
// }
// <, >, <=, >=, == , !=, ===, !==

// const score = 200

// if(score>100){
//     const power = "fly"
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);

// const balance = 1000

// // if (balance > 500) console.log("test"),console.log("test2"); dont use two here

// if (balance < 500) {
//     console.log("less than 500");
// }else if (balance < 750){
//     console.log("less than 750");
// }else if (balance < 900){
//     console.log("less than 900");
// }else{
//    console.log("less than 1200");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard ) {
    console.log("allowed to buy courses");
}

if (loggedInFromEmail || loggedInFromGoogle) {
    console.log("user logged in");
}


