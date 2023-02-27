import "./pages/index.css";

import {
  popupes,
  editPopup,
  editPopupBtn,
  closeButtons,
  nameInfo,
  jobInfo,
  elementsList,
  infoForm,
  cardForm,
  nameInput,
  jobInput,
  addPopupBtn,
  addPopup,
  inputNameCard,
  inputImgCard,
  initialCards,
  settings,
} from "./components/constans.js";

import { openPopup, closePopup } from "./components/modal.js";
import { createCard } from "./components/card.js";
import { enableValidation } from "./components/validate.js";

//Закрытие при нажатии на Крестик
closeButtons.forEach((button) => {
  const popup = button.closest(".popup");
  button.addEventListener("click", () => closePopup(popup));
});

// Закрытие при нажатии на Оверлей
popupes.forEach((popup) => {
  popup.addEventListener("click", (evt) => {
    if (evt.target === evt.currentTarget) {
      closePopup(popup);
    }
  });
});

//Открытие попапа редактирование профиля
editPopupBtn.addEventListener("click", function () {
  openPopup(editPopup);
  nameInput.value = nameInfo.textContent;
  jobInput.value = jobInfo.textContent;
  //toggleButtonState(inputList, editSaveBtn);
});

//Функция обработчика формы с данными профиля
function handleInfoFormSubmit(evt) {
  evt.preventDefault();
  const nameI = nameInput.value;
  const jobI = jobInput.value;

  nameInfo.textContent = nameI;
  jobInfo.textContent = jobI;
  closePopup(editPopup);
}

//Сохранение данных профиля
infoForm.addEventListener("submit", handleInfoFormSubmit);

//Добавление карточек из массива
initialCards.forEach(function (item) {
  elementsList.append(createCard(item.link, item.name));
});

//Открытие попапа добавления карточек
addPopupBtn.addEventListener("click", function () {
  openPopup(addPopup);
});

//Функция обработчика формы с карточками
function handleCardFormSubmit(evt) {
  evt.preventDefault();
  elementsList.prepend(createCard(inputImgCard.value, inputNameCard.value));
  evt.target.reset();
  closePopup(addPopup);
}

//Сохранение карточки
cardForm.addEventListener("submit", handleCardFormSubmit);

//Валидация форм
enableValidation(settings);
