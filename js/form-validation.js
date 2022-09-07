document.getElementById("form").addEventListener('submit', (event) => {
  let emailField = document.getElementById("email").value;
  if (emailField.toLowerCase() === emailField) {
    return true;
  }
  else {
    var myForm = document.getElementById("form");
    var addP = document.createElement("p");
    addP.setAttribute('class', 'error-message');
    addP.appendChild(document.createTextNode("Submition Faild: Pleas type your email in lowercase."));
    myForm.appendChild(addP);
    event.preventDefault();
    return false;
  }
});