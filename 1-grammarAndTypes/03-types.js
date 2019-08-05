// Types

/* Booleans

Boolean can represent: true/false, yes/no, on/off
*/

let i = true;
let j = false;

let on = true;
let off = false;

console.log(on,off)

/* Null

Null is an empty value -- not 0, not undefined (a container with nothing in it)

*/

let empty = null;
console.log(empty)

/* Undefined

There is no value assigned (not even a container to put value in)
It is not an error

*/

let undef = undefined
console.log(undef)

let x;
console.log(x)

/* Numbers

Anything that is numerical 

*/

let degrees = 90;
console.log(degrees)

let precise=99999999999999
console.log(precise)

let rounded=999999999999999999999999999999999
console.log(rounded)

let notQuite= 0.2 + 0.1
console.log(notQuite)

let numbersAreHard = (0.2 * 10 + .1 * 10) /10
console.log(numbersAreHard)

let a = Number('123');
console.log(a)

/* Strings

Wrapped in single or double quotes

*/

let stringOne = "double quotes"
let stringTwo = 'single quotes'
console.log(stringOne, stringTwo)

let first = 1050 + 100; 
let second = '1050' + '100';
console.log(first)
console.log(second)

console.log(typeof first);
console.log (typeof second);

/* Objects

Container that holds multiple data types i.e. booleans, numbers, strings, it has the curled braces

*/

let car = {
    color: 'red',
    tires: 4,
    extras: 'A/C and radio',
    cool: true,
};
console.log(car);
console.log(typeof car);

/* Array

Like objects they hold lists of items but it uses square brackets

*/

let list = [ 'item1', 'item2', 'item3' ];
//  (1)   (2)  (3)
// 1 = name of array
// 2 = square brackets indicitating array inside
// 3 = each item, regardless of datatype, is separated by commas

let burritos = ['large', 4, true];
console.log(burritos)

console.log(typeof burritos)

// Addition vs. Concatenation
/* When JS sees combining two or more numbers, it adds the values together using the built-in math functionality;
* when it sees adding together one or more strings, it changes and the plus sign becomes an assignment operator-
*-it smashes the values together without trying to synthesize the values
*/

let third = 1050 + '100'
console.log(third)

let firstName = 'Sam';
let lastName = 'DeKlyen';
let houseNumber = '6920';
let street = 'Challenge Ln';
let city = 'Indianapolis';
let state = 'Indiana';
let zipCode = '46250';

console.log(firstName, lastName + ', '+ houseNumber, street+ ', ' + city+ ', '+state, zipCode)

/*
Strings - Properties

Properties are qualities associated with a datatype. 
Strings have properties, or the qualities associated with that string.
The length of a string is a property.  
 */ 

 let myName = 'Sam'
 console.log(myName.length)

 /*Methods

 Methods are like tools that can help us manipulate our data.
 Property and Methods have no paranthesis for properties
 */

 let myNameIs = 'Sam'
 console.log(myNameIs.toUpperCase());

 let home = 'My home is Indiana';
 console.log(home.includes('Indiana'))

 let sent = 'This sentence will be split into individual parts'

 console.log(sent.split(' '))