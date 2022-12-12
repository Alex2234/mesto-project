const openPopupEdit=document.getElementById('popup_info-edit');
const btnOpenPopupEdit=document.querySelector('.info__edit-button');
let btnClose=document.querySelector('.popup__button-close');
let nameInfo=document.querySelector('.info__title');
let jobInfo=document.querySelector('.info__subtitle');
const openPopupImage=document.getElementById('popup_image');
const popupupImageLink=document.querySelector('.popup__image');
const popupImageName=document.querySelector('.popup__title-image');
const elementsList=document.querySelector('.elements');

function openPopup(i) {
  i.classList.add('popup_opened')
}

function closePopup(i) {
  i.classList.remove('popup_opened')
}

btnOpenPopupEdit.addEventListener('click', function() {
  openPopup(openPopupEdit);
  document.getElementById('input_name').value=nameInfo.textContent;
  document.getElementById('input_job').value=jobInfo.textContent;
});

btnClose.addEventListener('click', function() {
  closePopup(openPopupEdit);
});



// Находим форму в DOM
const formElement=document.getElementById('form_info');
// Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
const nameInput=document.getElementById('input_name');
// Воспользуйтесь инструментом .querySelector()
const jobInput=document.getElementById('input_job');
// Воспользуйтесь инструментом .querySelector()
// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
  evt.preventDefault();
// Эта строчка отменяет стандартную отправку формы.
// Так мы можем определить свою логику отправки.
// О том, как это делать, расскажем позже.
// Получите значение полей jobInput и nameInput из свойства value
let nameI=nameInput.value;
let jobI=jobInput.value;

// Выберите элементы, куда должны быть вставлены значения полей
// Вставьте новые значения с помощью textContent
nameInfo.textContent=nameI;
jobInfo.textContent=jobI;

openPopupEdit.classList.remove('popup_opened');
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);



//добавление карточек
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
  ];



function createCard(link, name) {
  const elementTemplate=document.querySelector('#card').content;
  const elementCard=elementTemplate.querySelector('.element').cloneNode(true);
  elementCard.querySelector('.element__foto').src=link;
  elementCard.querySelector('.element__foto').alt=name;
  elementCard.querySelector('.element__title').textContent=name;
  elementCard.querySelector('.element__like').addEventListener('click', function(evt) {
    evt.target.classList.toggle('element__like_active');
  });
  elementCard.querySelector('.element__delete').addEventListener('click', function(evt) {
    const deleteElement=elementCard.querySelector('.element__delete').closest('.element');
      deleteElement.remove();
  });
  elementCard.querySelector('.element__foto').addEventListener('click', function() {
    openPopup(openPopupImage);
    popupupImageLink.src=elementCard.querySelector('.element__foto').src;
    popupupImageLink.alt=elementCard.querySelector('.element__title').alt;
    popupImageName.textContent=elementCard.querySelector('.element__title').textContent;
  });

  return elementCard;
};


  initialCards.forEach(function(item) {
    elementsList.append(createCard(item.link, item.name));
  });

const btnCloseImage=document.getElementById('btn_close-image');

btnCloseImage.addEventListener('click', function() {
  closePopup(openPopupImage);
});
//кнопка добавления карточки
const btnOpenPopupAdd=document.querySelector('.profile__add-button');
const openPopupAdd=document.getElementById('popup_add');
const btnCloseAdd=document.getElementById('btn_close-add');

btnOpenPopupAdd.addEventListener('click', function() {
  openPopup(openPopupAdd);
});

btnCloseAdd.addEventListener('click', function() {
  closePopup(openPopupAdd);
});

const formCard=document.getElementById('form_card');
const inputNameCard=document.getElementById('name-card');
const inputImgCard=document.getElementById('img-card');


function formSubmitHandlerCard (evt) {
  evt.preventDefault();
elementsList.prepend(createCard(inputImgCard.value, inputNameCard.value));
};

formCard.addEventListener('submit', formSubmitHandlerCard);




