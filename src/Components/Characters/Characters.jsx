import { useState } from 'react';
import { useSelector } from 'react-redux';
import CardList from '../CardList/CardList';
import CardPopup from '../CardPopup/CardPopup';
import ShowMoreButton from '../ShowMoreButton/ShowMoreButton';

export default function Characters() {
  const cardsCount = useSelector((state) => state.cards.cardsCount);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(undefined);

  function handlePopupOpen(card) {
    setIsPopupOpen(true);
    setSelectedCard(card);
  }

  function handlePopupClose() {
    setIsPopupOpen(false);
    setSelectedCard(undefined);
  }

  return (
    <section className="characters">
      <h2 className="characters__title">
        {cardsCount}
        <span className="characters__title characters__title_type_accent"> Peoples</span>
        {' '}
        for you to choose your favorite
      </h2>
      <CardList onCardClick={handlePopupOpen} />
      <ShowMoreButton />
      {selectedCard && (<CardPopup card={selectedCard} isPopupOpen={isPopupOpen} onClose={handlePopupClose} />) }
    </section>
  );
}
