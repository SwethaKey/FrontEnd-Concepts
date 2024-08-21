
// for loop

for (let count=1; count<=5; count++){
      console.log("Apna collage");
}

//-------------------------------------------------
// Calculate sum of 1 to 100

let sum = 0;

for (let i=1; i<=5; i++) {
      sum = sum+i;
}
console.log("sum = ", sum);
console.log("loop has ended");


// -------------------------------------------------

for (let i = 1; i <= 5; i++) {
      console.log("i = ", i);
}


console.log(i); /* get error i is not define bcz let is defined as 
block scope now we can access out the loop */


for (var i = 1; i <= 5; i++) {
      console.log("i = ", i);
}

console.log(i); /* you will not error bcz var is global varibale */


//----------------------------------------------------------

// while loop

while(condition) {
      // do some work
}


let i = 1;
while(i<=5) {
      console.log("i =", i);
      i++;
}

//----------------------------------------------------------------

// do-while loop

do {
      //do some work
} while(condition);

let i = 20;

do {
      console.log("Apna Collage");
      i++;
} while (i<=10);

//----------------------------------------------------------------

// for-of loop

for(let val of strVar) {  // (val) is an variable and (strVar) is an string
      // do some work
}


// Get single letter to output

let str = "apnacollage";

for(let i of str) { // iterator = characters
      console.log(i)
}


// Get length of string

let str = "apnacollage";


let size = 0;
for(let i of str) { // iterator = characters
      console.log(i);
      size++;
}
console.log("string size = ", size);

//----------------------------------------------

// for-in loop

let student = {
      name : "swetha",
      age : 30,
      cgpa : 7.2,
      isPass: true
};


for (let key in student) {
      console.log("key = ", key, " value = ", student[key]);
}


//------------------------------------------------------------------

//#LAB 1
 
// 1)Print all even number

for(let num=0; num<=100; num++) {
      if (num%2 === 0){
            console.log("num = ", num);
      }
}

//#LAB 2

// Guess the user number

let gameNum = 25;

let userNum = prompt("Guess the game Number: ")

console.log(userNum)

while(userNum != gameNum) {
      userNum = prompt("you enter worng number. Guess Num: ");
}

console.log("Congrates you enter the right number");




//--------------------------------------------------
//----------------------------------------------------

//String

let str = "stringlength";

console.log(str[1]); //t

//------------------------------------------------------
//Template Literals

//1
let sentance = `This is a template literal ${1+2+3}`;
console.log(sentance);

//2
console.log("Apna \n Collage");

//3
let str = "Apna\tCollage";
console.log(str.length);


//------------------------------------------------------
let obj = {
      item : "pen",
      price : 10,
}

let output = `the cost of ${obj.item} is ${obj.price} rupees`; // output 10 is string text
console.log(output);

console.log("the cost of", obj.item, "is", obj.price, "rupees"); // output 10 is hightligted

//-----------------------------------------------------------------------------------------------


// String Method


1)//-------------------------------
let str = "ApnaCollage";
sval = str.toUpperCase();
console.log(sval);


2)//-------------------------------
let str = "ApnaCollage";
sval = str.toLowerCase();
console.log(sval);


3)//-------------------------------
let str = "    Apna  Collage  ";
console.log(str.trim());


4)//-------------------------------
let str = "HelloWorld";
console.log(str.slice(1, 6)); // ellow


5)//-------------------------------
let str1 = "swetha"; 
let str2 = "collage";

option1)
let res = str1.concat(str2);
console.log(res);  // swethacollage

option2)
let res = str1 + str2;
console.log(res);

option3)
let str = "manu" + str1 + str2;
console.log(str);


6)//-------------------------------
let str = "manureddy";
console.log(str.replace("m", "H"));


7)//-------------------------------
let str = "manureddy";
console.log(str.charAt(2)) // n
console.log(str.charAt(5)) // e



Lab 1)//------------------------------------------------

let fullname = prompt("enter you are full name: ");
let userName = "@" + fullname + fullname.length;
console.log(userName);