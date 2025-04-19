const input = document.getElementById('name-input');
const span = document.getElementById(`name-output`);
function newInput() {
  const inputValue = input.value;
  const inputTrim = inputValue.trim();
  let newValue;
  if (inputTrim === '') {
    newValue = 'Anonymous';
  } else {
    newValue = inputTrim;
  }
  span.textContent = newValue;
}
input.addEventListener('input', newInput);
