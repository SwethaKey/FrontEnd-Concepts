

function myFunction() {
      console.log("Wellcome to Apna collage");
      console.log("message");
}

myFunction();
myFunction();
myFunction();


//---------------------------------------------------------

function myFunction(msg, n) {
      //parameter --> input
      console.log(msg*n);
}

myFunction("I like", 10); // argument

// output === NaN

//----------------------------------------------------------

function sum(x,y) {
      console.log(x+y);
}

sum(3,5);


//---------------------------------------------------------


function sum(x,y) {
      r = x+y;
      console.log("before return");
      return r;
      console.log("after return"); // It doesnot execute bcz it writen as after return
}

let val = sum(3,4);
console.log(val)

//----------------------------------------------------------

function sum(x,y) {
      // local variable
      r = x+y;
      console.log("before return");
      return r;
      console.log("after return"); // It doesnot execute bcz it writen as after return
}

let val = sum(3,4);
// console.log(x) // x is not defined
console.log(val)

//--------------------------------------------------------------


// sum function
function sum(a, b) {
      return a + b;
};

const arrSum = (a, b) => {
      return a+b;
};


// mulitiply function
function sum(a, b) {
      return a * b;
};

const arrMul = (a, b) => { //arrMul is variable
      return a*b;
};

const printHello = () => {
      console.log("hello");
}


//-----------------------------------------------------------------

/* Create a function using the "function" keyword that takes a string 
as an argument and returns the number of vowels in the string */

//option1

function countVowel(str){
      let count = 0;
      for (const char of str){
            if(char === "a" || char === "e" || char === "i" || char === "0" || char === "u"){
                  count++;
            }
      }
      console.log(count);
}

// -----------------------------------------------------------------------

//option2

function countVowel(str){
      str = str.toLowerCase();
      let count = 0;
      const vowels = "aeiou";
      for(let i=0; i<str.length; i++){
            if(vowels.includes(str[i])){
                  count++;
            }
      }
      return count;
}

console.log(countVowel("Hello World"));

//using Arrow function

const countVowel = (str) => {
      str = str.toLowerCase();
      let count = 0;
      const vowels = "aeiou";
      for(let i=0; i<str.length; i++){
            if(vowels.includes(str[i])){
                  count++;
            }
      }
      return count;

}

console.log(countVowel("helloWorld"));


//-----------------------------------------

let sentence = "Hello World";
console.log(sentence.includes("Hello")); // Output: true
console.log(sentence.includes("hello")); // Output: false
console.log(sentence.includes("World", 6)); // Output: true


// ------------------------------------------------

Syntax 

arr.forEach(function(element, index, array){
      // code to execute for each element
})


let fru = ["apple", "banana", "orange"];

fru.forEach(function(fru, index){
      console.log(index + ": " + fru);
})



fru.forEach((fru, index) => {
      console.log(index + ": " + fru);
});



//-------------------------------------------------

arr.forEach(function printVal(val){
      console.log(val);
});


let arr = ["Swetha", "reddy"];

arr.forEach((val, idx, arr) => {
      console.log(val.toUpperCase(), idx, arr);
});

Interview Question:
/*forEach is a function and is parameter ===  ((val, idx, arr) => {
      console.log(val.toUpperCase(), idx, arr);
}); return/callback can do is called as higher order function */

//---------------------------------------------------------


let nums = [1, 2, 3, 4, 5];

nums.forEach((num) => {
      console.log(num*num);
});

//-------------------------------------------------------------

let nums = [1, 2, 3, 4, 5];

let newarr = nums.map((num) => {
      return num*num;
});

console.log(newarr);

//-----------------------------------------------------------------

let nums = [1, 2, 3, 4, 5];

let newarr = nums.filter((num) => {
      return num%2 === 0;
});

console.log(newarr);


let nums = [1, 2, 3, 4, 5];

let newarr = nums.filter((num) => {
      return num>3;
});

console.log(newarr);

//----------------------------------------------------------------

let arr = [1,2,3,5,6,7];

const result = arr.reduce((res, curr) => { // res = previous ; curr = current
      return res + curr;
})
console.log(result);

//----------------------------------

// Print Largest number 

let arr = [1,10,11,18,21,2];
                           
const result = arr.reduce((prev, curr) => { // res = previous ; curr = current
      return prev > curr ? prev : curr;
})
console.log(result); //21

//---------------------------------------------------------------



let marks = [97, 35, 45, 50, 96, 89];
marks.filter((val) => {
      return val>90;
})

console.log("topper")


//--------------------------------------------------------------------

let n = prompt("enter a user number N: ");
let arr = [];


for (let i=1; i<=n; i++) {
      arr[i-1] = i;
}
console.log(arr);



const sum = arr.reduce((prev, curr) => {
      return prev+curr;
});
console.log(sum)



let fact = arr.reduce((prev, curr) => {
      return prev*curr;
});
console.log(fact);

//-----------------------------------------------------------------------


