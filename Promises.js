//Promises --> A ppromise is an object that returns a value which you hope to receive in the future, but not now.

// Ex: let promise = new Promise(function(resolve, reject){
//     //Execute the producing code
// });

// Why we need?
// JS is always synchronized and single-threaded language. It means Js never wait for code or function result when they take some time. JS direct execute next code.

//single Threaded Example

let data = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Code has been resolved");  // resolve({name: "Mayur", age: 22})
    },2000)
})
data.then((item)=>{
  console.log(item);  
});

console.log("Hello, Mayur Bhardwaj"); //First They run then Above code Print Because they used setTimeout.


// If Our Code is rejected


let data1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject("Code have some issues.");  // resolve({name: "Mayur", age: 22})
    },2000)
})
data.then((item)=>{
  console.log(item);  
}).catch((err)=>{
    console.log("Catch block",err);
})

console.log("Hello, Mayur Bhardwaj");

//With reject we use catch, if we cannot use it then they will give an error.
