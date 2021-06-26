var minPartitions = function (n) {
  let biggest = 0;
  for (let num of n) {
    biggest = num > biggest ? num : biggest;
  }
  return biggest;
};
