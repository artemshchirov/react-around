export default function ImagePopup({ card, onClose }) {
  return (
    <div className="popup popup_card-fullscreen popup_opened">
      <div className="popup__overlay" onClick={onClose}></div>
      <figure className="popup__figure">
        <button
          className="button button_popup_close"
          onClick={onClose}
        ></button>
        <img src={card.link} alt={card.name} className="popup__image" />
        <figcaption className="popup__image-title">{card.name}</figcaption>
      </figure>
    </div>
  );
}
