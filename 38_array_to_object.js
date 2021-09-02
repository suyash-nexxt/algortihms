// Write a function which takes an array of numbers and returns an object literal that contains the array’s numbers as keys whose values are the amount of times the given key appears, i.e. { 1: 2, 4: 2, 6: 3 }

const array = [1, 1, 2, 2, 3, 4, 5, 5, 5, 6];

const object = array.reduce((acc, curr) => {
  if (!acc[curr]) {
    acc[curr] = 1;
  } else {
    acc[curr] += 1;
  }

  return acc;
}, {});

console.log(object); // {1: 2, 2: 2, 3: 1, 4: 1, 5: 3, 6: 1}
