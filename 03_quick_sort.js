const quick_sort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }

  let pivot = arr[0];
  let less = [];
  let greater = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      less.push(arr[i]);
    } else {
      greater.push(arr[i]);
    }
  }

  return quick_sort(less).concat(pivot, quick_sort(greater));
};

console.log(quick_sort([10, 5, 2, 3, 1, 8, 1, 11, 7]));
