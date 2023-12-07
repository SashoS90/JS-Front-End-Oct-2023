function solve() {
  const text = document.getElementById('input').value;
  let sentences = text.split(".")
  const output = document.getElementById('output');

  sentences = sentences
  .filter(s => s.length > 0)
  .map(s => s += '.');

  while (sentences.length > 0) {
    let paragraph = document.createElement('p');
    paragraph.textContent = sentences.splice(0, 3).join('');
    output.appendChild(paragraph);
  }
}