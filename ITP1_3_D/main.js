function Main(input) {
  const [a, b, c] = input.split(' ').map(Number);
  let num = 0;

  for (let i = a; i <= b; i++) {
    (c % i === 0) && (num += 1);
  }
  console.log(num);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));