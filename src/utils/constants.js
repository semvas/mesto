const selectors = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-btn',
  inactiveButtonClass: 'popup__save-btn_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_visible'
}

const editBtn = document.querySelector('.profile__edit-btn');
const addBtn = document.querySelector('.profile__add-btn');

const allPopups = document.querySelectorAll('.popup');
const editProfilePopup = document.querySelector('.popup-profile');
const addCardPopup = document.querySelector('.popup-add');
const showImgPopup = document.querySelector('.popup-img'); // использовал, добавить как селектор?

const profileName = document.querySelector('.profile__name');
const profileDesc = document.querySelector('.profile__desc');

const editForm = document.querySelector('form[name="profile-edit"]');
const editName = editForm.querySelector('input[name="profile-name"]');
const editDesc = editForm.querySelector('input[name="profile-desc"]');

const addForm = document.querySelector('form[name="add-card"]');
const placeName = addForm.querySelector('input[name="place-name"]');
const placeUrl = addForm.querySelector('input[name="place-url"]');

const imagePopup = document.querySelector('.popup__image');
const imageCaption = document.querySelector('.popup__caption');

const elementsContainer = document.querySelector('.elements');  // использовал, добавить как селектор?

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
  
  allPopups,
  editProfilePopup,
  addCardPopup,
  showImgPopup,
  
  profileName,
  profileDesc,
  
  editForm,
  editName,
  editDesc,
  
  addForm,
  placeName,
  placeUrl,
  
  imagePopup,
  imageCaption,
  
  elementsContainer,
  
  initialCards
};