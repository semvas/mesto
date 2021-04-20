import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';

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
  
  initialCards, imagePopup, imageCaption, showImgPopup 
} from '../utils/constants.js';

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

// Функция открытия изображения из карточки
function handleImgPopup (link, name) {
  imagePopup.src = link;
  imagePopup.alt = name;
  imageCaption.textContent = name;

  openPopup(showImgPopup);
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
  const card = new Card(item, '.element-template', handleImgPopup);

  return card.createElement();
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

// Класс карточек из массива
const cardList = new Section({
  items: initialCards,
  renderer: item => cardList.addItem(createCard(item))
}, elementsContainer);

// Отрисовка карточек из массива методом класса
cardList.renderItems();

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