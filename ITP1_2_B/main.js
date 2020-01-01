function Main(input) {
  const arr = input.split(' ').map(Number);
  const result = arr.reduce((a, c) => {
    if (!a) return false;
    return c - a > 0 ? c : false;
  });
  console.log(result > 0 ? "Yes" : "No");
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));