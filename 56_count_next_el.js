// Given a list of integers nums, return the number of elements x there are such that x + 1 exists as well.

const countNextElement = (nums) => {
  let count = 0;
  let hash = {};

  for (let i = 0; i < nums.length; i++) {
    hash[nums[i]] = hash[nums[i]] + 1 || 1;
  }

  for (let i = 0; i < nums.length; i++) {
    if (hash[parseInt(nums[i]) + 1]) {
      count += 1;
    }
  }

  return count;
};
