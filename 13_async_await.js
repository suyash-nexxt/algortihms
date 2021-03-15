// print numbers 0-9 in a sequential manner, so that each number is printed after a random waiting time

const timer = (num, time) =>
  new Promise((resolve) => setTimeout(() => resolve(num), time));

async function display() {
  for (let i = 0; i < 10; i++) {
    await timer(i, Math.random() * 1000).then(function (result) {
      console.log(result);
    });
  }
}
display();
