const solve = (nums) => {
  if (nums.length === 0) return 0;
  let prev1 = 0;
  let prev2 = 0;

  for (let i = 0; i < nums.length; i++) {
    let temp = prev1;
    prev1 = Math.max(prev2 + nums[i], prev1);
    prev2 = temp;
  }

  return prev1;
};

nums = [2, 4, 6, 2, 5];
// 13
