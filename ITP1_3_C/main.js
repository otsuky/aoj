function Main(input) {
  const arr = input.split('\n').map(e => e.split(' ').map(Number));
  let str = '';

  arr.forEach(e => {
    if (e.reduce((a, b) => a + b) === 0) return false;

    str += e.sort((a, b) => a - b).join(' ') + '\n';
  });

  console.log(str.trim());
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));