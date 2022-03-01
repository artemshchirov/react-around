import React from "react";

export default function Card({ card }) {
  return (
    <article key={card.id} className="card">
      <img src={card.link} alt={card.name} className="card__image" />
      <button className="button button_card_delete"></button>
      <div className="card__title-like-container">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__like-count-container">
          <button className="button button_like" type=" button"></button>
          <p className="card__like-count">{card.likes.length}</p>
        </div>
      </div>
    </article>
  );
} 