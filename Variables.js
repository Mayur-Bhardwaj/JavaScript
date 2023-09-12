// Constants --> These are the variables which cannot be changed into the future.

const accountId = 1201;

let accountEmail = "mayur1201@gmail.com";

var accountPassword = "1201";

accountCity = "Mumbai";

// accountId = 2;   // Not Allowed

accountEmail = "mb12@gmail.com";
accountCity = "Bengaluru";

let accountState;
// If only we declared not used in program so JS treated as Undefined to the variable.

console.log(accountCity);
/**
 Prefered not to use var
 Because of issue in block scope and functional scope.
 */
console.table([accountEmail, accountId, accountPassword, accountCity, accountState]);

console.log(accountId);
