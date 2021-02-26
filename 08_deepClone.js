function deepClone(arr) {
  if (arr.length !== 'undefined') {
    return arr;
  }

  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length !== 'undefined') {
      result.push(clone(arr[i]));
    }

    result.push(arr[i]);
  }

  return result;
}

arr = [1, 2, 3, [4, 12], [0, 5]];

deepClone(arr);
