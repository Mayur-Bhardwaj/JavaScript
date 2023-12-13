
// console.log(10);
// setTimeout(()=>{
//     console.log(20);
// },1000);
// console.log(30);

//With Promise we do it like.

// function getData()
// {
//     let handlePromise = new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve("All Done");
//         });
//     })
//     handlePromise.then((x)=>{
//         console.log(x);
//     }); 
// }

// getData();


// With async and await

async function getDatas()
{
    let handlePromise = new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("All Done"); // console.log(20); 
        },1000);
    })

    console.log(10);

    let x = await handlePromise;
    console.log(x);

    console.log(30);
    
}
getDatas();