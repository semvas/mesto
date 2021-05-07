export default class UserInfo {
  constructor(userSelectors) {
    this._profileName = document.querySelector(userSelectors.name);
    this._profileDesc = document.querySelector(userSelectors.desc);
    this._profileAva = document.querySelector(userSelectors.ava);
  }

  getUserInfo() {
    this._userData = {
      name: this._profileName.textContent,
      desc: this._profileDesc.textContent
    }

    return this._userData
  }

  setUserInfo({ name, about, avatar }) {
    this._profileName.textContent = name;
    this._profileDesc.textContent = about;
    this._profileAva.src = avatar;
  }
}