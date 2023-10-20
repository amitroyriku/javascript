const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function () { //welcomeMessage: function welcomemsg ()
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

user.welcomeMessage();
/*
hitesh , welcome to website
{
  username: 'hitesh',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}
*/
console.log(this); //{}

// const chai = function () {
//     let username = "hitesh"
//     console.log(username);
// }

const chai =  () => {
    let username = "hitesh"
    console.log(username);
}

chai() //hitesh

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

const addTwo = (num1, num2) => (num1 + num2)

console.log(addTwo(3, 4)); //7

const msg = (num1, num2) => ({username: "hitesh"})


console.log(msg(3, 4)); //{ username: 'hitesh' }

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()