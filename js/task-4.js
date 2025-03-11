const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const email = event.currentTarget.elements.email.value.trim();
  const password = event.currentTarget.elements.password.value.trim();

  if (email === '' || password === '') {
    return alert('All form fields must be filled in');
  }

  console.log({ email, password });
  form.reset();
}
