import { useState } from "react";

function ColorCard({ id, colorCode, deleteColor }) {
  const [newColor, setNewColor] = useState(colorCode);

  return (
    <li className="card" style={{ backgroundColor: `${newColor}` }}>
      <button className="card__btn" onClick={() => deleteColor(id)}>
        ×
      </button>
      <input
        className="card__text"
        type="text"
        defaultValue={newColor}
        onClick={(e) => navigator.clipboard.writeText(e.target.value)}
        onChange={(e) => setNewColor(e.target.value)}
      />
    </li>
  );
}

export default ColorCard;
