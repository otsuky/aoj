function Main(input) {
  const array = input.split('\n')[1].split(' ').map(Number);
  const sum = array.reduce((a, b) => a + b);

  console.log(Math.min(...array), Math.max(...array), sum);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));