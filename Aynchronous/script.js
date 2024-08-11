 // Synchronous , sequentially execute of instruction 
//  console.log("one");
//  console.log("two");
//  console.log("three");

// Asynchronous programming
// setTimeout(()=>{
//     console.log("hello")
// },4000)

// console.log("four")   

// -----------

//  callback 
// function sum(a,b){
//     console.log(a+b);
// }

// function calculator(a,b,sumCallback){
//     sumCallback(a,b);
// };
// // calculator(1,2,sum);

// // or 
// calculator(2,2,(a,b)=>{
//     console.log(a+b);
// });

// // --- Arrow function 
// const hello=()=>{
//     console.log("hello Async");
// }
// setTimeout(hello,5000);

// -----------CALLBACK HELL -------------

// function getData(dataId,getNextData){
    // setTimeout(()=>{
    // console.log("data",dataId);
    // if(getNextData){
    //     getNextData();
    // }
    // },2000);
// }

// // data1
// // data2
// // data3
// // we want delay 
// // we cant pass function in callback , hence we have used the arrow function 
//  getData(1,()=>{
//     getData(2,()=>{
//         getData(3,()=>{
//             getData(4);});});
//  }) ; // 2s



// -------- PROMISES--------
//  resolve - resolve problem , otherwise reject the problem 
// let promise=new Promise((resolve,reject)=>{
// console.log("I am a promis");
// // resolve("123")
// // reject("Some error");
// }); 
// console.log(promise);

// function getdata(dataId,getNextData){
//     return new Promise((resolve,rejct)=>{
//         setTimeout(()=>{
//             console.log("data",dataId);
//             resolve("success")
//             if(getNextData){
//                 getNextData();
//             }
//             },2000);
//     })
// }
// getdata(1,()=>{
//     getdata(2,()=>{
//         getdata(3,()=>{
//             getdata(4);});});
//  }) ; // 2s
//  let promis=getdata(123);
//  console.log(promis);


// const getPromise=() =>{
//     return new Promise((resolve,reject)=>{
//         console.log("I am a promis");
//         // resolve("success")
//          reject("Some error");
//         }); 
// };
// let prom=getPromise();
// resolve 

// prom.then(()=>{
//     console.log("promise are fullifiled");
// });

// reject 
// prom.catch(()=>{ 
//     console.log("Rejected");
// })
 
// ---------------
// api retun data 1
// function asyncFunc1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{   // ansync function 
//         console.log("some data1 "); 
//         resolve("success");
//         },4000)
//     });
// }
//  api return data 2 
// function asyncFunc2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{   // ansync function 
//         console.log("some data2 "); 
//         resolve("success");
//         },4000)
//     });
// }

// console.log("Fetching data1");
// let p1=asyncFunc1();
// p1.then((res)=>{
//     console.log(res);
//     console.log("Fetching data2");
//     let p2=asyncFunc2();
// p2.then((res)=>{
//     console.log(res);
// });
// });



// **********************************
//----------- Simple code ...  as comapared to callback hell , promises (.then .catch )
// Aysnc and await has simple structure 
//  async-await 
// async function hello(){
//     console.log("Helloo");
// }
// //  until promis executes , awaits wait the the function execution 

// function api(){
//     return new Promise((resolve,reject)=>{
//       setTimeout(()=>{
//         console.log("weather data");
//         resolve(200);
//       },2000)
//     });
// }

// ----- 
// // await api()  // throw error 
// async function getWeatherData(){
//     await api();
// }
// getWeatherData(); 
// ------ Alternative , IIFE i.e immediate invoked function expression 
// (async function (){
//     console.log("getting data1 ...");
//     await api(); // 1st 
//     console.log("data2 -----");
//     await api() ; // 2nd 
// })();
// only used onced 

// -------------------------------------------




 