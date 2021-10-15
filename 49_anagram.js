const checkAnagram = (s0, s1) => {
  let h = {};
  let result = true;

  if (s0.length != s1.length) {
    return false;
  }

  s0.split('').forEach((item) => {
    h[item] = h[item] + 1 || 1;
  });

  s1.split('').forEach((item) => {
    h.hasOwnProperty(item) ? (h[item] -= 1) : (result = false);
  });

  for (const prop in h) {
    if (h[prop] < 0) {
      return false;
    }
  }

  return result;
};
