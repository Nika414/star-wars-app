export default function CardInfo({ name, value, popup }) {
  return (
    <div className={`card__info-item ${value !== 'unknown' ? '' : 'card__info-item_hidden'} ${popup && 'card__info-item_place_popup'}`}>
      <div className="card__info-value">{value}</div>
      <span className="card__info-name">{name}</span>
    </div>
  );
}
