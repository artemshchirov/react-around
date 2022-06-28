import React from "react";
import PopupWithForm from "./PopupWithForm";
// import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function EditAvatarPopup({isEditAvatarPopupOpen, closeAllPopups}) {
  return (
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
  );
}
