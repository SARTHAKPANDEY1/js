// singleton
// Object.create


//object literals

const mySym = Symbol("key1")

const JsUser = {
    name : "Aman",
    "full name" : "Aman Tiwari",
    [mySym] : "mykey1",
    age : 20,
    location : "Raipur",
    email: "aman@google.com",
    isLoggedIn : false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "aman@insta.com"
// Object.freeze(JsUser)
JsUser.email = "aman@facebook.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User");
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());





