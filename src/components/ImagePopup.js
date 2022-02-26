export default function ImagePopup(props) {
  return (
    <div className="popup popup_card-fullscreen">
      <div className="popup__overlay"></div>
      <figure className="popup__figure">
        <button className="button button_popup_close"></button>
        <img src="#" alt="" className="popup__image" />
        <figcaption className="popup__image-title"></figcaption>
      </figure>
    </div>
  )
}