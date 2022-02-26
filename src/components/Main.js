import avatar from '../images/avatar.jpg';

function handleEditAvatarClick() {
  const buttonEditAvatar = document.querySelector('.popup_edit-avatar');
  buttonEditAvatar.classList.add('popup_opened');
}

function handleEditProfileClick() {
  const buttonEditProfile = document.querySelector('.popup_profile-edit');
  buttonEditProfile.classList.add('popup_opened');
}

function handleAddCardClick() {
  const buttonAddCard = document.querySelector('.popup_card-add');
  buttonAddCard.classList.add('popup_opened');
}

export default function Main() {
  return (
    <main className="content page__content">
      <section className="profile section content__section">
        <div className="profile__avatar-container" onClick={handleEditAvatarClick}>
          <img src={avatar} alt="Изображение профиля пользователя" className="profile__avatar" />
        </div>
        <div className="profile__content">
          <div className="profile__name-btn-container">
            <h1 className="profile__name">Жак-Ив Кусто</h1>
            <button className="button button_profile_edit" type="button" onClick={handleEditProfileClick}></button>
          </div>
          <p className="profile__about">Исследователь океана</p>
        </div>
        <button className="button button_profile_add" type="button" onClick={handleAddCardClick}></button>
      </section>
      <section className="cards section content__section">
        <template id="card">
          <article className="card">
            <img src="#" alt="" className="card__image" />
            <button className="button button_card_delete"></button>
            <div className="card__title-like-container">
              <h2 className="card__title"></h2>
              <div className="card__like-count-container">
                <button className="button button_like" type=" button"></button>
                <p className="card__like-count">0</p>
              </div>
            </div>
          </article>
        </template>
      </section>
    </main>

  );
}