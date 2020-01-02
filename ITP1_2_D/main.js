function Main(input) {
  const [w, h, x, y, r] = input.split(' ').map(Number);
  const isInner = x >= r && x <= w - r && y >= r && y <= h - r;
  console.log(isInner ? "Yes" : "No")

}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));