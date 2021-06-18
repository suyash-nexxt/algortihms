const arr = [3, 7, 11, 5, 9, 4];
const target = 16;

const checkSum = (nums, target) => {
  const hash = {};
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (hash.hasOwnProperty(nums[i])) {
      return [hash[nums[i]], i];
    }
    hash[complement] = i;
  }

  return [];
};

checkSum(arr, target);
// [2, 3]
