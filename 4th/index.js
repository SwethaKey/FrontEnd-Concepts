
let heroes = ["manu", "manju", "malli", "malika", "monika"];


option1)
for(let i of heroes){
      console.log(i);
}

option2)
for(let i=0; i<heroes.length; i++) {
      console.log(heroes[i]);
}

//-----------------------------------------------------------------------------

let cities = ["manglore", "manipall", "mali", "pune", "sweden"];

for (let city of cities){
      console.log(city.toUpperCase());
}


// LAB1 ------------------------------------------------------------------------
let marks = [85, 97, 44, 37, 76, 60];
let sum = 0;

for (let i of marks){
      sum += i;
}
let avg = sum/marks.length;
console.log(`avg marks of the class = ${avg}`);

//-----------------------------------------------------------------------------
option1)
let items = [250, 645, 300, 900, 50];

for(let i = 0; i < items.length; i++) {
      let offer = items[i] / 10;
      items[i] -= offer;
}
 
console.log(items);

option2)
// let items = [250, 645, 300, 900, 50];

/*let i = 0;
for(let val of items) {
      console.log(`value at index ${i} = ${val}`);
      let offer = val / 10;
      items[i] = items[i] - offer;
      console.log(`value after offer = ${items[i]}`);
      i++;
}*/


//-----------------------------------------------------------
//PUSH()

let veg = ["tomato", "potato", "chilli", "carrot"];
veg.push("onion","panner","masala");
console.log(veg);

// POP()

let veg = ["tomato", "potato", "chilli", "carrot"];

console.log(veg);
let deleteditem = veg.pop();
console.log(veg);
console.log(deleteditem);

//toString()

let veg = ["tomato", "potato", "chilli", "carrot"];

console.log(veg);
console.log(veg.toString())
console.log(veg);

//Concat()

let veg = ["tomato", "potato", "chilli", "carrot"];
let fru = ["banana", "grapes", "kiwi"];

let res = veg.concat(fru);
console.log(res);



let arr = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

console.log(arr.shift());
console.log(arr);


console.log(arr.splice(2, 1, "ola"));
console.log(arr);

console.log(arr.push("Amazon"));

console.log(arr);