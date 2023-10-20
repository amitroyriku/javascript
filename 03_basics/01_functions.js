function sayMyName(){
    console.log('A');
    console.log('M');
    console.log('I');
    console.log('T');
}

sayMyName();

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2;
}

const result = addTwoNumbers(3, 5)

console.log(`Result: ${result}`); // console.log("Result: ", result);

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("hitesh")) //hitesh just logged in
console.log(loginUserMessage("")) //PLease enter a username
console.log(loginUserMessage()) //sam just logged in


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000)) //[ 500, 2000 ]

const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user); //Username is hitesh and price is 199

handleObject({
    username: "sam",
    price: 399
}) //Username is sam and price is 399

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000])); //400