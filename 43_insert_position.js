const searchInsert = (nums, target) => {
  let low = 0,
    mid,
    high = nums.length;

  while (low < high) {
    mid = low + Math.floor((high - low) / 2);

    if (nums[mid] === target) return mid;

    if (nums[mid] < target) low = mid + 1;
    else high = mid;
  }

  return low;
};
