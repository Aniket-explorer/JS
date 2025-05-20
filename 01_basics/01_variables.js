const accountId = 1234567
let accountEmail = "aniket@gmail.com"
var accountPassword = "0987"
accountCity = "Patna"
let accountState;


// accountId = 2  // not allowed

accountEmail = "ak@gmail.com"
accountPassword = "1234"
accountCity = "Bengaluru"
console.log(accountId);


/*
Prefer not to use var
bacause of issue in block scope and functional scope 
*/

console.log([accountId, accountEmail, accountPassword, accountCity, accountState]);
