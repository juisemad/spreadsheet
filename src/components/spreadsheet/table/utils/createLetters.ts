export default function createLetters(n: number) {
  const letters = [];
  for (let i = 0; i < n; i++) {
    const prefix = Math.floor(i / 26) > 0 ? String.fromCharCode(64 + Math.floor(i / 26)) : '';
    const charCode = 65 + (i % 26);
    const letter = prefix + String.fromCharCode(charCode);
    letters.push(letter);
  }
  return letters;
}
