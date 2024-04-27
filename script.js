// console.log("Hello Vroo");
// console.log("Vnbl Loves Js and started Learning");

// variables 
/* var- redeclared and updated , global scope 
let -  cannot redeclared and updated , block scope 
const- variable cannot be declared or updated , block scope variable 

*/
// name="tony stark";
// age=24;
// console.log("Full name is: ", name , "And age is:",age);
// x=null;
// console.log(x);
// y=undefined;
// console.log(y)

// let name1="Vnbl";
// console.log(name1);
// let age=24;
// console.log(age);


// {
//     // block
//     let age=10;
//     console.log(age); 
//     console.log(typeof(age)) ;
// }
 

/* Datatype 
Primitive dataType -Number,string , boolean , Null , BigInt , Symbol 
NonPremitive- objects -> array , functions ,maps

*/

// objects creation , key Val
// const students={
//     // key  : val 
//     fullName:"Akshay Kumar",
//     age     :20,
//     cgpa    :8.2,
//     isPass  :true
// }
// console.log(students);
// console.log(typeof(students ))
// console.log(students["age"]);
// console.log(students.age);


// // Arithematic operators 
// let a=8;
// let b=2;
// // binary operator
// console.log(a+b);
// console.log(a-b);
// console.log(a/b);
// console.log(a*b);
// console.log(a%b);
 

// console.log(5**2);

// // unary operator
// console.log(++a); // 9 pre increment ,  first update and assign 
// console.log(b++); // 2  first assign value , post inc
// console.log(b);  // 3   then update the value 

// let c=10;
// console.log(c--); // 10 first assign ,post dec
// console. log(c); //9   then update 
// let d=10;
// console.log(--d); // 9 first dec the val and assign 
// console.log(d) // 9 already assign 

//Assignment operator 
// let c=5;
// let d=4;
// c+=5;
// console.log(c);
// console.log(d-=1);
// console.log(5/=5);

// comparision operator
// let a=5;
// let b=5;
// console.log(a1==b1);
// console.log(a1 ==6);
// console.log(6!==6);
// console.log(6=="6");
// console.log(5===5);

// console.log(5>3);
// console.log(3>=3);
// console.log(2<1);
// console.log(5<=6);

// logical operator 
// && and -both condition true result also true , otherwise false 
//||- or , both condition false result false otherwise true
// !  not   
// let w= a==b;
// let x= 5>1
// console.log(w && x); //true 


// conditional statements 

// age=15;
// if(age>=18){
//     console.log("you can vote ");
// }
// else if( age<=18 && age==18){
//     console.log("Definately vote")
// }
// else{
//     console.log("You cannot vote ")
// }

// even odd 
// let o=11;
// if(o%2==0){
//     console.log("it is even ");
// }
// else{
//     console.log("odd");
// }

 // ternary operator 
 // condition ? true op : false op
// let age=18;
//  let res=age>=18 ? "u can vote" : "Not eligible for votting ";
// console.log(res);

// 26/04/2024

// loops and string lec 3

// for(let i=0;i<10;i++){
//     console.log("Js Achhe se padho v "+ i);
// }

// sum of first n  natural num
// let sum=0;
// for(let i=1;i<=10;i++){
//     sum+=i;
// }
// console.log(sum);

// do while loop 
// let i=20;
// do{
//     console.log("vnbl");
//     i++;
// }while(i<=10);

// do while loop run at least once ...as if condition is not satisfied 


// for-of loop  -- used for array and string 
// let str="HelloWorld"
// for(let i of str){
//     console.log(i);
// } 


// for in loop  used for objects , return key 

// let student={
// name:"Shyam",
// age:22,
// cgpa:8.8,
// isPass:true
// };

// for(let key in student){
//     console.log("key ",key , " value= ",student[key] )
// }
 
// practice 1- print all even number from 0 to 10
// for(let i=0;i<=10;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }

// practice q2 // geuss number 
// let gameNum=26;
// let userNum=prompt("Geuss the game number: ");
// console.log(userNum);
// while(userNum!=gameNum){
//     userNum=prompt("You enterd wrong number number, Geuss again ");
// }
// console.log("Congratualations , you entered correct number ")
 

// ----------------- Strings ------------------

//  let str= 'hello world';
//  console.log('original string ',str) ;
// console.log(str.length);
// console.log(str[0]);

