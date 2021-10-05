// Write a function walkMatrix that takes an r x c 2D array and returns a 1D array of all the elements in the matrix printed in clockwise order.

// // Input
// const matrix = [
//   [0, 1, 2, 3],
//   [11, 12, 13, 4],
//   [10, 15, 14, 5],
//   [9, 8, 7, 6],
// ];

// // Output: walkMatrix(matrix)
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// solution by (skilled.dev)

const walkMatrix = (matrix) => {
  const result = [];

  // Initialize the upper and lower bounds indexes
  const rowCount = matrix.length;
  const columnCount = matrix[0].length;
  let startRow = 0;
  let endRow = rowCount - 1;
  let startColumn = 0;
  let endColumn = columnCount - 1;

  // We will keep walking as long as rows or columns remain.
  // That happens as long as the end is greater or equal to the start.
  while (endRow >= startRow && endColumn >= startColumn) {
    // Walk across the top starting row for each column from beginning to end
    // This is left-right across the top
    for (let column = startColumn; column <= endColumn; column++) {
      // Add the item to result in order
      result.push(matrix[startRow][column]);
    }

    // Increment our start row since we visited each value
    startRow++;

    // Walk top-bottom for the end column
    for (let row = startRow; row <= endRow; row++) {
      result.push(matrix[row][endColumn]);
    }
    endColumn--;

    // Since we increment startRow, we need to make sure we are still in bounds
    if (endRow >= startRow) {
      //  Walk left-right on the bottom row
      for (let column = endColumn; column >= startColumn; column--) {
        result.push(matrix[endRow][column]);
      }
    }
    endRow--;

    // Since we increment startRow, we need to make sure we are still in bounds
    if (endColumn >= startColumn) {
      // walk bottom-top for the start column
      for (let row = endRow; row >= startRow; row--) {
        result.push(matrix[row][startColumn]);
      }
    }
    startColumn++;
  }

  return result;
};
