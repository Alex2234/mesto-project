export const popups = document.querySelectorAll(".popup");
export const editPopup = document.getElementById("popup_info-edit");
export const editPopupBtn = document.querySelector(".info__edit-button");
export const closeButtons = document.querySelectorAll(".popup__button-close");
export const nameInfo = document.querySelector(".info__title");
export const jobInfo = document.querySelector(".info__subtitle");
export const ava = document.querySelector(".profile__avatar");
export const openPopupImage = document.getElementById("popup_image");
export const popupupImageLink = document.querySelector(".popup__image");
export const popupImageName = document.querySelector(".popup__title-image");
export const elementsList = document.querySelector(".elements");
export const popupAvatar = document.getElementById("popup_avatar");
export const editAvatarBtn = document.querySelector(".profile__avatar-edit");
export const inputLinkAva = document.getElementById("input_link-avatar");
export const infoForm = document.forms["form_info"];
export const cardForm = document.forms["form_card"];
export const avatarForm = document.forms["form_avatar"];
export const nameInput = document.getElementById("input_names");
export const jobInput = document.getElementById("input_job");
export const addPopupBtn = document.querySelector(".profile__add-button");
export const addPopup = document.getElementById("popup_add");
export const inputNameCard = document.getElementById("input_nameCard");
export const inputImgCard = document.getElementById("input_link");
export const myId = {
  id: " ",
};
export const cardCreateBtn = document.getElementById("add_save_btn");
export const editSaveBtn = document.getElementById("edit_save_btn");
export const avatarSaveBtn = document.getElementById("avatar__button-save");

export const settings = {
  formSelector: "form",
  inputSelector: "form__input",
  submitButtonSelector: "form__button-save",
  inactiveButtonClass: "form__button-save_inactive",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active",
};

export const config = {
  url: "https://mesto.nomoreparties.co/v1/plus-cohort-20",
  headers: {
    authorization: "1cdbbf8d-5825-4273-9e5f-62a7f14e6ef5",
    "Content-Type": "application/json",
  },
};
