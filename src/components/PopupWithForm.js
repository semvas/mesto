import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(handleFormSubmit, selector) {
    super(selector);
    this._handleFormSubmit = handleFormSubmit;
    this._formElement = this._element.querySelector('.popup__form');
  }

  _getInputValues() {
    this._inputList = Array.from(this._formElement.querySelectorAll('.popup__input'));

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
}