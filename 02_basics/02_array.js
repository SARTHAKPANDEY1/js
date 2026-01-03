const hero = ["akki","virat","rohit"]
const dc_hero= ["superman","flash","batman"]

// hero.push(dc_hero)

// console.log(hero);
// console.log(hero[3][1]);

// const allHeros = hero.concat(dc_hero)
// console.log(allHeros);

const all_new_heros = [...hero, ...dc_hero]
// console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)

console.log(real_another_array);

console.log(Array.isArray("Aman"))
console.log(Array.from("Aman"))
console.log(Array.from({name: "aman"})); //interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));






