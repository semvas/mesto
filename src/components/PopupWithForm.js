import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(handleFormSubmit, selector) {
    super(selector);
    this._handleFormSubmit = handleFormSubmit;
    
    this._formElement = this._element.querySelector('.popup__form');
    this._inputList = Array.from(this._formElement.querySelectorAll('.popup__input'));

    this._submitButton = this._formElement.querySelector('.popup__save-btn');
    this._buttonTitle = this._submitButton.textContent;
  }

  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach(inputElement => this._formValues[inputElement.name] = inputElement.value);
    
    return this._formValues;
  }

  close() {
    this._formElement.reset();

    super.close();
  }

  setEventListeners() {
    super.setEventListeners()
    
    this._formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();

        this._handleFormSubmit(this._getInputValues());
    });
  }

  loading(isLoading) {
    if (isLoading) {
      this._submitButton.textContent = 'Сохранение...';
    } else {
      this._submitButton.textContent = this._buttonTitle;
    }
  }
}