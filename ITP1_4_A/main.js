function Main(input) {
  const [a, b] = input.split(' ').map(Number);
  console.log(`${Math.floor(a / b)} ${a % b} ${(a / b).toFixed(5)}`);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));