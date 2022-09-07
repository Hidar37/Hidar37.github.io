/* eslint-disable linebreak-style */
document.getElementById('form').addEventListener('submit', (event) => {
  const emailField = document.getElementById('email').value;
  if (emailField.toLowerCase() === emailField) {
    return true;
  }

  const myForm = document.getElementById('form');
  const addP = document.createElement('p');
  addP.setAttribute('class', 'error-message');
  addP.appendChild(document.createTextNode('Submition Faild: Please type your email in lowercase.'));
  myForm.appendChild(addP);
  event.preventDefault();
  return false;
});