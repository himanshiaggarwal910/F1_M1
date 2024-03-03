const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailContainer = document.getElementById("emailContainer");
const passContainer = document.getElementById("passContainer");
const forms = document.getElementById("forms");
let emailFlag = false;
let passFlag = false;

// Function to validate email
function validateEmail() {
  const textVal = emailInput.value;
  const regex = /^.{4,}@.*\..*$/;

  if (regex.test(textVal)) {
    emailFlag = true;
    const para = document.getElementById("emailPara");
    if (para) {
      para.remove();
    }
  } else {
    emailFlag = false;
    const err = "Make sure email is more than 3 characters and has @ and a .";
    displayError(emailContainer, "emailPara", err);
  }
}

// Function to validate password
function validatePassword() {
  const textVal = passwordInput.value;
  const regex = /^.{9,}$/;

  if (regex.test(textVal)) {
    passFlag = true;
    const para = document.getElementById("passPara");
    if (para) {
      para.remove();
    }
  } else {
    passFlag = false;
    const err = "Make sure password is more than 8 characters.";
    displayError(passContainer, "passPara", err);
  }
}

// Function to display error messages
function displayError(container, id, message) {
  const para = document.createElement("p");
  para.innerText = message;
  para.style.color = "red";
  para.id = id;
  const paraExist = document.getElementById(id);
  if (!paraExist) {
    container.appendChild(para);
  }
}

// Function to remove error messages
function removeErrors() {
  const emailPara = document.getElementById("emailPara");
  const passPara = document.getElementById("passPara");
  if (emailPara) {
    emailPara.remove();
  }
  if (passPara) {
    passPara.remove();
  }
}

// Email input onChange event handler
emailInput.addEventListener("change", validateEmail);

// Password input onChange event handler
passwordInput.addEventListener("change", validatePassword);

// Form submission event handler
forms.addEventListener("submit", (e) => {
  e.preventDefault();
  if (emailFlag && passFlag) {
    const confirmStatus = confirm("Are you sure you want to proceed?");
    if (confirmStatus) {
      alert("Successful signup!");
    } else {
      window.location.reload(); // Redirect to the same page
    }
    removeErrors();
    forms.reset(); // Clear input values
  }
});