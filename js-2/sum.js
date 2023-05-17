const sum = (arr) => {
  let newSum = 0;
  for (let i = 0; i < arr.length; i++) {
    newSum += arr[i];
  }
  return newSum;
};

console.log(sum([10, 8, 12, 5]));

const max = (arr) => {
  if (arr.length === 0) {
    return undefined;
  }
  let maxNum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxNum) {
      maxNum = arr[i];
    }
  }
  return maxNum;
};

console.log(max([1, 3, 2]));

const maxIndex = (arr) => {
  if (arr.length === 0) {
    return -1;
  }

  let max = arr[0];
  let maxIndex = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      maxIndex = i;
    }
  }

  return maxIndex;
};

console.log(maxIndex([1, 3, 2])); // 1

const join = (arr) => arr.join(" ");
console.log(join([1, 2, 3]));
