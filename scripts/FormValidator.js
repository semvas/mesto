export const selectors = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-btn',
  inactiveButtonClass: 'popup__save-btn_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_visible'
}


export class FormValidator {
  constructor(data, formElement) {
    this._formSelectors = data;
    this._formElement = formElement;
    this._inputList = Array.from(this._formElement.querySelectorAll(this._formSelectors.inputSelector));
    this._buttonElement = this._formElement.querySelector(this._formSelectors.submitButtonSelector);
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._formSelectors.inputErrorClass);
    errorElement.classList.add(this._formSelectors.errorClass);
    errorElement.textContent = errorMessage;
  }

  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._formSelectors.inputErrorClass);
    errorElement.classList.remove(this._formSelectors.errorClass);
    errorElement.textContent = '';
  }

  _checkInputValidity(inputElement) {
    if(!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _toggleButtonState() {
    if(this._hasInvalidInput()) {
      this._buttonElement.classList.add(this._formSelectors.inactiveButtonClass);
      this._buttonElement.disabled = true;
    } else {
      this._buttonElement.classList.remove(this._formSelectors.inactiveButtonClass);
      this._buttonElement.disabled = false;
    }
  }
  _setIventListeners() {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }

  enableValidation() {
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    this._setIventListeners();
  }

  clearErrors() {
    const errorList = Array.from(this._formElement.querySelectorAll('.popup__input-error'));
    errorList.forEach((errorElement) => {
      errorElement.textContent = '';
    });
    this._inputList.forEach((inputElement) => {
      inputElement.classList.remove(this._formSelectors.inputErrorClass);
    })
  }
}