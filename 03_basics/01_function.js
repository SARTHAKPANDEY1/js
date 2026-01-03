function sayMyName() {
    console.log("A");
    console.log("M");
    console.log("A");
    console.log("N");  
}

// sayMyName()

// function addTwoNumbers(num1, num2) {
//    console.log(num1 + num2);
// }

function addTwoNumbers(num1, num2) {
    // let result  = num1 + num2
    // return result

    return num1 + num2
}

const result = addTwoNumbers(4,3)

// console.log("Result:", result);

function loginUserMessage(username= "virat") {
    if(!username){
       console.log("Please enter a username");
       return
       
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("aman"));
// console.log(loginUserMessage("aman"));


function calculateCartPrice(val1,val2,...num1) {
    return num1
}
// console.log(calculateCartPrice(200,400,500,2000))

const user = {
    username : "aman",
    price : 199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObject(user)
handleObject({
    username: "aman",
    price: 399
})

const myNewArray = [200,400,100,600]

function returnSecondValue(getArr) {
    return getArr[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,500]));



