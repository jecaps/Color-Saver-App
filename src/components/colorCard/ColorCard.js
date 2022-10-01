import { useState } from "react";

function ColorCard({ color }) {
  const [newColor, setNewColor] = useState(color);

  function changeColorHandler(e) {
    e.preventDefault();
    navigator.clipboard.writeText(e.target.value);
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
      <button
        className="card__text"
        // onClick={() => }
      >
        {newColor}
      </button>
    </li>
  );
}

export default ColorCard;
