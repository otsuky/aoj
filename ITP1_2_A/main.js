function Main(input) {
  const result = input.split(' ').map(Number).reduce((a, b) => a - b);
  const operator = result < 0 ? '<' : result > 0 ? '>' : '==';

  console.log(`a ${operator} b`);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
