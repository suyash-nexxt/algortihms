function flattenArray(arr) {
  return arr.reduce(
    (acc, cur) => acc.concat(Array.isArray(cur) ? flattenArray(cur) : cur),
    []
  );
}

const arr = [
  [1, 2],
  [3, [4, [5]]],
];

const flattened = flattenArray(arr);
console.log(flattened);

/*
    Output: [ 1, 2, 3, 4, 5 ]
*/
