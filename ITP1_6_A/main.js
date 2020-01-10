function Main(input) {
  const [a, b] = input.split('\n');
  console.log(b.split(' ').reverse().join(' '));
}
Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
