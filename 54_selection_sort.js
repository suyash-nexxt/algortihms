const selectionSort = (nums) => {
  for (let i = 0; i < nums.length - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex != i) {
      let temp = nums[i];
      nums[i] = nums[minIndex];
      nums[minIndex] = temp;
    }
  }

  return nums;
};

selectionSort([3, 14, 1, 12, 7, 9, 2]);
