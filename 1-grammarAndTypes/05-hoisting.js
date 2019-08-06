
b();
console.log(a)

function b() {
    console.log('this is all hoisted!')
}

var a = 'this is not hoisted'

//Hoisting does not exist. It is an illusion. Code doesn't actually get moved.
//JS reads through code twice remembering left hand side variables and functions.