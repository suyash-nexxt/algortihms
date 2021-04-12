// Find  the  max  sum  of  an  array  of  integers,  only  taking  k  items  from  the  right  and  left  sidesequentially

function maxSum(arr, k) {
  let left = k - 1;
  let right = arr.length - 1;
  let sum = 0;
  for (let i = 0; i < k; i++) sum += arr[i];
  let max = sum;
  for (let i = 0; i < k; i++) {
    sum += arr[right--] - arr[left--];
    max = Math.max(max, sum);
  }
  return max;
}

// maxSum([1,2,3],3);// 6 // (1 + 2 + 3 = 6)
// maxSum([1,1,1,1,200,1],3);// 202 // (1 + 200 + 1 = 202)
// maxSum([3,10,12,4,7,2,100,1],3);// 104 // (3 + 1 + 100 = 104)
// maxSum([1,200,1],1);// 6 // (1 + 2 + 3 = 6)
