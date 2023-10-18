//Let, const, var

/*
var:

    Function-scoped.
    Hoisted (the declaration is moved to the top of the function or global scope).
    Can be reassigned.
*/

function exampleVar() {
    var x = 10;
    if (true) {
      var x = 20;
    }
    console.log(x); // Outputs 20
}

/*
let:

    Block-scoped (only accessible within the block where it's declared).
    Not hoisted.
    Can be reassigned.
*/

function exampleLet() {
    let x = 10;
    if (true) {
      let x = 20;
    }
    console.log(x); // Outputs 10
}

const accountId = 12345;
let accountEmail = "amitroyrikuyy@gmail.com";

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
var accountPassword = "12345";

//accountId = 54321 //not allowed

//When you don't specify a keyword (const, let, or var),
//JavaScript will implicitly declare the variable as a global variable.
accountCity = "Kolkata";
let accountState;

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);