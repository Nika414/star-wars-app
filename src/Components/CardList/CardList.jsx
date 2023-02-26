import { useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';

import Card from '../Card/Card';

export default function CardList({ onCardClick }) {
  const cards = useSelector((state) => state.cards.cards);
  const filterColors = useSelector((state) => state.filter.colors);

  function filterCards() {
    if (filterColors.length === 0) {
      return cards;
    } return cards.filter((card) => filterColors.includes(card.eye_color));
  }

  return (
    <div className="card-list">
      {filterCards().map((card) => (<Card card={card} key={uuid()} onClick={onCardClick} />))}
    </div>
  );
}
