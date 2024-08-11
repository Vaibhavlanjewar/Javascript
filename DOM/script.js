// console.dir(window.document);
// console.log(window.document);
// body 
// console.dir(document.body);
// console.log(document.body) 
// we are accessing the html code by js 


// id 
// let heading=document.getElementById("heading");
// console.dir(heading);
// console.log(heading);

// class 
// let headings=document.getElementsByClassName("head")
// console.log(headings);
// console.dir(headings);

// button id

// let button=document.getElementById("button");
// console.log(button);
// console.dir(button);

//access using tagname
// let p=document.getElementsByTagName('p')
// console.log("p");
// console.dir("p");


//                                        // class .head
// let allQuerySelector=document.querySelectorAll(".head");
// console.log(allQuerySelector);

//                             // id #button        
// let but=document.querySelector("#button");
// console.log(but);
// console.log(but.tagName); // tagName-button

//querySelector 
// let P=document.querySelector("p");
// console.dir(P);
// console.log(P.tagName)  

// firstchild ,last child 

// console.dir(document.body.firstChild); //text 

// console.log(document.querySelector("div").children);

//  -------------------------------------------------------------------

//fruit names 
// let div=document.querySelector("div")
// console.log(div);
// console.log(div.innerText);
// console.log(div.innerHtml);
// console.log(div.innerText="Abcd")

// textContent 
// let heading=document.querySelector('h3');
// console.log(heading);
// console.log(heading.textContent)

// ---------------------
// Practice Que 
// ---------------------
// let pq=document.querySelector('h2');
// console.log(pq.innerText)
// pq.innerText=pq.innerText+" From apna clg students ";


// qs2 
// let divs=document.querySelectorAll(".box");
// let i=1;
// for(let dv of divs){
//     // console.log(dv);
//     dv.innerText="new unique value "+ i++;
//   }

// console.log(divs);
// console.log(divs[0]);
// console.log(divs[1]);
// console.log(divs[2]);
// divs[2].innerText="Box 222222";
// here we should use the for of loop 

// ---------------------------------------------
// let dv=document.querySelector("div" );
// console.log(dv);

// let id=getAttribute('id');
// console.log(id);


//---------------------------- Lec 7 ----------------------------------------------------------

// let dv=document.querySelector("div");
// console.log(dv);

// let id=dv.getAttribute("id");
// console.log(id);

// let name=dv.getAttribute("name")
// console.log(name);


// ...get attribute value ...

// let para =document.querySelector("p");
// console.log(para.getAttribute("class"))

// ... set attribute value 

// let setPara=document.querySelector('p');
// console.log(setPara.setAttribute("class","newClass"));

// style 
// node.style
// let divv=document.querySelector('div')
// console.log(divv);
// console.dir(divv);
// divv.style.backgroundColor="black";
// divv.style.color="green";
// divv.style.fontSize="26px";
// divv.innerText="HELLOO";

// we have to insert element to the div 

// let newButton=document.createElement('button');
// newButton.innerText="click me!";
// console.log(newButton);

// let div=document.querySelector("div");
// div.append(newButton);  // last .

//  // starting 
// //  div.prepend(newButton)

// ........
// let newHe=document.createElement("h1");
// newHe.innerHTML="<i>Hii js is changing the html from js file ,</i>";
// document.querySelector("body").prepend(newHe);


 // practice problem 
// let newbutton=document.createElement("button");
// newbutton.innerHTML="<button>Click here ! </button>";
// newbutton.style.color="white";
// newbutton.style.backgroundColor="red"
// document.querySelector("body").prepend(newbutton);

//  // creat a paragraph give it a class and style 
// let para=document.querySelector("p");
// para.getAttribute("class");
// para.setAttribute("class","newClasspara");


// ..................... Lec 8 .......................
// .......... EVENTS .....................

/* let btn1=document.querySelector('#btn1');
//           event object 
btn1.onclick=(e) => {
    console.log(e); // event object 

    // console.log("btn1 was clicked");
    // let a=25;
    // a++;
    // console.log(a);
};  */

// ADD Event Listener 
btn1.addEventListener("click", (evt)=>{
   console.log(evt); 
   console.log("Button 1 was clicked handler 1 "); 
}) ;

const handler2= ()=>{
    console.log("Button 1 was clicked handler 2 "); 
 };
// add handler 2
btn1.addEventListener("click",handler2);
// REMOVE  handler2  
btn1.removeEventListener("click",handler2); 

// let div1=document.querySelector("#div1");
// div1.onmouseover=() => {
//     console.log('clicked');
// };

//  Practice Question  

//  DARK AND LIGHT MODE 

// Question :Creat a toggle Button that change the screen to dark mode when <br>clicked and light mode when clicked again   

let modebtn=document.querySelector('#mode');
let currMode="light"; 
let body=document.querySelector("body");

modebtn.addEventListener("click",()=>{
    // console.log("You are trying to change mode")
    if(currMode=="light"){
        currMode="dark";
        // document.querySelector("body").style.backgroundColor="black";
     body.classList.add("dark");
     // light ko remove bhi krna padega 
     body.classList.remove("light");
    }
    else{
        currMode="light";
        //  document.querySelector("body").style.backgroundColor="white";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currMode);
});


//  MOUSE OVER 


 
