function Main(input) {
  const r = Number(input);
  console.log(`${(Math.PI * r * r).toFixed(6)} ${(2 * Math.PI * r).toFixed(6)} `);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));