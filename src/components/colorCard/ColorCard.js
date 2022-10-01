import { useState } from "react";

function ColorCard({ color }) {
  const [newColor, setNewColor] = useState(color);

  function changeColorHandler(e) {
    e.preventDefault();
    setNewColor(e.target.value);
  }

  return (
    <li className="card" style={{ backgroundColor: `${newColor}` }}>
      <input
        className="card__input"
        type="color"
        defaultValue={newColor}
        onChange={changeColorHandler}
      />
      <p
        className="card__text"
        onClick={() => navigator.clipboard.writeText(newColor)}
      >
        {newColor}
      </p>
    </li>
  );
}

export default ColorCard;
