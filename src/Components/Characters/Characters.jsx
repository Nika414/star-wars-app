/* eslint-disable no-unused-vars */
/* eslint-disable no-debugger */
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CardList from '../CardList/CardList';
import { getCards } from '../../store/cardsSlice';
import CardPopup from '../CardPopup/CardPopup';
import ShowMoreButton from '../ShowMoreButton/ShowMoreButton';
import Preloader from '../Preloader/Preloader';
import Filter from '../Filter/Filter';

export default function Characters() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(undefined);
  const dispatch = useDispatch();
  const cardsCount = useSelector((state) => state.cards.cardsCount);
  const cards = useSelector((state) => state.cards.cards);
  const isLoaded = useSelector((state) => state.cards.loader.cardsLoader);

  useEffect(() => {
    dispatch(getCards(false));
  }, []);

  function handlePopupOpen(card) {
    setIsPopupOpen(true);
    setSelectedCard(card);
  }

  function handlePopupClose() {
    setIsPopupOpen(false);
    setSelectedCard(undefined);
  }

  function renderCardList() {
    if (!isLoaded) {
      return <Preloader />;
    }
    if (isLoaded && cards.length === 0) {
      return (<span className="characters__span">Oops! Server error. Try to reload the page</span>);
    }
    return <CardList onCardClick={handlePopupOpen} />;
  }

  return (
    <section className="characters">
      <h2 className="characters__title">
        {cardsCount}
        <span className="characters__title-accent"> Peoples</span>
        {' '}
        for you to choose your favorite
      </h2>
      <Filter />
      {renderCardList()}
      {cards.length < cardsCount && <ShowMoreButton />}
      {selectedCard && (<CardPopup card={selectedCard} isPopupOpen={isPopupOpen} onClose={handlePopupClose} />) }
    </section>
  );
}
