import React from 'react';
import Card from './Card';
import api from '../utils/api';

export default function Main({
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  onCardClick,
}) {

  const [userName, setUserName] = React.useState("");
  const [userDesciption, setUserDesciption] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([{ name, description, avatar }, initialCards]) => {
        setUserName(name);
        setUserDesciption(description)
        setUserAvatar(avatar)
        setCards(initialCards);
      })
      .catch(err => console.log(`Ошибка при загрузке данных пользователя и создании всех карточек: ${err}`));
  }, [])

  return (
    <main className="content page__content">
      <section className="profile section content__section">
        <div className="profile__avatar-container" onClick={onEditAvatar}>
          <img src={userAvatar} alt="Изображение профиля пользователя" className="profile__avatar" />
        </div>
        <div className="profile__content">
          <div className="profile__name-btn-container">
            <h1 className="profile__name">{userName}</h1>
            <button className="button button_profile_edit" type="button" onClick={onEditProfile}></button>
          </div>
          <p className="profile__about">{userDesciption}</p>
        </div>
        <button className="button button_profile_add" type="button" onClick={onAddPlace}></button>
      </section>
      <section className="cards section content__section">
        {cards.map(card => (
          <Card key={card.id}
            card={card}
            onCardClick={onCardClick}
          />
        ))}
      </section>
    </main>
  );
}