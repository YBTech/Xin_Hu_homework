//var is a function scope key word, let and const are block scope key words
//function scope is the variable will available inside the function, but block scope is the variable only available inside the code block
//block scope for example: for loop, if else statement
if(true) {
    var varvariable = 'this is true';
}
var varvariable = 'this is false';
console.log(varvariable);

// if(true) {
//     let letvariable = 'this is true';
//     let letvariable = 'false';
//     console.log(letvariable);
// }
// console.log(letvariable);

const constvar = 1;
constvar = 2;
//error: assignment to constant variable

const constvarr = {name: 'bob'};
constvarr.name = 'salyy';
//no error and the value of the name change to salyy

const person = {
    name: "jack",
    age: 11,
};
const obj1 = {
    a: 1,
    b: 2,
    c: 3,
};
const obj2 = {
    ...obj1,
    d: 4,
};
console.log(obj1);
console.log(obj2);