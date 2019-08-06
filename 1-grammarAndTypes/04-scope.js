/* Scope

Scope refers to where a variable is defined and accessible 
Global and Local Scope i.e. Local Scope = Indy and Global Scope = World

JavaScript has function scope: each function creates a new scope
Scope determines the visibility of these variables
Variables defined inside a function are not visible from outside of the function

*/

/* Var vs. Let



*/

var x = 12;

function letTest() {
    let x = 33;
    if (true) {
        let x = 45;
        console.log(x)
    }
    console.log(x)
}

letTest();
console.log(x);