binary_search = (list, low, high, input) => {
  if (high >= low) {
    mid = Math.floor((high + low) / 2);

    if (list[mid] === input) {
      return mid;
    } else if (list[mid] > input) {
      return binary_search(list, low, mid - 1, input);
    } else {
      return binary_search(list, mid + 1, high, input);
    }
  } else {
    return -1;
  }
};

let arr = [2, 3, 4, 10, 40, 47, 78, 81, 99, 100, 110, 120];
let target = 81;

binary_search(arr, 0, arr.length - 1, target);
