import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCards } from '../../store/cardsSlice';
import Card from '../Card/Card';
import ShowMoreButton from '../ShowMoreButton/ShowMoreButton';

export default function CardList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCards(false));
  }, []);

  const cards = useSelector((state) => state.cards.cards);
  const cardsCount = useSelector((state) => state.cards.cardsCount);

  return (
    <section className="card-list">
      <h2 className="card-list__title">
        {cardsCount}
        <span className="card-list__title card-list__title_type_accent"> Peoples</span>
        {' '}
        for you to choose your favorite
      </h2>
      <ul className="card-list__list">
        {cards.map((card) => (<Card card={card} />))}
      </ul>
      <ShowMoreButton />
    </section>
  );
}
