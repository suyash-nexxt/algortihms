// reverse string using stack

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

const reverse = (str) => {
  let stack = new Stack();
  let reversed = '';

  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
  }

  while (stack.read()) {
    reversed += stack.pop();
  }

  return reversed;
};

reverse('abcde');

// edcba
