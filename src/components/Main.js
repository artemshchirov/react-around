import React from "react";
import Card from "./Card";
import api from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function Main({
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  onCardClick,
}) {
  const currentUser = React.useContext(CurrentUserContext);
  const [cards, setCards] = React.useState([]);

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
    });
  }

  function handleCardDelete(card) {
    console.log("handleCardDelete: ", card);
    // запрос в api
    // обновить стейт cards с помощью метода filter: создайте копию массива, исключив из него удалённую карточку.
  }

  React.useEffect(() => {
    api
      .getInitialCards()
      .then((initialCards) => {
        setCards(initialCards);
      })
      .catch((err) =>
        console.log(
          `Ошибка при загрузке данных пользователя и создании всех карточек: ${err}`
        )
      );
  }, []);

  return (
    <main className="content page__content">
      <section className="profile section content__section">
        <div className="profile__avatar-container" onClick={onEditAvatar}>
          <img
            src={currentUser.avatar}
            alt="Изображение профиля пользователя"
            className="profile__avatar"
          />
        </div>
        <div className="profile__content">
          <div className="profile__name-btn-container">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button
              className="button button_profile_edit"
              type="button"
              onClick={onEditProfile}
            ></button>
          </div>
          <p className="profile__about">{currentUser.about}</p>
        </div>
        <button
          className="button button_profile_add"
          type="button"
          onClick={onAddPlace}
        ></button>
      </section>
      <section className="cards section content__section">
        {cards.map((card) => (
          <Card
            key={card._id}
            card={card}
            onCardClick={onCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />
        ))}
      </section>
    </main>
  );
}
