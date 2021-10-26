const bubble_sort = (nums) => {
  let maxIndex = nums.length - 1;
  let sorted = false;

  while (!sorted) {
    sorted = true;

    for (let i = 0; i < maxIndex; i++) {
      if (nums[i] > nums[i + 1]) {
        let temp = nums[i];
        nums[i] = nums[i + 1];
        nums[i + 1] = temp;
        sorted = false;
      }
    }

    maxIndex -= 1;
  }

  return nums;
};

bubble_sort([65, 55, 45, 35, 25, 15, 10]);
