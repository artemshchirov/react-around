import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import ImagePopup from "./ImagePopup";
import api from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function App() {
  const [isEditProfilePopupOpen, setIsEditProfileOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);

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

  function handleUpdateUser({ name, about }) {
    api
      .setUserInfo({ name, about })
      .then(() => {
        setCurrentUser({
          name,
          about,
          avatar: currentUser.avatar,
          _id: currentUser._id,
        });
        closeAllPopups();
      })
      .catch((err) =>
        console.log(`Ошибка при обновлении name, about пользователя: ${err}`)
      );
  }

  function handleUpdateAvatar({ avatar }) {
    api
      .setAvatar({ avatar })
      .then(() => {
        setCurrentUser({
          name: currentUser.name,
          about: currentUser.about,
          avatar,
          _id: currentUser._id,
        });
        closeAllPopups();
      })
      .catch((err) => {
        console.log(`Ошибка при обновлении аватара пользователя: ${err}`);
      });
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
    });
  }

  function handleCardDelete(card) {
    api
      .deleteItem(card._id)
      .then(setCards(cards.filter((c) => c._id !== card._id)))
      .catch((err) =>
        console.log(`Ошибка при удалении карточки пользователя: ${err}`)
      );
  }

  function handleAddPlaceSubmit(newCard) {
    api
      .addItem(newCard)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch((err) =>
        console.log(`Ошибка при создании новой карточки пользователя: ${err}`)
      );
  }

  React.useEffect(() => {
    api
      .getUserInfo()
      .then(({ name, about, avatar, _id }) => {
        setCurrentUser({ name, about, avatar, _id });
      })
      .catch((err) =>
        console.log(`Ошибка при загрузке данных пользователя: ${err}`)
      );
    api
      .getInitialCards()
      .then((initialCards) => setCards(initialCards))
      .catch((err) =>
        console.log(
          `Ошибка при загрузке данных пользователя и создании всех карточек: ${err}`
        )
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
            cards={cards}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />
          <Footer />

          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          />

          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
          />

          <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            onAddPlace={handleAddPlaceSubmit}
          />

          {selectedCard && (
            <ImagePopup card={selectedCard} onClose={closeAllPopups} />
          )}
        </CurrentUserContext.Provider>
      </div>
    </div>
  );
}
