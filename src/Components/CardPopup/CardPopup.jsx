/* eslint-disable import/no-extraneous-dependencies */
import { v4 as uuid } from 'uuid';
import CardTag from '../CardTag';
import male from '../../images/male.svg';
import female from '../../images/female.svg';
import hermaphrodite from '../../images/hermaphrodite.svg';
import CardInfo from '../CardInfo';

export default function CardPopup({ card, isPopupOpen, onClose }) {
  function renderImage() {
    if (card.gender === 'male') {
      return male;
    }
    if (card.gender === 'female') {
      return female;
    }
    return hermaphrodite;
  }

  return (
    <div className={`card-popup ${isPopupOpen ? 'card__popup_opened' : ''}`}>
      <div className="card-popup__container">
        <button className="card-popup__close-button" onClick={onClose} type="button" aria-label="Закрыть" />
        <div className="card-popup__image-block">
          <img className="card-popup__image" src={renderImage()} alt="icon" />
          <div className="card-popup__tags-container">
            {card.tags.map((tag) => <CardTag key={uuid()} info={tag.info} color={tag.color} />)}
          </div>
        </div>
        <div className="card-popup__info-block">
          <h2 className="card-popup__title">{card.name}</h2>
          <ul className="card-popup__additional-info">
            {card.hair_color && card.hair_color !== 'n/a' && (
            <li className="card-popup__additional-info-item">
              Hair color:
              {' '}
              {card.hair_color}
            </li>
            ) }
            {card.skin_color && card.skin_color !== 'n/a' && (
            <li className="card-popup__additional-info-item">
              Skin color:
              {' '}
              {card.skin_color}
            </li>
            ) }
            {card.eye_color && card.eye_color !== 'n/a' && (
            <li className="card-popup__additional-info-item">
              Eye color:
              {' '}
              {card.eye_color}
            </li>
            ) }
          </ul>
          <div className="card-popup__info-container">
            <CardInfo name="height" value={card.height} popup />
            <CardInfo name="mass" value={card.mass} popup />
          </div>
        </div>
      </div>
    </div>
  );
}
