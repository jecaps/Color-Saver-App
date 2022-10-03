import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { colorsData } from "../assets/color";

import ColorCard from "../components/colorCard/ColorCard";
import Form from "../components/form/Form";

function Cards({
  paletteId,
  paletteTitle,
  paletteColors,
  palettesList,
  setPalettesList,
}) {
  const [allowEdit, setAllowEdit] = useState(false);

  const addColorCard = (color) => {
    setPalettesList(
      palettesList.map((palette) =>
        paletteId === palette.id
          ? {
              ...palette,
              colors: [...palette.colors, { id: nanoid(), hexCode: color }],
            }
          : { ...palette }
      )
    );
  };

  const deleteColorCard = (colordId) => {
    setPalettesList(
      palettesList.map((palette) =>
        paletteId === palette.id
          ? {
              ...palette,
              colors: palette.colors.filter((color) => color.id !== colordId),
            }
          : { ...palette }
      )
    );
  };

  const isEditAllowed = () => {
    setAllowEdit(!allowEdit);
  };

  const changeTitle = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    console.log(form);
  };

  const colorListItems = paletteColors.map((color) => (
    <ColorCard
      key={color.id}
      id={color.id}
      colorCode={color.hexCode}
      deleteColor={deleteColorCard}
    />
  ));

  return (
    <li className="page">
      <form action="" type="submit" className="colors" onSubmit={changeTitle}>
        <input
          type="text"
          className="colors__title"
          defaultValue={paletteTitle}
          readOnly={allowEdit ? "" : "readonly"}
        />
        <button
          type={allowEdit ? "submit" : "button"}
          className="colors__btn"
          onClick={isEditAllowed}
        >
          {allowEdit ? "save" : "edit"}
        </button>
      </form>
      <ul className="cards">
        {colorListItems}
        <Form addColor={addColorCard} />
      </ul>
    </li>
  );
}

export default Cards;
