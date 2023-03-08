import { config } from "./constans.js";

//Функция проверки
function checkResponse(res) {
  return res.ok ? res.json() : Promise.reject("Ошибка на строне сервера");
}

//Функция запроса информации о юзере с сервера
export function getInfoProfile() {
  return fetch(`${config.url}/users/me`, {
    headers: config.headers,
  }).then(checkResponse);
}

//Функция запроса карточек с сервера
export function getCards() {
  return fetch(`${config.url}/cards`, {
    headers: config.headers,
  }).then(checkResponse);
}

//Функция редактирования профиля
export function updateProfile(name, job, id) {
  return fetch(`${config.url}/users/me`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      name: name,
      about: job,
      _id: id,
    }),
  }).then(checkResponse);
}

//Функция добавления новой карточки
export function addCard(name, link) {
  return fetch(`${config.url}/cards`, {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify({
      name: name,
      link: link,
    }),
  }).then(checkResponse);
}

//Функция удаления карточки
export function deleteCard(idcard) {
  return fetch(`${config.url}/cards/${idcard}`, {
    method: "DELETE",
    headers: config.headers,
  }).then(checkResponse);
}

//Функция постановки лайка
export function putLike(idcard) {
  return fetch(`${config.url}/cards/likes/${idcard}`, {
    method: "PUT",
    headers: config.headers,
  }).then(checkResponse);
}

//Функция удаления лайка
export function deleteLike(idcard) {
  return fetch(`${config.url}/cards/likes/${idcard}`, {
    method: "DELETE",
    headers: config.headers,
  }).then(checkResponse);
}

//Функция изменения аватара
export function editAvatar(ava) {
  return fetch(`${config.url}/users/me/avatar`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      avatar: ava,
    }),
  }).then(checkResponse);
}
