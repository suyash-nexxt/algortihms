// implementing our own array.map method

Array.prototype.myMap = function (callback) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result[i] = callback(this[i], i);
  }

  return result;
};

input = [1, 2, 3];
newArray = input.myMap((item) => item * 2);
console.log(newArray);

// Output >> [2, 4, 6]
