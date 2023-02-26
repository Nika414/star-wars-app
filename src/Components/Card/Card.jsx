import { v4 as uuid } from 'uuid';
import CardTag from '../CardTag';
import CardInfo from '../CardInfo';

export default function Card({ card, onClick }) {
  function handleClick() {
    onClick(card);
  }

  return (
    <div onClick={handleClick} className="card" role="presentation">
      <h3 className="card__title">{card.name}</h3>
      <div className="card__info-container">
        <CardInfo name="height" value={card.height} />
        <CardInfo name="mass" value={card.mass} />
      </div>
      <div className="card__tags-container">
        {card.tags.map((tag) => <CardTag key={uuid()} info={tag.info} color={tag.color} />)}
      </div>
    </div>
  );
}
