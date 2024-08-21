


console.log(window)
console.dir(window.document);



console.dir(document);



console.dir(document.body);
console.dir(document.head);



console.dir(document.body.childNodes[1]);

console.dir(document.body.childNodes[3].innerText = "abcd"); 




//-----------------------------------------------------------------------------------------------------------------------

1) document.getElementById(“myId”)

let button = document.getElementById("myid"); //h1 heading is id name inside html 

console.log(button);
console.dir(button); // objects


2) document.getElementByClassName("myClass")

let heading = document.getElementsByClassName("myclass"); // heading is class name in html

console.log(heading);
console.dir(heading); // html collection


3) document.getElementByTagName("p")

let para = document.getElementsByTagName("p");

console.dir(para);
console.log(para); // html p paragraph

//----------------------------------------------------------------------------------------------------------------

// All can pass here like id, class, paragraph
// get Paragrapht:

let par = document.querySelector("p"); //1st element get output
console.dir(par);


let all = document.querySelectorAll("p"); // body and head of html we will get output here like (NodeList)
console.dir(all);



// All can pass here like id, class, paragraph
// get to Class(.):

let par = document.querySelector(".myclass"); //1st element get output
console.dir(par);


let all = document.querySelectorAll(".myclass"); // body and head of html we will get output here in jS like (NodeList)
console.dir(all);


// get to ID (#):

let par = document.querySelector("#myid"); //1st element get output
console.dir(par);


//------------------------------------------------------------------------------------------------------------------------

1) tagName : returns tag for element nodes

// In cansole browser (firstEle.tagName) === get output as <button> bcz id you have given in html inside button <button id="myid"
 

let firstEle = document.querySelector("#myid");

console.dir(firstEle);

// In cansole browser (firstEle.tagName) === get output as <p> bcz in html we have paragarph , (fisrtEle) === <p>New Paragraph</p>

let firstEle = document.querySelector("p");

console.dir(firstEle);



//----------------------------------------------------------------------------------------------------------------------



console.dir(document.body.firstChild);

console.dir(document.querySelector("div"));

console.dir(document.querySelector("div").children);




//----------------------------------------------------------------------------------------------------------------

heading [write console like this]
  console in browser ==== <h1>Old heading</h1>[You can see output]

heading.innertext = "new Heading"; [write console like this]
console in browser ====  'new Heading' [You can see output]
heading.innerHTML = "<i>new Heading</t>";[write console like this can change like h1 to italic]
console in browser ====  '<i>new Heading</t>'[You can see output]

//-----------------------------------------------------------------------------------------------------------------


LAb1 :

let h2 = document.querySelector("h2");
console.dir(h2.innerText);


h2.innerText = h2.innerText + " apna Collage";


// LAB1 in html portion:
<h2>hello JS</h2>
    <script src="demo.js"></script>


Lab2:
type1:
let divs = document.querySelectorAll(".box");
console.log(divs[0]);

divs[0].innerText = "new Unique Value 1";


type2:
let divs = document.querySelectorAll(".box");
//console.log(divs[0]);

let idx = 1;

for(div of divs) {
     // console.log(div.innerText);
      div.innerText = `new Unique Value ${idx}`;
      idx++;
}

// LAB2 in html portion:
<h2>Hello World</h2>
<div class="box">First div</div>
<div class="box">Second div</div>
<div class="box">Third div</div>
<script src="demo.js"></script>


// example:
<h2>Hello World</h2>
<div class="box">First div</div>
<div class="box">Second div</div>
<div class="box">Third div</div>
<div class="box">First div</div>
<div class="box">Second div</div>
<div class="box">Third div</div>





//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//getAttribute( attr )
let div = document.querySelector("div");
console.log(div);


let val = div.getAttribute("id");
console.log(val);

let vals = div.getAttribute("name");
console.log(vals);

//--------
let para = document.querySelector("p");
console.log(para.getAttribute("class"));


//setAttribute( attr, value )[
//Change the value of Attributes ]

let p = document.querySelector("p");
console.log(p.setAttribute("class", "newclass"));


//------------------------------------------------------------------------------------------------------------

// node.style [very imp to change value,text and color]


let div = document.querySelector("div"); 

div.style.backgroundColor = "green";


div.style.backgroundColor = "purple";

// div.style.visibility = "hidden"; [hide the value]


div.style.fontSize = "20px";

div.innerText = "Hello";


//-------------------------------------------------------------------------------------

let newBtn = document.createElement("button");
newBtn.innerText = "click me!";
console.log(newBtn);


let div = document.querySelector("div"); [end added]
div.append(newBtn); 

let div = document.querySelector("div"); [start added]
div.prepend(newBtn);

let div = document.querySelector("div"); 
div.before(newBtn); 

let div = document.querySelector("div"); 
div.after(newBtn); 


let div = document.querySelector("p"); [After paragraph p of html]
div.after(newBtn); 


//------------------------------------------------------------------
//Adding new Elements in html page to using JS code

let newHeading = document.createElement("h1");

newHeading.innerHTML = "<i>Hi, am i new!</i>";

document.querySelector("body").prepend(newHeading);


let p = document.querySelector("p");
p.remove();


newHeading.remove();



//------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------

let newBtn = document.createElement("button");

//innerText we all the text
newBtn.innerText = "Click Me!";

//node.style [add color,text]
newBtn.style.color = "white";
newBtn.style.backgroundColor = "red";


document.querySelector("body").prepend(newBtn);

//-------------------------------------------------------------------------------------


