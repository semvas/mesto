const editBtn = document.querySelector('.profile__edit-btn');
const addBtn = document.querySelector('.profile__add-btn');
const closeButtons = document.querySelectorAll('.popup__close-btn');

const editProfilePopup = document.querySelector('.popup-profile');
const addCardPopup = document.querySelector('.popup-add');
const showImgPopup = document.querySelector('.popup-img');

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

const elementsContainer = document.querySelector('.elements');
const cardTemplate = document.querySelector('.element-template');

function openPopup (popup) {
  popup.classList.add('popup_opened');
}

function closePopup (popup) {
  popup.classList.remove('popup_opened');
}

function  handleCloseButtons (evt) {
  const targetPopup = evt.target.closest('.popup');

  closePopup(targetPopup);
}

function openEditForm () {
  editName.value = profileName.textContent;
  editDesc.value =  profileDesc.textContent;

  openPopup(editProfilePopup);
}

// Функция редактирования данных профиля
function saveProfileEdit (evt) {
  evt.preventDefault();

  profileName.textContent = editName.value;
  profileDesc.textContent = editDesc.value;

  closePopup (editProfilePopup);
}

function handleLikeClick (evt) {
  evt.target.classList.toggle('element__like-btn_act');
}

function handleDeleteCard (evt) {
  evt.target.closest('.element').remove();
}

// Функция открытия изображения из карточки
function handleImgPopup (item) {
  imagePopup.src = item.link;
  imagePopup.alt = item.name;
  imageCaption.textContent = item.name;

  openPopup(showImgPopup);
}

// Функция создания карточки
function createElement (item) {
  const cardElement = cardTemplate.content.cloneNode(true);
  const cardImage = cardElement.querySelector('.element__image');
  const cardTitle = cardElement.querySelector('.element__title');

  cardImage.src = item.link;
  cardImage.alt = item.name;
  cardTitle.textContent = item.name;

  cardElement.querySelector('.element__like-btn').addEventListener('click', handleLikeClick);

  cardElement.querySelector('.element__del-btn').addEventListener('click', handleDeleteCard);

  cardImage.addEventListener('click', () => {
    handleImgPopup(item);
  });
  
  return cardElement;  
}

// Функция добавления новой карточки
function insertCard (evt) {
  evt.preventDefault();

  const newCard = createElement({name: placeName.value, link: placeUrl.value});
  elementsContainer.prepend(newCard);

  addForm.reset();
  closePopup(addCardPopup);
}

// Функция отрисовки карточек из массива
function renderCard () {
  const cards = initialCards.map(createElement);
  elementsContainer.append(...cards);
}

renderCard();

editBtn.addEventListener('click', openEditForm);

addBtn.addEventListener('click', () => openPopup(addCardPopup));

closeButtons.forEach(button => button.addEventListener('click', handleCloseButtons));

editForm.addEventListener('submit', saveProfileEdit);

addForm.addEventListener('submit', insertCard);


// Здравствуйте, Олег! Спасибо!