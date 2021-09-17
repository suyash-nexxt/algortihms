const findNumbers = (nums) => {
  let total = 0;
  for (let i = 0; i < nums.length; ++i) {
    nums[i].toString().length % 2 === 0 ? (total += 1) : null;
  }
  return total;
};
