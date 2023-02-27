//Закрытие при нажатии на Esc
function closeEsc(evt) {
  if (evt.key === "Escape") {
    const esc = document.querySelector(".popup_opened");
    closePopup(esc);
  }
}

//функция открытия Popup
function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener('keydown', closeEsc);
}


//функция закрытия Popup
function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener('keydown', closeEsc);
}


export {openPopup, closePopup}