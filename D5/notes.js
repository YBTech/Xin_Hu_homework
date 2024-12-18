//arrays
const a = ["a", "b", "c", "d"];
console.log(a);
console.log(a[0]); //a
console.log(a[5]); //undefined
a.push("E");
a.push(3);
a.push([1, 2]);
const b = [
  [1, 2],
  ["a", "b"],
];
console.log(a[0][1]);
a[0] = 1;
console.log(a);

//object = a collection of related properties and/or methods can represent real world objects(people, products, places)
//object = {key: value, function()}
const person1 = {
  firstName: "Spongebob",
  lastName: "Squarepants",
  age: 30,
  isEmployed: true,
  sayHello: function () {
    console.log("Hi, I'm Spongebob");
  },
  eat: function () {
    console.log("I'm eating something");
  },
};
console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);
person1.sayHello();
person1.eat();

const person2 = {
  firstName: "Patrick",
  lastName: "Star",
  age: 32,
  isEmployed: false,
  sayHello: function () {
    console.log("Hi, I'm Patrick");
  },
  eat: () => {
    console.log("I'm eating something new");
  },
};
console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed);
person2.sayHello();
person2.eat();

//Array Methods
const items = [
  { name: "bike", price: 100 },
  { name: "tv", price: 200 },
  { name: "album", price: 10 },
  { name: "book", price: 50 },
  { name: "phone", price: 500 },
  { name: "computer", price: 1000 },
  { name: "keyboard", price: 25 },
];
const filteredItems = items.filter((item) => {
  return item.price <= 100;
});
console.log(filteredItems);

const itemNames = items.map((item) => {
  return item.name;
});
console.log(itemNames);
const foundItem = items.find((item) => {
  return item.name === "album";
});
console.log(foundItem);
items.forEach((item) => {
  console.log(item.name);
});
const hasInexpensiveItems = items.some((item) => {
  return item.price <= 100;
});
console.log(hasInexpensiveItems);
const hasInexpensiveItemsEvery = items.every((item) => {
  return item.price <= 100;
});
console.log(hasInexpensiveItemsEvery);
const total = items.reduce((currTotal, item) => {
  return item.price + currTotal;
}, 0);
console.log(total);
const items1 = [1, 2, 3, 4, 5];
const includeTwo = items1.includes(2);
console.log(includeTwo);
//destructuring
const [one, two] = [1, 2];
const arr = ["1", "2", "3"];
const [bacon, pizza, fries] = arr;
console.log(pizza);
const [, , friess] = arr;
const [vaconn, ...rest] = arr;
const arr1 = [undefined, "2", "3"];
const [bacons = "1", pizzas, friesss] = arr1;
const obj = {
  name: "name",
  email: "email",
  comment: "comment",
};
const { name, email, comment } = obj;

const objects = {
  parent: {
    child: "children",
  },
};
const {
  parent: { child },
} = objects;
console.log(child);

const ids = [{ id: 1 }, { id: 2 }, { id: 3 }];
for (const { id } of ids) {
}

const user = { id: 0, username: "jeff" };
function haveFun({ id, username }) {
  console.log(`hi ${username}`);
}

//variable swap
let x = "a";
let y = "b";

[x, y] = [y, x];

//mutable vs immutable
let xArray = [1, 2, 3];
let yArray = xArray;
yArray.push(4);
console.log(xArray);
//primitives are immutable
let myName = "dave";
myName[0] = "w"; //not work
console.log(myName);
//reassignment is not the same as mutable
myName = "David";
console.log(myName);

//structures contain mutable data
yArray[0] = 9;
console.log(yArray);
console.log(xArray);

//impure function that mutates the data
const addToScoreHistory = (array, score) => {
  array.push(score);
  return array;
};
const scoreArray = [22, 23, 12];
console.log(addToScoreHistory(scoreArray, 14));

//shallow copy vs deep copy (clones)
//shallow copy
//with the spread operator
const zArray = [...yArray, 10];
console.log(zArray);
console.log(yArray);
console.log(xArray === yArray);
console.log(yArray === zArray);

//with object.assign()
const tArray = Object.assign([], zArray);
console.log(tArray);
console.log(tArray === zArray);
tArray.push(11);
console.log(zArray);
console.log(tArray);

//but if there are nested arrays or objects
yArray.push([8, 9, 10]);
const vArray = [...yArray];
console.log(vArray);
vArray[4].push(5);
console.log(vArray);
console.log(yArray);
//nest structural data types still share a reference
//note: Array.from() and slice() create shallow copies too

//when it comes to objects, what about Object.freeze()?
const scoreObj = {
  first: 44,
  second: 12,
  third: { a: 1, b: 2 },
};

Object.freeze(scoreObj);
scoreObj.third.a = 8;
console.log(scoreObj);

const newScoreObj = JSON.parse(JSON.stringify(scoreObj));
console.log(newScoreObj);
//vanilla js function for deep copy
const deepClone = (obj) => {
  if (typeof obj !== "object" || obj === null) return obj;

  const newObject = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    const value = obj[key];
    newObject[key] = deepClone(value);
  }
  return newObject;
};
const newScoreArray = deepClone(scoreArray);
console.log(newScoreArray);
console.log(newScoreArray === scoreArray);

//pure function
const pureAddToScoreHistory = (array, score, cloneFunc) => {
  const newArray = cloneFunc(array);
  newArray.push(score);
  return newArray;
};
const pureScoreHistory = pureAddToScoreHistory(scoreArray, 18, deepClone);
console.log(pureScoreHistory);
console.log(scoreArray);

//??: similar with || but with ?? it'll just think if the first value on the left null or undefined,
//if yes, it'll use the second value on the right.
class Person {
  constructor(name, address, hobbies) {
    this.name = name;
    this.address = address;
    this.hobbies = hobbies;
  }

  print() {
    console.log(this);
  }
}

function printPersonStreet(person) {
  console.log(person?.address?.street); //? checks if the argument/function is undefined or not, if it's undefined, return undefined.
}

const kyle = new Person(
  "Kyle",
  { street: "12345 main st", city: "Somewhere" },
  ["Bowling", "Weight Lifting"]
);
kyle.print();

printPersonStreet(kyle);

const name2 = "kyle";
const favouritefFood = "Rice";

const kyle1 = {
    name2,
    favouritefFood,
};
console.log(kyle1);

//function basics

