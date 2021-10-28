class Stack {
  constructor() {
    this.data = [];
  }

  push(item) {
    return this.data.push(item);
  }

  pop() {
    return this.data.pop();
  }

  read() {
    return this.data[this.data.length - 1];
  }
}

let stack = new Stack();

const lint = (code) => {
  let poppedOpeningBrace;

  for (let i = 0; i < code.length; i++) {
    if (isOpeningBrace(code[i])) {
      stack.push(code[i]);
      console.log('up');
    } else if (isClosingBrace(code[i])) {
      poppedOpeningBrace = stack.pop();

      if (!poppedOpeningBrace) {
        return `${code[i]} doesn't have opening brace`;
      }

      if (isNotMatch(poppedOpeningBrace, code[i])) {
        return `${code[i]} has mismatched opening brace`;
      }
    }
  }

  if (stack.read()) {
    return `${stack.read()} does not have closing brace`;
  }

  return true;
};

const isOpeningBrace = (char) => {
  return ['(', '{', '['].includes(char);
};

const isClosingBrace = (char) => {
  return [')', '}', ']'].includes(char);
};

const isNotMatch = (opening, closing) => {
  let pairs = { '(': ')', '{': '}', '[': ']' };
  return closing != pairs[opening];
};

lint('(var x = {y: [1,2,3]})');
