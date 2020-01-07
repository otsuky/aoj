function Main(input) {
  for (const e of input.split('\n')) {
    const [h, w] = e.split(' ').map(Number);
    if (!h && !w) return;
    const row = Array(w + 1).join('#') + '\n';
    console.log(
      row +
      Array(h - 1).join('#' + Array(w - 1).join('.') + '#\n') +
      row
    );
  }
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));