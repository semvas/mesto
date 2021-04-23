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
    this._cardImage.addEventListener('click', () => {
      this._handleImgPopup(this._name, this._link);
    });

    this._likeButton.addEventListener('click', () => {
      this._handleLikeClick()
    });

    this._deleteButton.addEventListener('click', () => {
      this._handleDeleteCard()
    });
  }

  createElement() {
    this._getTemplate();

    this._cardImage = this._element.querySelector('.element__image');
    this._likeButton = this._element.querySelector('.element__like-btn');
    this._deleteButton = this._element.querySelector('.element__del-btn');

    this._element.querySelector('.element__title').textContent = this._name;

    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;

    this._setEventListeners();

    return this._element;
  }
}