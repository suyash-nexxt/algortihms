// implement your own filter function

Array.prototype.myFilter = function (callback) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      result.push(this[i]);
    }
  }

  return result;
};

input = [1, 2, 3];
checkFilter = input.myFilter((item) => item === 2);
console.log(checkFilter);
