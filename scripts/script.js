// create reference for input fields.
const firstNameInput = document.querySelector("#first-name-input");
const lastNameInput = document.querySelector("#last-name-input");
const EmailInput = document.querySelector("#email-input");
const PasswordInput = document.querySelector("#password-input");
const PasswordCONInput = document.querySelector("#password-confirm-input");


// create reference for buttons.
const submitBtn = document.querySelector("#submit-btn");
const resetBtn = document.querySelector("#reset-btn");


// simple email validation
function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}

// add callback function for firstNameInput.onkeyup event
firstNameInput.onkeyup = () => {
  firstNameInput.classList.remove("is-valid");
  firstNameInput.classList.remove("is-invalid");
};

// add callback functions for other input events.
// (lastname, email, password, confirm password)
lastNameInput.onkeyup = () => {
  lastNameInput.classList.remove("is-valid");
  lastNameInput.classList.remove("is-invalid");
};

EmailInput.onkeyup = () => {
  EmailInput.classList.remove("is-valid");
  EmailInput.classList.remove("is-invalid");
};

PasswordInput.onkeyup = () => {
  PasswordInput.classList.remove("is-valid");
  PasswordInput.classList.remove("is-invalid");
};

PasswordCONInput.onkeyup = () => {
  PasswordCONInput.classList.remove("is-valid");
  PasswordCONInput.classList.remove("is-invalid");
};

// add callback function for submit button.
submitBtn.onclick = () => {
  isFirstNameOk = false;
  isLastNameOk = false;
  isEmailOk = false;
  isPasswordOk = false;
  isconpassOk = false;

  // validate first name
  if (firstNameInput.value === "") {
    firstNameInput.classList.add("is-invalid");
  } else {
    firstNameInput.classList.add("is-valid");
    isFirstNameOk = true;
  }

  // validate last name
  if (lastNameInput.value === "") {
    lastNameInput.classList.add("is-invalid");
  } else {
    lastNameInput.classList.add("is-valid");
    isLastNameOk = true;
  }
  // validate email
  if (validateEmail(EmailInput.value) === false) {
    EmailInput.classList.add("is-invalid");
  } else {
    EmailInput.classList.add("is-valid");
    isEmailOk = true;
  }

  // validate password
  if (PasswordInput.value.length < 6) {
    PasswordInput.classList.add("is-invalid");
  } else {
    PasswordInput.classList.add("is-valid");
    isPasswordOk = true;
  }
  // validate confirm password
  if (PasswordCONInput.value !== PasswordInput.value || PasswordCONInput.value.length < 6
    || PasswordCONInput.value === "") {
    PasswordCONInput.classList.add("is-invalid");
  } else {
    PasswordCONInput.classList.add("is-valid");
    isconpassOk = true;
  }

  if (isFirstNameOk && isLastNameOk 
    && isEmailOk && isPasswordOk 
    && isconpassOk) 
    alert("Registered successfully");
};

// add callback function for Reset button.
resetBtn.onclick = () => {
  firstNameInput.value = "";
  lastNameInput.value = "";
  EmailInput.value = "";
  PasswordInput.value = "";
  PasswordCONInput.value = "";

  firstNameInput.classList.remove("is-valid");
  firstNameInput.classList.remove("is-invalid");

  lastNameInput.classList.remove("is-valid");
  lastNameInput.classList.remove("is-invalid");

  EmailInput.classList.remove("is-valid");
  EmailInput.classList.remove("is-invalid");

  PasswordInput.classList.remove("is-valid");
  PasswordInput.classList.remove("is-invalid");

  PasswordCONInput.classList.remove("is-valid");
  PasswordCONInput.classList.remove("is-invalid");
}