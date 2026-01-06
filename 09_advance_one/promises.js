const promiseOne = new Promise(function(resolve,reject){
   // do an sync task
   // db calls, cryptography, network
   setTimeout(function(){
    console.log('Async task is completed')
    resolve()
   }, 1000)
})

promiseOne.then(function(){
    console.log("promise consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
       resolve({username: "aman", email:"hello@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
   console.log(user);
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:'aman', password: "123"})
        }else{
            reject('ERROR: Something went wrong')
        }
    },1000)
})

promiseFour
.then((user) =>{
   console.log(user);
   return user.username
}).then((username) => {
   console.log(username);
}).catch(function(e){
    console.log(e);
}).finally(() => console.log("The promise is either resolved or rejected"))