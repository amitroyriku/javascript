"use strict"; // treat all JS code as newer version

/*
Strict mode introduces various restrictions and improvements, including:

    Variables must be declared with var, let, or const before use.
    Assigning values to undeclared variables is not allowed.
    Deleting variables, functions, or function arguments is not allowed.
    Duplicating parameter names in function declarations is not allowed.
    Assigning values to read-only properties or undeletable properties will throw an error.
    this inside a function that's not a method will have the value undefined.
    Octal literals are not allowed.
    Duplicate object literal properties are not allowed.
    The with statement is not allowed.
    Certain reserved words are restricted, and using them as variable names or object properties is disallowed.
*/

// alert( 3 + 3) // we are using nodejs, not browser
// console.log(3+3);


let name = "hitesh"
let age = 18
let isLoggedIn = false
let state;

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique


// object

console.log(typeof undefined); // undefined
console.log(typeof null); // object