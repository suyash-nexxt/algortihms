// Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

// ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];
// output = 3

const sockMerchant = (n, arr) => {
  let obj = {};
  let pair = 0;

  for (let i = 0; i < n; i++) {
    if (obj.hasOwnProperty(arr[i])) {
      obj[arr[i]] += 1;
    } else {
      obj[arr[i]] = 1;
    }

    if (obj[arr[i]] % 2 === 0) {
      pair += 1;
    }
  }

  return pair;
};
