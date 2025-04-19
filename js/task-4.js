const registerForm = document.querySelector('.login-form');
registerForm.addEventListener('submit', event => {
  event.preventDefault();
  const email = registerForm.elements.email.value.trim();
  const password = registerForm.elements.password.value.trim();
  const elem = registerForm.elements;
  if (email === '' || password === '') {
    alert('All form fields must be filled in');
    return;
  }
  const field = {
    [registerForm.elements.email]: email,
    [registerForm.elements.password]: password,
  };
  console.log(field);

  registerForm.reset();
});
