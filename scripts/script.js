const editBtn = document.querySelector('.profile__edit-btn');
const addBtn = document.querySelector('.profile__add-btn');
const closeBtn = document.querySelectorAll('.popup__close-btn');

const editProfilePopup = document.querySelector('.popup-profile');
const addCardPopup = document.querySelector('.popup-add');
const showImgPopup = document.querySelector('.popup-img');

const profileName = document.querySelector('.profile__name');
const profileDesc = document.querySelector('.profile__desc');

const editForm = document.forms['profile-edit'];
const editName = editForm.elements['profile-name'];
const editDesc = editForm.elements['profile-desc'];

const addForm = document.forms['add-card'];
const placeName = addForm.elements['place-name'];
const placeUrl = addForm.elements['place-url'];

const imagePopup = document.querySelector('.popup__image');
const imageCaption = document.querySelector('.popup__caption');

const elementsContainer = document.querySelector('.elements');
const cardTemplate = document.querySelector('.element-template');

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
  openPopup(editProfilePopup);

  editName.value = profileName.textContent;
  editDesc.value =  profileDesc.textContent;
}

function saveProfileEdit (evt) {
  evt.preventDefault();

  profileName.textContent = editName.value;
  profileDesc.textContent = editDesc.value;

  closePopup (editProfilePopup);
}

function actLike (evt) {
  evt.target.classList.toggle('element__like-btn_act');
}

function delCard (evt) {
  evt.target.closest('.element').remove();
}

function openImgPopup (item) {
  openPopup(showImgPopup);

  imagePopup.src = item.link;
  imagePopup.alt = item.name;
  imageCaption.textContent = item.name;
}

function createElement (item) {
  const cardElement = cardTemplate.content.cloneNode(true);
  const cardImage = cardElement.querySelector('.element__image');
  const cardTitle = cardElement.querySelector('.element__title');

  cardImage.src = item.link;
  cardImage.alt = item.name;
  cardTitle.textContent = item.name;

  cardElement.querySelector('.element__like-btn').addEventListener('click', actLike);

  cardElement.querySelector('.element__del-btn').addEventListener('click', delCard);

  cardImage.addEventListener('click', () => {
    openImgPopup(item);
  });
  
  return cardElement;  
}

function insertCard (evt) {
  evt.preventDefault();

  const newCard = createElement({name: placeName.value, link: placeUrl.value});
  elementsContainer.prepend(newCard);

  addForm.reset();
  closePopup(addCardPopup);
}

function renderCard () {
  const card = initialCards.map(createElement);
  elementsContainer.append(...card);
}

renderCard();

editBtn.addEventListener('click', openEditForm);

addBtn.addEventListener('click', () => openPopup(addCardPopup));

closeBtn.forEach(button => button.addEventListener('click', closePopupBtn));

editForm.addEventListener('submit', saveProfileEdit);

addForm.addEventListener('submit', insertCard);