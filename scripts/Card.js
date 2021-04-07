// import { openPopup } from ''
// import { imagePopup, imageCaption, showImgPopup } from ''



export class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);
  }

  // Метод открытия изображения из карточки
  _handleImgPopup() {
  imagePopup.src = this._link;
  imagePopup.alt = this._name;
  imageCaption.textContent = this._name;

  openPopup(showImgPopup);
  }

  _handleLikeClick() {
    this._element.querySelector('.element__like-btn').classList.toggle('element__like-btn_act');
  }

  // _handleLikeClick() {
  //   evt.target.classList.toggle('element__like-btn_act');
  // }

  _handleDeleteCard() {
    this._element.closest('.element').remove();
  }

  // _handleDeleteCard() {
  //   evt.target.closest('.element').remove();
  // }

  _setEventListeners() {
    this._element.querySelector('.element__image').addEventListener('click', () => {
      this._handleImgPopup();
    });

    this._element.querySelector('.element__like-btn').addEventListener('click', handleLikeClick);

    this._element.querySelector('.element__del-btn').addEventListener('click', handleDeleteCard);
  }

  
}