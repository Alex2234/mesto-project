import { openPopup } from "./modal.js";
import { openPopupImage, popupImageName, popupupImageLink } from "./constans.js";

//Функция создания карточек
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

export {createCard}