const selectors = {
  inputSelector: '.popup__input',
  inputErrorSelector: '.popup__input-error',
  submitButtonSelector: '.popup__save-btn',
  inactiveButtonClass: 'popup__save-btn_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_visible',
}

const editBtn = document.querySelector('.profile__edit-btn');
const addBtn = document.querySelector('.profile__add-btn');

const profilePopup = '.popup-profile';
const addPopup = '.popup-add';
const imgPopup = '.popup-img';

const profileName = '.profile__name';
const profileDesc = '.profile__desc';

const editForm = document.querySelector('form[name="profile-edit"]');
const editName = editForm.querySelector('input[name="name"]');
const editDesc = editForm.querySelector('input[name="desc"]');

const addForm = document.querySelector('form[name="add-card"]');

const elementsContainer = document.querySelector('.elements');
const elementTemplate = '.element-template';

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

export { 
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
};