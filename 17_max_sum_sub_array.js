// Given an array of integers, find the maximum sum of consecutive elements (subarray).

function maxSum(arr) {
  let max = -Infinity;
  let local = 0;

  arr.forEach((num) => {
    local = Math.max(num, local + num);
    max = Math.max(max, local);
  });

  returnmax;
}

maxSum([-2, 1, -3, 4, -1, 3, 1]);

// output = 7
