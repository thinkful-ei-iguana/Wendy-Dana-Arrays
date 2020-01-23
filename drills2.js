function urlify(string) {
  let urlstr = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] === " ") {
      urlstr += "%20";
    } else {
      urlstr += string[i];
    }
  }
  return urlstr;
}

// console.log(
//   urlify(' lkjskjf lskjflskjfslj jfjf ')
// );

function flessthan5(arr) {
  let filtered = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 5) {
      filtered.push(arr[i]);
    }
  }
  return filtered;
}
// console.log(flessthan5([1, 2, 5, 3, 5, 476, 4, 100000234234, 6, -1, -70, 0]));

function sumUp(arr) {
  let currentMax = arr[0];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      if (sum > currentMax) {
        console.log(currentMax);
        currentMax = sum;
      }
    }
    sum = 0;
  }
  return currentMax;
}
// console.log(sumUp([4, 6, -3, 5, -2, 1, 10]));

function joinArrays(arr1, arr2) {
  //check both arrays at idx 0; take lowest and add to new array
  let i = 0;
  let j = 0;
  let joinedArr = [];
  let longArr = arr1.length > arr2.length ? arr1 : arr2;
  let shortArr = arr1.length > arr2.length ? arr2 : arr1;
  while (j <= shortArr.length) {
    if (longArr[i] > shortArr[j]) {
      joinedArr.push(shortArr[j]);
      j++;
    }
    if (shortArr[j] > longArr[i]) {
      joinedArr.push(longArr[i]);
      i++;
    }
    if (shortArr[j] === longArr[i]) {
      joinedArr.push(shortArr[j]);
      joinedArr.push(longArr[i]);
      i++;
      j++;
    }
  }
  return joinedArr;
}

console.log(joinArrays([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]));
