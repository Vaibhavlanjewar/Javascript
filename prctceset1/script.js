// //pr1
// const product ={
//     name:"BALL PEN",
//     title:4,
//     offer:5,
//     price:270,
    
// };
// console.log(product);

// // pr2
//  const profile={
//     userName:"@vnbl",
//     following:1000,
//     followers:50000,
//     isFollow:true,
//  }
//  console.log(profile);
//  console.log(typeof profile["userName"]);
//  console.log(typeof profile["isFollow"]);


 // practice que 3
 // get user input number prompt("Enter number"), check number is multiple of 5 or not 
// let number=prompt("Enter a number");
// if(number%=5=== 0 ){
//    console.log("true"); 
// }
// else{
//     console.log("false"); 
// }

// prQ4 
// write a code which can give grade to students according to their scores:
// 80-100 A
// 70-89 B
// 60-69 C
// 50-59 D
// 0-49  F

let score=prompt("Enter Score");
if(score>=90 && score<=100){
    console.log("A");
}
else if(score>=70 && score<=89){
    console.log("B");
}
else if(score>=60 && score<=69){
    console.log('C');
}
else if(score>=50 && score<=59){
    console.log('D');
}
else{
    console.log('F');
}