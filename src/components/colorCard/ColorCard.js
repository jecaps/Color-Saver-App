import { useEffect, useState } from "react";

function ColorCard({ id, colorCode, deleteColor }) {
  const [newColor, setNewColor] = useState(colorCode);
  const [colorName, setNewColorName] = useState("");

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        `https://www.thecolorapi.com/id?hex=${newColor.slice(1)}`
      );
      const data = await response.json();
      setNewColorName(data.name.value);
    }
    getData();
  }, [newColor]);

  return (
    <li className="card" style={{ backgroundColor: `${newColor}` }}>
      <button className="card__btn" onClick={() => deleteColor(id)}>
        ×
      </button>
      <p className="card__name">{colorName}</p>
      <input
        className="card__input"
        type="text"
        defaultValue={newColor}
        onClick={(e) => navigator.clipboard.writeText(e.target.value)}
        onChange={(e) => setNewColor(e.target.value)}
      />
    </li>
  );
}

export default ColorCard;
