// https://leetcode.com/problems/third-maximum-number/submissions/

// return the third highest number from array
// if array has no third highest, return highest

const thirdMax = (nums) => {
  const unique = [...new Set(nums)];

  const sorted_arr = unique.sort((a, b) => a - b);

  return sorted_arr.length - 3 >= 0
    ? sorted_arr[sorted_arr.length - 3]
    : sorted_arr[sorted_arr.length - 1];
};
