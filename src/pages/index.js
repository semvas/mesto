import './index.css';

import Api from '../components/Api.js';

import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';

import PopupWithImage from '../components/PopupWithImage.js'
import PopupWithForm from '../components/PopupWithForm.js'
import PopupWithSubmit from '../components/PopupWithSubmit'

import UserInfo from '../components/UserInfo.js'

import {
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
} from '../utils/constants.js';

let currentUserId = null;

const user = new UserInfo({
  name: profileName,
  desc: profileDesc,
  ava: profileAva
});

const api = new Api(apiConfig);

const showImgPopup = new PopupWithImage(imgPopup);

const confirmDeletePopup = new PopupWithSubmit(confirmPopup);

// Функция создания карточки
function createCard(item) {
  const card = new Card(item, elementTemplate, currentUserId, {
    handleCardClick: () => showImgPopup.open(item),
    handleLikeClick: (cardId, status, likeArr) => {
      api.toggleLike(cardId, status)
        .then(res => likeArr(res.likes))
        .catch(err => console.log(err))
    },
    handleDeleteClick: () => {
      confirmDeletePopup.setSubmitHandler(() => {
        confirmDeletePopup.loading(true);

        api.deleteCard(card._cardId)
          .then(() => card.deleteCard())
          .catch(err => console.log(err))
          .finally(() => {
            confirmDeletePopup.loading(false);
            confirmDeletePopup.close();
          })
      });
      confirmDeletePopup.open();
    }
  });

  return card.createElement();
}

// Экземпляр класса для блока с карточками с методом добавления новой карточки
const cardList = new Section({
  renderer: item => cardList.addItem(createCard(item))
},
elementsContainer);

const editProfilePopup = new PopupWithForm(item => {
  editProfilePopup.loading(true);

  api.setUserInfo(item)
    .then(res => user.setUserInfo(res))
    .catch(err => console.log(err))
    .finally(() => {
      editProfilePopup.loading(false);
      editProfilePopup.close();
    })
  }, 
profilePopup);

const editProfilePopupHandler = () => {
  const profileInfo = user.getUserInfo();
  editName.value = profileInfo.name;
  editDesc.value = profileInfo.desc;

  editFormValidator.clearErrors();

  editProfilePopup.open();
}

const changeAvaPopup = new PopupWithForm(item => {
  changeAvaPopup.loading(true);

  api.setAvatar(item)
    .then(res => {
      user.setUserInfo(res);
    })
    .catch(err => console.log(err))
    .finally(() => {
      changeAvaPopup.loading(false);
      changeAvaPopup.close();
    })
  },
avatarPopup);

const changeAvaPopupHandler = () => {
  avaFormValidator.clearErrors();

  changeAvaPopup.open();
}

const addCardPopup = new PopupWithForm(item => {
  addCardPopup.loading(true)

  api.addCard(item)
    .then(res => {
      const card = createCard(res);
      cardList.addItem(card);
    })
    .catch(err => console.log(err))
    .finally(() => {
      addCardPopup.loading(false)
      addCardPopup.close();
    })
  },
addPopup);

const addCardPopupHandler = () => {
  addFormValidator.clearErrors();
  
  addCardPopup.open();
}

addBtn.addEventListener('click', addCardPopupHandler);
editBtn.addEventListener('click', editProfilePopupHandler);
avaBtn.addEventListener('click', changeAvaPopupHandler);

addCardPopup.setEventListeners();
editProfilePopup.setEventListeners();
showImgPopup.setEventListeners();
changeAvaPopup.setEventListeners();
confirmDeletePopup.setEventListeners();

const editFormValidator = new FormValidator(selectors, editForm);
editFormValidator.enableValidation();

const addFormValidator = new FormValidator(selectors, addForm);
addFormValidator.enableValidation();

const avaFormValidator = new FormValidator(selectors, avaForm);
avaFormValidator.enableValidation();

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userInfo, cards]) => {
    user.setUserInfo(userInfo);
    currentUserId = userInfo._id;
    cardList.renderItems(cards);
  })
  .catch(err => console.log(err))
