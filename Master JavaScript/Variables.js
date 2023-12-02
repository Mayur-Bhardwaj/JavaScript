// Var Variable

var score = 34; // "=" --> is an assignment operator.
var score = 44; // This is the redeclaration.This is the issue with the var

console.log(score); //44

//Let Variable.

let points = 78;
// let points = 67;
console.log(points);// Error: points has already declared.

//Constant Variable.

const value = 90;
value = 89;
console.log(value);//Error: Assignment to constant variable.

// const value1 ;  //Error: Missing initializer in const declaration.
// In constant after declaration the value will b assigned .