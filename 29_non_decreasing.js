// Given an array nums with n integers, your task is to check if it could become non-decreasing by modifying at most one element.

const checkPossibility = (nums) => {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[i + 1]) {
      if (i === 0) {
        nums[i] = nums[i + 1] - 1;
        count++;
      } else if (nums[i - 1] <= nums[i + 1]) {
        nums[i] = nums[i - 1];
        count++;
      } else {
        nums[i + 1] = nums[i] + 1;
        count++;
      }
    }
  }

  return count <= 1 ? true : false;
};
