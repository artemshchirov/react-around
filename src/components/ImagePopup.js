export default function ImagePopup({card, onClose}) {
  console.log('card: ', card);
  
  return (
    <div className={`popup popup_card-fullscreen ${card ? "popup_opened" : ""}`}>
      <div className="popup__overlay"></div>
      <figure className="popup__figure">
        <button className="button button_popup_close" onClick={onClose}></button>
        <img src={card.link} alt="" className="popup__image" />
        <figcaption className="popup__image-title">{card.name}</figcaption>
      </figure>
    </div>
  )
}