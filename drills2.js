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
console.log(
  flessthan5([
    1,
    2,
    5,
    3,
    5,
    476,
    4,
    100000234234,
    6,
    -1,
    -70,
    0
  ])
);
