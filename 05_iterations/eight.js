const mynum = [1,2,3]

// const myttl = mynum.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
    
//     return acc + currval
// },0)

const myttl = mynum.reduce( (acc,curr) => acc+curr, 0)

// console.log(myttl);

const cart = [
    {
        itemName: "js",
        price: 2999
    },
    {
        itemName: "py",
        price: 3999
    },
    {
        itemName: "ds",
        price: 9999
    },
]
const topay = cart.reduce((acc,item)=> acc+item.price ,0)
console.log(topay);
