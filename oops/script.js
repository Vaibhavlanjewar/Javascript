// objects creation  

/*
const student={
    // state - property
fullName:"Vaibhav Lanjewar",
marks:94.26,
// behavior / methods 
printMarks:function(){
    console.log("marks=",this.marks); 
// this.marks is nothing but , students.marks , it is an object  
},
};

const employee={
    calcTax(){
        console.log(`Tax is deducted 10% `);
    },
};

const karnArjun={
    salary:10000,
};

//  prototype object 
karnArjun.__proto__=employee; 8*/ 


// // --------
// class Toyotacar {
//   // constructor automatically invoked by new keyword , i.e default constructor 
//   constructor(brand,mileage){
//     this.brand=brand;
//     this.mileage=mileage;
//     console.log(brand,mileage)
//   }
//   start(){
//     console.log("Start");
//   }
//   stop(){
//     console.log("Stop ");
//   }
// }

// let fortuner=new Toyotacar("Fortuner",30);
// console.log(fortuner)

// -------- Inheritance -------

// class parent{
//     constructor(name){
//         this.name=name;
//         console.log("parents constructor")
//     }
//    hellow(){
//     console.log("hello");
//    } 
// }

// class child extends parent{

//     constructor(name){
//         // to invoke parents class constructor
//         super();
//       this.name=name;
//       console.log("children constructor ");
//     }

// }

// let child1=new parent("vaibhav");
// console.log(child1)
// child1.hellow(); 
// let child2=new child("v");


// practice set question 1 
let data="secret info";
class user{
  constructor(name,email){
    this.name=name;
    this.email=email;
  }  
  viewData(){
   console.log(this.name,this.email);
  }
}

class admin extends user{
    constructor(name,email){
      super(name,email)
    }
    editData(){
       data="new value "; 
    }
}

let student1=new user("shraddha","abc@gmai.com")
let student2=new user("jay","jay@gmai.com")

let teacher1=new user("dean","dean@gmail.com")

console.log(student1.viewData())
console.log(student2.viewData())

let admin1=new admin("admin","admin@gamail.com");
