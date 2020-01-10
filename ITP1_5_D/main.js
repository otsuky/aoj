function Main(input) {
  let str = '';
  for (let i = 1; i <= input; i++) {
    str += i % 3 === 0 || String(i).indexOf('3') !== -1 ? ` ${i}` : ''
  }
  console.log(str)
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
