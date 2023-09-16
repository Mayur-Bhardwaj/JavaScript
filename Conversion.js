//Conversion
//Conver into Number

// let score = 50;

// console.log(typeof score); //number
// console.log(typeof (score)); //number

// let score1 = "50";
// console.log(typeof score1); //string

// let valueInNumber = Number(score1);
// console.log(valueInNumber);
// console.log(typeof valueInNumber); //number

// let no = "50abc";
// console.log(typeof no);  //string
// let update_no = Number(no);
// console.log(update_no); //NaN

// let n = null;
// let value = Number(n);
// console.log(value);  // 0
// console.log(typeof value);

// let val = undefined;
// let value = Number(val);
// console.log(value);
// console.log(typeof value);  //NaN

// Input ==>  Conversion

//"33" => 33
//"33abc " => NaN
// true => 1; false => 0

//Convert into Boolean

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);    //true;

let string = "";
let emptyString = Boolean(string);
console.log(emptyString);  //false

let str = "Mayur";
let str_conversion = Boolean(str);
console.log(str_conversion);  //true

// 1 => true; 0 => fslse;
// "" => false;
//"Mayur" => true;

//Convert into String

let someNumber = 50;
let stringNumber = String(someNumber);
console.log(stringNumber); //50
console.log(typeof stringNumber); // string