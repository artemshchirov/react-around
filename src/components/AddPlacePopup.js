import { useEffect, useState } from 'react';
import PopupWithForm from './PopupWithForm';

export default function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  function handleChangeName(evt) {
    setName(evt.target.value);
  }

  function handleChangeLink(evt) {
    setLink(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onAddPlace({ name, link });
  }

  useEffect(() => {
    setName('');
    setLink('');
  }, [isOpen]);

  return (
    <PopupWithForm
      isOpen={isOpen}
      name="add-card"
      title="New place"
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText="Create"
      buttonActive={name && link}
    >
      <input
        className="form__input"
        name="name-card_input"
        id="name-card"
        type="text"
        placeholder="Name"
        minLength="2"
        maxLength="30"
        value={name}
        onChange={handleChangeName}
        required
      />
      <span id="name-card-error" className="form__input-error"></span>
      <input
        className="form__input"
        name="link-card_input"
        id="link-card"
        placeholder="Link to image"
        type="url"
        value={link}
        onChange={handleChangeLink}
        required
      />
      <span id="link-card-error" className="form__input-error"></span>
    </PopupWithForm>
  );
}
