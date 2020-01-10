function Main(input) {
  for (const e of input.split('\n')) {
    const [h, w] = e.split(' ').map(Number);
    if (!h && !w) return;
    const odd = (Array(Math.ceil(w / 2 + 1)).join("#.")).slice(0, w) + "\n";
    const even = (Array(Math.ceil(w / 2 + 1)).join(".#")).slice(0, w) + "\n";
    let str = '';
    for (let i = 0; i < h; i++) {
      str += i % 2 === 0 ? odd : even;
    }
    console.log(str)
  }
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));