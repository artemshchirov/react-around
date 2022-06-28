import React from "react";
import PopupWithForm from "./PopupWithForm";

export default function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatarRef = React.useRef();

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
    avatarRef.current.value = "";
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      name="edit-avatar"
      title="Обновить аватар"
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText="Сохранить"
    >
      <input
        className="form__input"
        name="link-avatar_input"
        id="link-avatar"
        placeholder="Ссылка на картинку"
        type="url"
        ref={avatarRef}
        required
      />
      <span id="link-avatar-error" className="form__input-error"></span>
    </PopupWithForm>
  );
}
