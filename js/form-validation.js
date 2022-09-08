/* eslint-disable linebreak-style */
const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const commentField = document.getElementById('comment');
/*This is the local storage object that contains all the data */ 
const inputData = {
  name: '',
  email: '',
  comment: '',
};

/*If the local storage has values then set the value of input*/ 
window.addEventListener('load', () => {
  // Retrive the JSON string
  const jsonString = localStorage.getItem('inputData');
  // Parse the JSON string back to JS object using JSON
  const retriveObject = JSON.parse(jsonString);
  // Add input data to input fields
  nameField.value = retriveObject.name;
  emailField.value = retriveObject.email;
  commentField.value = retriveObject.comment;
});

document.getElementById('form').addEventListener('submit', (event) => {
  if (emailField.value.toLowerCase() === emailField.value) {
    inputData.name = nameField.value;
    inputData.email = emailField.value;
    inputData.comment = commentField.value;
    localStorage.setItem('inputData', JSON.stringify(inputData));
    return true;
  }

  /*if the user used uppercase letters in the email input display this*/ 
  const myForm = document.getElementById('form');
  const addP = document.createElement('p');
  addP.setAttribute('class', 'error-message');
  addP.appendChild(document.createTextNode('Submition Faild: Please type your email in lowercase.'));
  myForm.appendChild(addP);
  event.preventDefault();
  return false;
});