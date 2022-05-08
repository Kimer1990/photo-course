const navPopup = document.querySelector('.nav-popup');
const navPopupClose = navPopup.querySelector('.nav-popup__close');

const headerMenu = document.querySelector('.header');
const headerMenuButton = headerMenu.querySelector('.header__menu');

const signUpForm = document.querySelector('.sign-up');
const signUpField = signUpForm.querySelector('.sign-up__form-field');
const signUpButton = signUpForm.querySelector('.sign-up__form-button');

function openPopup(popup) {
  popup.classList.add('nav-popup_active');
}

function closePopup(popup) {
  popup.classList.remove('nav-popup_active');
}

function signUpCheck(field) {
  if (field.value !== '') {
    signUpField.setAttribute("disabled", "disabled");
    signUpButton.setAttribute("disabled", "disabled");
    signUpButton.textContent = 'Спасибо!';
  }
}

headerMenuButton.addEventListener('click', function() {
  openPopup(navPopup);
});

navPopupClose.addEventListener('click', function() {
  closePopup(navPopup);
});

signUpButton.addEventListener('click', function() {
  signUpCheck(signUpField);
});
