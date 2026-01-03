//array

const myArr = [0,3,4,2,6,5]
const myHeros = ["akshay", "virat"]

const myArr2 = new Array(1,2,3,4)
// console.log(myArr[2]);

//Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()//removes last value

// myArr.unshift(9) //. inserts at begining
// myArr.shift()//remove first

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));

const newArr = myArr.join()

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B", myArr); 

const myn2 = myArr.splice(1,3)
console.log("C ", myArr); 
console.log(myn2);





