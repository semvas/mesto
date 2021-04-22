import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js'
import PopupWithForm from '../components/PopupWithForm.js'

import {
  selectors,

  editBtn,
  addBtn,
  
  allPopups,
  editProfilePopup,
  
  profileName,
  profileDesc,
  
  editForm,
  editName,
  editDesc,
  
  addForm,
  
  elementsContainer,
  
  initialCards  
} from '../utils/constants.js';



// function openEditForm () {
//   editName.value = profileName.textContent;
//   editDesc.value =  profileDesc.textContent;

//   editFormValidator.clearErrors();

//   openPopup(editProfilePopup);
// }

// Функция создания карточки
function createCard(item) {
  const card = new Card(item, '.element-template', handleCardClick);

  return card.createElement();
}

const addCardPopup = new PopupWithForm(item => {
    const card = createCard(item);
    cardList.addItem(card);
    addCardPopup.close();
  },
'.popup-add');


const addCardPopupHandler = () => {

  addFormValidator.clearErrors();

  const submitButton = addForm.querySelector(selectors.submitButtonSelector);
  submitButton.disabled = true;
  submitButton.classList.add(selectors.inactiveButtonClass);

  addCardPopup.open();
}

addBtn.addEventListener('click', addCardPopupHandler);

const showImgPopup = new PopupWithImage('.popup-img');

// Функция открытия изображения из карточки
function handleCardClick(name, link) {
  showImgPopup.open(name, link)
}

// Функция редактирования данных профиля
// function saveProfileEdit (evt) {
//   evt.preventDefault();

//   profileName.textContent = editName.value;
//   profileDesc.textContent = editDesc.value;

//   closePopup (editProfilePopup);
// }

// Класс карточек из массива
const cardList = new Section({
  items: initialCards,
  renderer: item => cardList.addItem(createCard(item))
}, elementsContainer);

// Отрисовка карточек из массива методом класса
cardList.renderItems();

// editBtn.addEventListener('click', openEditForm);

addCardPopup.setEventListeners();
showImgPopup.setEventListeners();

// editForm.addEventListener('submit', saveProfileEdit);

const editFormValidator = new FormValidator(selectors, editForm);
editFormValidator.enableValidation();

const addFormValidator = new FormValidator(selectors, addForm);
addFormValidator.enableValidation();