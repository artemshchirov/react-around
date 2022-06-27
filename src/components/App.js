import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import api from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function App() {
  const [isProfilePopupOpen, setIsEditProfileOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState({});

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfileOpen(true);
  }

  function handleAddCardClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfileOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  React.useEffect(() => {
    api
      .getUserInfo()
      .then(({ name, about, avatar }) => {
        setCurrentUser({ name, about, avatar });
      })
      .catch((err) =>
        console.log(`Ошибка при загрузке данных пользователя: ${err}`)
      );
  }, []);

  return (
    <div className="page">
      <div className="page__container">
        <CurrentUserContext.Provider value={currentUser}>
          <Header />
          <Main
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddCardClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick}
          />
          <Footer />

          <PopupWithForm
            isOpen={isProfilePopupOpen}
            name="profile-edit"
            title="Редактировать профиль"
            onClose={closeAllPopups}
            buttonText="Сохранить"
          >
            <input
              className="form__input"
              name="name-edit_input"
              id="name-edit"
              type="text"
              placeholder="Имя"
              minLength="2"
              maxLength="40"
              required
            />
            <span id="name-edit-error" className="form__input-error"></span>
            <input
              className="form__input"
              name="about-edit_input"
              id="about-edit"
              type="text"
              placeholder="Профессия"
              minLength="2"
              maxLength="200"
              required
            />
            <span id="about-edit-error" className="form__input-error"></span>
          </PopupWithForm>

          <PopupWithForm
            isOpen={isAddPlacePopupOpen}
            name="card-add"
            title="Новое место"
            onClose={closeAllPopups}
            buttonText="Создать"
          >
            <input
              className="form__input"
              name="name-card_input"
              id="name-card"
              type="text"
              placeholder="Название"
              minLength="2"
              maxLength="30"
              required
            />
            <span id="name-card-error" className="form__input-error"></span>
            <input
              className="form__input"
              name="link-card_input"
              id="link-card"
              placeholder="Ссылка на картинку"
              type="url"
              required
            />
            <span id="link-card-error" className="form__input-error"></span>
          </PopupWithForm>

          <PopupWithForm
            isOpen={isEditAvatarPopupOpen}
            name="edit-avatar"
            title="Обновить аватар"
            onClose={closeAllPopups}
            buttonText="Сохранить"
          >
            <input
              className="form__input"
              name="link-avatar_input"
              id="link-avatar"
              placeholder="Ссылка на картинку"
              type="url"
              required
            />
            <span id="link-avatar-error" className="form__input-error"></span>
          </PopupWithForm>

          {selectedCard && (
            <ImagePopup card={selectedCard} onClose={closeAllPopups} />
          )}
        </CurrentUserContext.Provider>
      </div>
    </div>
  );
}
