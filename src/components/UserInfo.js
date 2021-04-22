export default class UserInfo {
  constructor(userSelectors) {
    this._profileName = document.querySelector(userSelectors.name);
    this._profileDesc = document.querySelector(userSelectors.desc);
  }

  getUserInfo() {
    this._userData = {
      name: this._profileName.textContent,
      desc: this._profileDesc.textContent
    }

    return this._userData
  }

  setUserInfo(editedName, editedDesc) {
    this._profileName.textContent = editedName;
    this._profileDesc.textContent = editedDesc;
  }
}