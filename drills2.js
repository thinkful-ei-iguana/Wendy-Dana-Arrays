function urlify(string) {
  let urlstr = '';
  for (
    let i = 0;
    i < string.length;
    i++
  ) {
    if (string[i] === ' ') {
      urlstr += '%20';
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
    for (
      let j = i;
      j < arr.length;
      j++
    ) {
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
  let longArr =
    arr1.length >= arr2.length
      ? arr1
      : arr2;
  let shortArr =
    arr1.length >= arr2.length
      ? arr2
      : arr1;

  while (
    i < longArr.length ||
    j < shortArr.length
  ) {
    if (
      longArr[i] > shortArr[j] ||
      longArr.length === i
    ) {
      joinedArr.push(shortArr[j]);
      j++;
    } else if (
      shortArr[j] > longArr[i] ||
      shortArr.length === j
    ) {
      joinedArr.push(longArr[i]);
      i++;
    } else if (
      shortArr[j] === longArr[i] &&
      shortArr[j]
    ) {
      joinedArr.push(shortArr[j]);
      joinedArr.push(longArr[i]);
      i++;
      j++;
    }
  }
  return joinedArr;
}

// console.log(
//   joinArrays(
//     [1, 3, 6, 8, 11],
//     [2, 3, 5, 8, 9, 10]
//   )
// );

function removechar(str, remove) {
  let result = '';

  for (
    let j = 0;
    j < remove.length;
    j++
  ) {
    result = '';
    for (
      let i = 0;
      i < str.length;
      i++
    ) {
      if (str[i] !== remove[j]) {
        result += str[i];
      }
    }
    console.log(result);
    str = result;
  }
  return str;
}
// console.log(
//   removechar('Danaeioua', 'aeiou')
// );

function products(arr) {
  let prodArr = [];
  let prod = 1;
  for (let i = 0; i < arr.length; i++) {
    for (
      let j = 0;
      j < arr.length;
      j++
    ) {
      if (j !== i) {
        prod *= arr[j];
      }
    }
    prodArr.push(prod);
    prod = 1;
  }
  return prodArr;
}

// console.log(products([1, 3, 9, 4]));

let matrix = [
  [1, 0, 1, 1, 0],
  [0, 1, 1, 1, 0],
  [1, 1, 1, 1, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 1, 1]
];

function zeroMeOut(arr) {
  let copy = [];
  arr.forEach((e, i) => {
    copy[i] = [...e];
  });
  // console.log(arr, copy);
  console.log(arr[0] === copy[0]);
  console.log(arr === copy);

  for (let i = 0; i < arr.length; i++) {
    for (
      let j = 0;
      j < arr[i].length;
      j++
    ) {
      // i transverses row, j the columns
      if (arr[i][j] === 0) {
        for (
          let k = 0;
          k < arr.length;
          k++
        ) {
          copy[k][j] = 0;
        }
      }
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes(0)) {
      copy[i] = copy[i].map(x => 0);
    }
  }
  return copy;
}
// console.log(matrix);
// console.log(zeroMeOut(matrix));

function rotation(string, rotation) {
  if (
    string.length !== rotation.length
  ) {
    return false;
  }
  let count = 0;
  let r = 0;

  for (
    let i = 0;
    i < string.length;
    i++
  ) {
    console.log(i, r);
    if (string[i] === rotation[r]) {
      console.log(i);
      if (i === string.length - 1) {
        return true;
      }
    } else {
      count++;
      if (count === string.length) {
        return false;
      }
      i = 0;
    }
    r++;
    if (r === rotation.length) {
      r = 0;
    }
  }
}
console.log(
  rotation('amazon', 'azonma')
);
