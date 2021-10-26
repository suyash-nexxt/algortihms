const insertionSort = (nums) => {
  for (let i = 1; i < nums.length; i++) {
    let temp = nums[i];
    let position = i - 1;

    while (position >= 0) {
      if (nums[position] > temp) {
        nums[position + 1] = nums[position];
        position -= 1;
      } else {
        break;
      }
    }

    nums[position + 1] = temp;
  }

  return nums;
};

insertionSort([9, 11, 3, 5, 1, 7, 11]);
