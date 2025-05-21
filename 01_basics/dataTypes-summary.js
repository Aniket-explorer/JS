// Primitive 

// 7 types : String, Number, Boolean, null, undefined, symbol, BigIngt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null

let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 12345678901234567890n



// Reference (Non-Primitive)

// Array, Objexts, Functions

const heros = ["shaktiam", "naagraj", "doga"];
let myObj = {
    name: "aniket",
    age: 23,
}

const myFunction = function() {
    console.log("Hello World");
    
}

// console.log(typeof outsideTemp);


// ***********************************************************************


// Stack (Primitive), Heap (Non-Primitive)
let myYoutubename = "aniketdotcom"

let anotherName = "Jscode"

console.log(myYoutubename);
console.log(anotherName);

let userOne = {
    email:  "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "aniket@google.com"

console.log(userOne.email);
console.log(userTwo.email);