//  template literals -- ` string hnkgjbskg `
// let penPr=10;
// let tmp=`The cost of pen is  ${penPr} rupees`
// console.log(tmp )

 
// ------String methods 
// toUpperCase(), toLowerCase()
// let str="VaiBhaV LanJewar"
// console.log(str.toUpperCase())

// console.log(str.toLowerCase())

// // trim 
// let v="        hello Vroo !    "
// console.log(v.trim())


// slice 
// let sl="abcdefg"
// console.log(sl.slice(1,3))

// // concat 
// let str1="Vaibhav"
// let str2="Lanjewar"
// let conc=str1.concat(str2)
// console.log(conc);
// console.log(str1+str2)

// replace ..search value and replace 
// let rp="Hellow"
// console.log(rp.replace("H","Y"));
// // replaceAll
// // str.charAt
// let i="iLoveJs"
// console.log(i.charAt(1)); 

// practice que for string -Promt the user to enter their name , Gene username for them based on the inp 
//start username with @ followed by name and ending with the fullname length 
// eg username =Vaibhavlanjewar , username should be @Vaibhavlanjewar 

// let fullName=prompt("Enter name ");
// let usrn="@"+fullName+fullName.length;
// console.log(usrn);


// ------------- Arrays -------------- 27/04/2024
// arrays are collection of items 
// arrays are mutable 

// let hero=["ironman",'hulk',"thor","Batman"]
// console.log(hero)
// console.log(hero.length) // length of arr ,property 
// console.log(typeof(hero)) // objects 

// let arr=[1,2,3,4,5]
// arr[0]=0
// console.log(arr)
// console.log(arr[6])// undefined , because this index is not present 

// looping the array 
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i])
// }

// for of loop 
// for(let el of arr){
//     console.log(el)
//  }

// let cities=['mumbai','delhi','nagpur','pune','delhi']
// for(let ct of cities){
//     console.log(ct.toUpperCase());
// }


// practice  que arr , given marks arr of students , find avg marks of entire class 
// let marks=[85,97,44,37,76,60]
// let n=marks.length;
// let totM=0;
// for(let mrks of marks){
//     totM+=mrks
// }
// let avg=totM/n;
// console.log(`Total marks are ${totM} , ${n} students , and Average is ${avg}`)

// qs 2 , for given arrya with price of 5 items [250,645,300,900,50] ,all items have an offer 10% on them , change arr to store final price after applying offer 
// let item=[250,645,300,900,50]
// let i=0;
// for(let p of item){
//     let offer=p/10;
//     item[i]=item[i]-offer;
//     i++
// }
// console.log(item)


// array Methods 

// push and pop do change in given array itself 
// push method 
// let fooditem=["potato",'apple','tomato','litchi']
// console.log(fooditem);
// fooditem.push("mangoes")
// console.log(fooditem);
// fooditem.push("chiku","pineapple","grapes")
// console.log(fooditem)

//pop 
// let deletedItem=fooditem.pop()
// console.log("Deleted items: ",deletedItem)
// console.log(fooditem)

// toString
// console.log(fooditem.toString())

// Concat() , joins multiple arr and return new Arr ,not change original .
// let arr1=['one','two']
// let arr2=['three','four']
// let arr=arr1.concat(arr2);
// console.log(arr);
 
// methodes start with small letter 

// unshift --add from front ... like push 
// let fooditem=["potato",'apple','tomato','litchi']
// console.log(fooditem); 
// fooditem.unshift("Banana"); // aded front 
// console.log(fooditem); 

// // shift 
// let val =fooditem.shift(); // delete from first 
// console.log(val);

// // slice slice(strt inde, end endex ) .. endinx -->exclusive , slice dont change in original arr 
//  console.log(fooditem);
//  console.log(fooditem.slice(1,3))
 
//  console.log(fooditem.slice(1,))
 
//  console.log(fooditem.slice()) // complete



 // splice -- do change in given array itself  splice(str Index, del count of item , replace / add new el )
// let arr=[1,2,3,4,5,6,7];
//         // si,delCnt,replace
// arr.splice(2,2,101,10 );
// console.log(arr);

// practice que 

// let companies=["Bloomberg","Microsoft","uber","Google","IBM","Netflix"]
// remove first comapany , pop()remove from last , shift remove from first 
// companies.shift()
// console.log(companies)

//  remove the uber and replace by ola  , use splice methode 
// companies.splice(1,1,"ola")
// console.log(companies)

// add amezon at end  // push add at end 
// companies.push("Amazon")
// console.log(companies)

