export default class Card {
  constructor(data, cardSelector, handleImgPopup) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handleImgPopup = handleImgPopup;
  }

  _getTemplate() {
    this._element = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);
  }

  _handleLikeClick() {
    this._element.querySelector('.element__like-btn').classList.toggle('element__like-btn_act');
  }

  _handleDeleteCard() {
    this._element.closest('.element').remove();
  }

  _setEventListeners() {
    this._element.querySelector('.element__image').addEventListener('click', () => {
      this._handleImgPopup(this._name, this._link);
    });

    this._element.querySelector('.element__like-btn').addEventListener('click', () => {
      this._handleLikeClick()
    });

    this._element.querySelector('.element__del-btn').addEventListener('click', () => {
      this._handleDeleteCard()
    });
  }

  createElement(container) {
    this._getTemplate();
    this._setEventListeners();

    this._cardImage = this._element.querySelector('.element__image');
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;

    this._element.querySelector('.element__title').textContent = this._name;

    return this._element;
  }
}