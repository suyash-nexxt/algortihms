// Find the number of subarrays that add up to k with map

function subarraySum(nums, k) {
  let ans = 0;
  let sum = 0;
  const map = newMap([[0, 1]]);
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (map.has(sum - k)) ans += map.get(sum - k);
    map.set(sum, 1 + (map.get(sum) || 0));
  }
  return ans;
}
