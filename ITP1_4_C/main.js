function Calc(op, a, b) {
  return op === '+' ? a + b : op === '-' ? a - b : op === '*' ? a * b : op === '/' ? Math.floor(a / b) : '';
}

function Main(input) {
  str = '';

  input.split('\n').forEach(elms => {
    const [a, op, b] = elms.split(' ');

    if (op === '?') return;
    str += Calc(op, Number(a), Number(b)) + '\n';
  });
  console.log(str.trim());
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));