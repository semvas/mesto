const editBtn = document.querySelector('.profile__edit-btn');
const addBtn = document.querySelector('.profile__add-btn');
const closeBtn = document.querySelectorAll('.popup__close-btn');
// const popup = document.querySelector('.popup');

const editProfile = document.querySelector('.popup-profile');
const addCard = document.querySelector('.popup-add');
const showImg = document.querySelector('.popup-img');

const profileName = document.querySelector('.profile__name');
const profileDesc = document.querySelector('.profile__desc');

const editForm = document.forms['profile-edit'];
const editName = editForm.elements['profile-name'];
const editDesc = editForm.elements['profile-desc'];

const addForm = document.forms['add-card'];
const placeName = addForm.elements['place-name'];
const placeUrl = addForm.elements['place-url'];

function openPopup (popup) {
  popup.classList.add('popup_opened');
}

function closePopup (popup) {
  popup.classList.remove('popup_opened');
}

function closePopupBtn (evt) {
  const targetPopup = evt.target.closest('.popup');
  closePopup(targetPopup);
}

function openEditForm () {
  openPopup(editProfile);

  editName.value = profileName.textContent;
  editDesc.value =  profileDesc.textContent;
}

function saveProfileEdit (evt) {
  evt.preventDefault();

  profileName.textContent = editName.value;
  profileDesc.textContent = editDesc.value;

  closePopup (editProfile);
}

const elementsContainer = document.querySelector('.elements');
const cardTemplate = document.querySelector('.element-template')

function likeAct (evt) {
  evt.target.classList.toggle('element__like-btn_act');
}

function cardDel (evt) {
  evt.target.closest('.element').remove();
}


function createElement (item) {
  const cardElement = cardTemplate.content.cloneNode(true);

  const cardTitle = cardElement.querySelector('.element__title');
  cardTitle.textContent = item.name;
  
  const cardImage = cardElement.querySelector('.element__image');
  cardImage.alt = item.name;
  cardImage.src = item.link;

  cardElement.querySelector('.element__like-btn').addEventListener('click', likeAct);

  cardElement.querySelector('.element__del-btn').addEventListener('click', cardDel);
  
  return cardElement;  
}

function insertCard (evt) {
  evt.preventDefault();

  const newCard = createElement({name: placeName.value, link: placeUrl.value});
  elementsContainer.prepend(newCard);

  addForm.reset();
  closePopup(addCard);
}

function renderCard () {
  const card = initialCards.map(createElement);
  elementsContainer.append(...card);
}

renderCard();

editBtn.addEventListener('click', openEditForm);

addBtn.addEventListener('click', () => openPopup(addCard));

closeBtn.forEach(button => button.addEventListener('click', closePopupBtn));

editForm.addEventListener('submit', saveProfileEdit);

addForm.addEventListener('submit', insertCard);