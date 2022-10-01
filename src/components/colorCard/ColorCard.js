function ColorCard({ color }) {
  return (
    <li className="card" style={{ backgroundColor: `${color}` }}>
      <input className="card__input" type="color" defaultValue={color} />
      <p
        className="card__text"
        onClick={() => navigator.clipboard.writeText(color)}
      >
        {color}
      </p>
    </li>
  );
}

export default ColorCard;
