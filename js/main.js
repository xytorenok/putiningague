const code = document.getElementById('code')
const outputTest = document.getElementById('code-output')
const outputTestBefore = document.getElementById('code-output-before')
const outputTestAfter = document.getElementById('code-output-after')
const putin = document.querySelector('.face')

window.onload = function() {
    document.getElementById('code').focus();
  };

code.addEventListener('input', () => {
    code.value = code.value;
    outputTest.textContent = code.value;

    const valueBeforeColon = code.value.substring(0, code.value.indexOf(':'));
    outputTestBefore.textContent = valueBeforeColon;

    const valueAfterColon = code.value.substring(code.value.indexOf(':') + 1);
    outputTestAfter.textContent = valueAfterColon;

    putin.style[valueBeforeColon] = valueAfterColon;
    
});




