 document.addEventListener("DOMContentLoaded", () => {
    const icons = document.querySelectorAll(".rotate-icon i");

    icons.forEach(icon => {
      icon.parentElement.addEventListener("mouseenter", () => {
        icon.classList.remove("rotate-animation"); // reset animation
        void icon.offsetWidth; // trigger reflow
        icon.classList.add("rotate-animation");
      });

      icon.parentElement.addEventListener("mouseleave", () => {
        icon.classList.remove("rotate-animation");
      });
    });
    
  });
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const companyEmail = document.getElementById("companyEmail");
const contactNumber = document.getElementById("contactNumber");
const purpose = document.getElementById("purpose");

const fnameError = document.getElementById("fnameError");
const lnameError = document.getElementById("lnameError");
const emailError = document.getElementById("emailError");
const NumError = document.getElementById("NumError");
const purposeError = document.getElementById("purposeError");

const namePattern = /^[A-Za-z ]{2,50}$/;
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const numberPattern = /^[0-9]{7,15}$/; // Allows digits only, length 7-15

// Validate first name
function validateFirstName() {
  if (!firstName.value.trim()) {
    fnameError.textContent = "First name is required.";
    return false;
  } else if (!namePattern.test(firstName.value.trim())) {
    fnameError.textContent = "First name must be 2-50 letters and spaces only.";
    return false;
  } else {
    fnameError.textContent = "";
    return true;
  }
}

// Validate last name
function validateLastName() {
  if (!lastName.value.trim()) {
    lnameError.textContent = "Last name is required.";
    return false;
  } else if (!namePattern.test(lastName.value.trim())) {
    lnameError.textContent = "Last name must be 2-50 letters and spaces only.";
    return false;
  } else {
    lnameError.textContent = "";
    return true;
  }
}

// Validate company email
function validateEmail() {
  if (!companyEmail.value.trim()) {
    emailError.textContent = "Email is required.";
    return false;
  } else if (!emailPattern.test(companyEmail.value.trim())) {
    emailError.textContent = "Enter a valid email address.";
    return false;
  } else {
    emailError.textContent = "";
    return true;
  }
}

// Validate contact number
function validateNumber() {
  if (!contactNumber.value.trim()) {
    NumError.textContent = "Contact number is required.";
    return false;
  } else if (!numberPattern.test(contactNumber.value.trim())) {
    NumError.textContent = "Contact number must be 7-15 digits only.";
    return false;
  } else {
    NumError.textContent = "";
    return true;
  }
}

// Validate purpose
function validatePurpose() {
  if (!purpose.value.trim()) {
    purposeError.textContent = "Purpose is required.";
    return false;
  } else if (purpose.value.trim().length < 5) {
    purposeError.textContent = "Purpose must be at least 5 characters.";
    return false;
  } else {
    purposeError.textContent = "";
    return true;
  }
}

// Add event listeners
firstName.addEventListener("input", validateFirstName);
lastName.addEventListener("input", validateLastName);
companyEmail.addEventListener("input", validateEmail);
contactNumber.addEventListener("input", validateNumber);
purpose.addEventListener("input", validatePurpose);

// Optional: validate all fields on form submit
function validateAll() {
  const isFirstNameValid = validateFirstName();
  const isLastNameValid = validateLastName();
  const isEmailValid = validateEmail();
  const isNumberValid = validateNumber();
  const isPurposeValid = validatePurpose();

  return isFirstNameValid && isLastNameValid && isEmailValid && isNumberValid && isPurposeValid;
}

document.querySelector("form").addEventListener("submit", function(event) {
  if (!validateAll()) {
    event.preventDefault();
    
  }
});

