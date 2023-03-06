import { openPopup } from "./modal.js";
import { deleteCard, putLike, deleteLike } from "./api.js";
import {
  openPopupImage,
  popupImageName,
  popupupImageLink,
} from "./constans.js";

//Функция создания карточек
function createCard(card, myid) {
  const elementTemplate = document.querySelector("#card").content;
  const elementCard = elementTemplate.querySelector(".element").cloneNode(true);
  const cardFoto = elementCard.querySelector(".element__foto");
  const cardTitle = elementCard.querySelector(".element__title");
  const like = elementCard.querySelector(".element__like");
  const likeCount = elementCard.querySelector(".element__counter-like");

  cardFoto.src = card.link;
  cardFoto.alt = card.name;
  cardTitle.textContent = card.name;
  likeCount.textContent = card.likes.length;

  cardFoto.addEventListener("click", function () {
    openPopup(openPopupImage);
    popupupImageLink.src = card.link;
    popupupImageLink.alt = card.name;
    popupImageName.textContent = card.name;
  });

  elementCard
    .querySelector(".element__delete")
    .addEventListener("click", function (evt) {
      deleteCard(card._id)
        .then(() => {
          elementCard.remove();
        })
        .catch((err) => {
          console.log(err);
        });
    });

  like.addEventListener("click", function () {
    if (!like.classList.contains("element__like_active")) {
      putLike(card._id)
        .then((data) => {
          like.classList.add("element__like_active");
          likeCount.textContent = data.likes.length;
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      deleteLike(card._id)
        .then((data) => {
          like.classList.remove("element__like_active");
          likeCount.textContent = data.likes.length;
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });

  card.likes.forEach((item) => {
    if (myid === item._id) {
      like.classList.add("element__like_active");
    }
  });

  if (myid !== card.owner._id) {
    elementCard
      .querySelector(".element__delete")
      .classList.add("element__delete_inactive");
  }

  return elementCard;
}

export { createCard };
