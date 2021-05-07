const selectors = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-btn',
  inactiveButtonClass: 'popup__save-btn_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_visible',
}

const editBtn = document.querySelector('.profile__edit-btn');
const addBtn = document.querySelector('.profile__add-btn');
const avaBtn = document.querySelector('.profile__image-wrapper');

const profilePopup = '.popup-profile';
const addPopup = '.popup-add';
const imgPopup = '.popup-img';
const confirmPopup = '.popup-confirm';
const avatarPopup = '.popup-ava';

const profileName = '.profile__name';
const profileDesc = '.profile__desc';
const profileAva = '.profile__image';

const editForm = document.querySelector('form[name="profile-edit"]');
const editName = editForm.querySelector('input[name="name"]');
const editDesc = editForm.querySelector('input[name="desc"]');

const addForm = document.querySelector('form[name="add-card"]');
const avaForm = document.querySelector('form[name="change-ava"]');

const elementsContainer = document.querySelector('.elements');
const elementTemplate = '.element-template';

const apiConfig = {
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-23',
  token: 'cadf30a7-bb91-4b36-8346-85b440530081'
}

export { 
  selectors,

  editBtn,
  addBtn,
  avaBtn,
  
  profilePopup,
  addPopup,
  imgPopup,
  confirmPopup,
  avatarPopup,
  
  profileName,
  profileDesc,
  profileAva,
  
  editForm,
  editName,
  editDesc,
  
  addForm,
  avaForm,
  
  elementsContainer,
  elementTemplate,

  apiConfig
};