import PopupWithForm from './PopupWithForm';

export default function SubmitPopup({ isOpen, onClose, onSubmitDelete, card }) {
  function handleSubmit(evt) {
    evt.preventDefault();
    onSubmitDelete(card);
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      name="card-delete"
      title="Are you sure?"
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText="Yes"
      buttonActive={true}
    ></PopupWithForm>
  );
}
