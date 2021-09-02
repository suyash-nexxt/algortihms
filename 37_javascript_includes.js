// Re-implement the array.includes() JavaScript method

const includes = (arr, value) => {
  for (const val of arr) {
    if (val === value) return true;
  }

  return false;
};

const array = [1, 2, 3, 4, 5];
console.log(includes(array, 3)); // true
console.log(includes(array, 6)); // false
