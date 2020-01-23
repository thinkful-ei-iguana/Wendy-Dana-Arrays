/* eslint-disable quotes */
const Array = require("./array");

function main() {
  Array.SIZE_RATIO = 3;

  // Create an instance of the Array class
  let arr = new Array();

  // Add an item to the array
  arr.push("wendy");
  // arr.push(5);
  // arr.push(15);
  // arr.push(19);
  // arr.push(45);
  // arr.push(10);
  // arr.push(29);
  // arr.push(47);
  // arr.push(30);
  // arr.push(29);
  // arr.push(47);
  // arr.push(30);
  // arr.push(31);
  // // console.log(arr);
  // arr.pop();
  // arr.pop();
  // arr.pop();
  // arr.pop();
  // console.log(arr);
  // arr.push(32);
  console.log(arr.get(0));
}

//What is the length, capacity and memory address of your array?
//Array {length: 1, _capacity: 3, memory: Memory, ptr: 0}

//Array {length: 6, _capacity: 12, memory: Memory, ptr: 3}

//Array {length: 9, _capacity: 12, memory: Memory, ptr: 3}

//after pop x3 ==> Array {length: 9, _capacity: 39, memory: Memory, ptr: 15}

// pushing in a string returns NaN - our memory data type does not accept string values

//What is the purpose of the _resize() function in your Array class? It's a private function. When we run out of memory, the method makes a copy in our array that resizes the capacity of the array by a factor of 3, as determined in our code.
main();
