import { useEffect, useState, useContext } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  function handleChangeName(evt) {
    setName(evt.target.value);
  }

  function handleChangeDescription(evt) {
    setDescription(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateUser({
      name,
      about: description,
    });
  }

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  return (
    <PopupWithForm
      isOpen={isOpen}
      name="profile-edit"
      title="Редактировать профиль"
      onClose={onClose}
      onSubmit={handleSubmit}
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
        value={name || ""}
        onChange={handleChangeName}
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
        value={description || ""}
        onChange={handleChangeDescription}
        required
      />
      <span id="about-edit-error" className="form__input-error"></span>
    </PopupWithForm>
  );
}
