const binarySearch = (nums, target) => {
  let lower = 0;
  let upper = nums.length - 1;

  while (lower <= upper) {
    let middle = Math.floor((upper + lower) / 2);
    let middleValue = nums[middle];

    if (target === middleValue) {
      return middle;
    } else if (target < middleValue) {
      upper = middle - 1;
    } else if (target > middleValue) {
      lower = middle + 1;
    }
  }

  return null;
};

binarySearch([3, 17, 75, 80, 202], 80);
