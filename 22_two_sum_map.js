//  Return an array with the indices of the two numbers that add up to the target using map

function twoSum(nums, target) {
  const map = newMap();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(nums[i])) return [map.get(nums[i]), i];
    map.set(complement, i);
  }
  return [];
}
