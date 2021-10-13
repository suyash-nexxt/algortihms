// Given an n x n matrix where each of the rows and columns are sorted in ascending order, return the kth smallest element in the matrix.

const kthSmallest = (matrix, k) => {
  let res = [];
  matrix.map((arr) => arr.map((item) => res.push(item)));

  res.sort((a, b) => a - b);

  return res[k - 1];
};
