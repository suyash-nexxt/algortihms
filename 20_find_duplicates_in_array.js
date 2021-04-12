// Find duplicates in array

function hasDuplicates(array) {
  const words = new Map();
  for (let index = 0; index < array.length; index++) {
    const word = array[index];
    if (words.has(word)) {
      return true;
    }
    words.set(word, true);
  }
  return false;
}

// runtime O(n)
