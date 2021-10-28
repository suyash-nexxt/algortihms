// Given a list of integers nums, find all duplicate numbers and delete their last occurrences.

const removeLastDuplicate = (nums) => {
  let obj = {};

  for (let i = 0; i < nums.length; i++) {
    if (obj.hasOwnProperty(nums[i])) {
      obj[nums[i]] += 1;
    } else {
      obj[nums[i]] = 1;
    }
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    if (obj[nums[i]] > 1) {
      obj[nums[i]] = 1;
      nums.splice(i, 1);
    }
  }

  return nums;
};
