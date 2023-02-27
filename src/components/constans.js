export const popupes = document.querySelectorAll(".popup");
export const editPopup = document.getElementById("popup_info-edit");
export const editPopupBtn = document.querySelector(".info__edit-button");
export const closeButtons = document.querySelectorAll(".popup__button-close");
export const nameInfo = document.querySelector(".info__title");
export const jobInfo = document.querySelector(".info__subtitle");
export const openPopupImage = document.getElementById("popup_image");
export const popupupImageLink = document.querySelector(".popup__image");
export const popupImageName = document.querySelector(".popup__title-image");
export const elementsList = document.querySelector(".elements");
export const infoForm = document.forms["form_info"];
export const cardForm = document.forms["form_card"];
export const nameInput = document.getElementById("input_names");
export const jobInput = document.getElementById("input_job");
export const addPopupBtn = document.querySelector(".profile__add-button");
export const addPopup = document.getElementById("popup_add");
export const inputNameCard = document.getElementById("input_nameCard");
export const inputImgCard = document.getElementById("input_link");
export const editSaveBtn = document.getElementById("edit_save_btn");
export const addSaveBtn = document.getElementById("add_save_btn");

//Массив карточек
export const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

export const settings = {
  formSelector: "form",
  inputSelector: "form__input",
  submitButtonSelector: "form__button-save",
  inactiveButtonClass: "form__button-save_inactive",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active",
};
