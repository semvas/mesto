import './index.css';

import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';

import PopupWithImage from '../components/PopupWithImage.js'
import PopupWithForm from '../components/PopupWithForm.js'

import UserInfo from '../components/UserInfo.js'

import {
  selectors,

  editBtn,
  addBtn,
  
  profilePopup,
  addPopup,
  imgPopup,
  
  profileName,
  profileDesc,
  
  editForm,
  editName,
  editDesc,
  
  addForm,
  
  elementsContainer,
  elementTemplate,
  
  initialCards  
} from '../utils/constants.js';

const user = new UserInfo({
  name: profileName,
  desc: profileDesc
});

const editProfilePopup = new PopupWithForm(item => {
  user.setUserInfo(item.name, item.desc);

  editProfilePopup.close();
  }, 
profilePopup);

const editProfilePopupHandler = () => {
  const profileInfo = user.getUserInfo();
  editName.value = profileInfo.name;
  editDesc.value = profileInfo.desc;

  editFormValidator.clearErrors();

  editProfilePopup.open();
}

const showImgPopup = new PopupWithImage(imgPopup);

// Функция открытия изображения из карточки
function handleCardClick(name, link) {
  showImgPopup.open(name, link)
}

// Функция создания карточки
function createCard(item) {
  const card = new Card(item, elementTemplate, handleCardClick);

  return card.createElement();
}

const addCardPopup = new PopupWithForm(item => {
    const card = createCard(item);
    cardList.addItem(card);
    
    addCardPopup.close();
  },
addPopup);

const addCardPopupHandler = () => {
  addFormValidator.clearErrors();
  
  addCardPopup.open();
}

// Класс карточек из массива с методом добавления новой карточки
const cardList = new Section({
  items: initialCards,
  renderer: item => cardList.addItem(createCard(item))
},
elementsContainer);

// Отрисовка карточек из массива методом класса
cardList.renderItems();

addBtn.addEventListener('click', addCardPopupHandler);
editBtn.addEventListener('click', editProfilePopupHandler);

addCardPopup.setEventListeners();
editProfilePopup.setEventListeners();
showImgPopup.setEventListeners();

const editFormValidator = new FormValidator(selectors, editForm);
editFormValidator.enableValidation();

const addFormValidator = new FormValidator(selectors, addForm);
addFormValidator.enableValidation();