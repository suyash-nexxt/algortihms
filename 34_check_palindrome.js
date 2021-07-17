function checkPalindrome(str) {
  let input = str.replace(/[^0-9a-z]/gi, '').toLowerCase();
  let start = 0;
  let end = input.length - 1;

  while (start < end) {
    if (input[start] !== input[end]) {
      return false;
    }

    start += 1;
    end -= 1;
  }

  return true;
}

checkPalindrome('A man, a plan, a canal. Panama');
