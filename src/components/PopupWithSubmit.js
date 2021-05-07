import Popup from './Popup.js';

export default class PopupWithSubmit extends Popup {
  constructor(selector) {
    super(selector);
    this._submitButton = this._element.querySelector('.popup__save-btn');
    this._buttonTitle = this._submitButton.textContent;
  }

  setSubmitHandler(handler) {
    this.setSubmitHandler = handler;
  }

  setEventListeners() {
    super.setEventListeners();
    this._submitButton.addEventListener('click', () => {
      this.setSubmitHandler();
    })
  }

  loading(isLoading) {
    if (isLoading) {
      this._submitButton.textContent = 'Удаление...';
    } else {
      this._submitButton.textContent = this._buttonTitle;
    }
  }
}