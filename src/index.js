import "./pages/index.css";

import {
  popups,
  editPopup,
  editPopupBtn,
  closeButtons,
  nameInfo,
  jobInfo,
  elementsList,
  infoForm,
  cardForm,
  ava,
  nameInput,
  jobInput,
  addPopupBtn,
  addPopup,
  inputNameCard,
  inputImgCard,
  inputLinkAva,
  myId,
  popupAvatar,
  editAvatarBtn,
  avatarForm,
  editSaveBtn,
  cardCreateBtn,
  avatarSaveBtn,
  settings,
} from "./components/constans.js";

import { openPopup, closePopup } from "./components/modal.js";
import { createCard } from "./components/card.js";
import { enableValidation } from "./components/validate.js";
import {
  getInfoProfile,
  getCards,
  updateProfile,
  addCard,
  editAvatar,
} from "./components/api.js";

//Закрытие при нажатии на Крестик
closeButtons.forEach((button) => {
  const popup = button.closest(".popup");
  button.addEventListener("click", () => closePopup(popup));
});

// Закрытие при нажатии на Оверлей
popups.forEach((popup) => {
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
});


//Загрузка с сервера профиля и карточки
Promise.all([getInfoProfile(), getCards()])
.then(([profile, cards]) => {
  nameInfo.textContent = profile.name;
  jobInfo.textContent = profile.about;
  ava.src = profile.avatar;
  myId.id = profile._id;
  cards.forEach((item) => {
    elementsList.append(createCard(item, myId.id));
  });
})
.catch((err) => {
  console.log(err);
});


//Функция демонстрации процесса загрузки
function renderLoading(isLoading, button, buttonText, loadingText) {
  if (isLoading) {
    button.textContent = loadingText;
  } else {
    button.textContent = buttonText;
  }
}

//Функция обработчика формы с данными профиля
function handleInfoFormSubmit(evt) {
  evt.preventDefault();
  const nameI = nameInput.value;
  const jobI = jobInput.value;
  renderLoading(true, editSaveBtn, "Сохранить", "Сохранение");
  updateProfile(nameI, jobI, myId)
    .then((data) => {
      nameInfo.textContent = data.name;
      jobInfo.textContent = data.about;
      myId.id = data._id;
      closePopup(editPopup);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      renderLoading(false, editSaveBtn, "Сохранить", "Сохранение");
    });
}

//Сохранение данных профиля
infoForm.addEventListener("submit", handleInfoFormSubmit);

//Открытие попапа добавления карточек
addPopupBtn.addEventListener("click", function () {
  openPopup(addPopup);
  inactiveButton(settings, cardCreateBtn);
});

//Функция деактивации кнопки
function inactiveButton(settings, button) {
  button.disabled = true;
  button.classList.add(settings.inactiveButtonClass);
}

//Функция обработчика формы с карточками
function handleCardFormSubmit(evt) {
  evt.preventDefault();
  renderLoading(true, cardCreateBtn, "Создать", "Создание...");
  addCard(inputNameCard.value, inputImgCard.value)
    .then((data) => {
      elementsList.prepend(createCard(data, myId.id));
      cardForm.reset();
      closePopup(addPopup);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      renderLoading(false, cardCreateBtn, "Создать", "Создание...");
    });
}

//Сохранение карточки
cardForm.addEventListener("submit", handleCardFormSubmit);

//Открытие попапа изменения аватара
editAvatarBtn.addEventListener("click", function () {
  openPopup(popupAvatar);
});

//Функция обработчика формы с аватаркой
function handleAvatarFormSubmit(evt) {
  evt.preventDefault();
  renderLoading(true, avatarSaveBtn, "Сохранить", "Сохранение");
  editAvatar(inputLinkAva.value)
    .then((data) => {
      ava.src = data.avatar;
      avatarForm.reset();
      closePopup(popupAvatar);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      renderLoading(false, avatarSaveBtn, "Сохранить", "Сохранение");
    });
}

//Сохранение аватара
avatarForm.addEventListener("submit", handleAvatarFormSubmit);

//Валидация форм
enableValidation(settings);
