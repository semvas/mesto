import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(selector) {
    super(selector);
    this._image = this._element.querySelector('.popup__image');
    this._caption = this._element.querySelector('.popup__caption');
  }

  open(item) {
    this._image.src = item.link;
    this._image.alt = item.name;
    this._caption.textContent = item.name;
    
    super.open();
  }
}