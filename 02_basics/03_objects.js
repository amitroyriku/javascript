//Singelton Object is created only from constructor
//It ensures that there is only one instance of the class,
//no matter how many times you request an instance of it.


//Object.create //Constructor // Singleton



//Everything below is not a singleton object

const mySym = Symbol("key1");


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
};

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]); // jsUser.mySym not allowed

// JsUser.email = "hitesh@chatgpt.com";
// Object.freeze(JsUser)
// JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser.email); //hitesh@chatgpt.com

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

//jsUser.greeting() // function is not executed only we get the reference
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());