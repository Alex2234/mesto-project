const editPopup = document.getElementById("popup_info-edit");
const editPopupBtn = document.querySelector(".info__edit-button");
const closeButtons = document.querySelectorAll('.popup__button-close');
const nameInfo = document.querySelector(".info__title");
const jobInfo = document.querySelector(".info__subtitle");
const openPopupImage = document.getElementById("popup_image");
const popupupImageLink = document.querySelector(".popup__image");
const popupImageName = document.querySelector(".popup__title-image");
const elementsList = document.querySelector(".elements");
const infoForm = document.forms["form_info"];
const cardForm = document.forms["form_card"];
const nameInput = document.getElementById("input_name");
const jobInput = document.getElementById("input_job");
const addPopupBtn = document.querySelector(".profile__add-button");
const addPopup = document.getElementById("popup_add");
const inputNameCard = document.getElementById("name-card");
const inputImgCard = document.getElementById("img-card");
const editSaveBtn = document.getElementById("edit_save_btn");
const addSaveBtn = document.getElementById("add_save_btn");


function openPopup(popup) {
  popup.classList.add("popup_opened");
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}


closeButtons.forEach((button) => {
  // находим 1 раз ближайший к крестику попап
  const popup = button.closest('.popup');
  // устанавливаем обработчик закрытия на крестик
  button.addEventListener('click', () => closePopup(popup));
});



editPopupBtn.addEventListener("click", function () {
  openPopup(editPopup);
  nameInput.value = nameInfo.textContent;
  jobInput.value = jobInfo.textContent;
});



function handleInfoFormSubmit(evt) {
  evt.preventDefault();
  const nameI = nameInput.value;
  const jobI = jobInput.value;

  nameInfo.textContent = nameI;
  jobInfo.textContent = jobI;
}

infoForm.addEventListener("submit", handleInfoFormSubmit);



editSaveBtn.addEventListener("click", function () {
  closePopup(editPopup);
});

const initialCards = [
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

function createCard(link, name) {
  const elementTemplate = document.querySelector("#card").content;
  const elementCard = elementTemplate.querySelector(".element").cloneNode(true);
  const cardFoto = elementCard.querySelector(".element__foto");
  const cardTitle = elementCard.querySelector(".element__title");
  cardFoto.src = link;
  cardFoto.alt = name;
  cardTitle.textContent = name;
  elementCard
    .querySelector(".element__like")
    .addEventListener("click", function (evt) {
      evt.target.classList.toggle("element__like_active");
    });

  cardFoto.addEventListener("click", function () {
    openPopup(openPopupImage);
    popupupImageLink.src = link;
    popupupImageLink.alt = name;
    popupImageName.textContent = name;
  });

  elementCard
    .querySelector(".element__delete")
    .addEventListener("click", function (evt) {
      elementCard.remove();
    });

  return elementCard;
}

initialCards.forEach(function (item) {
  elementsList.append(createCard(item.link, item.name));
});


addPopupBtn.addEventListener("click", function () {
  openPopup(addPopup);
});


function handleCardFormSubmit(evt) {
  evt.preventDefault();
  elementsList.prepend(createCard(inputImgCard.value, inputNameCard.value));
  evt.target.reset();
}

cardForm.addEventListener("submit", handleCardFormSubmit);

addSaveBtn.addEventListener("click", function () {
  closePopup(addPopup);
});
