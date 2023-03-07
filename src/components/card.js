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
  const likeBtn = elementCard.querySelector(".element__like");
  const likeCount = elementCard.querySelector(".element__counter-like");
  const deleteBtn = elementCard.querySelector(".element__delete");

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

     deleteBtn.addEventListener("click", function (evt) {
      deleteCard(card._id)
        .then(() => {
          elementCard.remove();
        })
        .catch((err) => {
          console.log(err);
        });
    });

  likeBtn.addEventListener("click", function () {
    if (!likeBtn.classList.contains("element__like_active")) {
      putLike(card._id)
        .then((data) => {
          likeBtn.classList.add("element__like_active");
          likeCount.textContent = data.likes.length;
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      deleteLike(card._id)
        .then((data) => {
          likeBtn.classList.remove("element__like_active");
          likeCount.textContent = data.likes.length;
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });

  card.likes.forEach((item) => {
    if (myid === item._id) {
      likeBtn.classList.add("element__like_active");
    }
  });

  if (myid === card.owner._id) {
    deleteBtn.classList.add("element__delete_active");
  }

  return elementCard;
}

export { createCard };
