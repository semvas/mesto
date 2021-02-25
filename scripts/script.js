let openEditForm = document.querySelector('.profile__edit-btn');
let closeEditForm = document.querySelector('.popup__close-btn');
let popup = document.querySelector('.popup');

let profileName = document.querySelector('.profile__name');
let profileDesc = document.querySelector('.profile__desc');

let form = document.forms.profileEdit;
let editName = form.elements.profileName;
let editDesc = form.elements.profileDesc;

function openPopup () {
  popup.classList.add('popup_opened');
  editName.value = profileName.textContent;
  editDesc.value =  profileDesc.textContent;
}

openEditForm.addEventListener('click', openPopup);

function closePopup () {
  popup.classList.remove('popup_opened');
}

closeEditForm.addEventListener('click', closePopup);

function saveProfileEdit (evt) {
  evt.preventDefault();
  profileName.textContent = editName.value;
  profileDesc.textContent = editDesc.value;
  closePopup ();
}

form.addEventListener('submit', saveProfileEdit);