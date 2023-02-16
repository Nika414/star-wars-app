import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCards } from '../../store/cardsSlice';
import Card from '../Card/Card';

export default function CardList({ onCardClick }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCards(false));
  }, []);

  const cards = useSelector((state) => state.cards.cards);

  return (
    <ul className="card-list">
      {cards.map((card) => (<Card card={card} onClick={onCardClick} />))}
    </ul>
  );
}
