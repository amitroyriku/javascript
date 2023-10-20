const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
}

/*
1
2
3
4
5
*/

const greetings = "Hello world!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
}

/*
Each char is H
Each char is e
Each char is l
Each char is l
Each char is o
Each char is  
Each char is w
Each char is o
Each char is r
Each char is l
Each char is d
Each char is !
*/

// Maps

/*
The Map object holds key-value pairs and remembers the original insertion order of the keys.
Any value(both objects and primitive_values) may be used as either a key or a value.

In older versions of JavaScript (ECMAScript 5 and prior), plain objects do not guarantee any specific
order for their properties. Starting from ECMAScript 2015 (ES6), JavaScript's own objects also maintain
insertion order. However, for precise ordering and when you need to ensure that the order of keys is
preserved, Map is a more suitable choice.
*/

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }