const name = "aniket";
const repoCount = 25

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('aniket-ak-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherNewString = gameName.slice(-10, 4)
console.log(anotherNewString);

const newStringOne = "    aniket    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://aniket.com/aniket%20kumar"

console.log(url.replace('%20', '-'));
console.log(url.includes('sundar'));

console.log(gameName.split('-'));











