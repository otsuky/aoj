function Main(input) {
  let str = '';

  for (const e of input.split('\n')) {
    const [h, w] = e.split(' ').map(Number);
    const row = Array(w + 1).join('#');

    if (row.length === 0) return;
    console.log(Array(h + 1).join(row + '\n'))
  }
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));