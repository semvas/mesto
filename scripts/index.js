import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';

import {
  selectors,

  editBtn,
  addBtn,
  
  allPopups,
  editProfilePopup,
  addCardPopup,
  
  profileName,
  profileDesc,
  
  editForm,
  editName,
  editDesc,
  
  addForm,
  placeName,
  placeUrl,
  
  elementsContainer,
  
  initialCards 
} from './constants.js';

export function openPopup (popup) {
  popup.classList.add('popup_opened');

  document.addEventListener('keydown', closeOnEscButton);
}

function closePopup (popup) {
  popup.classList.remove('popup_opened');

  document.removeEventListener('keydown', closeOnEscButton);
}

function closeOnEscButton (evt) {
  if (evt.key === 'Escape') {
    closePopup(document.querySelector('.popup_opened'));
  }
}

function openEditForm () {
  editName.value = profileName.textContent;
  editDesc.value =  profileDesc.textContent;

  editFormValidator.clearErrors();

  openPopup(editProfilePopup);
}

function openAddForm () {
  addForm.reset();

  addFormValidator.clearErrors();

  const submitButton = addCardPopup.querySelector(selectors.submitButtonSelector);
  submitButton.disabled = true;
  submitButton.classList.add(selectors.inactiveButtonClass);

  openPopup(addCardPopup);
}

// Функция редактирования данных профиля
function saveProfileEdit (evt) {
  evt.preventDefault();

  profileName.textContent = editName.value;
  profileDesc.textContent = editDesc.value;

  closePopup (editProfilePopup);
}

// Функция создания карточки
function addCard(item) {
  const card = new Card(item, '.element-template');
  elementsContainer.prepend(card.createElement());
}

// Функция добавления новой карточки
function insertCard (evt) {
  evt.preventDefault();

  const newCard = {
    name: placeName.value, 
    link: placeUrl.value
  };
  addCard(newCard);

  closePopup(addCardPopup);
}

// Функция отрисовки карточек из массива
initialCards.reverse().forEach(item => addCard(item));

editBtn.addEventListener('click', openEditForm);

addBtn.addEventListener('click', openAddForm);

allPopups.forEach(popup => popup.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close-btn')) {
    closePopup(popup);
  }
}));

editForm.addEventListener('submit', saveProfileEdit);

addForm.addEventListener('submit', insertCard);

const editFormValidator = new FormValidator(selectors, editForm);
editFormValidator.enableValidation();

const addFormValidator = new FormValidator(selectors, addForm);
addFormValidator.enableValidation();


// Здравствуйте, Ролан! Спасибо!