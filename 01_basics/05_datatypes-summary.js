//  Primitive(assign Value)

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(typeof anotherId);
console.log(id === anotherId); //false
console.log(id == anotherId); //false

// const bigNumber = 3456543576654356754n

//Non primitive (assign Reference)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let name1 = "Amit Roy";
let name2 = "Sanjib Ghosh";

name2 = "Tripti Bikash"

console.log(name1); //Amit Roy
console.log(name2); //Tripti Bikash

let user1 = {
    email: "user&google.com",
    upi: "user@ybl"
}

let user2 = user1;

user2.email = "amit@google.com";

console.log(user1); //{ email: 'amit@google.com', upi: 'user@ybl' }
console.log(user2); //{ email: 'amit@google.com', upi: 'user@ybl' }
