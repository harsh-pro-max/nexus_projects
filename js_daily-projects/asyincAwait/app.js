// function savetoDb(data,success,failure){
//     let internetSpeed = Math.floor(Math.random() * 10 )+1;

//     if(internetSpeed > 4){
//         success();
//     }
//     else{
//         failure();
//     }
// }
// savetoDb("harsh kushwaha",
//     ()=>{
//         console.log("success: your data was saved");
//     },
//     ()=>{
//         console.log("failure: your data was not saved");
// });

// function savetoDb(data){
    
//     return new Promise((success,failure)=>{
        
//     let internetSpeed = Math.floor(Math.random()*10)+1;

//     if(internetSpeed > 4){
//         success("success: data was saved");

//     }
//     else{
//         failure("failure : weak connection");
//     }
//     });
// }
// let request= savetoDb("harsh kushwaha");
// request
//     .then((result)=>{
//         console.log("data1 saved. promise was resolved ",);
//         console.log(result)
//         savetoDb("prince kumar")
//             .then((result)=>{
//                 console.log("data2 saved");
//                 console.log(result);
//                 savetoDb("manjeet kumar")
//                 .then((result)=>{
//                     console.log("data 3 saved");
//                     console.log(result);
//                 })
//             });
        
//     })
//     .catch((error)=>{
//         console.log("promise was rejected");
//         console.log(error);
// })


// const h1=document.querySelector("h1");

// function changeColor(color,delay){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             h1.style.color=color;
//             resolve("color changed!");
//         }, delay);
//     });
// }
// changeColor("blue",1000)
//     .then((result)=>{
//         console.log(result);
//         return changeColor("orange",1000);
//     })
//     .then(()=>{
//         console.log("orange color was completed");
//         return changeColor("red", 2000);
//     })
//     .then(()=>{
//         console.log("red is complted");
//     })
//     .catch((error)=>{
//         console.log("promiss was rejected",error);
//     })


// console.log("start");

// Promise.resolve().then(() => {
//     console.log("promise");
// });

// console.log("end");

// Promise.resolve(1)
//   .then(x => x + 1)
//   .then(x => {
//       throw new Error("error");
//   })
//   .then(x => console.log(x))
//   .catch(err => console.log("caught"));

// Promise.resolve(1)
//   .then(x => {
//       Promise.resolve(2);
//   })
//   .then(x => console.log(x));

// new Promise((resolve, reject) => {
//     console.log("A");
//     resolve("B");
// }).then(res => console.log(res));

// console.log("C");

// Promise.resolve()
//   .then(() => {
//     return Promise.resolve("A");
//   })
//   .then(res => {
//     console.log(res);
//     return "B";
//   })
//   .then(console.log);

// Promise.resolve(5)
//   .then(x => {
//     console.log(x);
//   })
//   .then(x => {
//     console.log(x);
//     return 10;
//   })
//   .then(console.log);

// Promise.resolve(1)
//   .then(x => x + 1)
//   .then(x => Promise.resolve(x + 1))
//   .then(x => {
//     throw x;
//   })
//   .catch(x => x + 1)
//   .then(console.log);

// Promise.resolve("A")
//   .then(x => {
//     x + "B";
//   })
//   .then(x => {
//     return x + "C";
//   })
//   .then(console.log);

// Promise.resolve("start")
//   .then(x => {
//     throw "error";
//   })
//   .then(x => console.log("A"))
//   .then(x => console.log("B"))
//   .catch(x => console.log(x))
//   .then(() => console.log("end"));

// console.log("1");

// Promise.resolve().then(() => console.log("2"));

// Promise.resolve().then(() => console.log("3"));

// console.log("4");

// Promise.resolve("X")
//   .then(x => {
//     return;
//   })
//   .then(x => {
//     return x + "Y";
//   })
//   .then(console.log);

// console.log("start");

// setTimeout(() => console.log("timeout"), 0);

// Promise.resolve()
//   .then(() => console.log("promise1"))
//   .then(() => console.log("promise2"));

// console.log("end");
// const h1= document.querySelector("h1");

// function changeColor(color,delay){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       h1.style.color=color;
//       console.log(`color changed to ${color}!`);
//       resolve("color change!");
//     },delay);
//   });
// }

// async function demo(){
//   try{
//     await changeColor("red",1000);
//     await changeColor("blue",1000);
//     await changeColor("green",1000);
//     await changeColor("red",1000);
//   }
//   catch(err){
//     console.log("err is given,",err);
//   }
// }


// let url = "https://catfact.ninja/fact";

// fetching data in promise method then and catch 
// fetch(url)
//     .then((res)=>{
//         console.log(res);
//         return res.json();
//     })
//     .then((data)=>{
//         console.log(data.fact,data.length);
//     })
//     .catch((err)=>{
//         console.log("error - ", err);
//     });

// same working in asyic and await keywords 

// async function getFetch(){
//     try{
//         let res= await fetch(url);
//         let data= await res.json();
//         console.log(data.fact);
//     }
//     catch(err){
//         console.log("error :",err);
//     }
// }


// function getData() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Data received");
//         }, 1000);
//     });
// }

// getData()
//   .then(res => {
//       console.log(res);
//   });

// async function run() {
//     let res = await getData();
//     console.log(res);
// }

// run();

// async function test() {
//     let x = await 10;
//     console.log(x);
// }

// test();

// console.log("A");

// async function test() {
//     console.log("B");
//     await 0;
//     console.log("C");
// }

// test();

// Promise.resolve().then(() => console.log("D"));

// console.log("E");

// fetch(url).then(res => console.log(res));

// fetch(url)
//   .then(res => res.json())
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// async function getData() {
//     let res = await fetch(url);
//     console.log(res);
//     let data = await res.json();
//     console.log(data);
// }

// async function getUser() {
//     try {
//         let res = await fetch("https://jsonplaceholder.typicode.com/users/1");
        
//         if (!res.ok) {
//             throw new Error("Network error");
//         }
//         console.log(res);
//         let data = await res.json();

//         console.log(data);
//     } catch (err) {
//         console.log("Error:", err);
//     }
// }

// getUser();

// async function test() {
//     let res = await fetch(url);
//     console.log(res);

//     let data = res.json();
//     console.log(data);
// }
// test();
async function test() {
    let res = await fetch("wrong-url");
    console.log(res.status);
}
test();

let url= "http://api.weatherapi.com/v1/current.json?key=201f80e0da5343bf84432621262403&q=London&aqi=yes"

async function whetherApp(){
    try{
        let res= await fetch(url);

        console.log(res);

        let data= await res.json();
        console.log(data);
    }
    catch(err){
        console.log("err");

    }
}
whetherApp();