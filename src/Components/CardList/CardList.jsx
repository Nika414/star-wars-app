/* eslint-disable import/no-extraneous-dependencies */
import { useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';

import Card from '../Card/Card';

export default function CardList({ onCardClick }) {
  const cards = useSelector((state) => state.cards.cards);
  return (
    <ul className="card-list">
      {cards.map((card) => (<Card card={card} key={uuid()} onClick={onCardClick} />))}
    </ul>
  );
}
