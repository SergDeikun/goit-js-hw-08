import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
};

refs.form.addEventListener('input', throttle(handleFormInput, 500));
refs.form.addEventListener('submit', handleFormSubmit);

checksLocalStorage();

function handleFormInput(event) {
  const formData = localStorage.getItem('feedback-form-state')
    ? JSON.parse(localStorage.getItem('feedback-form-state'))
    : {};

  formData[event.target.name] = event.target.value;

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function handleFormSubmit(event) {
  event.preventDefault();

  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));

  refs.form.reset();

  localStorage.removeItem('feedback-form-state');
}

function checksLocalStorage() {
  const objFormData = JSON.parse(localStorage.getItem('feedback-form-state'));

  if (objFormData) {
    refs.form.elements.email.value = objFormData.email || '';
    refs.form.elements.message.value = objFormData.message || '';
  }
}
