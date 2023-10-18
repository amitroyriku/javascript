const name = "hitesh"
const repoCount = 50

console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


//string declaration inside heap memory

const gameName = new String('hitesh-hc-com')

console.log(gameName[0]);
// console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t')); //If 't' not found then return -1

const newString = gameName.substring(0, 4) //we can't start from negative index in case of subString
console.log(newString);
console.log(gameName); //[String: 'hitesh-hc-com']

const anotherString = gameName.slice(-1, 4) //we can start from negative index in case of slice
console.log(anotherString);
console.log(gameName); //[String: 'hitesh-hc-com']

///--------------------------------------------------------
const newStringOne = "   Amit Roy    "
console.log(newStringOne);
console.log(newStringOne.trim()); //Remove beginning and ending spaces(we can specify start & end index)

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar')) //return true if url include 'sundar'

console.log(gameName.split('-'));