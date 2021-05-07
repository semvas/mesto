export default class Card {
  constructor(data, cardSelector, userId, { handleCardClick, handleLikeClick, handleDeleteClick }) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._cardId = data._id;
    this._ownerId = data.owner._id;

    this._cardSelector = cardSelector;

    this._userId = userId;
    this._isOwner = this._ownerId ===this._userId;

    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;

    this._handleLikeClick = () => handleLikeClick(data._id,
      this._likeButton.classList.contains('element__like-btn_act'),
      arr => this._likeCard(arr));
  }

  _getTemplate() {
    this._element = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);
  }

  _setEventListeners() {
    this._cardImage.addEventListener('click', this._handleCardClick);

    this._likeButton.addEventListener('click', this._handleLikeClick);

    if (this._isOwner) {
      this._deleteButton.addEventListener('click', this._handleDeleteClick);
    } else {
      this._deleteButton.remove();
    }
  }

  _likeCard(arr) {
    if (arr.some(like => like._id === this._userId)) {
      this._likeButton.classList.add('element__like-btn_act');
    } else {
      this._likeButton.classList.remove('element__like-btn_act');
    }
    this._element.querySelector('.element__like-counter').textContent = arr.length;
  }

  deleteCard() {
    this._element.remove();
  }

  createElement() {
    this._getTemplate();

    this._cardImage = this._element.querySelector('.element__image');
    this._likeButton = this._element.querySelector('.element__like-btn');
    this._deleteButton = this._element.querySelector('.element__del-btn');

    this._element.querySelector('.element__title').textContent = this._name;

    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;

    this._likeCard(this._likes);

    this._setEventListeners();

    return this._element;
  }
}