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
  saveBtn,
  settings,
} from "./components/constans.js";

import { openPopup, closePopup } from "./components/modal.js";
import { createCard } from "./components/card.js";
import { enableValidation } from "./components/validate.js";
import {
  infoProfile,
  cardsAdd,
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
});

//Загрузка информации о юзере с сервера
infoProfile()
  .then((data) => {
    nameInfo.textContent = data.name;
    jobInfo.textContent = data.about;
    ava.src = data.avatar;
    myId.id = data._id;
  })
  .catch((err) => {
    console.log(err);
  });

//Загрузка карточек с сервера
cardsAdd()
  .then((data) => {
    data.forEach((item) => {
      elementsList.append(createCard(item, myId.id));
    });
  })
  .catch((err) => {
    console.log(err);
  });

//Функция демонстрации процесса загрузки
function renderLoading(isLoading, textTrue, textFalse) {
  if (isLoading) {
    saveBtn.textContent = textTrue;
  } else {
    saveBtn.textContent = textFalse;
  }
}

//Функция обработчика формы с данными профиля
function handleInfoFormSubmit(evt) {
  evt.preventDefault();
  const nameI = nameInput.value;
  const jobI = jobInput.value;
  renderLoading(true, "Сохранение...", "Сохранить");
  updateProfile(nameI, jobI, myId)
    .then((data) => {
      nameInfo.textContent = data.name;
      jobInfo.textContent = data.about;
      myId.id = data._id;
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      renderLoading(false, "Сохранение...", "Сохранить");
    });
  closePopup(editPopup);
}

//Сохранение данных профиля
infoForm.addEventListener("submit", handleInfoFormSubmit);

//Открытие попапа добавления карточек
addPopupBtn.addEventListener("click", function () {
  openPopup(addPopup);
});

//Функция обработчика формы с карточками
function handleCardFormSubmit(evt) {
  evt.preventDefault();
  renderLoading(true, "Создание...", "Создать");
  addCard(inputNameCard.value, inputImgCard.value)
    .then((data) => {
      elementsList.prepend(createCard(data));
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      renderLoading(false, "Создание...", "Создать");
    });
  closePopup(addPopup);
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
  renderLoading(true, "Сохранение...", "Сохранить");
  editAvatar(inputLinkAva.value)
    .then((data) => {
      ava.src = data.avatar;
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      renderLoading(false, "Сохранение...", "Сохранить");
    });
  closePopup(popupAvatar);
}

//Сохранение аватара
avatarForm.addEventListener("submit", handleAvatarFormSubmit);

//Валидация форм
enableValidation(settings);
