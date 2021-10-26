const solve = (nums) => {
  if (nums.length === 0) return 0;
  let largest = 0;
  let prev = 0;

  for (let i = 0; i < nums.length; i++) {
    let temp = largest;
    largest = Math.max(prev + nums[i], largest);
    prev = temp;
  }

  return largest;
};

nums = [2, 4, 6, 2, 5];
// 13
