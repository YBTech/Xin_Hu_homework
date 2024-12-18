//var, let, const
//var function scope; let & const block scope
function print() {
    if(true) {
        var name = "xxx";
    }
    console.log(name);
} //prints xxx

function print1() {
    if(true) {
        let name = "yyy";
    }
    console.log(name);
} //uncaught reference error: name is not defined

function print2() {
    if(true) {
        const name = "zzz";
        console.log(name);
    } //prints zzz
}

//almost never use var

//number
let num = 7;
let newNum = 7.58;
//string
let favFood = "pizza";
let favColor = 'purple';
//boolean
console.log(1 > 100);
let js = "cool";
console.log(js == "cool");
//bigInt
let bigNum = 9007199254740992n;
console.log(typeof bigNum);
//symbol

//undefined
let channelName;
console.log(typeof channelName);
//null

//array
let myList = ["a", "b", "c", "d", true, 7];
console.log(myList);
console.log(myList[3]);
//function
function hello() {
    console.log("hello");
}
hello();
hello();
let helloworld = function() {
    console.log("helloworld");
}
helloworld();
helloworld();
//objects
let character = {
    name: "xxx",
    color: "red",
    speed: 100,
    fast: true,
}
console.log(character.speed);

let favDrink = "Lemonade";
let favNum = "5";

let myFavs = function() {
    console.log(favDrink, favNum);
}
myFavs();

let person = {
    name: "john",
    age: 30,
};
console.log(person);

//type conversion = change the datatype of a value to another(strings, numbers, booleans)
// let age = window.prompt("how old are you?");
// age = Number(age);
// age += 1;

//console.log(age, typeof age);

// let x = "pizza";
// let y = "pizza";
// let z = "pizza";
// let x = "0";
// let y = "0";
// let z = "0";
let x;
let y;
let z;

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);

//coercion vs conversion
//conversion
let num1 = String(6);
console.log(num, typeof num1);
//coercion
let xx;
console.log(xx, typeof xx); //undefined undefined
xx = 8;
console.log(xx, typeof xx); //8 number
xx = xx + "";
console.log(xx, typeof xx); //8 string
xx = +xx + 2;
console.log(xx, typeof xx); //10 number + unary operators, no space between + and xx
xx = xx + "";
console.log(xx, typeof xx); //10 string
xx = xx - 2;
console.log(xx, typeof xx); //6 number
xx = !xx;
console.log(xx, typeof xx); // false boolean

console.log(Boolean(-7));
console.log(Boolean(7));
console.log(Boolean(0)); //only false number
console.log(Boolean(null)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean("random")); //true
//number + string = string

let a = parseInt("123 random");
console.log(a); //123


//== vs ===
console.log(1 == '1'); //true
console.log(1 == 1) //true
console.log(1 === '1'); //false
console.log(0 == ' '); //true
console.log(0 === ' '); //false
console.log(0 == false); //true
console.log(0 === false); //false
console.log(null == undefined); //only case we can use ==
console.log(1 != '1'); //false
console.log(1 !== '1'); //true