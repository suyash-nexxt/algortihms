const two_sum = (nums, k) => {
  let start = 0;
  let end = nums.length - 1;

  while (start < end) {
    let temp = nums[start] + nums[end];

    if (temp === k) {
      return true;
    } else if (temp < k) {
      start += 1;
    } else {
      end -= 1;
    }
  }

  return false;
};
