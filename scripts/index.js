import { Card } from './Card.js';
import { initialCards } from './initial-cards.js';
import { FormValidator, selectors } from './FormValidator.js';


const editBtn = document.querySelector('.profile__edit-btn');
const addBtn = document.querySelector('.profile__add-btn');

const allPopups = document.querySelectorAll('.popup');
const editProfilePopup = document.querySelector('.popup-profile');
const addCardPopup = document.querySelector('.popup-add');
export const showImgPopup = document.querySelector('.popup-img');

const profileName = document.querySelector('.profile__name');
const profileDesc = document.querySelector('.profile__desc');

const editForm = document.querySelector('form[name="profile-edit"]');
const editName = editForm.querySelector('input[name="profile-name"]');
const editDesc = editForm.querySelector('input[name="profile-desc"]');

const addForm = document.querySelector('form[name="add-card"]');
const placeName = addForm.querySelector('input[name="place-name"]');
const placeUrl = addForm.querySelector('input[name="place-url"]');

export const imagePopup = document.querySelector('.popup__image');
export const imageCaption = document.querySelector('.popup__caption');

const elementsContainer = document.querySelector('.elements');

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
function createCard(item) {
  new Card(item, '.element-template').createElement(elementsContainer);
}

// Функция добавления новой карточки
function insertCard (evt) {
  evt.preventDefault();

  const newCard = {
    name: placeName.value, 
    link: placeUrl.value
  };
  createCard(newCard);

  closePopup(addCardPopup);
}

// Функция отрисовки карточек из массива
initialCards.reverse().forEach(item => createCard(item));

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