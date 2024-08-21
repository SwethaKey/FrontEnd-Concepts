// Arithmetic Operators; (+-*/)

let a = 5;
let b = 2;

console.log("a + b = " , a+b);
console.log("a - b = " , a-b);
console.log("a * b = " , a*b);
console.log("a / b = " , a/b);
console.log("a % b = " , a%b); // Modules
console.log("a ** b = " , a**b); // (5^2) Exponentiation


// Unary Operator

let c = 5;
let d = 2;

/*console.log("a = ", a, " & b = ", b); // increment a++ = a+1
a++ //6
console.log("a = " , a); */


console.log("a = " , a, " & b = ", b); // decrement a-- = a-1
a-- ;
console.log("a = " , a);



console.log("a = " , a, " & b = ", b); // decrement a-- = a-1
--a ;
console.log("a = " , a);


// Assignment Operators



// Comparison Operators

let f = 5;
let g = 5;

console.log("5 == 2", 5 == 2); //False
console.log("5 == 5", 5 == 5); //True
console.log("5 != 5", 5 != 5); //False

console.log("5 === 5", 5 === 5); //True




// LOgical Operator

&&  AND 
||  Or
! Locgical

//--------------------------------------------------------
// Conditional statement

let age = 16;

if (age >= 18) {
      console.log("you can Vote")
}


if (age < 18) {
      console.log("you cannot vote")
}


//---------------------------------------------------------

let mode = "dark";
let color;

if (mode === "dark") {
      color = "black";
}


if (mode === "light") {
      color = "white";
}

console.log(color);


// ---------------------------------------------

let num = 10;

if (num % 2 === 0){
      console.log(num, "is even");
} else {
      console.log(num, "is odd");
}


//----------------------------------------------
let age = 10;

if (age < 18){
      console.log("junior");
} else if (age > 60) {
      console.log("senior");
} else if (age < 50) {
      console.log("middle")
} else {
      console.log("super senior")
}

// ----------------------------------------------


// Ternary Operators

//condition ? true output : false output

// compact if-else

age > 18 ? "adult" : "not adult"
condition ? exprIfTrue : exprIfFalse


// OPtion 1
let age = 25;
let result = age >= 18 ? "adult" : "not adult"
console.log(result);

// OPtion 2
age >= 18 ? console.log("adult") : console.log("not adult")


// -------------------------------------------------------

let num = prompt("enter a number");
if (num%5 === 0){
      console.log("yes", num);
}else {
      console.log("No", num)
}