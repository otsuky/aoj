function Main(input) {
  const arr = input.split('\n').map(Number);

  let str = '';
  arr.forEach((e, i) => {
    if (e === 0) return false;
    str += `Case ${i + 1}: ${e}\n`;
  });
  console.log(str.trim());
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));