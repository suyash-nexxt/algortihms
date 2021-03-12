// Given an unsorted array of numbers and another number find the index at which the number would be placed if it were to be inserted in a sorted version of the array of numbers.

const getIndex = (arr, number) =>
  arr.reduce((counter, curr) => (number > curr ? ++counter : counter), 0);
