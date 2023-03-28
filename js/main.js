const code = document.getElementById('code')
const outputTest = document.getElementById('code-output')
const outputTestBefore = document.getElementById('code-output-before')
const outputTestAfter = document.getElementById('code-output-after')
const putin = document.querySelector('.face')
const editor = document.getElementById('editor')
const submit = document.getElementById('next')

const solution = 'justify-content:end'

code.focus();

code.addEventListener('input', () => {
  const [prop, value] = code.value.split(':')

  // outputTest.textContent = code.value;
  // outputTestBefore.textContent = valueBeforeColon;
  // outputTestAfter.textContent = valueAfterColon;

  putin.style[prop] = value;
  checkSolution()
});

function checkSolution() {
  editor.classList.toggle('solved', code.value.replace(/(:) *|([^;]);?$/g, '$1$2') == solution)
  outputTest.textContent = code.value.replace(/(:) *|([^;]);?$/g, '$1$2');
}


code.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    if (editor.matches('.solved')) {
      showNext()
    } else {
      shake()
    }
  }
});

function shake() {
  editor.classList.add('shake')

  editor.onanimationend = () => {
    editor.classList.remove('shake')
  }
}