function Main(input) {
  const arr = input.split(' ').map(Number);
  const result = arr.reduce((a, c) => {
    console.log(a, c)
    return a - c < 0 ? c : 0
  });

  console.log(result > 0 ? "Yes" : "No");
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));