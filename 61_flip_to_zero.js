// We pick an index i in nums and flip i as well as all numbers to the right of i. Return the minimum number of operations required to make nums contain all 0s.

const flip = (nums) => {
  let count = 0;
  let curr = 1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === curr) {
      count++;
      curr === 1 ? (curr = 0) : (curr = 1);
    }
  }
  return count;
};

// nums = [1, 1, 0];
// 2
