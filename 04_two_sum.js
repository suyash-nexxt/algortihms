function twoSum(nums, target, round = 0) {
  if (nums.slice(round).length <= 1) {
    return 'nada';
  }

  let first = nums.slice(round, round + 1);
  let remaining = nums.slice(round + 1);

  for (let i = 0; i < remaining.length; i++) {
    if (first[0] + remaining[i] === target) {
      return [nums.indexOf(first[0]), nums.lastIndexOf(remaining[i])];
    }
  }

  return twoSum(nums, target, round + 1);
}
