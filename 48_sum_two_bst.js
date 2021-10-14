// given two binary search trees "a" and "b" and an integer target. Return whether there's a number in "a" and a number in "b" such that their sum equals to target

const solve = (a, b, target) => {
  if (a == null || b === null) {
    return false;
  }

  if (a.val + b.val === target) {
    return true;
  }

  if (target < a.val + b.val) {
    return solve(a.left, b, target) || solve(a, b.left, target);
  }

  return solve(a.right, b, target) || solve(a, b.right, target);
};
