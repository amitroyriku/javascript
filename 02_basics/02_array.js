const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros);

// console.log(marvel_heros); // [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// console.log(marvel_heros[3][1]); // flash

// const allHeros = marvel_heros.concat(dc_heros);

// console.log(allHeros); //[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]
// console.log(dc_heros); //[ 'superman', 'flash', 'batman' ]
// console.log(marvel_heros); //[ 'thor', 'Ironman', 'spiderman' ]

const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros); //[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array); //   1, 2, 3, 4, 5, 6, 7, 6, 7, 4,5

console.log(Array.isArray("Hitesh")) //false
console.log(Array.from("Hitesh")) // [ 'H', 'i', 't', 'e', 's', 'h' ]

//Array.from() method is used to create an array from an iterable object, and the object you provided
// { name: "hitesh" } is not an iterable.
console.log(Array.from({name: "hitesh"})) // []

let score1 = 100
let score2 = 200
let score3 = 300

//Array.of() is a method in JavaScript that creates
//a new array with the specified elements as its arguments.
console.log(Array.of(score1, score2, score3));