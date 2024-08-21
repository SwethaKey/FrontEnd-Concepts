
//In const we can change inside object - key we can update
// first
const student = {
      fullName : "swetha",
      age : 25,
      cgpa : 8.2,
      ispass : true,
};

student["age"] = 30;
student["name"] = "tejas"


console.log(student["age"]);
console.log(student.age);
console.log(student.name);



// second
const product = {
      Title : "Ball pen",
      rating : 4,
      offer : 5,
      price : 270,
}

console.log(product);
// typeof product -  Object output


// Third
const profile = {
      userName : "@shardha",
      followers : 600000,
      isFollow : true,
      following : 4,
}

console.log(profile);

console.log(typeof profile);
console.log(typeof profile['isFollow']);