import React from "react";
import PopupWithForm from "./PopupWithForm";

export default function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [name, setName] = React.useState("");
  const [link, setLink] = React.useState("");

  function handleChangeName(evt) {
    setName(evt.target.value);
  }

  function handleChangeLink(evt) {
    setLink(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onAddPlace({ name, link });
    evt.target.reset();
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      name="card-add"
      title="Новое место"
      onClose={onClose}
      onSubmit={handleSubmit}
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
        onChange={handleChangeName}
        required
      />
      <span id="name-card-error" className="form__input-error"></span>
      <input
        className="form__input"
        name="link-card_input"
        id="link-card"
        placeholder="Ссылка на картинку"
        type="url"
        onChange={handleChangeLink}
        required
      />
      <span id="link-card-error" className="form__input-error"></span>
    </PopupWithForm>
  );
}
