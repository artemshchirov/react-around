export default function PopupWithForm(props) {
  return (
    <>

      <div className={`popup popup_${props.name}`}>
        <div className="popup__overlay"></div>
        <div className="popup__container">
          <button className="button button_popup_close" type="button"></button>
          <form className="form" name={props.name} noValidate>
            <fieldset className="form__container">
              <legend className="form__title">
                {props.title}
              </legend>
              <input className="form__input" name="name-edit_input" id="name-edit" type="text" placeholder="Имя" minLength="2"
                maxLength="40" required />
              <span id="name-edit-error" className="form__input-error"></span>
              <input className="form__input" name="about-edit_input" id="about-edit" type="text" placeholder="Профессия"
                minLength="2" maxLength="200" required />
              <span id="about-edit-error" className="form__input-error"></span>
              <button className="button button_form_submit button_submit-edit-profile" type="submit">
                Сохранить
              </button>
            </fieldset>
          </form>
        </div>
      </div>

    </>

    /* <div className="popup popup_profile-edit">
      <div className="popup__overlay"></div>
      <div className="popup__container">
        <button className="button button_popup_close" type="button"></button>
        <form className="form" name="profile-edit_form" noValidate>
          <fieldset className="form__container">
            <legend className="form__title">
              Редактировать профиль
            </legend>
            <input className="form__input" name="name-edit_input" id="name-edit" type="text" placeholder="Имя" minLength="2"
              maxLength="40" required />
            <span id="name-edit-error" className="form__input-error"></span>
            <input className="form__input" name="about-edit_input" id="about-edit" type="text" placeholder="Профессия"
              minLength="2" maxLength="200" required />
            <span id="about-edit-error" className="form__input-error"></span>
            <button className="button button_form_submit button_submit-edit-profile" type="submit">
              Сохранить
            </button>
          </fieldset>
        </form>
      </div>
    </div>

    <div className="popup popup_card-add">
      <div className="popup__overlay"></div>
      <div className="popup__container">
        <button className="button button_popup_close" type="button"></button>
        <form className="form" name="add-card_form" noValidate>
          <fieldset className="form__container">
            <legend className="form__title">
              Новое место
            </legend>
            <input className="form__input" name="name-card_input" id="name-card" type="text" placeholder="Название"
              minLength="2" maxLength="30" required />
            <span id="name-card-error" className="form__input-error"></span>
            <input className="form__input" name="link-card_input" id="link-card" placeholder="Ссылка на картинку" type="url"
              required />
            <span id="link-card-error" className="form__input-error"></span>
            <button className="button button_form_submit button_submit-add-card" type="submit">
              Создать
            </button>
          </fieldset>
        </form>
      </div>
    </div>

    <div className="popup popup_card-delete-confirm">
      <div className="popup__overlay"></div>
      <div className="popup__container">
        <button className="button button_popup_close" type="button"></button>
        <form className="form">
          <p className="form__title">
            Вы уверены?
          </p>
          <button className="button button_form_submit button_form_submit-delete-card" type="submit">
            Да
          </button>
        </form>
      </div>
    </div>

    <div className="popup popup_edit-avatar">
      <div className="popup__overlay"></div>
      <div className="popup__container">
        <button className="button button_popup_close" type="button"></button>
        <form className="form" name="edit-avatar_form" noValidate>
          <fieldset className="form__container">
            <legend className="form__title">
              Обновить аватар
            </legend>
            <input className="form__input" name="link-avatar_input" id="link-avatar" placeholder="Ссылка на картинку"
              type="url" required />
            <span id="link-avatar-error" className="form__input-error"></span>
            <button className="button button_form_submit button_submit-change-avatar" type="submit">
              Сохранить
            </button>
          </fieldset>
        </form>
      </div>
    </div> */

  )
}