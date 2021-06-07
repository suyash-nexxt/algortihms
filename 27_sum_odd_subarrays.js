const arr = [1, 4, 2, 5, 3];

const sumOddLengthSubarrays = (arr) => {
  let n = arr.length;
  let sum = 0;
  arr.forEach((item, index) => {
    sum += item * Math.ceil(((index + 1) * (n - index)) / 2);
  });
  return sum;
};

sumOddLengthSubarrays(arr);

// => 58
