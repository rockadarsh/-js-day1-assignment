// Create an empty array called "fruits".
 let fruits=[];
 //Add the following fruits to the "fruits" array: "apple", "banana", "orange
 fruits.push("apple","banana","orange");
 // Remove the first fruit from the array.
 fruits.shift();
 //Add "grape" to the end of the array.
 fruits.push("grape");
 //Update the second fruit in the array to "pear".
 if(fruits.length>=2)
 {
    fruits[1]=pear;
 }
 //Print the final "fruits" array after performing the above operations.
console.log(fruits);
//Assignment 2 : Object Operations

//Create an empty object called "person"
let person = {};

//Add the following properties to the "person" object:

person["name"] = "John";
person["age"] = 30;
person["city"] = "new york";

//Remove the "age" property 
delete person.age;

//Add a new property called "job"
person["job"] = "Engineer";

//Update the "city" property
person["city"] = "San francisco";
console.log(person);

//Assignment 3: Array of Objects Operations

//empty array called "cars"
let cars = [];
//Add three car objects to the "cars" array.

cars.push({
  make: "Toyota",
  model: "Camry",
  year: 2018,
});

cars.push({
  make: "Toyota",
  model: "Camry",
  year: 2018,
});

cars.push({
  make: "Toyota",
  model: "Camry",
  year: 2018,
});

console.log(cars);
//Remove the first car object from the "cars" array.

cars.shift();

//Add a new car object to the "cars" array

cars.push({
    make: "Honda",
  model: "civic",
  year: 2020,

})

//Update the "model" property of the second car object in the array to "Accord".


cars[1].model = "accord";
console.log(cars)