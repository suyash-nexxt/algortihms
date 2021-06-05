function firstNonRepeatChar(str) {
  let len = str.length,
    char,
    charCount = {};
  for (let i = 0; i < len; i++) {
    char = str[i];
    if (charCount[char]) {
      charCount[char]++;
    } else charCount[char] = 1;
  }
  for (let j in charCount) {
    if (charCount[j] == 1) return j;
  }
}

// >firstNonRepeatChar('the quick brown fox jumps then quickly blow air');
//  = "f"
