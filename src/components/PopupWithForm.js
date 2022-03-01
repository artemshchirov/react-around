import React from 'react';

export default function PopupWithForm(props) {
  return (
    <>

      <div className={`popup popup_${props.name} ${props.isOpen ? "popup_opened" : ""}`}>
        <div className="popup__overlay"></div>
        <div className="popup__container">
          <button className="button button_popup_close" type="button" onClick={props.onClose}></button>
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
  )
}