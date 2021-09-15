const diagonalSum = (mat) => {
  let sum = 0;

  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      if (i == j || i === mat.length - j - 1) {
        sum += mat[i][j];
      }
    }
  }
  return sum;
};

// Input: mat = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// Output: 25;

// Input: mat = [
//   [1, 1, 1, 1],
//   [1, 1, 1, 1],
//   [1, 1, 1, 1],
//   [1, 1, 1, 1],
// ];
// Output: 8;
