const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', onInputChange);

function onInputChange() {
  output.textContent = input.value.trim() ? input.value : 'Anonymous';
}
