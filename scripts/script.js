let openEditForm = document.querySelector('.profile__edit-btn');
let closeEditForm = document.querySelector('.popup__close-btn');
let popup = document.querySelector('.popup');

let profileName = document.querySelector('.profile__name');
let profileDesc = document.querySelector('.profile__desc');

let form = document.querySelector('form[name="profile-edit"]');
let editName = document.querySelector('input[name="profile-name"]');
let editDesc = document.querySelector('input[name="profile-desc"]');

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

closeEditForm.addEventListener('click', closePopup);

openEditForm.addEventListener('click', openPopup);

form.addEventListener('submit', saveProfileEdit);