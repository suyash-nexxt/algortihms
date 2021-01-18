const merge_sort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);

  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(merge_sort(left), merge_sort(right));
};

const merge = (left, right) => {
  let sorted_array = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      sorted_array.push(left[leftIndex]);
      leftIndex++;
    } else {
      sorted_array.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return sorted_array
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
};
