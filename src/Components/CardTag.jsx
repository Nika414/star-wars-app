export default function CardTag({ info, color }) {
  return (
    <div className="card__card-tag" style={{ backgroundColor: `${color}` }}>
      {info}
    </div>
  );
}
