// Primitive 

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const marks =100.3

 const isLoggedIn = false
 const outsideTemp = null
 let userEmail;

 const id  = Symbol('123')
 const anotherId = Symbol('123')

 console.log(id === anotherId);

 const bigNumber = 8888888888887777n



//Reference (Non Premitive)

// Arrays, Objects, Functions

const heros = ["akshay","sidharth"]
let myobj = {
    name:"akks",
    age: 33,
}

const myFunction = function name() {
    console.log("Hello World");
}

console.log(typeof bigNumber);


// Stack (Primitive), Heap(Non-Primitive)

let myYoutubeName  = "my@channel"
let anothername = "Akks@channel"
console.log(myYoutubeName);
console.log(anothername);

let userOne ={
    email : "user@gmail.com",
    upi : "user@ybl"
}
let userTwo = userOne

userTwo.email = "akki@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

