/* eslint-disable quotes */
const Array = require("./array");

function main() {
  Array.SIZE_RATIO = 3;

  // Create an instance of the Array class
  let arr = new Array();

  // Add an item to the array
  arr.push(3);
  arr.push(5);
  arr.push(15);
  arr.push(19);
  arr.push(45);
  arr.push(10);
  arr.push(29);
  arr.push(47);
  arr.push(30);
  arr.push(29);
  arr.push(47);
  arr.push(30);
  arr.push(31);
  console.log(arr);
}

//What is the length, capacity and memory address of your array?
//Array {length: 1, _capacity: 3, memory: Memory, ptr: 0}

//Array {length: 6, _capacity: 12, memory: Memory, ptr: 3}

//Array {length: 9, _capacity: 12, memory: Memory, ptr: 3}
main();