// vnbl 



// ---------- Function and Methods --------

// function block of code that perform specific task 
 
// function myFunc(){
//     console.log("Welcome to my script.js ");
//     console.log("Here we are learning js ");
//     }
//  myFunc();

//            parameter
//  function myFunc1(v){
//     console.log(`Hii ${v} Welcome to my script.js `);
//     console.log("Here we are learning js ");
//     }
// myFunc1("vaibhav") // argument 


// function to add two number 
// function sum(a,b){
//     console.log(a+b);
// }
// sum(99,1)


// here a, b are act as local variable  
// function sum1(a,b){
//     s=a+b;
//     return s; // return only single value , obj , 
// }
// let v=sum1(99,1);
// console.log(v);

// function mul(a,b){
//     return a*b;
// }
// console.log(mul(5,25)); 

// Arrow function 
// let sum2=(a,b)=>{
//     return a+b;
// }
// console.log(sum2(97,3))

// // arrow function for multiplication 
// let mul=(a,b)=>{
//     return a*b;
// }
// console.log(mul);
// console.log(mul(2,50));

  // practice que , create a function , take string as arg , and return the number of vowel in string 

//   function cntOfVowel(str){
//     let s=str.slice();
//      s=s.toLowerCase();
//      let cnt=0;
//      for(let i of s){
//         if(i=='a'|| i=='e' || i=='o'|| i=="u"){
//             cnt++;
//         }
//      }
//      return cnt;
//   }
//   console.log(cntOfVowel("VaiBhav"));

//   // arrow func
//   const vowCnt=(str)=>{
//     let s=str.slice();
//      s=s.toLowerCase();
//      let cnt=0;
//      for(let i of s){
//         if(i=='a'|| i=='e' || i=='o'|| i=="u"){
//             cnt++;
//         }
//      }
//      return cnt;
//   }
//   console.log(vowCnt("AppleBanana"));


// forEach methode of array 

// let arr=[1,2,3,4,5,"end"];
// arr.forEach(function printVal(val){
// console.log(val);
// });

// arr.forEach((val)=>{
// console.log(val);
// });

// let ct=['pune','delhi','mumbai'];
// ct.forEach((val,idx,arr)=>{
// console.log(val.toLocaleUpperCase(),idx,arr);
// });

// practice que --> for a given array of numbers , print the squares of each values using the for each loop 

// let num=[1,2,3,4,5,6];
//callback
// let sqr=(val)=>{
//     console.log(val**2);
//     };
// num.forEach(sqr)

// num.forEach((num)=>{
// console.log(num*num)
// });

//---- map method .. it is like forEach .. 
// map return new array 

// let  num=[1,2,3,4,5,6]

// num.map((val)=>{
// console.log(val**2);
// }) ;

// let newArr=num.map((val)=>{
//     return val;
//     }) ;
// console.log(newArr);    


// ------  filter method  ------

// even number 
// let arr=[1,2,3,4,5,6,7,8,10,12,16];
 
// let evNum=arr.filter((val)=>{
// return val%2==0;
// });
// console.log(evNum);



// reduce function 
// let arr=[1,2,3,4];
// const op=arr.reduce((prev,cur)=>{
//     return prev +cur
// });
// console.log(op);//10
  
// find largest element 
// let l=[1,6,2,8,7,9,10,4]
// const large=l.reduce((prev,curr)=>{
// return prev>curr? prev:curr;
// });
// console.log(large);

// practice que 
//1 we have given array of marks of students, filter the marks of student is >90;

// let marks=[95,89,90,80,85,70,97,91];
// let topr=marks.filter((val)=>{
//  return val>90;
// });
// console.log(topr);

// q2 take input from user , user prompt, create arr of number from 1-n , use the reduce method to calculate sum of all number in arr , 
// use reduce method to calculate prodect of all numbers in arr 


// let num=prompt("Enter a number ");
// let numArr=[];
// for(let i=1;i<=num;i++){
//     numArr[i-1]=i;
// }
// console.log(numArr);

// reduce method to calculate sum ;
// let sum=numArr.reduce((prev,curr)=>{
//    return prev+curr;
// });
// console.log(sum); 

// product 
// reduce method to calculate sum ;
// let fact=numArr.reduce((prev,curr)=>{
//     return prev*curr;
//  });
//  console.log(fact); 

// ----------------------------------------------------------

// DOM document object notation 

