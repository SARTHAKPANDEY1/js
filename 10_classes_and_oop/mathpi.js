const desc = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(desc);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const hi = {
    name: 'aman',
    age: 21,
    isAvailable: true,

    order: function(){
        console.log("not available");
    }
}
console.log(Object.getOwnPropertyDescriptor(hi, "name"));

Object.defineProperty(hi, 'name', {
    // writable : false,
    enumerable: true
})
console.log(Object.getOwnPropertyDescriptor(hi, "name"));

for (let [key, value] of Object.entries(hi)) {
    if (typeof value !== 'function'){
         console.log(`${key} : ${value}`);
    }
}

