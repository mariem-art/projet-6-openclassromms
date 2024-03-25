const Contactmodal = document.getElementById("contact_modal");
const body = document.body;
const main=document.getElementById('main');
const modal=document.querySelector('.modal');
const contactButton=document.querySelector('.contact_button');
const closebutt=document.querySelector('.close');

 //fermer en cliquant sur echap
 document.addEventListener('keydown', function (e) {
  const keyCode = e.keyCode ? e.keyCode : e.which

  if (modal.getAttribute('aria-hidden') === 'false' && keyCode === 27) {
    closeModal(e)
  }
});
contactButton.addEventListener('click', displayModal)
function displayModal(e) {
  e.preventDefault();
  Contactmodal.style.display = "block";
  body.setAttribute('aria-hidden', 'true');
  Contactmodal.setAttribute('aria-hidden', 'false');
  closebutt.focus();
}
closebutt.addEventListener('click', closeModal)
function closeModal(e) {
  e.preventDefault();
  Contactmodal.style.display = "none";
}
const btnSubmit = document.querySelector("#btnSubmit");
const contactModal=document.getElementById('contact_modal')
const form=document.getElementById('form')
const firstname=document.querySelector('#firstname')
const contentForm=document.querySelector('.contentForm')
//formulaire 
function formulaire() {
   const formDatalastname = document.createElement('div');
   formDatalastname.classList.add('formData');
   formDatalastname.innerHTML = `<label for="lastname">Nom</label><br>
   <input class="text-control" type="text" id="lastname" aria-label="lastname" name="lastname" required><br>`;
   const formDatamail = document.createElement('div');
   formDatamail.classList.add('formData'); 
   formDatamail.innerHTML = `<label for="email">E-mail</label><br>
   <input class="text-control" id="email" aria-label="email" name="email" required><br>`;
  
   const formDatamessage = document.createElement('div');
   formDatamessage.classList.add('formData');
   formDatamessage.innerHTML = `<label for="message">Message</label><br>
   <input class="text-control" type="text" id="message" aria-label="message" name="message"><br>`;
   contentForm.appendChild(formDatalastname)
   contentForm.appendChild(formDatamail)
   contentForm.appendChild(formDatamessage)
}
formulaire();
const formData = document.querySelectorAll('.formData');
// DOM Elements
firstname.addEventListener("change", () => validateFirstname());
function validateFirstname() {
  const firstnameValue = firstname.value;
  if (firstnameValue === "" || firstnameValue.length < 2) {
    formData[0].setAttribute("data-error-visible", true);
    formData[0].setAttribute("data-error", "Veuillez entrer au minimum deux caractères !");
    return false;
  } else {
    formData[0].setAttribute("data-error-visible", false);
    formData[0].removeAttribute("data-error");
  }
  return true;
}

const lastname = document.getElementById('lastname');
lastname.addEventListener("change", () => validateLastname());

function validateLastname() {
  const lastnameValue = lastname.value;
  if (lastnameValue === "" || lastnameValue.length < 2) {
    formData[1].setAttribute("data-error-visible", true);
    formData[1].setAttribute("data-error", "Veuillez entrer au minimum deux caractères !");
    return false;
  } else {
    formData[1].setAttribute("data-error-visible", false);
    formData[1].removeAttribute("data-error");
  }
  return true;
}
const email = document.getElementById('email');
email.addEventListener('change', () => validateEmail());
function validateEmail() {
  const emailValue = email.value;
  const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (!emailRegex.test(emailValue)) {
    formData[2].setAttribute("data-error-visible", true);
    formData[2].setAttribute("data-error", "Veuillez entrer un email valide !");
    return false;
  } else {
    formData[2].setAttribute("data-error-visible", false);
    formData[2].removeAttribute("data-error");
  }
  return true;
}
const message = document.getElementById('message');
message.addEventListener("change", () => validateMessage());

function validateMessage() {
  const messageValue = message.value;
  if (messageValue === "" || messageValue.length < 10) {
    formData[3].setAttribute("data-error-visible", true);
    formData[3].setAttribute("data-error", "Veuillez entrer au minimum dix caractères !");
    return false;
  } else {
    formData[3].setAttribute("data-error-visible", false);
    formData[3].removeAttribute("data-error");
  }
  return true;
}
function validate(e) {
  e.preventDefault();
  const isFirstNameValid = validateFirstname();
  const isLastNameValid = validateLastname();
  const isEmailValid = validateEmail();
  const isMessage = validateMessage();
  if ( isFirstNameValid &&
    isLastNameValid &&
    isEmailValid &&
    isMessage) {
      console.log('le prénom c\'est:', firstname.value, 'le nom c\'est:', lastname.value, 'Email c\'est:', email.value, 'le message est:', message.value);   closeModal(e);
  }
  else {
    displayModal(e) ;
  }
}