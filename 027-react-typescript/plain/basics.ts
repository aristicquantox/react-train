/* 
  Primitives; number, string, boolean
  More complex types: arrays, objects
  Function types, parameters
*/

// Primitives

let age: number;

age = 12;

let userName: string;

userName= "Aleksandar";

let isInstructor: boolean;

isInstructor = true;

// More complex types

// array with strings
let hobbies: string[];

hobbies = ["Sports", "Cooking"];

let person: {
  name: string;
  age: number;
};

person = {
  name: "Aca",
  age: 39
}

// person = {
//   isEmployee: true;
// }

let people: {
  name: string;
  age: number;
}[];

// Type inference

let course = 'React - The Complete Guide';

//course = 12345;