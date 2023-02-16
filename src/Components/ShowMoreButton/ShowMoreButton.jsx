import { useDispatch, useSelector } from 'react-redux';
import { getCards } from '../../store/cardsSlice';

export default function ShowMoreButton() {
  const dispatch = useDispatch();
  const isLoaded = useSelector((state) => state.cards.loader.nextPageLoader);

  function handleMoreCards() {
    dispatch(getCards(true));
  }

  return (
    <div className="show-more-button">
      <button onClick={handleMoreCards} type="button" className="show-more-button__button">
        {isLoaded === false ? 'Loading...' : 'Show more'}
      </button>
    </div>
  );
}
