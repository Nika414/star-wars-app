/* eslint-disable consistent-return */
import CardTag from '../CardTag';

export default function Card({ card }) {
  function renderTags() {
    const tags = [];
    if (card.gender && card.gender !== 'n/a') {
      let color;
      switch (card.gender) {
        case 'male':
          color = '#73D677';
          break;
        case 'female':
          color = '#C956FF';
          break;
        case 'hermaphrodite':
          color = '#F5DB13';
          break;
        default:
          return color;
      }
      tags.push(<CardTag info={card.gender} color={color} />);
    } if (card.birth_year && card.birth_year !== 'unknown') {
      tags.push(<CardTag info={card.birth_year} color="#07D6F2" />);
    }
    return tags;
  }
  return (
    <li className="card">
      <h3 className="card__title">{card.name}</h3>
      <div className="card__info-container">
        <div className={`card__info-item ${card.height !== 'unknown' ? '' : 'card__info-item_hidden'}`}>
          <div className="card__info-value">{card.height}</div>
          <span className="card__info-name"> height </span>
        </div>
        <div className={`card__info-item ${card.mass !== 'unknown' ? '' : 'card__info-item_hidden'}`}>
          <div className="card__info-value">{card.mass}</div>
          <span className="card__info-name"> mass </span>
        </div>
      </div>
      <div className="card__tags-container">
        {renderTags()}
      </div>
    </li>
  );
}
