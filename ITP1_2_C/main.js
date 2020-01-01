function Main(input) {
  const arr = input.split(' ').map(Number);
  const result = arr.sort((a, b) => a - b).join(' ');
  console.log(result);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));