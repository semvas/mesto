const openEditForm = document.querySelector('.profile__edit-btn');
const closeEditForm = document.querySelector('.popup__close-btn');
const popup = document.querySelector('.popup');

const profileName = document.querySelector('.profile__name');
const profileDesc = document.querySelector('.profile__desc');

const form = document.querySelector('form[name="profile-edit"]');
const editName = form.querySelector('input[name="profile-name"]');
const editDesc = form.querySelector('input[name="profile-desc"]');

function openPopup () {
  popup.classList.add('popup_opened');
  editName.value = profileName.textContent;
  editDesc.value =  profileDesc.textContent;
}

function closePopup () {
  popup.classList.remove('popup_opened');
}

function saveProfileEdit (evt) {
  evt.preventDefault();
  profileName.textContent = editName.value;
  profileDesc.textContent = editDesc.value;
  closePopup ();
}

const elementsContainer = document.querySelector('.elements');
const cardTemplate = document.querySelector('.element-template')

function createElement (item) {
  const cardElement = cardTemplate.content.cloneNode(true);

  const cardTitle = cardElement.querySelector('.element__title');
  cardTitle.textContent = item.name;
  
  const cardImage = cardElement.querySelector('.element__image');
  cardImage.alt = item.name;
  cardImage.src = item.link;
  
  return cardElement;  
};

function renderCard () {
  const card = initialCards.map(item => {
    const newCard = createElement(item);
    return newCard;
  });

  elementsContainer.append(...card);
}

renderCard();

openEditForm.addEventListener('click', openPopup);

closeEditForm.addEventListener('click', closePopup);

form.addEventListener('submit', saveProfileEdit);
