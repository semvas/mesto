import { openPopup } from './index.js';
import { imagePopup, imageCaption, showImgPopup } from './constants.js';


export class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    this._element = document
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

  _handleDeleteCard() {
    this._element.closest('.element').remove();
  }

  _setEventListeners() {
    this._element.querySelector('.element__image').addEventListener('click', () => {
      this._handleImgPopup();
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